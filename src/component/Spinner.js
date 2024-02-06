import React, { Component } from 'react'

export class Spinner extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h2 className='text-center text-warning'>
            LOADING...............
        </h2>
      </div>
    )
  }
}

export default Spinner