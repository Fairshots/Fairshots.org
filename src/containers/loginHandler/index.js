import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../actions/login';


class LoginHandler extends Component {
    constructor(props) {
        super(props);
		this.state = {
					  email: '',
					  password: ''
  				 	 };
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	 }

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		const form = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.doLogin(form);


	}

    componentDidMount() {
    }

	render() {
	return (
	  <Form inline onSubmit={this.handleSubmit}>
	    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
	      <Input type="email" name="email" id="Email" placeholder="e-mail" value={this.state.email} onChange={this.handleChange}/>
	    </FormGroup>
	    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
	      <Input type="password" name="password" id="Password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
	    </FormGroup>
	    <Button>Submit</Button>
	  </Form>
	);
	}
}

const mapDispatchToProps = dispatch => {
	  return {
	    doLogin: formProps => {
	      dispatch(login(formProps))
	  }
  }

}

export default connect(null, mapDispatchToProps)(LoginHandler);


