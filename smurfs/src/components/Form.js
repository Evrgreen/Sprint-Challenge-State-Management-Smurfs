import React, { useState, useContext } from "react";
import axios from "axios";
import { VillageContext } from "../context/VillageContext";

const initialFormState = {
  name: "",
  age: "",
  height: "",
  id: ""
};

const Form = () => {
  const { setVillage } = useContext(VillageContext);
  const [formState, SetFormState] = useState(initialFormState);
  const [counter, setCounter] = useState(1);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    console.log("changing form", event.target.name);
    SetFormState({
      ...formState,
      id: counter,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", formState)
      .then((response) => {
        console.log(response);
        setVillage(response.data);
        SetFormState(initialFormState);
        setCounter((counter += 1));
      })
      .catch((error) => setError(error.response.data.Error));
  };
  console.log(formState);

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      {error ? <p>{error}</p> : null}
      <label htmlFor="name">
        <input
          id="name"
          value={formState.name}
          onChange={(event) => handleChange(event)}
          name="name"
        />
      </label>
      <label htmlFor="age">
        <input
          id="age"
          value={formState.age}
          onChange={handleChange}
          name="age"
        />
      </label>
      <label htmlFor="height">
        <input
          id="height"
          value={formState.height}
          onChange={handleChange}
          name="height"
        />
      </label>
      <button>Welcome to the Village</button>
    </form>
  );
};
export default Form;
