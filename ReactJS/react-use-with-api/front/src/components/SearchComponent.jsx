import { useDebounce } from 'react-use';
import { useState } from 'react';
import { SpinnerComponent } from './SpinnerComponent';

const SearchComponent = () => {

	const [val, setVal] = useState('');
	const [debounceValue, setDebounceValue] = useState('');
	const [results, setResults] = useState([]);
	const [spinnerVisible, setSpinnerVisible] = useState(false);

	const [, cancel] = useDebounce(() => {
		if(!val) return;

		setSpinnerVisible(true);
		setDebounceValue(val);
		getSearchData();
	}, 2000, [val]);

	const getSearchData = () => {
		// fetch(`http://localhost:5000/api/search?text=${val}`)
		fetch(`https://react-search-api.leovidal.es/api/search?text=${val}`)
			.then(results => results.json())
			.then(data => {
				setResults(data);
				setSpinnerVisible(false);
			})
	}

	return (
		<div>
			<h4>SearchComponent</h4>
			<input type="text" onChange={e => setVal(e.target.value)} />
			<div className="search">
				searching for <span>{debounceValue}</span>
			</div>
			<hr/>
			<h5>Results</h5>
			<div className='results'>
				<ul>
					{results.map(item => {
						return <li key={item.id}>{item.mediaTitle}</li>
					})}
				</ul>

			</div>
			<SpinnerComponent visible={spinnerVisible} />
		</div>
	)
}

export default SearchComponent;

/*
	{
			"id": 2318,
			"mediaType": 1,
			"resources_id": 7,
			"url": "https://www.npr.org/sections/back-to-school-live-updates/2021/09/03/1033691323/your-school-can-keep-delta-spread-to-a-minimum-by-using-layers-of-protection",
			"mediaImage_url": "https://media.npr.org/assets/img/2021/09/02/classroom1_wide-2307fa12dc2aa42480101665e68addd492cd1c4c-s300-c15.jpg",
			"mediaTitle": "6 Strategies To Make Classrooms Safer As The Delta Variant Spreads ",
			"active": {
					"type": "Buffer",
					"data": [
							1
					]
			},
			"modify_date": "2021-09-26T04:08:05.000Z"
	},
*/