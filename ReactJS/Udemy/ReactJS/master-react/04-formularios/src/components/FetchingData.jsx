import React, { useState, useEffect } from "react";
// import { getData } from '../services';

const FetchingData = () => {

	const [data, setData] = useState(null);

	const FetchData = async () => {
		// try {
		// 	const response = await getData();
		// 	setData(response.data);
		// } catch (error) {
		// 	console.error(error);
		// }

		// getData()
		// 	.then(response => {
		// 		setData(response.data);
		// 	})
		// 	.catch(err => {
		// 		console.error(err);
		// 	})
	}

	useEffect(() => {
		FetchData();

		return () => {
			console.log('FetchingData component was unmounted');
		}
	}, []);

	console.debug('FetchingData render! ***')

	return (
		<div>
			<h3>Fetching data from dashboard API</h3>
			<ul style={{ textAlign: 'left', fontSize: '18px', color: 'blanchedalmond'}}>
				{
					data && data.map((item, index) => {
						return (
							<li key={item.id}>
								{index + 1} - {item.id} - {item.mediaTitle}<br />
								<a style={{ color: '#ac0505', textDecoration: 'none'}} href={item.url} target="blank">{item.url}</a>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default React.memo(FetchingData);