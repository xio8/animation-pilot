import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";

function Riverflow() {
	const [iconNum] = useState(7);
	const useStyles = makeStyles((theme) => ({
		body: {
			alignItems: "center",
			background: "#E3E3E3",
			display: "flex",
			height: "100vh",
			justifyContent: "center",
		},

		// @mixin white-gradient {
		//   background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
		// },

		$animationSpeed: "10s",

		// Animation
		"@keyframes scroll": {
			"0%": {
				transform: `translateX(calc(-250px * ${iconNum}))`,
			},
			"100%": {
				transform: "translateX(0)",
			},
		},

		// Styling
		slider: {
			background: "white",
			boxShadow: "0 10px 20px -5px rgba(0, 0, 0, .125)",
			height: "345px",
			margin: "auto",
			overflow: "hidden",
			position: "relative",
			width: "100%",

			"&::before, &::after": {
				// @include white-gradient;
				content: "",
				height: "100px",
				position: "absolute",
				width: "200px",
				zIndex: 2,
			},

			"&::after": {
				right: 0,
				top: 0,
				transform: "rotateZ(180deg)",
			},

			"&::before": {
				left: 0,
				top: 0,
			},
		},
		slidetrack: {
			animation: "$scroll 20s linear infinite",
			display: "flex",
			width: `calc(250px * ${iconNum * 2})`,
			position: "relative",
			top: "62px",
		},
		slidetrack2: {
			animation: "$scroll 20s linear infinite",
			display: "flex",
			width: `calc(250px * ${iconNum * 2})`,
			position: "relative",
			left: "126px",
			top: "42px",
		},

		slide: {
			display: "flex",
			flexDirection: "column",
			width: "250px",
		},
		diamond1: {
			width: "150px",
			height: "150px",
			backgroundColor: "blue",
			borderRadius: "1em",
			transform: "rotate(-45deg)",
			transformOrigin: "0 100%",
		},
		diamond2: {
			width: "150px",
			height: "150px",
			backgroundColor: "red",
			borderRadius: "1em",
			transform: "rotate(-45deg)",
			transformOrigin: "0 100%",
		},
	}));
	const classes = useStyles();
	return (
		<>
			<div className={classes.body}>
				<div className={classes.slider}>
					<div className={classes.slidetrack}>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond1} />
						</div>
					</div>
					<div className={classes.slidetrack2}>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
						<div className={classes.slide}>
							<div className={classes.diamond2} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Riverflow;
