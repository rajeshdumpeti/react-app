import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 //state is property which is reserved as word by react but we can put anything but keeping state is good.
  state = {
    persons:[
      { name: "Rajesh", age: 28 },
      { name: "Mahesh", age: 26 },
      { name: "Rajitha", age: 31 }
    ],
    otherState:"somevaleu",
      showPersons: false
  }

  switchNameHandler = (newName) => {
   //DON'T DO THIS: react will not recognize  this.state.persons[0].name = "Dumpeti Rajesh";
    this.setState ( {
      persons: [
      { name: newName, age: 28 },
      { name: "Mahesh", age: 26 },
      { name: "Rajitha", age: 32 }
    ]
  } )
  }

  nameChangeHandler = (event) => {
    this.setState ({
      persons: [
        { name: 'Rajesh', age: 28 },
        { name: event.target.value, age: 26 },
        { name: "Rajitha", age: 32 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    } ;
    let persons = null;

    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map(person => {
                  return <Person
                      name={person.name}
                      age={person.age} />
                })}
            </div>
        );
    }

    return (
      <div className="App">
        <h1>First react app</h1>
        <p>This is really working</p>
        <button 
          style= {style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
