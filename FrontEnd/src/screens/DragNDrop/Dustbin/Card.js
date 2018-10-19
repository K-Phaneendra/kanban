import React from 'react';
import {
  DragSource,
  DropTarget,
  ConnectDragSource,
  ConnectDropTarget,
  DragSourceMonitor,
  DropTargetMonitor
} from 'react-dnd';
import flow from 'lodash/flow';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

const cardSource = {
  beginDrag(props) {
    console.log('props in begin drag', props);
    return {
      id: props.card.id,
      originalIndex: props.findCard(props.card.id).index
    };
  },

  endDrag(props, monitor) {
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.moveCard(droppedId, originalIndex);
    }
  }
};

const cardTarget = {
  canDrop() {
    return false;
  },

  hover(props, monitor) {
    console.log('in hover', props);
    const { id: draggedId } = monitor.getItem();
    const overId = props.card.id;
    // const { id: overId } = props;
    console.log('in hiver', draggedId, overId);
    if (draggedId !== overId) {
      const { index: overIndex } = props.findCard(overId);
      props.moveCard(draggedId, overIndex.id);
    }
  }
};

class Card extends React.Component {
  render() {
    const {
      card,
      isDragging,
      connectDragSource,
      connectDropTarget
    } = this.props;
    const opacity = isDragging ? 0 : 1;

    return (
      connectDragSource
      && connectDropTarget
      && connectDragSource(
        connectDropTarget(<div style={{ ...style, opacity }}>{card.name}</div>)
      )
    );
  }
}

export default flow(
  DragSource('card', cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget('card', cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Card);
