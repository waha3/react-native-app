import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

export default class App extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 0,
  }

  componentDidMount() {}

  render() {
    return (
      <Carousel
        autoplay={false}
        infinite
        selectedIndex={1}
        beforeChange={}
        afterChange={}
      >
        {''}
      </Carousel>
    );
  }
}





