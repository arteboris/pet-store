import React, { Component } from 'react';
import pets from '../../server/pets.json';
import Pet from '../../components/Pet/Pet';

export default class PetPage extends Component {
  state = { item: null };

  componentDidMount() {
    const id = this.getIdFromProps(this.props);
    const petObject = this.findPetPage(id);
    this.setState({ item: petObject });
  }

  getIdFromProps = props => props.match.params.id;

  findPetPage = id => pets.find(elem => elem.id === id);

  handleOnReturn = () => {
    this.props.history.push('/pets');
  };

  render() {
    const { item } = this.state;
    return <>{item && <Pet {...item} onReturn={this.handleOnReturn} />}</>;
  }
}
