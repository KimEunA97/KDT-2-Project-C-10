import React from 'react';
import ChildComponent from './child.js';

const ParentComponent = () => {
  const name = 'John';

  return (
    <ChildComponent name={name} />
  );
};

export default ParentComponent;