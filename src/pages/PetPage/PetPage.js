import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pets from '../../server/pets.json';
import Pet from '../../components/Pet/Pet';

export default class PetPage extends Component {
  state = { item: null };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const id = this.getIdFromProps(this.props);
    const petObject = this.findPetPage(id);
    this.setState({ item: petObject });
  }

  getIdFromProps = props => props.match.params.id;

  findPetPage = id => pets.find(elem => elem.id === id);

  handleOnReturn = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { item } = this.state;
    return <>{item && <Pet item={item} onReturn={this.handleOnReturn} />}</>;
  }
}
