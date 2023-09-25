import React, { Component } from 'react'
import propTypes from "prop-types";

function ComponentWithProps(props) {
  return (
    <>
    <h1>{props.header}</h1>
    <p>{props.content}</p>
    <p>{props.number}</p>
    <p>Non existent: {props.nonexistent}</p>
    </>
  )
}

ComponentWithProps.propTypes = {
    header: propTypes.string,
    content: propTypes.string,
    number: propTypes.number
}

ComponentWithProps.defaultProps = {
    header: 'Header from defaults',
    content: 'Content from defaults',
    number: 100
}

export default ComponentWithProps;