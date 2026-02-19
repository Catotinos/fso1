import { useState } from 'react'


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  const g = props.good
  const n = props.neutral
  const b = props.bad
  const all = g + n + b
  const avrcal = g * 1 + n * 0 + b * -1
  const average = avrcal /all
  console.log(average)

  if (all == 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(

    <table>
      <tbody>
      <StatisticLine text="good" value={g} />
      <StatisticLine text="neutral" value={n} />
      <StatisticLine text="bad" value={b} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={g / all} />
      </tbody>
    </table>
  )

}

const StatisticLine = (props) => {
  return (
    <tr>
      <th>{props.text}</th>
      <th>{props.value}</th>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodreview = () => {
    setGood(good + 1);
  }

  const neutralreview = () => {
    setNeutral(neutral + 1);
  }

  const badreview = () => {
    setBad(bad + 1);
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={goodreview} text="good" />
        <Button onClick={neutralreview} text="neutral" />
        <Button onClick={badreview} text="bad" />
      </div>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App