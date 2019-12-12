import React from 'react';
import { connect } from "react-redux";
import AddedFeature from './AddedFeature';
import { removedFeature } from "../store/actions/index";

const AddedFeatures = props => {

  const removeFeature = id => {
    // dispatch an action here to remove an item
    props.removedFeature(id);
  };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} {...item} remove={removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures,
    car: state.car

  }
}

export default connect(
mapStateToProps,
  {removedFeature}
  )(AddedFeatures);
