// @flow
import React from 'react'
import Title from './Title'
import BlueKit from 'react-bluekit';
import componentsIndex from '../componentsIndex';

export default class App extends React.Component {
  render() {
    return       <BlueKit
                   componentsIndex={componentsIndex}
                   inline
                 />
    // return <Title />
  }
}
