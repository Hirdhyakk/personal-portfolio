import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row className=''>
					<Col className='mt-4 text-end'>
						<div className='social-icon'>
							<a href='#'>
								<img
									src={navIcon1}
									alt=''
								/>
							</a>
							<a href='#'>
								<img
									src={navIcon2}
									alt=''
								/>
							</a>
							<a href='#'>
								<img
									src={navIcon3}
									alt=''
								/>
							</a>
						</div>
						<p>Copyright 2024. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
