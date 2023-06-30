import "./App.css";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import MainArticle from "./components/MainArticle";

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <Header></Header>
        <MainArticle />
        <FoodList />
      </div>
    </div>
  );
}

export default App;
