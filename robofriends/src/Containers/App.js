import React, {Component} from 'react';
import CardList from '../Components/CardList';
//import { robots } from './robots';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';
import './App.css'

//const state = {
//    robots: robots,
//    searchfield: ''
//}

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        
    }
    render(){
        const {robots, searchfield} = this.state;
        const filterRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        //if(robots.length === 0){
        //if(!robots.length){
            return robots.length ?
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobot}/>
                        <div style={{height: '500px'}}></div>
                    </Scroll>
                    
                </div>
            ) : <h1>Loading...</h1> 
            
        
        
        
    }
}
export default App;