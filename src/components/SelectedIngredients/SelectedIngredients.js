import React from "react";
import IngredientTag from "./IngredientTag";

const SelectedIngredients = ({
  handleClickDelete,
  ingredientOptions,
  ingredientList
}) => {
  return [...ingredientList, ...ingredientOptions].map((ingredient, index) => (
    <IngredientTag
      index={index}
      ingredient={ingredient}
      handleClickDelete={handleClickDelete}
      tagType="del"
      ingredientOptions={ingredientOptions}
      ingredientList={ingredientList}
      key={`selected${index}${ingredient}`}
    />
  ));
};

export default SelectedIngredients;
