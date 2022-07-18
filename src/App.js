import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TodoList from './Components/TodoList';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TodoList />} />
          </Routes>
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
