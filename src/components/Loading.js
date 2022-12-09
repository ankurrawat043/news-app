import React, { Component } from 'react';
import spn from './spn.gif';

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center' >
        <img src={spn} alt='spinner' />
      </div>
    )
  }
}
