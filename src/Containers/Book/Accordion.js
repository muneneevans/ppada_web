import React, { Component } from "react"
import { Accordion, Icon, List } from "semantic-ui-react"

export default class TopicsBar extends Component {
	constructor() {
		super()
		this.state = { activeIndex: 0 }
	}

	handleClick = (e, titleProps) => {
		const { index } = titleProps
		const { activeIndex } = this.state
		const newIndex = activeIndex === index ? -1 : index

		this.setState({ activeIndex: newIndex })
    }
    
    topicClicked(topicId){        
        this.props.topicClicked(topicId)
    }

	render() {
		const { activeIndex } = this.state

		return (
			<div>
				<Accordion styled>
					{this.props.sections.map((section, i) => (
						<div key={i}>
							<Accordion.Title
								active={activeIndex === i}
								index={i}
								onClick={this.handleClick}
							>
								<Icon name="dropdown" />
								{section.name}
							</Accordion.Title>
							<Accordion.Content active={activeIndex === i}>
								<List >
									{section.topics.map((topic, i) => (
										<List.Item as="a" key={i}
                                            onClick={() =>this.topicClicked(topic.topicId)}>{topic.name}</List.Item>
									))}
								</List>
							</Accordion.Content>
						</div>
					))}
				</Accordion>
			</div>
		)
	}
}
