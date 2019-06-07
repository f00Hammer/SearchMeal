import React from "react";

import Recipe from "./Recipe";

const RecipeList = ({
  recipes,
  handleClickAdd,
  ingredientOptions,
  ingredientList
}) => {
  if (recipes.length === 0) {
    return (
      <div key="1div">
        <p key="1p">To display some recepies click the Search button.</p>
      </div>
    );
  } else if (recipes.length > 1) {
    return recipes.map((recipe, index) => {
      return (
        <Recipe
          index={index}
          recipe={recipe}
          ingredientOptions={ingredientOptions}
          ingredientList={ingredientList}
          handleClickAdd={handleClickAdd}
          key={`recipe${index}`}
        />
      );
    });
  } else {
    return (
      <div key="div0">
        <div key="1div">
          <h4 style={{ color: "red" }} key="impsearchnam">
            Impropper search name! Please try again.
          </h4>
          <p key="p">To display some recepies click the Search button.</p>
        </div>
      </div>
    );
  }
};

export default RecipeList;
