import '../../css/App.css';
import Tasks from "./Tasks";
import AddTask from "./AddTask";

function App() {
  return (
    <div className="App">
        <h1>Simple-ToDo-App</h1>
        <AddTask/>
        <Tasks/>
    </div>
  );
}

export default App;
