import { Col, Container, Row, Tab } from "react-bootstrap";
import WEBprojImg1 from "../assets/img/Books.png";
import WEBprojImg2 from "../assets/img/Portfolio.png";
import WEBprojImg3 from "../assets/img/BetterBuys.png";
import WEBprojImg4 from "../assets/img/BloodDonation.png";
import WEBprojImg5 from "../assets/img/PortfolioOld.png";
import SOFTWAREprojImg1 from "../assets/img/GesturePresentation.png";
import SOFTWAREprojImg2 from "../assets/img/BookShop.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
	const projectsWEB = [
		{
			title: "Books",
			description: "Book Store for selling and purchasing of Books",
			imgUrl: WEBprojImg1,
		},
		{
			title: "Portfolio",
			description: "Portfolio Website to showcase Skills and Projects",
			imgUrl: WEBprojImg2,
		},
		{
			title: "Better Buys",
			description: "Laptop Store for purchasing Laptops",
			imgUrl: WEBprojImg3,
		},
		{
			title: "Blood Donation",
			description:
				"Collect Information of Blood Donars and display Donars Count",
			imgUrl: WEBprojImg4,
		},
		{
			title: "CV Website",
			description: "CV Website to showcase Skills and Projects",
			imgUrl: WEBprojImg5,
		},
		// {
		// 	title: "ABC",
		// 	description: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		// 	imgUrl: projImg3,
		// },
	];

	const projectsSOFTWARE = [
		{
			title: "HandWave",
			description: "Gesture Controlled Presentation",
			imgUrl: SOFTWAREprojImg1,
		},
		{
			title: "Book Shop",
			description: "Store Record of Books available in Store",
			imgUrl: SOFTWAREprojImg2,
		},
	];

	return (
		<section
			className='project'
			id='projects'
		>
			<Container>
				<Row>
					<Col>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__slideInUp"
											: ""
									}
								>
									<h2>Projects</h2>
									<p>
										I have a solid portfolio of web
										development projects, each a testament
										to my dedication and expertise in
										crafting functional and innovative
										digital solutions. Explore my work to
										see how I turn ideas into reality.
									</p>
								</div>
							)}
						</TrackVisibility>
						<Tab.Container
							id='projects-tabs'
							defaultActiveKey='first'
						>
							<Nav
								variant='pills'
								className='nav-pills mb-5 justify-content-center align-items-center'
								id='pills-tab'
							>
								<Nav.Item>
									<Nav.Link eventKey='first'>
										WEB DEVELOPMENT
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='second'>
										SOFTWARE DEVELOPMENT
									</Nav.Link>
								</Nav.Item>
								{/* <Nav.Item>
									<Nav.Link eventKey='third'>
										Tab Three
									</Nav.Link>
								</Nav.Item> */}
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey='first'>
									<Row>
										{projectsWEB.map((project, index) => {
											return (
												<ProjectCard
													key={index}
													{...project}
												/>
											);
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='second'>
									<Row>
										{projectsSOFTWARE.map(
											(project, index) => {
												return (
													<ProjectCard
														key={index}
														{...project}
													/>
												);
											}
										)}
									</Row>
								</Tab.Pane>
								{/* <Tab.Pane eventKey='third'>
									Lorem Ipsum
								</Tab.Pane> */}
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img
				className='background-image-right'
				src={colorSharp2}
				alt='background'
			/>
		</section>
	);
};
