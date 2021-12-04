import "./App.css";
import Form from "./components/Form/index";
import WorkExperianceSlices from "./components/WorkExperiance/WorkExperianceSlices";

function App() {
  return (
    <div className="App">
      <div className="form">
        <WorkExperianceSlices />
        <Form />
      </div>
    </div>
  );
}

export default App;
