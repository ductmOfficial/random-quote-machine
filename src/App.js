import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import QuoteCard from "./components/QuoteCard";
import { fetchQuote } from "./redux/actions";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const App = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);
  const author = useSelector((state) => state.author);
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
    setColor(getRandomColor());
  };

  return (
    <div
      className="position-relative min-vw-100 min-vh-100"
      style={{ backgroundColor: color, color }}
    >
      <div className="position-absolute top-50 start-50 translate-middle">
        <QuoteCard
          quote={quote}
          author={author}
          color={color}
          handleNewQuote={handleNewQuote}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
