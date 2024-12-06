import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addtask, deletetask, taskdone } from "./redux/taskSlice";

function App() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.task.tasks);
  return (
    <>
      <div>
        <h1>Task manager</h1>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button
          onClick={() => {
            dispatch(addtask({ id: Date.now(), task: task, done: false }));
            setTask("");
          }}
        >
          Add task
        </button>
      </div>
      <div>
        {datas.map((item) => (
          <p style={{ backgroundColor: `${item.done && "red"}` }} key={item.id}>
            {item.task}
            <button onClick={() => dispatch(taskdone(item.id))}>Done</button>
            <button onClick={() => dispatch(deletetask(item.id))}>
              Delete
            </button>
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
