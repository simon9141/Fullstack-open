import { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1)
    console.log('good...',good)
  
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log('neutral...', neutral)
  
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    console.log('bad...', bad)
  
  
  }

  return (
    <div>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
const StatisticLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
      </tr>
    )
  }
const Statistics = (props) =>{
    const sum = props.good + props.neutral + props.bad

    if (sum === 0){
        return(
            <div>No feedback given</div>
        )
    }
    return(
        <table>
            <tbody>
                <StatisticLine text="Good" value={props.good} />
                <StatisticLine text="Neutral" value={props.neutral} />
                <StatisticLine text="Bad" value={props.bad} />
                <StatisticLine text="All" value={sum} />
                <StatisticLine text="All" value={sum} />
                <StatisticLine text="Average" value={(props.good * 1 + props.neutral * 0 + props.bad * (-1))/sum} />
                <StatisticLine text="Positive" value={(props.good/sum)*100} />
            </tbody>
        </table>
    )
}

export default App