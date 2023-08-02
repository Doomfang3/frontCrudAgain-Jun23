import React, { useState } from "react";

function NewStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [priorXp, setPriorXp] = useState("");

  const handleNewStudent = async () => {
    const priorXpArray = priorXp.split(" ");
    const newStudent = {
      name,
      email,
      priorXp: priorXpArray,
    };
  };

  return (
    <div>
      <form onSubmit={handleNewStudent}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          value={priorXp}
          placeholder="Prior Experience"
          onChange={(e) => {
            setPriorXp(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewStudent;
