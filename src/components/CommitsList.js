import React, { Component } from 'react';
import axios from 'axios';
import Commit from './Commit';
import RepoForm from './RepoForm';
import ErrorMessageOnForm from './ErrorMessageOnForm';

class CommitsList extends Component {

  constructor(props) {
    super(props);
     this.state = {
      errorMessageShown: false,
      commits: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.hadleRepoChange = this.hadleRepoChange.bind(this);
  }

  handleClick(event) {
    this.props.onPathChange('login');
    this.props.onLogout();
    event.preventDefault();
  }

  hadleRepoChange(repo) {
    let url = 'https://api.github.com/repos/' + this.props.userName() + '/' + repo + '/commits';
    axios.get(url)
         .then(({data}) => this.setState({ commits: data }))
         .then(() => this.displayErrorMessageOnForm(false))
         .catch(() => {
            this.setState({ commits: [] });
            this.displayErrorMessageOnForm(true)
          });
  }

  displayErrorMessageOnForm(enable) {
    this.setState({
      errorMessageShown: enable
    });
  }

  render() {
    return (
      <div className="commits">
        <div className="logout-link">
          <a onClick={this.handleClick}>Log out</a>
        </div>
        <RepoForm onSubmit={this.hadleRepoChange} />
        <ErrorMessageOnForm text="Incorrect repo name" enable={this.state.errorMessageShown}/>

        <div>
          <h2>Commits:</h2>
          { this.state.commits.map(commit => <Commit data={commit} key={commit.sha}/>) }
        </div>
      </div>
    );
  }
}

export default CommitsList;
