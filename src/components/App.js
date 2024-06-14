
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <button className="btn" onClick={onClickHandler}>
        click me
      </button>
      <p className="displayText">Button clicked {count} times</p>
    </div>
  )
}

export default App
