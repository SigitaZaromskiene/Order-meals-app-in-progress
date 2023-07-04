import "./App.css";
import FoodList from "./components/FoodList";
import { GlobalProvider } from "./components/Global";
import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import { useEffect, useState } from "react";
import { read, create } from "./components/localStorage";

const KEY = "MENUAPP";

function App() {
  const [date, setDateNow] = useState(Date.now());
  const [order, setOrder] = useState(null);
  const [orderList, setOrderList] = useState(null);

  useEffect(() => {
    setOrderList(read(KEY));
  }, [date]);

  useEffect(() => {
    if (order === null) {
      return;
    }
    create(KEY, order);
    setDateNow(Date.now());
  }, [order]);

  return (
    <GlobalProvider>
      <div className="app-container">
        <div className="content">
          <Header orderList={orderList} order={order}></Header>
          <MainArticle />
          <FoodList setOrder={setOrder} order={order} orderList={orderList} />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
