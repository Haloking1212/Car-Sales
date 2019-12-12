import React from 'react';
import { connect } from "react-redux";
import { selectedFeature } from "../store/actions/index";
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.selectedFeature(item);
  };

  console.log(props,"add feat")
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  {selectedFeature})
  (AdditionalFeatures);
