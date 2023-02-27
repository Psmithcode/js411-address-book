import React, { useState } from "react";

function Address(props) {
  const [isClicked, setClick] = useState(false);
  return (
    <li
      style={{
        listStyle: "none",

      }}
    >
      <p>{props.firstName}</p>
      {isClicked && <p>{props.lastName}</p>}
      <img src={props.image} />
      <button
        onClick={() => {
          setClick(!isClicked);
          console.log("click")
        }}
      >
        {isClicked ? "Hide Info" : "Show Info"}
      </button>
      {isClicked && <p>{props.email}</p>}
      {isClicked && <p>{props.location}</p>}
    </li>
  );
}

export default Address;
