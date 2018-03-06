import React, { Component } from "react"
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom"
import Book from "./Book"
import Home from "./Home"
import { Menu, Container, Image } from "semantic-ui-react"

import logo from "../Assets/Images/ppada.png"
const FixedMenu = () => (
	<Menu fixed="top" size="large" className="menu topMenu" inverted>
		<Container>
			<Link to="/">
				<Menu.Item position="left" active>
					<Image src={logo} size="tiny" />
				</Menu.Item>
			</Link>
			<Menu.Item position="right">
				<Link to="/">
					<Menu.Item active>Home</Menu.Item>
				</Link>
				<Link to="/book">
					<Menu.Item active>The Act</Menu.Item>
				</Link>
			</Menu.Item>
		</Container>
	</Menu>
)

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<FixedMenu />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/book" component={Book} />
							<Route path="/home" component={Home} />
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}
