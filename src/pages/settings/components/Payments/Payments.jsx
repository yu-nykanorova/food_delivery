import React, { useState } from 'react'

export const Payments = ({ setTitle }) => {
  React.useEffect(() => {
    setTitle("Payments");
  }, [setTitle]);
  return (
	<div>Payments</div>
  )
}
