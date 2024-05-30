import { Col, Container, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
	const projects = [
		{
			title: "ABC",
			description: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			imgUrl: projImg1,
		},
		{
			title: "ABC",
			description: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			imgUrl: projImg2,
		},
		{
			title: "ABC",
			description: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			imgUrl: projImg3,
		},
		{
			title: "ABC",
			description: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			imgUrl: projImg1,
		},
		{
			title: "ABC",
			description: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			imgUrl: projImg2,
		},
		{
			title: "ABC",
			description: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			imgUrl: projImg3,
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
						<h2>Projects</h2>
						<p>
							I have a solid portfolio of web development
							projects, each a testament to my dedication and
							expertise in crafting functional and innovative
							digital solutions. Explore my work to see how I turn
							ideas into reality.
						</p>
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
										Tab One
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='second'>
										Tab Two
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='third'>
										Tab Three
									</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey='first'>
									<Row>
										{projects.map((project, index) => {
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
									Lorem Ipsum
								</Tab.Pane>
								<Tab.Pane eventKey='third'>
									Lorem Ipsum
								</Tab.Pane>
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
