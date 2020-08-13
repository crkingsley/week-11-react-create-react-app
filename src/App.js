import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
  // `constructor` is par of `class` and React components
  // always called when an instance of our class is created
  // aka `construct`d
  // gives initial value
  // props are not being used in this case
  constructor (props) {
    super(props)
   // bad code: this.state.displayTime = ''
   // we must set state to an object
   this.state = {
     displayTime: '',
     visitorName: 'Ike N. Wine'
   }
  }
// `componentDidMount` is standard in React
// this is where we load data or otherwise initialize data
componentDidMount () {
  this.timerId = setInterval(() => {
    // call the `tick`
    this.tick()
  }, 1000);
}
//custom method as seen on reactjs.org
tick () {
  console.log("In tick")
  this.setState({
    displayTime: new Date().toLocaleTimeString()
  })
}

  // `render` is standard for getting
  // html into our web page
  render () {
    const {displayTime, visitorName} = this.state
    return (
    <div className="clock">
        <h2>The time is {displayTime}</h2>
        <div>Thanks for visiting {visitorName}</div>
    </div>
    )
  }
}

function App (){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo"/>
      </header>
      <Clock />
    </div>
  )
}

export default App;
