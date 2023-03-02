import React from "react";

function ToyForm({ newToy, onSetNewToy, onSubmitToy }) {
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={onSubmitToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={e => onSetNewToy({... newToy, name: e.target.value})}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={e => onSetNewToy({... newToy, image: e.target.value})}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
