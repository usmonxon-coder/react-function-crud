import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/EditStudent.css"

export default function EditStudents(props) {
  const params = useParams();

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const editStudents = () => {
    let currentStudent = { name, email, number, id: +params.id };
    props.editStudent(currentStudent);
    navigate("/students");
    toast.success("Malumot o'zgartirildi", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  useEffect(() => {
    let currentStudent = props.students.find(
      (item) => item.id.toString() === params.id
    );
    setName(currentStudent.name);
    setEmail(currentStudent.email);
    setNumber(currentStudent.number);
  }, []);

  return (
    <div className="editStudents">
      <div className="container">
        <div className="jadval d-flex py-2">
          <input
            type="text"
            placeholder="Enter your name..."
            className="form-control me-2 input1 mb-2 mb-md-0"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Enter your email..."
            className="form-control me-2 input2 mb-2 mb-md-0"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="number"
            placeholder="Enter your number..."
            className="form-control me-2 input3 mb-2 mb-md-0"
            onChange={(e) => setNumber(+e.target.value)}
            value={number}
          />
          <button onClick={editStudents} className="btn btn-warning">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
