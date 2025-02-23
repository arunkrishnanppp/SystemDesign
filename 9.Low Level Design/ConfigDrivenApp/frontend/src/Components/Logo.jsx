import React from 'react';
import PropTypes from 'prop-types';
export const Logo = (props) => {
  const { css, src } = props;
  return (
    <div style={css}>
      <img
        style={css}
        src={src}
      />
    </div>
  );
};
Logo.propTypes = {
  css: PropTypes.object.isRequired
};
