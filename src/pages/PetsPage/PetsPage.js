import React, { Component } from 'react';
import pets from '../../server/pets.json';
import PetsList from '../../components/PetsList/PetsList';

export default class PetsPage extends Component {
  state = { items: [] };

  componentDidMount() {
    this.setState({ items: pets });
  }

  render() {
    const { items } = this.state;
    return <>{items.length > 0 && <PetsList items={items} />}</>;
  }
}
