import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Navigation from "../Navigation";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  jumbotron: {
    background: "linear-gradient(45deg, #BB86FC 10%, #29025a 90%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(6),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#BB86FC",
  },

  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },

  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  headline: {
    color: "white",
    fontSize: 100,
    fontWeight: 300,
    letterSpacing: "4px",
    padding: theme.spacing(4, 0, 1),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  fixedHeight: {
    height: 500,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  // button: {
  //   marginTop: theme.spacing(3),
  //   marginLeft: theme.spacing(1),
  // },
  button: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#BB86FC",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#BB90FF",
    },
    // maxWidth: "325px",
    height: "75px",
    fontSize: "18px",
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dates: {
    display: "flex",
    justifyContent: "center",
  },
  // root: {
  //     flexGrow: 1,
  // },
  budget: {
    marginTop: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
  },
}));
const NoMatch = () => {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
          <div className={classes.root}>
            <CssBaseline />

            <main className={classes.content}>
              {/* <div className={classes.appBarSpacer} /> */}
              <div className={classes.jumbotron}>
                <Container maxWidth="sm">
                  <Typography
                    className={classes.dates}
                    variant="h2"
                    color="inherit"
                    noWrap
                  >
                    {"404 Page Not Found "}
                  </Typography>
                  <Typography
                    className={classes.dates}
                    variant="h2"
                    color="inherit"
                    noWrap
                  >
                    {"🙄"}
                  </Typography>
                 
                </Container>
              </div>
              <Container maxWidth="lg" className={classes.container}>
                <div className={classes.center}></div>

                <Box pt={4}>
                  <Navigation />
                  <Footer />
                </Box>
              </Container>
            </main>
          </div>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default NoMatch;
