import React from 'react'
import {Card, } from 'semantic-ui-react'

const Account = () => {
	return(
		<Card>
			<Card.Content>
				<Card.Header>username</Card.Header>
				<Card.Meta>
					Date Joined: dateJoined
				</Card.Meta>
			</Card.Content>
			<Card.Content>
				<p>Membership Level: memebershipLevel</p>
			</Card.Content>
		</Card>
	)
}

export default Account