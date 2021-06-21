// import '../../css/App.css';
import Tasks from "./Tasks";
import AddTask from "./AddTask";

function App() {
  return (
    <div style={{maxWidth:800}} className="container">
            <h1 className={"text-center"}>Simple-ToDo-App</h1>
            <AddTask/>
            <Tasks/>
    </div>
  );
}

export default App;
