import "./App.css";
import Courses from "./Components/Course/Courses";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Courses />
    </div>
  );
}

export default App;
