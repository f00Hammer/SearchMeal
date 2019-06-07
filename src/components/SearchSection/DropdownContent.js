import React from "react";

import IngredientTag from "../SelectedIngredients/IngredientTag";

import DB from "../DataBase/DataBase";

const DropdownContent = ({
  ingredientOptions,
  ingredientList,
  handleClickAdd
}) => {
  return DB.map(group => {
    return group.val.map(ingredient => {
      return (
        <IngredientTag
          key={`dd${ingredient}`}
          ingredient={ingredient}
          tagType="add"
          handleClickAdd={handleClickAdd}
          ingredientOptions={ingredientOptions}
          ingredientList={ingredientList}
          labelClass={group.className}
        />
      );
    });
  });
};

export default DropdownContent;
