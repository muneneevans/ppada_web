import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Book from "./Book"
import Home from "./Home"

export default class App extends Component {
	render(){
		return(
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route  path="/book" component={Book}/>				
					<Route  path="/home" component={Home}/>
				</Switch>
			</Router>
		)
	}
}