const express = require("express");

const app = express();

const pizzas = [
  {
    id: 1,
    pizzaName: "Margherita",
    category: "Veg",
    price: 249,
    availability: true,
  },
  {
    id: 2,
    pizzaName: "Farmhouse",
    category: "Veg",
    price: 349,
    availability: true,
  },
  {
    id: 3,
    pizzaName: "Veggie Paradise",
    category: "Veg",
    price: 399,
    availability: false,
  },
  {
    id: 4,
    pizzaName: "Pepper Barbecue Chicken",
    category: "Non-Veg",
    price: 499,
    availability: true,
  },
  {
    id: 5,
    pizzaName: "Chicken Dominator",
    category: "Non-Veg",
    price: 599,
    availability: true,
  },
  {
    id: 6,
    pizzaName: "Chicken Sausage",
    category: "Non-Veg",
    price: 449,
    availability: false,
  },
  {
    id: 7,
    pizzaName: "Cheese n Corn",
    category: "Veg",
    price: 299,
    availability: true,
  },
  {
    id: 8,
    pizzaName: "Mexican Green Wave",
    category: "Veg",
    price: 429,
    availability: true,
  },
  {
    id: 9,
    pizzaName: "Indi Chicken Tikka",
    category: "Non-Veg",
    price: 549,
    availability: true,
  },
  {
    id: 10,
    pizzaName: "Paneer Makhani",
    category: "Veg",
    price: 459,
    availability: false,
  },
];

app.get("/", (req, res) => {
  const data = req.query;
  //   console.log(data);
  let filterData = [];

  if (!data.category && !data.price) {
    return res.send(pizzas);
  }

  if (data.category) {
    filterData = pizzas.filter((pizza) => {
      return pizza.category == data.category;
    });
  }

  if (data.price) {
    filterData = pizzas.filter((pizza) => {
      return pizza.price >= data.price && pizza.category == data.category;
    });
  }

  res.send(filterData);
});

// find the data according to category and price filteration

app.listen(3000, () => {
  console.log("server running on port 3000");
});
