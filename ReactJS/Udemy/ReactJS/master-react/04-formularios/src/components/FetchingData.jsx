import React, { useState, useEffect } from "react";
import { getAllResourcesMedia } from '../services';

const FetchingData = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState('');

	const FetchData = async () => {
		try {
			const response = await getAllResourcesMedia();
			setData(response.data);
		} catch (err) {
			setError(err.response.data.errorTitle + err.response.data.errorMsg);
		}
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
				{error &&
					<div dangerouslySetInnerHTML={{ __html: error}}></div>}
			</ul>
		</div>
	)
}

export default React.memo(FetchingData);