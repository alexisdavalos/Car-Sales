import React from 'react';

const AdditionalFeature = props => {
  // console.log('AdditionalFeature.js | Props: ', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button is-primary" onClick={() => props.buyFeature(props.feature)}>Add</button>
      {props.feature.name} (+${props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
