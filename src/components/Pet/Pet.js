import React from 'react';
import PropTypes from 'prop-types';
import css from './Pet.module.css';

const Pet = ({
  item: { image, name, age, breed, gender, color, description },
  onReturn,
}) => {
  return (
    <div className={css.container}>
      <button type="button" onClick={onReturn} className={css.btn}>
        Return
      </button>
      <h2 className={css.title}>All about {name}</h2>
      <div className={css.list}>
        <img src={image} alt="img" className={css.img} />
        <ul className={css.item}>
          <li>
            <strong>Age:</strong> {age}
          </li>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>Color:</strong> {color}
          </li>
          <li>
            <strong>Breed:</strong> {breed}
          </li>
        </ul>
      </div>
      <p className={css.text}>{description}</p>
    </div>
  );
};

Pet.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    breed: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onReturn: PropTypes.func.isRequired,
};

export default Pet;
