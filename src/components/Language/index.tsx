import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import LocaleContext from "../../LocaleContext";

interface LanguageProps {
    onChange: (language: string) => void;
}

export const Language: React.FC<LanguageProps> = (props: LanguageProps) => {
    const handleChange = (
        event: React.ChangeEvent<{ name?: string; value: unknown }>
    ) => {
        const lang = event.target.value as string;

        props.onChange(lang);
    };

    return (
        <LocaleContext.Consumer>
            {(lng) => {
                const value: string = lng ? lng.toString() : "be";
                return (
                    <>
                        <Select value={value} onChange={handleChange}>
                            <MenuItem value="be">Be</MenuItem>
                            <MenuItem value="ru">Ru</MenuItem>
                            <MenuItem value="en">En</MenuItem>
                        </Select>
                    </>
                );
            }}
        </LocaleContext.Consumer>
    );
};
