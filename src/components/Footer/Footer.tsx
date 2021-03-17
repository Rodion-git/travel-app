import React from "react";

import {Link , Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';
import './footer.scss';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(6),
        flex: "0 0 auto",
    },
}));

export const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="md">
            <Typography variant="body2" color="textSecondary" align="center">
                <div className="footerBlock">
                <Link color="inherit" href="https://github.com/NetZorro/" >
                    <GitHubIcon />
                    </Link>
                <Link color="inherit" href="https://github.com/KarpusKonstantin/" >
                    <GitHubIcon />
                    </Link>
                <Link color="inherit" href="https://github.com/Rodion-git" >
                    <GitHubIcon />
                    </Link>
                </div>
                <div className="footerLogoBlock">
                <Link color="inherit" href="https://rs.school/js/" >
                    <img className="logo" src={`/public/images/rs_school_js.svg`} />
                </Link>
                </div>
                    2021
            </Typography>
            </Container>
        </footer>
    );
};
