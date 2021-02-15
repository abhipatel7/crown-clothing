import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shopSelector';

import './collectionpage.scss';

const CollectionPage = (props) => (
  <div className="collection-page">
    {console.log(props)}
    <h2>Create Page</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
