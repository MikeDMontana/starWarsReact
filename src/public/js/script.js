import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class StarWarsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    axios.get('http://swapi.co/api/people/')
    .then( res => {
      const people = res.data.results;
      this.setState({ people });
    });
  }
  render() {
    return (
      <div>
          {this.state.people.map(person =>
            <h1 key={person.name}>{person.name}</h1>
          )}
      </div>
    );
  }
}
ReactDOM.render(<StarWarsPage />, document.getElementById('container'));
