import React from 'react';

function CustomRoute(props) {
  const { children, currentPath, onPathChange, path } = props;
  const childrenWithProps = React.Children.map(children, child => {
    let attrs = child.props.routable ? { onPathChange: onPathChange } : {};
    return React.cloneElement(child, attrs)
  });
  return path === currentPath ? <div>{childrenWithProps}</div> : '';
}

export default CustomRoute;
