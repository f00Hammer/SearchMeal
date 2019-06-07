import React from "react";

import IngredientTags from "../SelectedIngredients/IngredientTags.js";

const Recipe = ({
  index,
  recipe,
  recipes,
  ingredientOptions,
  ingredientList,
  handleClickAdd
}) => {
  return (
    <div className="recipecontainer" key={`div1.${index}`}>
      <a
        key={`a1.${index}`}
        href={recipe.href}
        target="_blank"
        rel="noopener noreferrer"
        title="Link to recepie"
      >
        {recipe.title}
      </a>

      <div key={`div2${index}`}>
        <img
          className="thumbnail"
          key={`img${index}`}
          src={recipe.thumbnail}
          alt={recipe.title}
        />
        <IngredientTags
          title={recipe.title}
          ingredients={recipe.ingredients}
          handleClickAdd={handleClickAdd}
          recipes={recipes}
          ingredientOptions={ingredientOptions}
          ingredientList={ingredientList}
          key={`it${index}`}
          index={index}
        />
      </div>
      <a
        key={`a2.${index}`}
        href={recipe.href}
        target="_blank"
        rel="noopener noreferrer"
        title="Link to recepie"
      >
        Link to recepie
      </a>
    </div>
  );
};

export default Recipe;
