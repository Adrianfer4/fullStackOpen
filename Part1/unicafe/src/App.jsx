import { useState } from "react";

const Display = (props) => {
  return <h1>{props.text}</h1>;
};

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.statistics.every((value) => value === 0)) {
    return (
      <tr>
        <td>No feedback given</td>
      </tr>
    );
  }
  return (
    <>
      <StatisticsLine text="good" value={props.statistics[0]} />
      <StatisticsLine text="neutral" value={props.statistics[1]} />
      <StatisticsLine text="bad" value={props.statistics[2]} />
      <StatisticsLine text="all" value={props.statistics[3]} />
      <StatisticsLine text="average" value={props.statistics[4]} />
      <StatisticsLine text="positive" value={props.statistics[5] + " %"} />
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

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
      <Display text="give feedback" />

      <Button handleClick={handleGood} name="good" />
      <Button handleClick={handleNeutral} name="neutral" />
      <Button handleClick={handleBad} name="bad" />

      <Display text="statistics" />

      <table>
        <tbody>
          <Statistics
            statistics={[good, neutral, bad, all, average, positive]}
          />
        </tbody>
      </table>
    </div>
  );
};

export default App;
