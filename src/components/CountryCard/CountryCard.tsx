import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { ICountry } from "../../entities/interfaces";

const useStyles = makeStyles((theme) => ({
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
    },
    cardMedia: {
        paddingTop: "56.25%", // 16:9
    },
    cardContent: {
        color: "white",
        flexGrow: 1,
        backdropFilter: "blur(15px)",
    },
}));

type CountryCardProps = { countryObj: ICountry };

export const CountryCard: React.FC<CountryCardProps> = ({ countryObj }) => {
    const classes = useStyles();

    return (
        <Grid item key={countryObj.id} xs={12} sm={6} md={4}>
            <Link to={`/country/${countryObj.id}`}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={countryObj.image}
                        title={countryObj.country}
                    />
                    <CardContent
                        className={classes.cardContent}
                        style={{
                            backgroundImage: `url("${countryObj.image}")`,
                        }}
                    >
                        <Typography gutterBottom variant="h5" component="h2">
                            {countryObj.country}
                        </Typography>
                        <Typography>Столица: {countryObj.capital}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
};
