import '../App.css';
import Profile from './children/Profile';
import UserList from './children/UserList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThisComponentIsOutOfTheContext } from './children/LastComponent';

// importing Context
import UserContextProvider from '../context/User/UserContextProvider';

function ParentComponent() {
	return (
		<div>
			<UserContextProvider>
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
			</UserContextProvider>
			<ThisComponentIsOutOfTheContext /> {/* <--- notice that this component is outside from 'UserState' context*/}
		</div>
	)
}

export default ParentComponent;
