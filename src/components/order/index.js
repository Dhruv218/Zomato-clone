import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./order.css";
const menu = [
  {
    id: 1,
    title: "Burger",
    category: "Lunch",
    price: 5.99,
    img: "./images/burger.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Brownie",
    category: "Desert",
    price: 3.99,
    img: "./images/brownie.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Bread",
    category: "Breakfast",
    price: 3.99,
    img: "./images/bread.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Cupcake",
    category: "Desert",
    price: 3.0,
    img: "./images/cupcake.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Idli and Sambar",
    category: "lunch",
    price: 22.99,
    img: "./images/idli.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Pancake",
    category: "Breakfast",
    price: 4.99,
    img: "./images/pancake.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Pasta",
    category: "Lunch",
    price: 8.99,
    img: "./images/pasta.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Salad",
    category: "Lunch",
    price: 12.99,
    img: "./images/salad.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Sandwich",
    category: "Breakfast",
    price: 6.99,
    img: "./images/sandwich.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const Order = () => {
  const location = useLocation();
  let data = location.state.data;
  const breakfast = menu.filter((item) => {
    return item.category === "Breakfast";
  });
  const lunch = menu.filter((item) => {
    return item.category === "Lunch";
  });
  const desert = menu.filter((item) => {
    return item.category === "Desert";
  });
  const [active, setActive] = useState("recommended");
  const [amount, setAmount] = useState([""]);
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <>
      <div>
        <div className="restaurant-information-box">
          <img className="restaurant-img" src={data[1]} />
        </div>
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
        <div className="menu-list">
          <div className="filter-list">
            <a
              className={active === "recommended" ? "active" : null}
              onClick={() => {
                setActive("recommended");
                window.scrollBy(
                  0,
                  document.getElementById("recommended").getBoundingClientRect()
                    .y - 200
                );
              }}
            >
              <h3>Recommended</h3>
            </a>
            <a
              className={active === "breakfast" ? "active" : null}
              onClick={() => {
                setActive("breakfast");
                window.scrollBy(
                  0,
                  document.getElementById("breakfast").getBoundingClientRect()
                    .y - 200
                );
              }}
            >
              <h3>Breakfast</h3>
            </a>
            <a
              className={active === "lunch" ? "active" : null}
              onClick={() => {
                setActive("lunch");
                window.scrollBy(
                  0,
                  document.getElementById("lunch").getBoundingClientRect().y -
                    200
                );
              }}
            >
              <h3>Lunch</h3>
            </a>
            <a
              className={active === "desert" ? "active" : null}
              onClick={() => {
                setActive("desert");
                window.scrollBy(
                  0,
                  document.getElementById("desert").getBoundingClientRect().y -
                    200
                );
              }}
            >
              <h3>Desert</h3>
            </a>
          </div>
          <div>
            <section id="recommended">
              {menu.map((item) => {
                return (
                  <div className="flex-box-row">
                    <div className="food-img-box">
                      <img className="food-img" src={item.img} />
                    </div>
                    <div className="flex-box-column">
                      <div className="cart-box">
                        <div className="name-box-2">
                          <p className="food-title">{item.title}</p>
                          <p>{"$ " + item.price}</p>
                        </div>
                        <button
                          className="add-to-cart"
                          onClick={() => {
                            setAmount("");
                            setCart([
                              ...cart,
                              {
                                detail: item,
                                no: 1,
                              },
                            ]);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                      <p className="food-description">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </section>
            <div className="card-separator"></div>

            <section id="breakfast">
              {breakfast.map((item) => {
                return (
                  <div className="flex-box-row">
                    <div className="food-img-box">
                      <img className="food-img" src={item.img} />
                    </div>
                    <div className="flex-box-column">
                      <div className="cart-box">
                        <div className="name-box-2">
                          <p className="food-title">{item.title}</p>
                          <p>{"$ " + item.price}</p>
                        </div>
                        <button
                          className="add-to-cart"
                          onClick={() => {
                            setAmount("");
                            setCart([
                              ...cart,
                              {
                                detail: item,
                                no: 1,
                              },
                            ]);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                      <p className="food-description">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </section>
            <div className="card-separator"></div>

            <section id="lunch">
              {lunch.map((item) => {
                return (
                  <div className="flex-box-row">
                    <div className="food-img-box">
                      <img className="food-img" src={item.img} />
                    </div>
                    <div className="flex-box-column">
                      <div className="cart-box">
                        <div className="name-box-2">
                          <p className="food-title">{item.title}</p>
                          <p>{"$ " + item.price}</p>
                        </div>
                        <button
                          className="add-to-cart"
                          onClick={() => {
                            setAmount("");
                            setCart([
                              ...cart,
                              {
                                detail: item,
                                no: 1,
                              },
                            ]);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                      <p className="food-description">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </section>
            <div className="card-separator"></div>

            <section id="desert">
              {desert.map((item) => {
                return (
                  <div className="flex-box-row">
                    <div className="food-img-box">
                      <img className="food-img" src={item.img} />
                    </div>
                    <div className="flex-box-column">
                      <div className="cart-box">
                        <div className="name-box-2">
                          <p className="food-title">{item.title}</p>
                          <p>{"$ " + item.price}</p>
                        </div>
                        <button
                          className="add-to-cart"
                          onClick={() => {
                            setAmount("");
                            setCart([
                              ...cart,
                              {
                                detail: item,
                                no: 1,
                              },
                            ]);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                      <p className="food-description">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </section>
            <Link
              className="goto-cart"
              to={"/cart"}
              state={{ data: data, cart: cart }}
            >
              <div className="goto-cart-box">
                <div className="name-box-2">
                  <p>{cart.length} Total Items</p>
                  <p>
                    {" "}
                    {"$" +
                      cart
                        .reduce(
                          (total, item) => total + item.detail.price * item.no,
                          0
                        )
                        .toFixed(2)}{" "}
                    Total Cost
                  </p>
                </div>
                <p className="next">{"Next->"}</p>{" "}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
