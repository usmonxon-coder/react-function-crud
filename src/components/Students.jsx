import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/Students.css";

export default function Students(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const addRef = useRef();

  const addStudent = () => {
    let myStudent = props.students.slice();
    let id;
    if (name === "" || email === "" || number === "") {
      toast.warning("Itimos formani toldiring", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      if (myStudent.length === 0) {
        id = 1;
      } else {
        id = myStudent[myStudent.length - 1].id + 1;
      }
      myStudent.push({ id, name, email, number });
      let btn1 = (document.querySelector(".input1").value = "");
      let btn2 = (document.querySelector(".input2").value = "");
      let btn3 = (document.querySelector(".input3").value = "");
      setName(btn1);
      setEmail(btn2);
      setNumber(btn3);
      toast.success("Malumot qoshildi", {
        position: "top-center",
      });
    }
    props.setstudents(myStudent);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  useEffect(() => {
    if (numberRef.current.value.length >= 13) {
      addRef.current.focus();
    } else if (emailRef.current.value.length >= 11) {
      numberRef.current.focus();
    } else if (nameRef.current.value.length >= 8) {
      emailRef.current.focus();
    }
  }, [name, email, number]);

  return (
    <div className="Students">
      <div className="container">
        <h1 className="text-center py-2">Students</h1>
        <div className="forma d-flex py-2">
          <input
            type="text"
            placeholder="Enter your name..."
            className="form-control me-2 input1 mb-2 mb-md-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
          />
          <input
            type="email"
            placeholder="Enter your email..."
            className="form-control me-2 input2 mb-2 mb-md-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
            onKeyPress={() => {
              numberRef.current.focus();
            }}
          />
          <input
            type="number"
            placeholder="Enter your number..."
            className="form-control me-2 input3 mb-2 mb-md-0"
            value={number}
            onChange={(e) => setNumber(+e.target.value)}
            ref={numberRef}
          />
          <button
            className="btn btn-info"
            onClick={() => addStudent()}
            ref={addRef}
          >
            Add
          </button>
        </div>
        <div className="jadval">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th className="text-center" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {props.students &&
                props.students.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <td className="text-center">
                      <Link
                        to={`/EditStudents/${item.id}`}
                        className="btn btn-warning me-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          props.setstudents(
                            props.students.filter(
                              (item1) => item1.id !== item.id
                            ),
                            toast.success("Malumot ochirildi", {
                              position: "top-center",
                              autoClose: 2000,
                            })
                          );
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
