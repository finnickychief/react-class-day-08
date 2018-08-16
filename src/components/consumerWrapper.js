import React, { Component } from 'react';
import { Consumer } from '../context';

/*
  consumerWrapper will return a Consumer that is already wrapped around your Component. It still allows to define your properties, but adds on an additional context property that provides access to your store.
  
  consumerWrapper is a function that takes in a Component.
  
  First, it creates an anonymous component that will apply the Consumer and context property to your Component

  Then it returns the wrapped component ready for use.

*/

const consumerWrapper = WrappedComponent => {
  const HOC = props => {
    return (
      <Consumer>
        {store => <WrappedComponent {...props} context={store} />}
      </Consumer>
    );
  };

  HOC.WrappedComponent = WrappedComponent;

  return HOC;
};

export default consumerWrapper;
