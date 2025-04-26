import { useState } from "react";

const Display = (props) => {
  return <h1>{props.text}</h1>;
};
const Statistics = (props) => {
  if(props.statistics[0].good === 0) {
    return (
      <div>
        No feedback given
      </div>
    );
  } 
  return (
    <>
      <div>
        {props.statistics.map((statistic, index) => {
          return (
            <div key={index}>
              {statistic.text} {statistic.good}
            </div>
          );
        })}
      </div>
    </>
  );
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

  const statistics = [
    { text: "good", good: good },
    { text: "neutral", good: neutral },
    { text: "bad", good: bad },
    { text: "all", good: all },
    { text: "average", good: average },
    { text: "positive", good: positive },
  ];

  return (
    <div>
      <Display text="give feedback" />

      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <Display text="statistics" />

      <Statistics statistics={statistics} />
    </div>
  );
};

export default App;
