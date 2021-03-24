import {Component} from 'react'
import { Form } from 'semantic-ui-react'

class AccountClassForm extends Component {

	state = {username:'', skillLevel:''}

	handleChange = (e, {name, value}) => {
		console.log(e)
		console.log(name)
		console.log(value)
	}

	handleSubmit = () => {
		console.log('submitted')
	}
	
	render(){
		return(
			<Form onSubmit={this.handleSubmit}>
				<Form.Input
					label='New Username'
					value={this.state.username}
					type='text'
					name='username'
					onChange={this.handleChange}
				/>
				<Form.Select
					value={this.state.skillLevel}
					name='skillLevel'
					label= 'Experience Level'
					options={skillLevel}
					onChange={this.handleChange}
				/>
				<Form.Button>Add</Form.Button>
			</Form>
		)
	}
}

const skillLevel = [
	{key:'a', text:'Apprentice', value:'Apprentice'},
	{key:'j', text:'Journeyman', value:'Journeyman'},
	{key:'m', text:'Master', value:'Master'}
]

export default AccountClassForm