import './App.css';
import Home from './Pages/Home';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</div>
	);
}

export default App;
