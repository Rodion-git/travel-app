import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { CountryCard } from "../components/CountryCard";
import { ICountry, Lang } from "../entities/interfaces";
import { DBUtils } from "../services/DBUtils";
import LocaleContext from "../LocaleContext";

const useStyles = makeStyles((theme) => ({
    banner : {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "55%",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      borderRadius: "0 0 20px 20px",
      backgroundImage: "url('/public/images/banner-1-min.jpg')"
    },
    cards : {
        position:"relative",
        // height: "100%",
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "0 0 5px 0 rgb(0 0 0 / 38%)",
    },
    container : {
        height: "100%",
    }
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
        <Container className={classes.container} maxWidth="md">
          <div className={classes.banner}></div>
            <Grid container spacing={4} className={classes.cards}>
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
