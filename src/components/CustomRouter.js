import React, { Component } from 'react';
import CustomRoute from './CustomRoute';

class CustomRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: props.defaultPath
    }

    this.handlePathChange = this.handlePathChange.bind(this);
  }

  handlePathChange(path) {
    this.setState({
      path: path
    });
  }

  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child => {
      let attrs = child.type === CustomRoute ? { currentPath: this.state.path, onPathChange: this.handlePathChange } : {};
      return React.cloneElement(child, attrs)
    });

    return <div>{childrenWithProps}</div>;
  }
}

export default CustomRouter;
