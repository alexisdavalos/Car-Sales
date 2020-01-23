import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {buyFeature} from '../actions/FeaturesActions';
import {connect} from 'react-redux';

const AdditionalFeatures = props => {
  // console.log('AdditionalFeatures.js | Props: ', props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyFeature={props.buyFeature} />
          ))}
        </ol>
      ) : (
        <p>No More Features Available!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return{
    additionalFeatures: state.featuresReducer.additionalFeatures
  }
}
export default connect(
  mapStateToProps,
  {buyFeature}
)(AdditionalFeatures);
