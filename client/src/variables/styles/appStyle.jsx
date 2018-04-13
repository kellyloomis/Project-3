// ##############################
// // // App styles
// #############################

import { transition, container } from "./../../variables/styles.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `100%`
    },
    overflow: "auto",
    position: "relative",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: 'touch'
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100% - 123px)"
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
