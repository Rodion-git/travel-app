import React, { useEffect, useState } from "react";

import axios from "axios";

import styles from "./weather.scss";

type WatherProps = {
    language: string;
    weatherID: number;
};

const apiKey = "ca08ff193bedeab3f306199910fb513c";

const upperCase = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
};
const calcCelsia = (temp: number | string) => {
    return (Number(temp) - 273).toFixed(1);
};
const lang = (lang: string) => (lang === "ru" ? 1 : 0);

const errorText: string[] = [
    "No weather information",
    "Нет информации о погоде",
];

const Wather: React.FC<WatherProps> = ({ language, weatherID }) => {
    const [error, setError] = useState<boolean>(false);
    const [weather, setWeather] = useState<{
        temp: number | string;
        text: [string, string];
        icon: string;
    }>({
        temp: 0,
        text: ["", ""],
        icon: "01d",
    });
    useEffect(() => {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?id=${weatherID}&APPID=${apiKey}&lang=ru`
            )
            .then(({ data }) => {
                setWeather({
                    temp: calcCelsia(data.main.temp),
                    text: [
                        data.weather[0].main,
                        upperCase(data.weather[0].description),
                    ],
                    icon: data.weather[0].icon,
                });
            })
            .catch(() => setError(true));
    }, []);

    const { temp, text, icon } = weather;

    const choice = lang(language!);

    return (
        <div>
            {error ? (
                <div>{errorText[choice]}</div>
            ) : (
                <>
                    <div className={styles.weatherInfo}>
                        <div>
                            <h2>{temp + "°"}</h2>
                            <h3>{text[choice]}</h3>
                        </div>
                        <img
                            className={styles.weatherImg}
                            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        ></img>
                    </div>
                </>
            )}
        </div>
    );
};

export default Wather;
