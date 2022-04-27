import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EditStudents from "./components/EditStudents";
import Foter from "./components/Foter";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Students from "./components/Students";

function App() {
  const [students, setstudents] = useState([
    { id: 1, name: "stive1", email: "stive1@gmail.com", number: 987654 },
    { id: 2, name: "stive2", email: "stive2@gmail.com", number: 234567 },
    { id: 3, name: "stive3", email: "stive3@gmail.com", number: 123453 },
    { id: 4, name: "stive4", email: "stive4@gmail.com", number: 456712 },
    { id: 5, name: "stive5", email: "stive5@gmail.com", number: 765467 },
    { id: 6, name: "stive6", email: "stive6@gmail.com", number: 234567 },
    { id: 7, name: "stive7", email: "stive7@gmail.com", number: 124456 },
  ]);
  const editStudent = (oby) => {
    let index = students.findIndex((item) => item.id === oby.id);
    let myStudents = [...students];
    myStudents[index] = oby;
    setstudents(myStudents);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Section" element={<Section />} />
          <Route
            path="/students"
            element={
              <Students
                students={students}
                setstudents={(nimadur) => setstudents(nimadur)}
              />
            }
          />
          <Route
            path="/Editstudents/:id"
            element={
              <EditStudents
                students={students}
                editStudent={(malumot) => editStudent(malumot)}
              />
            }
          />
        </Routes>
        <Foter />
      </BrowserRouter>
    </div>
  );
}

export default App;
