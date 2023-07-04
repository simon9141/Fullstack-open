const Content = (props) =>{
    console.log(props)
    const differentParts = props.parts.map((element) => {<Part key={element.id} parts={element} /> })
    return(
        <div>
            <p>{differentParts}</p>
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

export default  Content