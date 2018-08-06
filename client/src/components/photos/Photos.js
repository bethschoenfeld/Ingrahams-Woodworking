import React, { Component } from 'react';
import styled from 'styled-components';
import GridExampleColumnCount from '../../styles/GridExampleColumnCount';


export default class Photos extends Component {
  render() {
    return (
      <div>
        <h2>Photos</h2>
        <div id='photoContainer'>
          <GridExampleColumnCount />
        </div>
      </div>


    )
  }
}

