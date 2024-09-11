import Hero from "./hero";
import { HeroInterface } from "./Home";

const HeroDetails: HeroInterface = {
	title: "Generate a fact!",
	description: "Click below to get your first fact",
	button: "Click me",
	onClickEvent: true,
};

const Data = () => {
	return (
		<>
			<Hero title={HeroDetails.title} description={HeroDetails.description} button={HeroDetails.button} onClickEvent={HeroDetails.onClickEvent}/>
		</>
	);
};

export default Data;
