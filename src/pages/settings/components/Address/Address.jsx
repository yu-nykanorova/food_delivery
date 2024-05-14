import React, { useState } from 'react'

export const Address = ({ setTitle }) => {
  React.useEffect(() => {
    setTitle("Address");
  }, [setTitle]);
  return (
	<div>Address</div>
  )
}
