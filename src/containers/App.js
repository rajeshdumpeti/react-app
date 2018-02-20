import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
        this.state = {
            persons:[
                { id:'raj', name: "Rajesh", age: 28 },
                { id:'raj1', name: "Mahesh", age: 26 },
                { id:'raj2', name: "Rajitha", age: 31 }
            ],
            otherState:"somevaleu",
            showPersons: false
        };

    }
    componentWillMount () {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount () {
        console.log('[App.js] Inside this.componentDidMount()');
    }

  nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });

      const person = {
          ...this.state.persons[personIndex]
      };

//const person = Object.assign({}, this.state.persons[personIndex]); old approach for above one we can use anything but modern approach is above one

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: persons});
  }

    deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice();
    //modern es6 syntax
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
        console.log('[App.js] Inside render');
    let persons = null;

    if (this.state.showPersons) {
     persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />;
  }
    return (
      <div className={classes.App}>
          <Cockpit
              appTitle = {this.props.title}
              showPersons = {this.state.showPersons}
              persons = {this.state.persons}
              clicked = {this.togglePersonHandler}/>
          {persons}
      </div>
    );
  }
}

export default App;

