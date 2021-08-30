import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";

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

	$animationSpeed: "20s",

	// Animation
	"@keyframes scroll": {
		"0%": {
			transform: "translateX(0)",
		},
		"100%": {
			transform: "translateX(calc(-250px * 7))",
		},
	},

	// Styling
	slider: {
		background: "white",
		boxShadow: "0 10px 20px -5px rgba(0, 0, 0, .125)",
		height: "300px",
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
		width: "calc(250px * 14)",
	},

	slide: {
		display: "flex",
		flexDirection: "column",
		height: "300px",
		width: "250px",
	},
}));

function Riverflow() {
	const classes = useStyles();
	return (
		<>
			<div className={classes.body}>
				<div className={classes.slider}>
					<div className={classes.slidetrack}>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
						<div className={classes.slide}>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
								height="100"
								width="250"
								alt=""
							/>
							<img
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
								height="100"
								width="250"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Riverflow;
