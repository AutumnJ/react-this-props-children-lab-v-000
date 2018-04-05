import React from 'react';

export default class ThemedParty extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className: this.props.theme,
    }));

    return (
      <div>
        {childrenWithWrapperDiv}
      </div>
    )
  }
}
