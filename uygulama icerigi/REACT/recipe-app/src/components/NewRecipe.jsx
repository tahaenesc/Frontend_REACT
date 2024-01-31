import React, { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";

const NewRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [errorBox, setErrorBox] = useState({
    title: false,
    description: false,
    image: false,
  });

  const {addRecipeToList, isLoading} = useContext(ApiContext)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() && description.trim() && image.trim()) {
      const data = {
        title: title.trim(),
        description: description.trim(),
        image: image.trim(),
      };
      addRecipeToList(data);
      setTitle("");
      setDescription("");
      setImage("");
    } else {
      setErrorBox({
        title: !title.trim(),
        description: !description.trim(),
        image: !image.trim(),
      });
    }
  };

  return (
    <form className="new-recipe-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Recipe Title"
        />
        {errorBox.title && (
          <p className="input-err">Recipe Title cannot be empty!</p>
        )}
      </div>

      <div className="form-control">
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Recipe Description"
        ></textarea>
        {errorBox.description && (
          <p className="input-err">Recipe Description cannot be empty!</p>
        )}
      </div>
      <div className="form-control">
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="text"
          placeholder="Image URL"
        />
        {errorBox.image && (
          <p className="input-err">Image URL cannot be empty!</p>
        )}
      </div>
      <button type="submit">{isLoading.add ? "Loading..." : "Add Recipe"}</button>
    </form>
  );
};

export default NewRecipe;
