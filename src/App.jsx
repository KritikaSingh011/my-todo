import { useState, useEffect } from 'react'
import './App.css'
import backgroundImage from './assets/myImage.jpg';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';


// import { FaEdit } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
    // const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  // const toggleFinished = (e) => {
  //   setShowFinished(!showFinished)
  // }

  const handleEdit = (e, id) => {
    let t = todos.filter(i=>i.id ===id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    
    setTodos(newTodos)
    saveToLs()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    
    setTodos(newTodos)
    saveToLs()
    

  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
    saveToLs()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLs()
  }
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%', // Ensure the container has height
  };

  return (
    <>
      <div className='p-4' style={containerStyle}>
        <Navbar />
        <div className="container w-3/4 mx-auto  p-10 bg-yellow-300/60 ">
          <div className='w-5/8 px-12'>

            <h1 className='font-bold text-center text-3xl'>iTask - Manage Your Tasks</h1>
            <div className="addTodo my-5 flex flex-col gap-4">
              <h2 className=' mx-2 text-2xl font-bold'>
                Add Your Todo
              </h2>
              <div className="flex justify-between gap-2 mx-2">
                <input
                  onChange={handleChange} value={todo} type="text" placeholder='Type your daily tasks' className='ring-2 ring-gray-700 ring-inset ring-offset-1 ring-offset-white w-3/4 rounded-lg px-5 py-1' />
                <button
                  onClick={handleAdd} disabled={todo.length <= 3} className='ring-2 ring-gray-700 ring-inset ring-offset-1 ring-offset-green-500 bg-green-500 hover:bg-green-600 text-lg font-bold text-white rounded-xl px-3 py-2 '>Save Todo</button>
              </div>
            </div>
            <h2 className=' mx-2 text-2xl font-bold'>Todo List</h2>
            <div className="todos">
              {todos.length === 0 && <div className='text-center text-xl font-bold my-5'>No todos yet. Please add some tasks!</div>}
              {todos.map(item => {
                return <div key={item.id} className=" todo flex justify-between mx-2 my-2">
                  <div className='flex gap-2'>
                    <input type="checkbox" name={item.id} onChange={handleCheckbox} value={item.isCompleted} id="" />
                    <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={(e) => handleEdit(e, item.id)} className='ring-2 ring-gray-700 ring-inset ring-offset-1 ring-offset-green-500 bg-green-500 hover:bg-green-600 h-10 text-lg font-bold text-white rounded-xl px-3 '>Edit
                      {/* <FaEdit /> */}
                    </button>
                    <button
                      onClick={(e) => handleDelete(e, item.id)} className='ring-2 ring-gray-700 ring-inset ring-offset-1 ring-offset-green-500 bg-green-500 hover:bg-green-600 h-10 text-lg font-bold text-white rounded-xl px-3 '>Delete
                      {/* <AiFillDelete /> */}
                    </button>
                  </div>
                </div>
              })}
            </div>

          </div>
        </div>
      </div>
    </>
  )

}

export default App
