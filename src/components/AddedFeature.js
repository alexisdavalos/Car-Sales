import React from 'react';

const AddedFeature = props => {
  console.log('AddedFeature.js | Props: ', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button is-danger" onClick={()=> props.removeFeature(props.feature)}>X</button>
      {props.feature.name}(-${props.feature.price})
    </li>
  );
};

export default AddedFeature;
