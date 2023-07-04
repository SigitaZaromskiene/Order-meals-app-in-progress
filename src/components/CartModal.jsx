import styles from "../css/CartModal.module.css";
import AddToCart from "./AddToCart";
import { Global } from "./Global";
import { useContext } from "react";
import Button from "./Button";
import ErrorMsg from "./ErrorMsg";

function CartModal({ orderList }) {
  console.log(orderList);
  const { setCartModal, setOrderDetails } = useContext(Global);

  const totalAmountHandler = () => {
    const total = orderList
      .map((li) => li.priceTotal)
      .reduce((li, acc) => li + acc, 0);
    return total;
  };

  return (
    <>
      <div className={styles["list-modal"]} onClick={() => setCartModal(null)}>
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
                  <button>+</button>
                  <button>-</button>
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
          {orderList.length === 0 ? (
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
            <Button text="Close" action={() => setCartModal(null)}></Button>
            <Button
              text="Order"
              action={() => setOrderDetails(console.log("Ordering...."))}
            ></Button>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default CartModal;
