import React from 'react';
import {connect} from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      {(props.additionalPrice === 0) ? 
      <p>Amount: ${props.car.price}</p> :
      <p>Amount: ${props.car.price + props.additionalPrice}</p> 
      }
    </>
  );
};
const mapStateToProps = state =>{
  return{
    additionalPrice: state.featuresReducer.additionalPrice,
    car: state.featuresReducer.car
  }
}
export default connect(
  mapStateToProps
)(Header);
