import Hero from "./hero";
import LoginCard from "./LoginCard";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {monkey} from '../../assets/images';

export interface HeroInterface {
	title: string;
	description: string;
	button: string;
	onClickEvent: boolean;
}

const HeroDetails: HeroInterface = {
	title: "Welcome to random facts generator",
	description: "Bored or simply curious to find out new information? You are in the right place.",
	button: "Get started",
	onClickEvent: false,
};

const Home = () => {
	return (
		<>
			<div
				className="hero my-hero min-h-screen"
				style={{
					backgroundImage: 'url(https://images.pexels.com/photos/321552/pexels-photo-321552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-neutral-content text-center">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">{HeroDetails.title}</h1>
						<p className="mb-5">{HeroDetails.description}</p>
						<Link to="./data">
							<button className="btn btn-lg hover:text-white hover:bg-purple-600 hover:border-gray-300">{HeroDetails.button}</button>{" "}
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
