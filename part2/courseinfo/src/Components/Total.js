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
  export default Total