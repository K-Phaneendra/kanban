import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    console.log('begin dragging', props);
    return props.item;
  },
  endDrag(props, monitor, component) {
    console.log('end drag', props, monitor, component);
    if (!monitor.didDrop()) {
      return null;
    }
    return props.handleDrop(props.item.id);
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
});

class Item extends Component {
  render() {
    console.log('props', this.props);
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <div
        style={{
          border: '1px solid',
          padding: '5px',
          opacity
        }}
      >
        {item.name}
      </div>
    );
  }
}

export default DragSource('item', itemSource, collect)(Item);
