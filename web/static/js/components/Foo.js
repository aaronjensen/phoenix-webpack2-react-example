// @flow
import React, { PropTypes } from 'react'

export default class Foo extends React.Component {
  render() {
    return <h1>foo {this.props.foo}</h1>
    return <h1>foo {this.props.foo}</h1>
  }
}

Foo.propTypes = {
  foo: PropTypes.string.isRequired,
}
