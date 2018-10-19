import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  hovered: monitor.isOver(),
  item: monitor.getItem()
});

class Target extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? 'lightgreen' : 'white';
    return connectDropTarget(
      <div style={{ border: '1px solid', padding: '15px', backgroundColor }}>

        Dustbin
      </div>
    );
  }
}

export default DropTarget('item', {}, collect)(Target);
