import React, { useContext } from "react";

import { makeStyles, Container } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { ClockWidget } from "../components/ClockWidget/ClockWidget";
import { CurrencyWidget } from "../components/CurrencyWidget/CurrencyWidget";
import Gallery from "../components/Gallery";
import Map from "../components/Map";
import Video from "../components/Video";
import Weather from "../components/Weather";
import { Lang } from "../entities/interfaces";
import LocaleContext from "../LocaleContext";
import { DBUtils } from "../services/DBUtils";

const useStyles = makeStyles((theme) => ({
    banner: {
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "55%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        borderRadius: "0 0 20px 20px",
    },
    container: {
        position: "relative",
        padding: "16px",
        backgroundColor: "white",
        boxShadow: "0 0 5px 0 rgb(0 0 0 / 38%)",
        borderRadius: "20px",
    },
    countryName: {
        textAlign: "center",
    },
    capitalName: {
        textAlign: "center",
    },
    vidzet: {
        position: "absolute",
        top: "-13%",
        right: "0",
        color: "white",
        fontSize: "12px",
        maxWidth: "320px",
        backgroundColor: "rgba(14,81,204,0.6)",
        border: "1px solid rgba(0,0,0,0.1)",
        padding: "10px",
        borderRadius: "20px",
        [theme.breakpoints.down(900)]: {
            position: "static",
            maxWidth: "100%",
        },
    },
    text: {
        textAlign: "justify",
        marginBottom: "16px",
    },
    video: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "16px",
    },
    countryImg: {
        width: "100%",
        position: "relative",
        paddingBottom: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat ",
        borderRadius: "20px",
        marginBottom: "16px",
    },
}));

const CountryPage: React.FC = () => {
    const language = useContext<Lang>(LocaleContext);
    const { id } = useParams<{ id: string }>();
    const data = DBUtils.getCountryObjectByLang(id, language);
    const {
        image,
        iso3166Alpha3,
        weatherID,
        videoId,
        description,
        country,
        capital,
        attractionList,
    } = data;
    const classes = useStyles();
    return (
        <>
            <div
                className={`${classes.banner}`}
                style={{ backgroundImage: `url('${image}')` }}
            ></div>
            <Container className={classes.container} maxWidth="md">
                <div className={classes.vidzet}>
                    <CurrencyWidget countryid={id} />
                    <ClockWidget countryid={id} />
                    <Weather weatherID={weatherID} language={language} />
                </div>
                <h1 className={classes.countryName}>{country}</h1>
                <h2 className={classes.capitalName}>{capital}</h2>
                <div
                    className={classes.countryImg}
                    style={{ backgroundImage: `url('${image}')` }}
                ></div>
                <div className={classes.text}>{description}</div>
                <Gallery attractionList={attractionList} />
                <div className={classes.video}>
                    <Video video_id={videoId} />
                </div>
                <Map country={iso3166Alpha3} language={language} />
            </Container>
        </>
    );
};

export default CountryPage;
