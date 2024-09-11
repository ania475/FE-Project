import "./hero.css";
import Menu from "./Menu";
import config from "../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginCard = () => {
	const navigate = useNavigate();
	const [newUsername, setNewUsername] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [resUsername, setResUsername] = useState("");
	const [resPassword, setResPassword] = useState("");
	let data: any;

	let response: any;

	const getUserData = async (e: any) => {
		try {
			data = await fetch(config.apiUrl);

			response = await data.json();
			response?.forEach((item: any, index: number) => {
				setResUsername(item.username);
				setResPassword(item.password);
				// Use resUsername and resPassword as needed
			});
		} catch (error) {
			console.error("Error fecthing user data:", error);
		}
		login(e, resUsername, resPassword); //calling the login function
	};

	const login = (e: any, username: string, password: string) => {
		if (newUsername === username && newPassword === password) {
			navigate("/dashboard");
		}
	};

	return (
		<>
			<Menu />
			<div className="hero mt-20 max-h-30">
				<video autoPlay muted loop className="video">
					<source src="/assets/lavender.mp4" width="400" height="500" type="video/mp4" />
				</video>
				<div>
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold z-20">Login now</h1>
						<p className="py-6">Login or create a new account to save a fact.</p>
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mr-6">
						<form
							className="card-body"
							onSubmit={(e) => {
								e.preventDefault();
								getUserData(e); // Wait for getUserData to finish
							}}
						>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Username</span>
								</label>
								<input
									id="username"
									name="username"
									type="username"
									placeholder="username"
									className="input input-bordered"
									required
									onChange={(e) => setNewUsername(e.target.value)}
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									id="password"
									name="password"
									type="password"
									placeholder="password"
									className="input input-bordered"
									required
									onChange={(e) => setNewPassword(e.target.value)}
								/>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">
										Forgot password?
									</a>
									<a href="#" className="label-text-alt link link-hover">
										Don't have an account?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginCard;
