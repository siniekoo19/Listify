import "./App.css";
import Header from "./MyComponents/Header.js";
import Todos from "./MyComponents/Todos.js";
import Footer from "./MyComponents/Footer.js";
import AddTodo from "./MyComponents/AddTodo.js";
import About from "./MyComponents/About.js";
import EditTodo from "./MyComponents/EditTodo.js";
import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // Add Todo
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);

    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    let mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
  };

  // Delete Todo
  const onDelete = (todo) => {
    console.log("I am onDelete todo", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  // Update Todo
  const updateTodo = (id, updatedTitle, updatedDesc) => {
    setTodos(
      todos.map((todo) =>
        todo.sno === id
          ? { ...todo, title: updatedTitle, desc: updatedDesc }
          : todo
      )
    );
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
     <Router>
        {/* Hearder */}
        <Header title="Listify" searchBar={false} />

        {/* Body & Routes */}
        <Routes>
          {/* Home */}
          <Route exact path="/Listify" element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete}/>
              </>
          }/>
          {/* About */}
          <Route exact path="/About" element={<About />} />
          {/* Edit */}
          <Route
              exact
              path="/edit/:id"
              element={
                <EditTodo todos={todos} updateTodo={updateTodo} />
              }
          />
        </Routes>

        {/* Footer */}
        <Footer />
     </Router>
    </div>
  );
}

export default App;
