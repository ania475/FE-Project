import { Link } from "react-router-dom";
import "./hero.css";
import { HeroInterface } from "./Home";
import { useState } from "react";
import Menu from "./Menu";
import { BsClipboard2HeartFill } from "react-icons/bs";

const Hero = ({ title, description, button, onClickEvent }: HeroInterface) => {
	const [text, setText] = useState(<></>);
	const [dataDiv, setDataDiv] = useState(<></>);

	let data: any;
	let response: any;

	const getData = async () => {
		setText(<> Getting some data!</>);
		let data = await fetch("https://api.api-ninjas.com/v1/facts", {
			headers: {
				"X-Api-Key": "Y12izUy892U2XTxU50MrJA==XyDg5p0dttDEvcWf",
			},
		});

		response = await data.json();
		response?.map((item: any, index: number) => console.log(Object.values(item).toString()));
		console.log(Object.values(response));
		setDataDiv(
			<>
				{response?.map((item: any, index: number) => (
					<>
						<div className="mt-10 px-8 rounded-lg outline outline-1 bg-gradient-to-b from-gray-200 to-transparent font-semibold">
							<h1 key={index} className="py-6">{Object.values(item).toString()}</h1>
						</div>
						<div className="tooltip tooltip-right" data-tip="Save fact? Login now">
						<Link to="/login">
							<button className="btn mt-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
								Save
							</button>
						</Link>
						</div>
					</>
				))}
			</>
		);
	};

	return (
		<>
			<Menu />
			{/* menu ends */}
			<div className="hero bg-base-300 min-h-screen z-0">
				<div className="hero-content text-center flex-col lg:flex-row-reverse">
					<video autoPlay muted loop className="video">
						<source src="/assets/forest.mp4" width="400" height="500" type="video/mp4" />
					</video>
					<div className="bg-base-100 pt-12 pb-12 pr-20 pl-20 rounded-3xl shadow-[0px_10px_60px_35px_rgba(0,0,0,0.3)]">
						<>
							<h1 className="text-5xl font-bold">{title}</h1>
							<p className="py-6">{description}</p>
							<button
								id="button"
								className="btn btn-lg bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
								onClick={getData}
							>
								{button}
							</button>

							{dataDiv}
						</>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
