import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './PetsList.module.css';

const PetsList = ({ items }) => {
  return (
    <>
      <h1 className={css.saitTitle}>Available pets</h1>
      <ul className={css.list}>
        {items.map(item => (
          <li key={item.id} className={css.item}>
            <Link to={`/pets/${item.id}`}>
              <img src={item.image} alt="img" />
              <h3 className={css.itemName}>{item.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

PetsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
    }),
  ).isRequired,
};

export default PetsList;
