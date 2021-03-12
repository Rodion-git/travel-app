import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { CountryCard } from "../components/CountryCard";
import { ICountry } from "../entities/interfaces";
import { DBUtils } from "../services/DBUtils";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const MainPage: React.FC = () => {
    const classes = useStyles();
    const [data, setData] = useState<ICountry[]>([]);

    useEffect(() => {
        const arr = DBUtils.getCountryListByLang("be");
        setData(arr);
    }, []);

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {data.map((country) => (
                    <CountryCard key={country.id} countryObj={country} />
                ))}
            </Grid>
        </Container>
    );
};

export default MainPage;
