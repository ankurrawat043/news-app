import React, { Component } from 'react';
import spn from './spn.gif';

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center' >
        <img className='my-3' src={spn} alt='spinner' />
      </div>
    )
  }
}
