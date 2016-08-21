/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectHomePage } from './selectors';
import Immutable, { fromJS, toJS } from 'immutable';

import { createTodo, fetchTodos } from './actions';
import HomePageWrapper from '../../components/HomePageWrapper';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <HomePageWrapper {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: selectHomePage(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createTodo: () => dispatch(createTodo()),
    fetchTodos: () => dispatch(fetchTodos()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
