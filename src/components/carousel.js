import React from "react"
import { navigate } from "gatsby"
import { Carousel } from "react-bootstrap" 
import slide1 from "../articles/HistoricMovement/images/1.jpg"
import slide2 from "../articles/HistoricMovement/images/2.jpg"
import slide4 from "../articles/HistoricMovement/images/3.jpg"

import slide3 from "../news/OnlineConvention/images/1.jpg"

export default () =>
	<Carousel>
		<Carousel.Item>
			<img
				className="d-block w-100"
				src={slide1}
				alt="First slide"
				onClick={() => navigate('/historic-movement')}
				style={{cursor: "pointer"}}
			/>
			<Carousel.Caption>
				<div className="d-none d-sm-block" style={{
						backgroundColor: "rgb(32, 35, 42)",
						padding: "8px",
						opacity: ".8",
						color: "white",
						cursor: "pointer"				
					}} onClick={() => navigate('/historic-movement')}>
					<h3>Historic Peasants{"'"} Movement - Fountain of Endless Inspiration</h3>
				</div>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
				className="d-block w-100"
				src={slide2}
				alt="First slide"
				onClick={() => navigate('/historic-movement')}
				style={{cursor: "pointer"}}
			/>
			<Carousel.Caption>
				<div className="d-none d-sm-block" style={{
						backgroundColor: "rgb(32, 35, 42)",
						padding: "8px",
						opacity: ".8",
						color: "white",
						cursor: "pointer"				
					}} onClick={() => navigate('/historic-movement')}>
					<h3>Historic Peasants{"'"} Movement - Fountain of Endless Inspiration</h3>					
				</div>				
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
				className="d-block w-100"
				src={slide4}
				alt="First slide"
				onClick={() => navigate('/historic-movement')}
				style={{cursor: "pointer"}}
			/>
			<Carousel.Caption>
				<div className="d-none d-sm-block" style={{
						backgroundColor: "rgb(32, 35, 42)",
						padding: "8px",
						opacity: ".8",
						color: "white",
						cursor: "pointer"				
					}} onClick={() => navigate('/historic-movement')}> 
					<h3>Historic Peasants{"'"} Movement - Fountain of Endless Inspiration</h3>					
				</div>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
				className="d-block w-100"
				src={slide3}
				alt="First slide"
				onClick={() => navigate('/online-convention')}
				style={{cursor: "pointer"}}
			/>
			<Carousel.Caption>
				<div className="d-none d-sm-block" style={{
						backgroundColor: "rgb(32, 35, 42)",
						padding: "8px",
						opacity: ".8",
						color: "white",
						cursor: "pointer"				
					}} onClick={() => navigate('/online-convention')}> 
				<h3>National Convention on “Ongoing peasant movement”</h3>
				</div>				
			</Carousel.Caption>
		</Carousel.Item>           
	</Carousel>