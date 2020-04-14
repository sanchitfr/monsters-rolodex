import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.components';



class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  //using componentDidMount
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  //method definition
  handleChange = (e) => (
    //by using an arrow function, the context of the this keyword is automatically changed to our class, which contains the state property
      this.setState({searchField : e.target.value})
  );

  render(){

    //filtering monsters
    const { monsters, searchField} = this.state; //destructuring
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* //using search box component */}
        <SearchBox 
        placeholder = 'search monsters'
        handleChange = {this.handleChange}
        />

        {/* //using cardList component */}
        <CardList monsters = {filteredMonsters}/>  
      </div>
    );
  }
}

export default App;
