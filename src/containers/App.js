import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor (){
		super();
		this.state = {
			robots : [],
			serarchfield:''
			}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
		
	}

	onSearchChange = (event) => {
		this.setState({serarchfield: event.target.value})
	}

	render() {
		const {robots, serarchfield} = this.state;
		const filteredRbots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(serarchfield.toLowerCase())
		})

		return !robots.length ? 
		<h1 className='tc'>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f2'>Robo Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<CardList robots={filteredRbots} />
				</Scroll>
			</div>
		);}
}


export default App;