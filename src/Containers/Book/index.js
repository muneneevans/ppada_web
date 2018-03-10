import React, { Component } from "react"
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment"
import configureStore from "../../Store/configureStore"
var topics = require("../../Store/topics.json")
var content = require("../../Store/content.json")
var sections = require("../../Store/sections.json")
import LogoImg from "../../Assets/Images/ppada.png"
import TopicsBar from "./Accordion"

import {
	Grid,
	List,
	Header,
	Container,
	Divider,
	Button,
	Input,
	Image
} from "semantic-ui-react"
//import screens here

export default class Book extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentNote: content[0],
			topics: topics,
			sections: sections,
			searchMode: false
		}
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyPress.bind(this))
	}

	handleKeyPress(event) {
		if (event.key == "ArrowRight") {
			this.goNext()
		}
		if (event.key == "ArrowLeft") {
			this.goPrevious()
		} else if ("qwertyuiopasdfghjklzxcvbnm".indexOf(event.key) > 0) {
			// this.handleSearchInput(event.key)
		}
	}

	topicClicked(topicId) {
		this.setState({
			...this.state,
			currentNote: content.filter(item => item.topicId == topicId)[0]
		})
	}

	pageClicked(pageId) {
		this.setState({
			...this.state,
			currentNote: content.filter(item => item.id == pageId)[0]
		})
	}

	goNext() {
		let currentTopic = topics.indexOf(
			topics.find(item => item.topicId === this.state.currentNote.topicId)
		)

		if (topics[currentTopic + 1]) {
			this.setState({
				...this.state,
				currentNote: content.find(
					item => item.topicId === topics[currentTopic + 1].topicId
				)
			})
		}
	}
	goPrevious() {
		let currentTopic = topics.indexOf(
			topics.find(item => item.topicId === this.state.currentNote.topicId)
		)

		if (topics[currentTopic - 1]) {
			this.setState({
				...this.state,
				currentNote: content.find(
					item => item.topicId === topics[currentTopic - 1].topicId
				)
			})
		}
	}

	handleSearchInput(value) {
		if (value === "") {
			this.setState({
				...this.state,
				searchMode: false
			})
		} else {
			let results = content.map(page => {
				let txt = page.content
				let idx = txt.toLowerCase().indexOf(value.toLowerCase())
				if (idx >= 0) {
					return {
						...page,
						content: (
							<p>
								<strong style={{ textTransform: "bold", fontSize: "large" }}>
									{value}
								</strong>
								{txt.substring(idx + value.length, idx + 150) + "..."}
							</p>
						)
					}
				}
			})

			results = results.filter(item => item !== undefined)

			this.setState({
				...this.state,
				searchMode: true,
				searchResults: results
			})
		}
	}

	render() {
		return (
			//add screen inside the div
			<div>
				<Grid padded stretched>
					<Container fluid>
						<Image src={LogoImg} size="small" />
					</Container>
				</Grid>
				<Grid columns={2} padded>
					<Grid.Column width={5}>
						<Segment>
							<Container fluid>
								<Input
									onChange={e => {
										this.handleSearchInput(e.target.value)
									}}
								/>
							</Container>
							{this.state.searchMode ? (
								<List>
									{this.state.searchResults.map((page, i) => (
										<List.Item
											key={i}
											as="a"
											onClick={() => this.pageClicked(page.id)}
										>
											{page.content}
										</List.Item>
									))}
								</List>
							) : (
								<TopicsBar
									sections={this.state.sections}
									topicClicked={this.topicClicked.bind(this)}
								/>
							)}
						</Segment>
					</Grid.Column>

					<Grid.Column width={11}>
						<Container fluid>
							<Button
								content="Previous"
								color="blue"
								onClick={this.goPrevious.bind(this)}
							/>
							<Button
								content="Next"
								color="green"
								onClick={this.goNext.bind(this)}
							/>
						</Container>
						<Segment textAlign="center">
							<Container text>
								<Header as="h1">{this.state.currentNote.title}</Header>
								<Divider />
								<Container textAlign="justified">
									<span style={{whiteSpace: "pre-line", textAlign: "center"} }>
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
