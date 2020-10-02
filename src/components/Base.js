import React, { Component } from 'react';
import FoodList from './FoodList'
import Order from './Order'
class Base extends Component {
  constructor(props) {
    super(props);

    this.state= {
      menu: []
    };
  }

  componentDidMount() {
    const menu = [{
      "menu_item": "Pur Value",
      "price": "$9.10",
      "image": "http://dummyimage.com/417x491.png/dddddd/000000"
    }, {
      "menu_item": "Wine - White, Concha Y Toro",
      "price": "$17.93",
      "image": "http://dummyimage.com/624x503.png/5fa2dd/ffffff"
    }, {
      "menu_item": "Bacardi Breezer - Tropical",
      "price": "$8.64",
      "image": "http://dummyimage.com/495x368.png/ff4444/ffffff"
    }, {
      "menu_item": "Cranberries - Fresh",
      "price": "$9.94",
      "image": "http://dummyimage.com/793x661.png/dddddd/000000"
    }, {
      "menu_item": "Chocolate Bar - Coffee Crisp",
      "price": "$14.55",
      "image": "http://dummyimage.com/506x705.png/dddddd/000000"
    }, {
      "menu_item": "Cheese - Stilton",
      "price": "$8.42",
      "image": "http://dummyimage.com/504x618.png/5fa2dd/ffffff"
    }, {
      "menu_item": "Corn Kernels - Frozen",
      "price": "$6.91",
      "image": "http://dummyimage.com/645x616.png/5fa2dd/ffffff"
    }, {
      "menu_item": "Chicken - Leg / Back Attach",
      "price": "$6.75",
      "image": "http://dummyimage.com/737x761.png/5fa2dd/ffffff"
    }, {
      "menu_item": "Sandwich Wrap",
      "price": "$14.04",
      "image": "http://dummyimage.com/616x712.png/cc0000/ffffff"
    }, {
      "menu_item": "Bay Leaf",
      "price": "$6.97",
      "image": "http://dummyimage.com/738x742.png/5fa2dd/ffffff"
    }, {
      "menu_item": "Chinese Lemon Pork",
      "price": "$9.60",
      "image": "http://dummyimage.com/770x531.png/5fa2dd/ffffff"
    }, {
      "menu_item": "Jam - Marmalade, Orange",
      "price": "$17.34",
      "image": "http://dummyimage.com/596x541.png/ff4444/ffffff"
    }, {
      "menu_item": "Cheese - Cream Cheese",
      "price": "$10.59",
      "image": "http://dummyimage.com/524x384.png/ff4444/ffffff"
    }, {
      "menu_item": "Cheese - Bakers Cream Cheese",
      "price": "$8.63",
      "image": "http://dummyimage.com/603x460.png/cc0000/ffffff"
    }, {
      "menu_item": "Tea - Vanilla Chai",
      "price": "$6.56",
      "image": "http://dummyimage.com/430x433.png/dddddd/000000"
    }, {
      "menu_item": "Pork Loin Bine - In Frenched",
      "price": "$17.66",
      "image": "http://dummyimage.com/647x659.png/cc0000/ffffff"
    }, {
      "menu_item": "Cheese - Swiss Sliced",
      "price": "$11.35",
      "image": "http://dummyimage.com/452x464.png/dddddd/000000"
    }, {
      "menu_item": "Cleaner - Pine Sol",
      "price": "$7.19",
      "image": "http://dummyimage.com/653x453.png/ff4444/ffffff"
    }, {
      "menu_item": "Mayonnaise - Individual Pkg",
      "price": "$9.50",
      "image": "http://dummyimage.com/783x430.png/ff4444/ffffff"
    }, {
      "menu_item": "Puree - Passion Fruit",
      "price": "$12.82",
      "image": "http://dummyimage.com/718x411.png/dddddd/000000"
    }]
    this.setState({menu})
  }
  render() {
    return (
      <div className="parent">
        <h1>Wild Thyme Gourmet</h1>
        <div className="row d-flex">
        <FoodList menu={this.state.menu} />
        </div>
        <Order />
      </div>
    )
  }
}

export default Base;
