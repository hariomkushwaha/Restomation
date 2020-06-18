import React from 'react';

import Menuitems from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state={
             sections: [
                {
                  title: 'starters',
                  imageUrl: 'https://photo.foodgawker.com/wp-content/uploads/2018/10/3325534.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'beverages',
                  imageUrl: 'https://sidebarchi.com/wp-content/uploads/sites/16/2018/10/SB-Web-Background.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'desserts',
                  imageUrl: 'https://www.seekpng.com/png/detail/9-97793_this-backgrounds-is-food-transparent-free-vector-about.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'vegitarian',
                  imageUrl: 'https://mfacdn.cachefly.net/chooseveg/sites/2/2018/11/Vegan-Keto-1440x570.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'non-vegitarian',
                  imageUrl: 'https://c.ndtvimg.com/2020-05/0ug0nbfo_chicken-masala_625x300_28_May_20.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        };
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...othersectionprops})=>(
                        <Menuitems key={id} {...othersectionprops}/>
                    ))
                }
            </div>
 
        );
    }
}

export default Directory;