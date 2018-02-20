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

class Home extends Component {
	state = {}

	hideFixedMenu = () => this.setState({ visible: false })
	showFixedMenu = () => this.setState({ visible: true })

	render() {
		const { visible } = this.state

		return (
			<div>
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
									as="h2"
									content="PUBLIC PROCUREMENT AND ASSETS DISPOSAL ACT 2015"
									// inverted
									style={{
										fontSize: "2.5em",
										fontWeight: "normal",
										marginBottom: 0,
										marginTop: "5em"
									}}
									className="heading"
								/>
								<Header
									as="h2"
									content="Understanding procurement guidelines"
									// inverted
									style={{ fontSize: "1.7em", fontWeight: "normal" }}
								/>
								<Link to="/book">
									<Button primary size="huge">
										Read The ACT
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
					className="contentBlock"
				>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={12}>
								<Header as="h3" style={{ fontSize: "2em" }}>
									What it is about
								</Header>
								<p style={{ fontSize: "1.33em" }}>
									The Public Procurement and Disposal Act, 2015 (the PPADA, 2015)
									came into force on 7th January, 2016. The PPADA, 2015 is an Act
									of Parliament that seeks to give effect to Article 227 of the
									Constitution which requires that an Act of Parliament be
									enacted to prescribe a framework within which policies
									relating to procurement and asset disposal in respect of a
									State organ or any other public entity shall be implemented.
									The PPADA, 2015 repealed the Public Procurement and Disposal
									Act, 2005 (the PPADA 2005)
								</p>

								<p style={{ fontSize: "1.33em" }}>
									The PPADA, 2015 applies to all State organs and public entities
									with respect to procurement planning, procurement processing,
									inventory and asset management, disposal of assets and
									contract management. The PPADA, 2015 goes on to list the
									entities that would fall under the definition of a “public
									entity” including but not limited to the national and county
									governments (including any of their organs or departments),
									the Central Bank of Kenya, state corporations and companies
									owned by public entities.
								</p>
							</Grid.Column>
							<Grid.Column floated="right" width={2} />
						</Grid.Row>
						<Grid.Row>
							<Grid.Column textAlign="center">
								<Link to="/book">
									<Button bordered size="huge">
										Read The ACT
										<Icon name="right arrow" />
									</Button>
								</Link>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>

				<Segment inverted vertical style={{ padding: "5em 0em" }}>
					<Container>
						<Grid divided inverted stackable stretched center>
							<Grid.Row centered>
									<Header inverted as="h4">
										PUBLIC PROCUREMENT AND ASSETS DISPOSAL ACT
										2015
									</Header>								
							</Grid.Row>
						</Grid>
					</Container>
				</Segment>
			</div>
		)
	}
}

export default Home
