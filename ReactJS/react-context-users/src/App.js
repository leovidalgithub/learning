import './App.css';
import Profile from './components/Profile';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThisComponentIsOutOfTheContext } from './components/LastComponent';

// importing Context
import UserState from './context/User/UserState';

function App() {
	return (
		<div>
			<UserState>
				<div className='container p-4 '>
					<div className='row'>
						<div className='col-md-7'>
							<UserList />
						</div>
						<div className='col-md-5'>
							<Profile />
						</div>
					</div>
				</div>
			</UserState>
			<ThisComponentIsOutOfTheContext /> {/* <--- notice that this component is outside from 'UserState' context*/}
		</div>
	)
}

export default App;
