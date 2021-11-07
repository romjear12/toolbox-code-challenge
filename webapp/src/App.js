import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    resolved: false,
    array: [],
    loading: false,
    error: null,
  });

  // Add item to start of array
  const addItemToArray = (value) => {
    const newItem = [value, ...state.array];
    setState({ ...state, array: newItem });
  };

  // Reset array list
  const resetArray = () => {
    setState({ ...state, array: [] });
  };

  // Handle state to make API request and response
  const handleFetch = async (text) => {
    setState({ ...state, loading: true });
    try {
      const reversedText = await fetchReversedText(text);
      setState({ ...state, loading: false, resolved: true });
      addItemToArray(reversedText);
    } catch (e) {
      console.log(e);
      setState({ ...state, loading: false, error: true });
    }
  };

  // Fetch API request to get inverted text
  // GET http://localhost:4000/iecho?text=example
  const fetchReversedText = async (text) => {
    const response = await fetch(`http://localhost:4000/iecho?text=${text}`).then((res) => res.json());

    return response;
  };

  return (
    <div className="App">
      <Header handleFetch={handleFetch} resetArray={resetArray} state={state} />
      <div className="row mt-5">
        <div className="col-10 offset-1 col-md-8 offset-md-2">
          <div className="wrapper-container p-5">
            <div className="row">
              <div className="col-12 col-md-4 ">
                <h2 className="text-left">Results: </h2>
              </div>
              <div className="col-12 col-md-8 ">
                {state.array.reverse().map((item, index) => (
                  <div key={`input-${index}`} className="mb-3">
                    <input type="text" className="form-control" value={item.text} readOnly />
                    <p>Palindrome: {item.palindrome ? "Sí" : "No"}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
