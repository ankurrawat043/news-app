import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class News extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        this is news component
      </div>
    )
  }
}
