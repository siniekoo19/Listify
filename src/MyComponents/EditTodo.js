import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditTodo = ({ todos, updateTodo }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const todoToEdit = todos.find((todo) => todo.sno === parseInt(id));

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (todoToEdit) {
      setTitle(todoToEdit.title);
      setDesc(todoToEdit.desc);
    }
  }, [todoToEdit]);


  const handleSave = (e) => {
    e.preventDefault();
    if(!title || !desc){
        alert("Title/describtion can't be empty!!");
    } else {
      updateTodo(parseInt(id), title, desc);
      navigate("/Listify");
    }
  }

  const handleCancel = () => {
    navigate("/Listify"); 
  }

  return (
    <div className='container my-3'>
      <h3 style={{fontSize: '2.2rem'}}>Edit this Todo</h3>
      <form>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Todo Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title"/>
        </div>
        <div className="mb-3">
            <label htmlFor="desc" className="form-label">Todo Description</label>
            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc"/>
        </div>
        <button type="submit" className="btn btn-sm btn-warning" onClick={handleSave}>Save</button>
        &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-sm btn-dark" onClick={handleCancel}>Cancel</button> 
      </form>
    </div>
  );
};

export default EditTodo;

