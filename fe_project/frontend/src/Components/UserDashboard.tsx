import { useEffect, useState } from "react";
import { whitePot } from "../../assets/images";
import Menu from "./Menu";

const UserDashboard = () => {
	const [userDetails, setUserDetails] = useState({});

	// Fetch data --> 1.)
	useEffect(() => {
		try {
			// Fetch the user data related to the logged in User
			fetch(`http://127.0.0.1:8000/get-user/get-user/?format=json`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setUserDetails(data);
				});
		} catch (err) {
			console.log("Could not retrieve user data. Please try again.");
		}
	}, []);
	return (
		<>
			<Menu />
			{/* <p> {userDetails}</p> */}
			<div className="drawer lg:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex items-baseline">
					{/* Page content here */}
					<div className="ml-12 mt-20">
						<div className="hero-content flex-col lg:flex-row-reverse">
							<div>
								<h1 className="text-5xl font-bold">Your Account</h1>
								<p className="py-6">Account details</p>
								<div className="user-details mb-6">
									{Object.values(userDetails).map((item: any) => (
										<div>
											<div>
												Username: <b>{item.username ?? ""}</b>
											</div>
											<div>
												Password: <b>{item.password ?? ""}</b>
											</div>
										</div>
									))}
								</div>
								<button className="btn btn-primary">Edit details</button>
							</div>
						</div>
					</div>
					{/* Page content here */}
					<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
						Open drawer
					</label>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
					<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-3">
						{/* Sidebar content here */}
						<li>
							<a>Account</a>
						</li>
						<li>
							<a>Facts</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default UserDashboard;
