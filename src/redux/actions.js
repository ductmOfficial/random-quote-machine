export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";

export const fetchQuoteSuccess = (quote, author) => ({
  type: FETCH_QUOTE_SUCCESS,
  payload: { quote, author },
});

export const fetchQuote = () => {
  return (dispatch) => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchQuoteSuccess(data.content, data.author));
      })
      .catch((error) => console.error(error));
  };
};
