import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { CountryCard } from "../components/CountryCard";
import { ICountry, Lang } from "../entities/interfaces";
import { DBUtils } from "../services/DBUtils";
import LocaleContext from "../LocaleContext";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

interface MainPageProps {
    searchCountryTerm: string;
}

const MainPage: React.FC<MainPageProps> = (props: MainPageProps) => {
    const classes = useStyles();
    const language = useContext<Lang>(LocaleContext);
    const [countryList, setCountryList] = useState<ICountry[]>([]);
    const [resultCountryList, setResultCountryList] = useState<ICountry[]>([]);

    useEffect(() => {
        const arr = DBUtils.getCountryListByLang(language);
        setCountryList(arr);
        setResultCountryList(arr);
    }, [language]);

    useEffect(() => {
        const results = countryList.filter(
            (country) =>
                country.country
                    .toLowerCase()
                    .includes(props.searchCountryTerm.toLowerCase()) ||
                country.capital
                    .toLowerCase()
                    .includes(props.searchCountryTerm.toLowerCase())
        );

        setResultCountryList(results);
    }, [props.searchCountryTerm, countryList]);

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {resultCountryList.length > 0 ? (
                    resultCountryList.map((country) => (
                        <CountryCard key={country.id} countryObj={country} />
                    ))
                ) : (
                    <p>Нет данных</p>
                )}
            </Grid>
        </Container>
    );
};

export default MainPage;
