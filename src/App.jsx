import "./App.css";
import FoodList from "./components/FoodList";
import { GlobalProvider } from "./components/Global";
import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import { useEffect, useState } from "react";
import { read, create, edit } from "./components/localStorage";
import SetOrderListContext from "./components/SetOrderListContext";

const KEY = "MENUAPP";

function App() {
  const [date, setDateNow] = useState(Date.now());
  const [order, setOrder] = useState(null);
  const [orderList, setOrderList] = useState(null);
  const [editedOrder, setEditedOrder] = useState(null);

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

  useEffect(() => {
    if (editedOrder === null) {
      return;
    }
    edit(KEY, editedOrder, editedOrder.id);
    setDateNow(Date.now());
  }, [editedOrder]);
  return (
    <GlobalProvider>
      <SetOrderListContext.Provider value={{ setEditedOrder, editedOrder }}>
        <div className="app-container">
          <div className="content">
            <Header
              orderList={orderList}
              order={order}
              setOrder={setOrder}
              setOrderList={setOrderList}
            ></Header>

            <MainArticle />
            <FoodList setOrder={setOrder} order={order} orderList={orderList} />
          </div>
        </div>
      </SetOrderListContext.Provider>
    </GlobalProvider>
  );
}

export default App;
