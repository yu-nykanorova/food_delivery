import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Address = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Address");
  }, [setTitle]);
  return (
	<div>Address</div>
  )
};

Address.propTypes = {
  setTitle: PropTypes.func.isRequired,
};
