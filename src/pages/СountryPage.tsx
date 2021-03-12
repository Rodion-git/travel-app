import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import {
    useParams,
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const CountryPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return <h1>Country Page ID = {id} </h1>;
};

export default CountryPage;
