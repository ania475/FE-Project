import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { render } from "react-dom";
import Home from "./Components/Home";
import Data from "./Components/Data";
import UserDashboard from "./Components/UserDashboard";
import { useEffect } from "react";
import LoginCard from "./Components/LoginCard";
import config from './config';

function App() {
	useEffect(() => {
		console.log(config.apiUrl);
	}, []);
	return (
		<div className="main-page">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Home />
							</>
						}
					/>
					<Route
						path="/login"
						element={
							<>
								<LoginCard />
							</>
						}
					/>
					<Route
						path="/data"
						element={
							<>
								<Data />
							</>
						}
					/>
					<Route
						path="/dashboard"
						element={
							<>
								<UserDashboard />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

render(<App />, document.getElementById("root"));

export default App;
