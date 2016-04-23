import React from 'react';
import {connect} from 'react-redux';

import {Link} from './Link';
import {setVisibilityFilter} from '../actions';

export const FilterLink = connect(
    (state, props) => {
        return {
            active: props.filter === state.visibilityFilter
        }
    },
    (dispatch, props) => {
        return {
            onClick: () => {
                dispatch(setVisibilityFilter(props.filter))
            }
        }
    }
)(Link);
