import TodoItem from "./TodoItem"; 

const Todos = ({todos, onDelete}) => {
  const myStyle = {
    minHeight : "36vh",
    margin : "0px auto 5px auto"
  }

  return (
    <div className="container" style={myStyle}>
      <h3 className="mb-3 mt-3" style={{fontSize: '2.2rem'}}>Todos List</h3>
      {todos.length===0 ? "No todos to display" :
        todos.map( (todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
              <hr/>
            
            </>
          )
        })
      }
    </div>
  )
}

export default Todos
