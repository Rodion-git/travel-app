import React, {useContext, useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { CountryCard } from "../components/CountryCard";
import {ICountry, Lang} from "../entities/interfaces";
import { DBUtils } from "../services/DBUtils";
import LocaleContext from "../LocaleContext";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const MainPage: React.FC = () => {
    const classes = useStyles();
    const language = useContext<Lang>(LocaleContext)
    const [countryList, setCountryList] = useState<ICountry[]>([]);

    useEffect(() => {
        const arr = DBUtils.getCountryListByLang(language);
        setCountryList(arr);
    }, []);

    useEffect(() => {
        const arr = DBUtils.getCountryListByLang(language);
        setCountryList(arr);

    },[language]);

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {countryList.map((country) => (
                    <CountryCard key={country.id} countryObj={country} />
                ))}
            </Grid>
        </Container>
    );
};

export default MainPage;
