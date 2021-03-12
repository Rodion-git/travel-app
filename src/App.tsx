import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DBUtils } from "./services/DBUtils";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

    console.log(DBUtils.getCountryListByLang("be"));

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
