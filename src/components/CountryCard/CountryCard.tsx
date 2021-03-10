import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",

        "&:hover": {
            border: "3px solid blue",
            cursor: "pointer",
        },
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

export const CountryCard: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid item key="1" xs={12} sm={6} md={4}>
            <Link href="#">
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Название страны"
                    />
                    <CardContent
                        className={classes.cardContent}
                        style={{
                            backgroundImage: `url(https://source.unsplash.com/random)`,
                        }}
                    >
                        <Typography gutterBottom variant="h5" component="h2">
                            Название страны
                        </Typography>
                        <Typography>Сyтолица: Название столицы</Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
};
