import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./Clock";

function App() {
  const [state, setState] = useState({
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
  });

  useEffect(() => {
    const interValid = setInterval(() => {
      setClock();
    }, 1000)
    return () => clearInterval(interValid)
  }, []);

  const setClock = () => {
    const currDate = new Date();
    const secondRatio = currDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currDate.getHours()) / 12;

    setState({
      secondRatio,
      minuteRatio,
      hourRatio,
    });
  };

  return (
    <div className="App">
      <Clock secondRatio={state.secondRatio} minuteRatio={state.minuteRatio} hourRatio={state.hourRatio} />
    </div>
  );
}

export default App;
