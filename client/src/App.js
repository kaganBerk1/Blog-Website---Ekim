import TopBar from "./components/topBar/topBar"
import HomePage from "./pages/home/home"
import About from "./pages/about/about"
import "./App.css"
function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      {/* <HomePage></HomePage> */}
      <About></About>
    </div>
  );
}

export default App;
