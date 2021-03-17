import React from "react";
import { useRouteMatch , Link} from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';

import { Language } from "./Language";
import { SearchInput } from "./SearchInput";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    zIndex: 3,
    minHeight: "30vh",
    marginBottom: "4%",
  },
  headerBlock: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%"
  },
  logo : {
    color : "white",
    fontWeight: "bold",
  },
  blockLang : {
    position: "absolute",
    top: "24px",
    right : "24px",
  }
}));

interface HeaderProps {
    onLanguageChange: (lang: string) => void;
    onSearchTermChange: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const match = useRouteMatch('/country/:id');

    const classes = useStyles();

    return (
      <Container  className={classes.container} maxWidth="md">
        <div className={classes.blockLang}>
            <Language
                onChange={(lang) => props.onLanguageChange(lang)}
            />
        </div>
        <div className={classes.headerBlock}>
          <Link to="/">
            <h1 className={classes.logo}>Travel App</h1>
          </Link>
            { !match && <SearchInput onSearchTermChange={props.onSearchTermChange}/> }
        </div>
      </Container>
    );
};
