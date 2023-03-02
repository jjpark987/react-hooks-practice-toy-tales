import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [newToy, setNewToy] = useState({
    name: "",
    image: "",
    likes: 0
  });

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(data => setToys(data))
  }, []);

  function submitToy(e) {
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newToy.name,
        image: newToy.image,
        likes: 0
      })
    })
    .then(r => r.json())
    .then(data => {
      setToys([ ...toys, data ])
      console.log(data)
    });
  }

  function deleteToy(toyToDelete) {
    setToys(toys.filter(toy => toy !== toyToDelete));
  }

  function updateLikes(toyUpdateLikes) {
    setToys(
      toys.map(toy =>
        toy.id === toyUpdateLikes.id ? { ...toy, likes: toy.likes } : toy
      )
    );
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm newToy={newToy} onSetNewToy={setNewToy} onSubmitToy={submitToy} /> : null}
      <div className="buttonContainer">
        <button onClick={() => setShowForm(showForm => !showForm)}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={deleteToy} onUpdateLikes={updateLikes} />
    </>
  );
}

export default App;
