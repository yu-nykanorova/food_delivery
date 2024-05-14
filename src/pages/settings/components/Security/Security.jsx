import React, { useState } from 'react'

export const Security = ({setTitle}) => {
  React.useEffect(() => {
    setTitle("Security");
  }, [setTitle]);
  return (
	<div>Security</div>
  )
}
