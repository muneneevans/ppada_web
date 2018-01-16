import React, { Component } from "react"
import { Grid, List, Header, Container, Divider, Button } from "semantic-ui-react"
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import configureStore from "../Store/configureStore";
var topics = require("../Store/topics.json")
var content = require("../Store/content.json")

//import screens here

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			currentNote: content[0]
		}
	}
	topicClicked(topicId) {
		this.setState({
			...this.state,
			currentNote: content.filter(item => item.topicId == topicId)[0]
		})
	}

	goNext() {
		var currentIndex = content.indexOf(this.state.currentNote)
		if (content[currentIndex + 1]) {
			this.setState({
				...this.state,
				currentNote: content[currentIndex + 1]
			})

		}
	}
	goPrevious() {
		var currentIndex = content.indexOf(this.state.currentNote)
		if (currentIndex == 0) {
			return
		}
		if (content[currentIndex - 1]) {
			this.setState({
				...this.state,
				currentNote: content[currentIndex - 1]
			})

		}
	}

	render() {
		return (
			//add screen inside the div
			<div>
				<Grid padded stretched>
					<Container fluid>
						<Header as='h1'>PPADA</Header>
					</Container>
				</Grid>
				<Grid columns={2} padded>
					<Grid.Column width={4}>
						<Segment>
							{topics ? (
								<List>
									{topics.map(topic => (
										<List.Item key={topic.id}>
											<List.Icon name="folder" />
											<List.Content>
												<List.Header>
													<a href='#' onClick={() => { this.topicClicked(topic.topicId) }}>{topic.name}</a></List.Header>
											</List.Content>
										</List.Item>
									))}
								</List>
							) : (
									<h5>No topics found</h5>
								)}
						</Segment>
					</Grid.Column>

					<Grid.Column width={12}>
						<Container fluid >
							<Button content='Previous' color="blue" onClick={this.goPrevious.bind(this)} />
							<Button content='Next' color="green" onClick={this.goNext.bind(this)} />
						</Container>
						<Segment textAlign="center">
							<Container text>
								<Header as='h1'>{this.state.currentNote.title}</Header>
								<Divider />
								<Container textAlign='justified'>
									<span>
										{this.state.currentNote.content}
									</span>
								</Container>
							</Container>
						</Segment>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}