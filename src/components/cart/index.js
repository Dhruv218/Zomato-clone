import { useLocation, Link } from "react-router-dom";
import "../cart/cart.css";
import { useState, useEffect } from "react";
const Cart = (props) => {
  const location = useLocation();
  let data = location.state.data;
  let cart = location.state.cart;
  const [finalprice, setFinal] = useState();
  console.log(data);
  const [amount, setAmount] = useState([""]);

  useEffect(() => {
    console.log(amount);
  }, [amount]);
  useEffect(() => {
    setFinal(
      cart
        .reduce((total, item) => total + item.detail.price * item.no, 0)
        .toFixed(2)
    );
  }, [finalprice]);

  return (
    <>
      <div className="restaurant-information-box">
        <img className="restaurant-img" src={data[1]} />
      </div>

      <div className="container">
        <div className="restaurant-information-box width-100">
          <div className="name-box">
            <h1 className="restaurant-name">{data[0]}</h1>
            <div className="res-rating absolute-center">
              {data[2]}
              <i class="fa-solid fa-star absolute-center rating-i"></i>
            </div>
          </div>
          <div className="res-row">
            {data[4].length && (
              <div className="res-cuisine">
                {data[4].map((item, i) => (
                  <span className="res-cuisine-tag">
                    {item}
                    {i !== data[4].length - 1 && ","}
                  </span>
                ))}
              </div>
            )}
            {data[5] && <div className="res-price">{data[5]}</div>}
          </div>
          <div className="card-separator"></div>
          <div className="explore-bottom">
            <img src={data[6]} alt={data[3]} style={{ height: "18px" }} />
            <div className="res-bottom-text">{data[3]}</div>
          </div>
          <div className="card-separator"></div>
        </div>
        <p className="cart-item-heading">Your Order</p>
        {cart.map((item) => {
          return (
            <div className="flex-box-row">
              <div className="food-img-v2-box">
                <img className="food-img-v2" src={item.detail.img} />
              </div>
              <div className="flex-box-column">
                <div className="cart-box">
                  <div className="name-box-2">
                    <p className="food-title">{item.detail.title}</p>
                  </div>
                  <div className="name-box-2">
                    {item.no === "" || item.no[0] === "" ? (
                      <input
                        className="quantity"
                        defaultValue={(item.no = 1)}
                        onChange={(e) => {
                          setAmount(e.target.value);
                          item.no = amount;
                          console.log(amount);
                        }}
                      />
                    ) : (
                      <input
                        className="quantity"
                        defaultValue={item.no}
                        onChange={(e) => {
                          setAmount(e.target.value);
                          item.no = amount;
                          console.log(amount);
                        }}
                      />
                    )}
                    <p className="price"> ${item.detail.price * item.no}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container">
        <div>
          <p className="cart-item-heading">Bill Summary</p>
        </div>
        <div className="name-box-2">
          <div className="cart-box">
            <h5> Item Total </h5>
            <h5>
              {"$" +
                cart
                  .reduce(
                    (total, item) => total + item.detail.price * item.no,
                    0
                  )
                  .toFixed(2)}
            </h5>
          </div>
          <div className="cart-box sub-value">
            <h5> Delivery Charge </h5>
            <h5>{"$" + "1.22"}</h5>
          </div>
          <div className="cart-box sub-value">
            <h5> Delivery Charge </h5>
            <h5>{"$" + "1.22"}</h5>
          </div>
          <div className="cart-box sub-value">
            <h5> Govt. Tax </h5>
            <h5>{"$" + "0.55"}</h5>
          </div>
          <div className="card-separator"></div>

          <div className="cart-box">
            <h3>Grand Total</h3>
            <h3>${(Number(finalprice) + 1.77).toFixed(2)}</h3>
          </div>
          <div className="card-separator"></div>

          <div>
            <Link to="/success">
              <button className="Checkout">Place Order</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
