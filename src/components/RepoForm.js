import React, { Component } from 'react';
import InputField from './InputField';
import ErrorMessageOnForm from './ErrorMessageOnForm';

class RepoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: ''
    };

    this.handleRepoChange = this.handleRepoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRepoChange(e) {
    this.setState({
      repo: e.target.value
    });
    this.displayErrorMessageOnForm(false);
  }

  displayErrorMessageOnForm(enable) {
    this.setState({
      errorMessageShown: enable
    });
  }

  handleSubmit(event) {
    let { repo } = this.state;
    if (repo) {
      this.props.onSubmit(repo);
    } else {
      this.displayErrorMessageOnForm(true);
    }
    event.preventDefault();
  }

  render() {
    return (
      <form className="repo-form" onSubmit={this.handleSubmit}>
        <InputField label="Repo:" onChange={this.handleRepoChange} placeholder="Enter repo"/>
        <input className="repo-submit" type="submit" value="Submit" className="repo-submit"/>

        <ErrorMessageOnForm text="can't be empty" enable={this.state.errorMessageShown}/>
      </form>
    );
  }
}

export default RepoForm;
