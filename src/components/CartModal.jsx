import styles from "../css/CartModal.module.css";
import AddToCart from "./AddToCart";
import { Global } from "./Global";
import { useContext, useState } from "react";
import Button from "./Button";
import ErrorMsg from "./ErrorMsg";
import ButtonModallAdd from "./ButtonModalAdd";
import SetOrderListContext from "./SetOrderListContext";
import ButtonMinusOne from "./ButtonMinusOne";

function CartModal({ orderList, setOrderList, li }) {
  const { setCartModal, setOrderDetails, errorModal, cartModal } =
    useContext(Global);

  const totalAmountHandler = () => {
    const total = orderList
      .map((li) => li.priceTotal)
      .reduce((li, acc) => li + acc, 0);
    return total.toFixed(2, 0);
  };

  return (
    <>
      <div className={styles["list-modal"]}>
        <div className={styles["modal-container"]}>
          {orderList.map((li) => (
            <div
              key={li.id}
              style={{
                width: "100%",
              }}
            >
              <div
                key={li.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className={styles["container-left"]}>
                  <p className={styles.name}>{li.name}</p>
                  <p className={styles.price}>{li.price} &euro;</p>
                  <p className={styles.amount}>Quantity: {li.quantity}</p>
                </div>
                <div className={styles["container-right"]}>
                  <ButtonModallAdd li={li} />
                  <ButtonMinusOne li={li} />
                </div>
              </div>
              <div
                className={styles.border}
                style={{
                  width: "100%",
                }}
              ></div>
            </div>
          ))}
          {orderList.length === 0 && errorModal ? (
            <ErrorMsg />
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "45px",
              }}
            >
              <p style={{ color: "red", fontSize: "24px" }}> Total amount:</p>

              <div>
                {" "}
                <p className={styles["total-price"]}>
                  {" "}
                  {totalAmountHandler()} &euro;
                </p>
              </div>
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              width: "100%",
            }}
          >
            <Button text="Close" action={() => setCartModal(false)}></Button>
            <Button
              text="Order"
              action={() => setOrderDetails(console.log("Ordering...."))}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;
