import { Blocks } from 'react-loader-spinner'

export const SpinnerComponent = ({ visible }) => {
	return (
		<Blocks
			visible={visible}
			height="80"
			width="80"
			wrapperClass="blocks-wrapper"
		/>
	)
}