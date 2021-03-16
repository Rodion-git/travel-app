import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

interface LanguageProps {
    onChange: (language: string) => void;
}

export const Language: React.FC<LanguageProps> = (props: LanguageProps) => {
    const handleChange = (
        event: React.ChangeEvent<{ name?: string; value: unknown }>
    ) => {
        const lang = (event.target.value as string).toLocaleLowerCase();
        props.onChange(lang);
    };

    return (
        <>
            <Select defaultValue="be" onChange={handleChange}>
                <MenuItem value="be">Be</MenuItem>
                <MenuItem value="ru">Ru</MenuItem>
                <MenuItem value="en">En</MenuItem>
            </Select>
        </>
    );
};
