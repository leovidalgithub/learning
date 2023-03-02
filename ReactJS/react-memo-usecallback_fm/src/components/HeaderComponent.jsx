import React, { memo } from "react";

const HeaderComponent = ({ value }) => {

	console.debug('Header render!');

	return (
		<h1>Contandores {value}</h1>
	)
}

export default memo(HeaderComponent);
/* even using 'memo' hoc, if any props or context value changes, the component will be rendered again */