import React from 'react';
import PropTypes from 'prop-types';

function withLogging(WrapperComponent) {
  return (props) => {
    console.log('Props', props);
    return <WrapperComponent {...props} />;
  };
}

export default withLogging;
