import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import cards from "./consts/data";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import styles from "./app.scss";
import { CountryCard } from "./components/CountryCard";
import MainPage from "./pages/MainPage";
import CountryPage from "./pages/СountryPage";

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
                        <Route
                            component={CountryPage}
                            exact
                            path="/country/:id"
                        />
                        <Route component={MainPage} exact path="/" />
                    </Switch>
                </main>
                <Footer />
            </React.Fragment>
        </Router>
    );
};

export default App;
