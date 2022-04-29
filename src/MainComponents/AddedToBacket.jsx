import React from 'react';

const AddedToBacket = ({ active }) => (
  <div className={`module_added${active ? ' show_added' : ''}`} role="presentation">
    <p>
      добавлено в корзину
    </p>
  </div>
);

export default AddedToBacket;
