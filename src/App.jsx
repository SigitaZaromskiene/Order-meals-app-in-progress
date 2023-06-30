import "./App.css";
import FoodList from "./components/FoodList";
import { GlobalProvider } from "./components/Global";
import Header from "./components/Header";
import MainArticle from "./components/MainArticle";

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <div className="content">
          <Header></Header>
          <MainArticle />
          <FoodList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
