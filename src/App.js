
import './App.css';
import { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const empty = () =>{ 
    toast.success("Task added",{
      position: "top-right",
      theme: "dark",
      })
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }],setToDo(''))
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      
      </div>

      <form  className="input" >
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add task..." />
        <i onClick={empty} className={toDo ? "fas fa-plus" : ''}></i>
      </form>

      <div className="todos">
        {toDos.map((obj) => {
          return (<div className="todo">
            <div className="left">
              <input onChange={(e) => {
                setToDos(toDos.filter(obj2 => {
                  if (obj2.id === obj.id) {
                    obj2.status = e.target.checked

                  }
                  <div className="right">
                    <i className="fas fa-times"></i>
                  </div>
                  return obj2
                }))
              }} value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={(e) => {
                setToDos(toDos.filter(obj2 => {
                  let temp;
                  if (obj2.id !== obj.id) {
                    temp = obj2
                  }
                  return temp;
                }));
              }}
                className="fas fa-times"></i>
            </div>
          </div>)
        })}
        {toDos.map((obj) => {

          if (obj.status) {
            return (<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
      <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
    </div>
  );
}

export default App;
