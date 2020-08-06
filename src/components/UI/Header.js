import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import QuoteDisplay from "./Quotes";

import logo from "./logo.png";

let quotes = [
	"It always seems impossible until it’s done. —Nelson Mandela",
	"Amateurs sit and wait for inspiration, the rest of us just get up and go to work. —Stephen King",
	"If you spend too much time thinking about a thing, you will never get it done. - Bruce Lee",
	"You may delay, but time will not - Ben Franklin",
	"Procrastination is opportunitys assasin - Victor Kiam",
];



function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});
	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}
const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "20em",
	},
	logo: {
		height: "17em",
    },
    quote: {
        marginLeft: "20px",
    }
}));

function Header(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<img alt="company logo" className={classes.logo} src={logo} />
						<Typography variant="h3" className={classes.quote}>
							"Amateurs sit and wait for inspiration, the rest of us just get up
							and go to work." —Stephen King
						</Typography>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}

export default Header;
