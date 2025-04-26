import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGood = () => {
    const updateGood = good + 1;
    const updateAll = all + 1;
    const avg = (updateGood - bad) / updateAll;
    const positve = (updateGood / updateAll) * 100;

    setGood(updateGood);
    setAll(updateAll);
    setAverage(avg);
    setPositive(positve);
  };

  const handleNeutral = () => {
    const updateNeutral = neutral + 1;
    const updateAll = all + 1;
    const avg = (good - bad) / updateAll;
    const positve = (good / updateAll) * 100;

    setNeutral(updateNeutral);
    setAll(updateAll);
    setAverage(avg);
    setPositive(positve);
  };

  const handleBad = () => {
    const updateBad = bad + 1;
    const updateAll = all + 1;
    const avg = (good - updateBad) / updateAll;
    const positve = (good / updateAll) * 100;

    setBad(updateBad);
    setAll(updateAll);
    setAverage(avg);
    setPositive(positve);
  };

  return (
    <div>
      <h1>give feeedback</h1>

      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h1>statistics</h1>

      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </div>
  );
};

export default App;
