


const Course = (props) => {
    console.log(props)
    return (
      <div>
        <Header name={props.course.name} />
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}/>
      </div>
    )
  }
  const Header =(props) =>{
    console.log(props)
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}
const Content = (props) =>{
    console.log(props)
    const differentParts = props.parts.map(element => { return <Part key={element.id} parts={element} /> } )
    return(
        <div>
            {differentParts}
        </div>
    )
}
const Part = (props) =>{
    console.log(props)
    return(
        <div>
          <p>{props.parts.name} {props.parts.exercises}</p>
        </div>
    )
}
const Total = (props) => {
    console.log(props)
    const totalAmount = props.parts.reduce((sum,order) => sum + order.exercises, 0)
    console.log(totalAmount)
    return (
      <div>
        <p>
          total of {totalAmount} exercises
        </p>
      </div>
    )
  } 

  export default Course