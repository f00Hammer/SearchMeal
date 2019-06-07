import React from "react";
import DropdownContent from "./DropdownContent";

const SearchSection = props => {
  return (
    <div id="searchcontainer">
      <form id="formcontainer" onSubmit={e => props.onFormSubmit(e)}>
        <input
          type="search"
          autoFocus
          title="Type ingredients here"
          placeholder="Search e.g.: onions, tomato"
          id="searchbar"
          onChange={e => props.onSearchChange(e.target.value)}
          onFocus={e => (e.target.value = props.ingredientList.join(", "))}
        />

        <div className="dropdown">
          <button onClick={e => e.preventDefault()} className="dropbtn">
            select from list
          </button>
          <div className="dropdowncontent">
            <DropdownContent
              handleClickAdd={props.handleClickAdd}
              ingredientOptions={props.ingredientOptions}
              ingredientList={props.ingredientList}
            />
          </div>
        </div>

        <button type="submit" id="button" title="Click to start searching">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchSection;
