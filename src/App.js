import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Posts from './Posts';
import Comments from './Comments';
import List from './List';

function App() {
	return (
		<div className="App">
			<Users />

			<Posts />

			<Comments />

			<List />
		</div>
	);
}

export default App;
