import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Security = ({setTitle}) => {
  useEffect(() => {
    setTitle("Security");
  }, [setTitle]);
  return (
	<div>Security</div>
  )
};

Security.propTypes = {
  setTitle: PropTypes.func.isRequired,
};
