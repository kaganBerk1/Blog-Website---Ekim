import TopBar from "./components/topBar/topBar"
import HomePage from "./pages/home/home"
import About from "./pages/about/about"
import Single from "./pages/single/single"
import Contact from "./pages/contact/contact"
import "./App.css"
function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      {/* <HomePage></HomePage> */}
      {/* <About></About> */}
      {/* <Single></Single> */}
      <Contact></Contact>
    </div>
  );
}

export default App;
