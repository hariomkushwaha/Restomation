import React from 'react';

import MENU_DATA from './menu.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class MenuPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: MENU_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default MenuPage;
