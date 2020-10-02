import React, { Component } from 'react';


class FoodList extends Component {
  render() {


    return(
      this.props.menu.map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-xl-3 mb-4">
          <div className="card food-item">
            <div className="card-img-top" style={{overflow: 'hidden', maxWidth: '100%', height: '33vh'}}>
              <img className='food-img' style={{filter: 'brightness(85%)'}}src={item.image} alt={item.menu_item}/>
            </div>
            <button style={{position: 'absolute'}} className='btn btn-primary add'><span className="iconify" data-icon="emojione-monotone:heavy-plus-sign" data-inline="false"></span><span className='button-text'>Add</span></button>
            <div className="card-body">
              <h5 style={{fontWeight: '700', position: 'absolute', marginTop: '-10vh', color: '#fff'}}>{item.menu_item}</h5>
              <p style={{fontStyle: 'italic', fontWeight: '600'}}>{item.price}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio vero laudantium at aperiam harum maxime cumque iste, ad commodi facere incidunt pariatur iusto. Commodi.
              </p>
            </div>
          </div>
        </div>
      ))
    )
  }
}

export default FoodList;
