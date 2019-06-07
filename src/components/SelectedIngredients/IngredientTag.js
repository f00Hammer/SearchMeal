import React from "react";

const IngredientTag = ({
  ingredient,
  tagType,
  ingredientOptions,
  ingredientList,
  handleClickAdd,
  handleClickDelete,
  labelClass,
  index
}) => {
  // default= tagType: add (when true)
  //          tagType: delete (when false)
  let tagProp = {
    title: "add to search list",
    onCli: () => handleClickAdd(ingredient),
    classN: "addtag",
    p: "+"
  };

  const addedTag = () => {
    const tagPropAdded = {
      title: "at search list",
      onCli: () => {},
      classN: "addedtag",
      p: " @ "
    };
    if (ingredientOptions !== undefined && ingredientList !== undefined) {
      if (
        ingredientOptions.includes(ingredient) ||
        ingredientList.includes(ingredient)
      ) {
        tagProp = tagPropAdded;
      }
    } else if (ingredientOptions !== undefined) {
      if (ingredientOptions.includes(ingredient)) {
        tagProp = tagPropAdded;
      }
    } else if (ingredientList !== undefined) {
      if (ingredientList.includes(ingredient)) {
        tagProp = tagPropAdded;
      }
    }
    return {};
    // });
  };

  if (tagType === "del") {
    tagProp = {
      title: "delete from search list",
      onCli: () => handleClickDelete(ingredient),
      classN: "deltag",
      p: "-"
    };
  } else {
    addedTag();
  }

  return (
    <div
      className={`ing${tagProp.classN}${labelClass || ""}`}
      title={tagProp.title}
      onClick={tagProp.onCli}
      key={`it${tagProp.classN}${ingredient}${labelClass || ""}${index}`}
    >
      <p
        className="ingname"
        key={`itnam${tagProp.classN}${ingredient}${labelClass || ""}${index}`}
      >
        #{`${ingredient} `}
      </p>
      <p
        className={tagProp.classN}
        key={`itsymb${tagProp.classN}${ingredient}${labelClass || ""}${index}`}
      >
        {tagProp.p}
      </p>
    </div>
  );
};

export default IngredientTag;
