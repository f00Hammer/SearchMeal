import React from "react";
import IngredientTag from "./IngredientTag";

const IngredientTags = ({
  index,
  ingredients,
  ingredientOptions,
  ingredientList,
  handleClickAdd
}) => {
  return ingredients
    .split(", ")
    .sort((a, b) => a.length - b.length)
    .map((ingredient, lastIndex) => (
      <IngredientTag
        ingredients={ingredients}
        ingredient={ingredient}
        ingredientOptions={ingredientOptions}
        ingredientList={ingredientList}
        tagType={"add"}
        handleClickAdd={handleClickAdd}
        index={index}
        key={`ingtag${ingredient}${index}.${lastIndex}`}
      />
    ));
};

export default IngredientTags;
