import React from "react";
import "./styles.css";
import { useState } from "react";

const fruits = {
  Berries: [
    {
      name: "🍅Tomato",
      rating: "4/5",
      description:
        "The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America."
    },
    {
      name: "🥝Kiwi",
      rating: "3.5/5",
      description:
        "What is healthier apple or kiwi? Kiwi fruit stands number one in nutrient content compared to 27 other fruits. It is packed with twice the amount of Vitamin C — compared to oranges (per 100 mg) — and has twice the amount of nutrients — compared to apples (per 100 mg)."
    }
  ],

  Accesory: [
    {
      name: "🍎Apple",
      rating: "5/5",
      description:
        "Apples are an incredibly nutritious fruit that offers multiple health benefits. They're rich in fiber and antioxidants. Eating them is linked to a lower risk of many chronic conditions, including diabetes, heart disease, and cancer. Apples may also promote weight loss and improve gut and brain health."
    },
    {
      name: "🍍Pineapple",
      rating: "4.5/5",
      description:
        "The pineapple is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries"
    }
  ],
  Aggregate: [
    {
      name: "🍓Strawberry",
      rating: "5/5",
      description:
        "The tiny strawberry is packed with vitamin C, fiber, antioxidants, and more. The heart-shaped silhouette of the strawberry is the first clue that this fruit is good for you. These potent little packages protect your heart, increase HDL (good) cholesterol, lower your blood pressure, and guard against cancer."
    },
    {
      name: "🍒 Cherries",
      rating: "4/5",
      description:
        "What do cherries do for your body? Cherries are low in calories and chock full of fiber, vitamins, minerals, nutrients, and other good-for-you ingredients. You'll get vitamins C, A, and K. Each long-stemmed fruit delivers potassium, magnesium, and calcium too. They also bring antioxidants, like beta-carotene, and the essential nutrient choline"
    }
  ],
  pepo: [
    {
      name: "🥒Cucumber",
      rating: "3.5/5",
      description:
        "Cucumber is a widely-cultivated creeping vine plant in the Cucurbitaceae family that bears usually cylindrical fruits, which are used as culinary vegetables. Considered an annual plant, there are three main varieties of cucumber—slicing, pickling, and seedless—within which several cultivars have been created."
    },
    {
      name: "🍈Melon",
      rating: "4/5",
      description:
        "What is healthier watermelon or melon? Melon is richer in vitamins as it contains more vitamin K by 2400%, vitamin B6 by 262%, and vitamin C by 169%. On the other hand, watermelon contains more vitamin B5 by about 163%. Watermelon contains less sodium and more phosphorus, but melon is richer in iron, calcium, potassium, and copper."
    }
  ]
};

export default function App() {
  const [selectedtype, settype] = useState("Aggregate");
  function genreClickHandler(type) {
    settype(type);
  }
  return (
    <div className="App">
      <h1> Fruits</h1>
      <p>Click on th type of fruits to see their examples</p>

      <div>
        {Object.keys(fruits).map((type) => (
          <button
            onClick={() => genreClickHandler(type)}
            style={{
              background: "#007bff",
              borderRadius: "12px",
              padding: "0.5rem  1rem",
              color: "white",
              border: "#007bff",
              cursor: "pointer",
              margin: "1rem 0.3rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul>
          {fruits[selectedtype].map((fruit) => (
            <li
              style={{
                textAlign: "center",
                listStyle: "none",
                padding: "1rem",
                width: "90%"
              }}
            >
              <div style={{ fontSize: "larger" }}> {fruit.name} </div>
              <div style={{ fontSize: "small" }}> {fruit.rating} </div>
              <div style={{ fontSize: "large" }}> {fruit.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

