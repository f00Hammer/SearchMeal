import React from "react";

import Header from "./components/Header";
import SearchSection from "./components/SearchSection/SearchSection";
import SelectedIngredients from "./components/SelectedIngredients/SelectedIngredients";
import RecipeList from "./components/RecipeList/RecipeList";
import Footer from "./components/Footer";

import "./stylesheet/index.css";

class App extends React.Component {
  state = {
    ingredientList: [],
    ingredientOptions: [],
    recipes: [],
    loading: false
  };

  //destructing search string to particular ingredients and saves in state
  onSearchChange = ingredients => {
    const re = /([a-z]+)(\s*(\s[a-z]+))*/gi;
    let fixedIngredients = ingredients.replace(/\s+/g, " ").toLowerCase();
    ingredients === ""
      ? this.setState({ ingredientList: [] })
      : this.setState({ ingredientList: fixedIngredients.match(re) });
  };

  //creating array of ingredients from drop-down list and saves in state
  handleClickAdd = ingredientValue => {
    const previousOption = this.state.ingredientOptions;
    //check does value is NOT picked twice and prevent occuring cells with value=""
    let isNotRepeated = true;
    if (ingredientValue !== "") {
      for (let i in previousOption) {
        if (previousOption[i] === ingredientValue) {
          isNotRepeated = isNotRepeated && false;
          break;
        }
      }
      if (isNotRepeated === true) {
        if (previousOption !== []) {
          this.setState({
            ingredientOptions: [...previousOption, ingredientValue]
          });
        } else {
          this.setState({ ingredientOptions: [ingredientValue] });
        }
      }
    }
  };
  //delete particular ingredient tag from state
  handleClickDelete = ingredient => {
    if (
      this.state.ingredientOptions.findIndex(
        cellValue => ingredient === cellValue
      ) !== -1
    ) {
      const nextOption = this.state.ingredientOptions;
      nextOption.splice(
        this.state.ingredientOptions.findIndex(
          cellValue => ingredient === cellValue
        ),
        1
      );
      this.setState({
        ingredientOptions: nextOption
      });
    }

    if (
      this.state.ingredientList.findIndex(
        cellValue => ingredient === cellValue
      ) !== -1
    ) {
      const nextList = this.state.ingredientList;
      nextList.splice(
        this.state.ingredientList.findIndex(
          cellValue => ingredient === cellValue
        ),
        1
      );
      this.setState({
        ingredientList: nextList
      });
    }
  };

  // fetch data from API after action form submit
  // dev used prefix https://cors-anywhere.herokuapp.com/
  onFormSubmit = event => {
    event.preventDefault();

    this.setState({ loading: true });
    const ingredientString = [
      ...this.state.ingredientList,
      ...this.state.ingredientOptions
    ].join(",");
    fetch(
      `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${ingredientString}`
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        if (json.results.length !== 0) {
          this.setState({
            recipes: json.results.sort(
              (a, b) => a.ingredients.length - b.ingredients.length
            ),
            loading: false
          });
        } else {
          // console.log("empty arr");
          this.setState({
            recipes: [{ title: "Improper name of ingredient!" }],
            loading: false
          });
        }
      })
      .catch(error =>
        this.setState({
          recipes: [{ title: `Request failed: ${error}` }],
          loading: false
        })
      );
  };

  displayMessage = tagName => {
    if (this.state.loading && tagName === "h4") {
      return "Loading...";
    } else {
      if (tagName === "h4") {
        if (
          this.state.ingredientOptions[0] === undefined &&
          this.state.ingredientList[0] === undefined
        ) {
          return "Please type or select ingredient";
        } else {
          return "Selected from list and tags:";
        }
      } else {
        if (this.state.recipes[9] === undefined) {
          return "";
        } else {
          return "Go back to search section";
        }
      }
    }
  };

  // componentDidMount() {
  // }

  render() {
    // console.log(`Drop down arr: ${this.state.ingredientOptions}`);
    // console.log(
    //   `Fetch req: ${[
    //     ...this.state.ingredientList,
    //     ...this.state.ingredientOptions
    //   ].join(",")}`
    // );

    // console.log(this.state.ingredientList);
    return (
      <div id="maincontainer">
        <header id="header">
          <Header />
        </header>
        <SearchSection
          onSearchChange={this.onSearchChange}
          onFormSubmit={this.onFormSubmit}
          handleClickAdd={this.handleClickAdd}
          handleClickDelete={this.handleClickDelete}
          ingredientOptions={this.state.ingredientOptions}
          ingredientList={this.state.ingredientList}
        />
        <div>
          <h4 className="displaymessage">{this.displayMessage("h4")}</h4>
          <SelectedIngredients
            handleClickDelete={this.handleClickDelete}
            ingredientOptions={this.state.ingredientOptions}
            ingredientList={this.state.ingredientList}
          />
        </div>
        <article>
          <h4 className="rlmessage">
            {this.state.recipes[1] !== undefined ? `Recipe list:` : ""}
          </h4>
          <RecipeList
            recipes={this.state.recipes}
            handleClickAdd={this.handleClickAdd}
            ingredientOptions={this.state.ingredientOptions}
            ingredientList={this.state.ingredientList}
          />
        </article>{" "}
        <a title="Go back to search section" href="#searchcontainer">
          {this.displayMessage("a")}
        </a>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
