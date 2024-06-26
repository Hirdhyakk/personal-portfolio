import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
	return (
		<Col
			sm={6}
			md={4}
		>
			<a
				href={githubUrl}
				className='text-light'
			>
				<div className='proj-imgbx'>
					<img
						src={imgUrl}
						alt='Project'
					/>
					<div className='proj-txtx'>
						<h4>{title}</h4>
						<span>{description}</span>
					</div>
				</div>
			</a>
		</Col>
	);
};
