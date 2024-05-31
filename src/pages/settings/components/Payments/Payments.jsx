import { useEffect } from 'react';
import PropTypes from 'prop-types';


export const Payments = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Payments");
  }, [setTitle]);
  return (
	<div>Payments</div>
  )
};

Payments.propTypes = {
  setTitle: PropTypes.func.isRequired,
};
