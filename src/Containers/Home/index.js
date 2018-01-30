import React, { Component } from "react"
import { Link } from "react-router-dom"

import styles from "./style.css"

import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Segment,
	Visibility
} from "semantic-ui-react"

const FixedMenu = () => (
	<Menu fixed="top" size="large" className="menu topMenu" inverted>
		<Container>
			<Link to="/">
				<Menu.Item as="a" active>
					Home
				</Menu.Item>
			</Link>
			<Link to="/book">
				<Menu.Item as="a" active>
					Book
				</Menu.Item>
			</Link>
			
		</Container>
	</Menu>
)

class Home extends Component {
	state = {}

	hideFixedMenu = () => this.setState({ visible: false })
	showFixedMenu = () => this.setState({ visible: true })

	render() {
		const { visible } = this.state

		return (
			<div>
				<FixedMenu />

				<Visibility
					as="div"
					onBottomPassed={this.showFixedMenu}
					onBottomVisible={this.hideFixedMenu}
					once={false}
				>
					<div>
						<Segment
							inverted
							textAlign="center"
							style={{ minHeight: 700, padding: "1em 0em" }}
							vertical
							className="banner"
						>
							<Container text>
								<Header
									as="h1"
									content="PPARA"
									inverted
									style={{
										fontSize: "4em",
										fontWeight: "normal",
										marginBottom: 0,
										marginTop: "3em"
									}}
								/>
								<Header
									as="h2"
									content="Understanding procurement guidelines"
									inverted
									style={{ fontSize: "1.7em", fontWeight: "normal" }}
								/>
								<Link to="/book">
									<Button primary size="huge">
										Read The book
										<Icon name="right arrow" />
									</Button>
								</Link>
							</Container>
						</Segment>
					</div>
				</Visibility>

				<Segment
					style={{ padding: "8em 0em" }}
					vertical
					className="contentBlockx"
				>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={8}>
								<Header as="h3" style={{ fontSize: "2em" }}>
									We Help Companies and Companions
								</Header>
								<p style={{ fontSize: "1.33em" }}>
									We can give your company superpowers to do things that they
									never thought possible. Let us delight your customers and
									empower your needs... through pure data analytics.
								</p>
								<Header as="h3" style={{ fontSize: "2em" }}>
									We Make Bananas That Can Dance
								</Header>
								<p style={{ fontSize: "1.33em" }}>
									Yes that's right, you thought it was the stuff of dreams, but
									even bananas can be bioengineered.
								</p>
							</Grid.Column>
							<Grid.Column floated="right" width={6}>
								<Image
									bordered
									rounded
									size="large"
									src="/assets/images/wireframe/white-image.png"
								/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column textAlign="center">
								<Button size="huge">Check Them Out</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>

				<Segment inverted vertical style={{ padding: "5em 0em" }}>
					<Container>
						<Grid divided inverted stackable>
							<Grid.Row>
								<Grid.Column width={3}>
									<Header inverted as="h4" content="About" />
									<List link inverted>
										<List.Item as="a">Sitemap</List.Item>
										<List.Item as="a">Contact Us</List.Item>
										<List.Item as="a">Religious Ceremonies</List.Item>
										<List.Item as="a">Gazebo Plans</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={3}>
									<Header inverted as="h4" content="Services" />
									<List link inverted>
										<List.Item as="a">Banana Pre-Order</List.Item>
										<List.Item as="a">DNA FAQ</List.Item>
										<List.Item as="a">How To Access</List.Item>
										<List.Item as="a">Favorite X-Men</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={7}>
									<Header as="h4" inverted>
										Footer Header
									</Header>
									<p>
										Extra space for a call to action inside the footer that
										could help re-engage users.
									</p>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</Segment>
			</div>
		)
	}
}

export default Home
