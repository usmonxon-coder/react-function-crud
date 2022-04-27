import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Section() {
  const [name, setname] = useState("Ali");
  const [number, setnumber] = useState(111);
  const changeName = () => {
    console.log("clicked");
    setnumber(777);
    setname("Vali");
  };

  useEffect(() => {
    toast.success("Xush kelibsiz", {
      position: "top-center",
      autoClose: 2000,
    });
  }, []);
  return (
    <div className="Section">
      <div className="container">
        <h1>
          Assalomu alekum {name} , {number}
        </h1>
        <button onClick={changeName} className="btn btn-danger">
          Change name
        </button>
      </div>
    </div>
  );
}
