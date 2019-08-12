/* eslint-disable import/prefer-default-export */
// @flow
const isEmpty = (input: *) => input === null
  || input === undefined
  || Object.keys(input).length === 0;

export {
  isEmpty,
};
