import "./App.css";
import Header from "./components/Header";
import MainArticle from "./components/MainArticle";

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <Header></Header>
        <MainArticle />
      </div>
    </div>
  );
}

export default App;
