import React from 'react';
import PropTypes from 'prop-types';
import List from './List.jsx';

const ListItem = ({ item }) => (
  <li>
    {item.description}
  </li>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ListItem;
