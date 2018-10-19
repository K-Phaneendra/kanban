import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
// import Item from './Item';
// import Target from './Target';
import Card from './Card';

const update = require('immutability-helper');

class DustbinApp extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' }
      ],
      cards: [
        { id: 1, name: 'card 1' },
        { id: 2, name: 'card 2' },
        { id: 3, name: 'card 3' },
        { id: 4, name: 'card 4' },
        { id: 5, name: 'card 5' },
        { id: 6, name: 'card 6' }
      ]
    };
  }

  // deleteItem = id => {
  //   console.log('deleting id', id);
  //   this.setState(prevState => {
  //     const items = prevState.items;
  //     const index = items.findIndex(item => item.id === id);
  //     items.splice(index, 1);
  //     return { items };
  //   });
  // };

  findCard = id => {
    const { cards } = this.state;
    const card = cards.filter(c => c.id === id)[0];
    console.log('filtered card', card);
    return {
      card,
      index: cards.indexOf(card)
    };
  };

  moveCard(id, atIndex) {
    const { card, index } = this.findCard(id);
    console.log('in move card', card, index, id, atIndex);
    this.setState(
      update(this.state, {
        cards: {
          $splice: [[index, 1], [atIndex, 0, card]]
        }
      })
    );
  }

  render() {
    return (
      <div>
        {/* <div>
          {this.state.items.map(item => (
            <Item
              key={item.id}
              item={item}
              handleDrop={id => this.deleteItem(id)}
            />
          ))}
        </div>
        <div>
          <Target />
        </div> */}
        <div>
          {this.state.cards.map(card => (
            <Card
              key={card.id}
              card={card}
              findCard={this.findCard}
              moveCard={this.moveCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DustbinApp);
