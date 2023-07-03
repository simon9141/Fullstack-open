import {useState} from 'react'
  const App = () => {
    const course={
      course : 'Half Stack application development',
      parts:[
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]}
  
    return (
      <div>
        <Header name={course.course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
        {/* <Counter/> */}
        <Button/>

      </div>
    )
  }
  const Header= (props)=>{
    return(
      <div>{props.name}</div>
    )

  }
  const ContentPart= (props)=>{
    console.log(props)
    return(
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
  }
  const Content = (props) => {
    console.log(props)
    return(
      <div>
        <ContentPart part={props.parts[0].name} exercises={props.parts[0].exercises} />
        <ContentPart part={props.parts[1].name} exercises={props.parts[1].exercises} />
        <ContentPart part={props.parts[2].name} exercises={props.parts[2].exercises} />
      </div>
    )
  }
  const Total = (props) => {
    console.log(props)
    return(
      <div>
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
      </div>
    )
  
  }  
  const Counter=()=>{
    const [count, setCount] = useState(0)
    setTimeout(()=>
    setCount(count +1), 1000
    )
    console.log("rendering...", count)
    return(
      <div>{count}</div>
    )
  }
  const Button = ()=>{
    const [left, setLeft]=useState(0)
    const [right, setRight]=useState(0)
    const [allClicks, setAllClicks]=useState([])
    const [total, setTotal]=useState(0)

    const handleLeftClick=()=>{
      setAllClicks(allClicks.concat('L'))
      console.log('left before', left)
      const updatedLeft=left+1
      setLeft(updatedLeft)
      console.log('left after', left)
      setTotal(left+right)
    }
    const handleRightClick=()=>{
      setAllClicks(allClicks.concat('R'))
      console.log('right before', right)
      const updatedRight=right+1
      setRight(updatedRight)
      console.log('right after', right)
      setTotal(left+right)
    }

    return(
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join(' ')}</p>
        <p>total {total}</p>
      </div>
    )
  }
  

export default App;
