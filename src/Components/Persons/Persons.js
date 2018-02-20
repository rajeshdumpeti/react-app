import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);

    }
    componentWillMount () {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount () {
        console.log('[Persons.js] Inside this.componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside this.componentWillReceiveProps, nextProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate nextProps, NExtState');
        return nextProps.persons !== this.props.persons;
    }


    render() {
        console.log('[Persons.js] Inside the render');

        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked( index )}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={( event ) => this.props.changed( event, person.id )} />
        });
    }
}



export default Persons;