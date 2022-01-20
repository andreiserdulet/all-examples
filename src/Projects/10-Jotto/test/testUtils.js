import React from 'react';
import { checkPropTypes } from "prop-types";
import {createStore, applyMiddleware} from 'redux';
import rootRedcuer from '../redux/reducers/successReducer';
import { middlewares } from "../redux/configureStore";
export const storeFactory = (initialState) =>{
    return createStore(rootRedcuer, initialState, applyMiddleware(...middlewares));
}
export const findByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}
export const checkProps = (component, confirmingProps) =>{
    const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}