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
        position: "relative",
        height: "100%",
        borderRadius: "20px",
        '&:hover' : {
            boxShadow: "0 0 5px 3px rgb(0 0 0 / 38%)",
            transform: "translateY(-1%)"
        } 
    },
    cardMedia: {
        paddingTop: "100%",
        paddingBottom: "20%",
    },
    cardContent: {
        fontFamily : "Roboto",
        position: "absolute",
        left: "0",
        bottom: "0",
        right: "0",
        color: "white",
        flexGrow: 1,
        backdropFilter: "blur(2px)",
    },
}));

type CountryCardProps = { countryObj: ICountry };

export const CountryCard: React.FC<CountryCardProps> = ({ countryObj }) => {
    const classes = useStyles();

    return (
        <Grid item key={countryObj.id} xs={12} sm={6} md={4} >
            <Link to={`/country/${countryObj.id}`}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={countryObj.image}
                        title={countryObj.country}
                    />
                    <CardContent
                        className={classes.cardContent}
                    >
                        <Typography gutterBottom variant="h6" component="h3">
                            {countryObj.country}
                        </Typography>
                        <Typography>{countryObj.capital}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
};
