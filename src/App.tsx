import React from "react";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import CountryPage from "./pages/СountryPage";

import styles from "./app.scss";
import { CountryCard } from "./components/CountryCard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <Router>
            <React.Fragment>
                <CssBaseline />
                <Header />
                <main>
                    <Switch>
                        <Route component={CountryPage} path="/country/:id" />
                        <Route component={MainPage} exact path="/" />
                    </Switch>
                </main>
                <Footer />
            </React.Fragment>
        </Router>
    );
};

export default App;
