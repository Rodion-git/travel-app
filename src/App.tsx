import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import styles from "./app.scss";
import { CountryCard } from "./components/CountryCard";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const cards = [
    {
        id: 1,
        country: {
            ru: "Республика Беларусь",
            en: "Republic of Belarus",
            be: "Рэспубліка Беларусь",
        },
        capital: {
            ru: "Минск",
            en: "Minsk",
            be: "Мінск",
        },
    },
    {
        id: 2,
        country: {
            ru: "Республика Беларусь",
            en: "Republic of Belarus",
            be: "Рэспубліка Беларусь",
        },
        capital: {
            ru: "Минск",
            en: "Minsk",
            be: "Мінск",
        },
    },
    {
        id: 4,
        country: {
            ru: "Республика Беларусь",
            en: "Republic of Belarus",
            be: "Рэспубліка Беларусь",
        },
        capital: {
            ru: "Минск",
            en: "Minsk",
            be: "Мінск",
        },
    },
    {
        id: 5,
        country: {
            ru: "Республика Беларусь",
            en: "Republic of Belarus",
            be: "Рэспубліка Беларусь",
        },
        capital: {
            ru: "Минск",
            en: "Minsk",
            be: "Мінск",
        },
    },
    {
        id: 6,
        country: {
            ru: "Республика Беларусь",
            en: "Republic of Belarus",
            be: "Рэспубліка Беларусь",
        },
        capital: {
            ru: "Минск",
            en: "Minsk",
            be: "Мінск",
        },
    },
    {
        id: 7,
        country: {
            ru: "Республика Беларусь",
            en: "Republic of Belarus",
            be: "Рэспубліка Беларусь",
        },
        capital: {
            ru: "Минск",
            en: "Minsk",
            be: "Мінск",
        },
    },
    {
        id: 8,
        country: {
            ru: "Республика Беларусь",
            en: "Republic of Belarus",
            be: "Рэспубліка Беларусь",
        },
        capital: {
            ru: "Минск",
            en: "Minsk",
            be: "Мінск",
        },
    },
];

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <CountryCard />
                        ))}
                    </Grid>
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default App;
