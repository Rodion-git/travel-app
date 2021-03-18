import React, { useContext } from "react";

import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import LocaleContext from "../../../LocaleContext";
import {Lang} from "../../../entities/interfaces";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles = makeStyles((theme: any) => ({
    search: {
        position: "relative",
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        borderBottom: "1px solid rgba(0,0,0,0.5)",
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(0,0,0,0.8)",
    },
    inputRoot: {
        color: "inherit",
        width: "100%"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
    },
}));

interface SearchInputProps {
    onSearchTermChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = (props: SearchInputProps) => {
    const lang = useContext<Lang>(LocaleContext)
    const classes = useStyles();
    
    const handleChange = (
        event: React.ChangeEvent<{ name?: string; value: unknown }>
    ) => {
        const str = event.target.value as string;
        props.onSearchTermChange(str);
    };

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder={lang === "ru"? "Поиск…" : lang === "en" ? "Search…" : "Пошук…"}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                type="search"
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
            />
        </div>
    );
};
