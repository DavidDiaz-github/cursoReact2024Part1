const Header = (props) => {  
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props ) => {    
  return (
    <div>
      <Part array={props.course.parts} />
  
    </div>
  )
}
const Part  = (props ) => { 
  let array = props.array;
  return (
    <div>
      {array.map((item, index) => {
        return (
          <p key={index}>{item.name} {item.exercises}</p>
        );
      })}
    </div>
  )
}

const Total = ( props ) => {
  const suma = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
  
  return (
    <div>
      <p>Number of exercises {suma }</p>
    </div>
  )
}





const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )

}

export default App