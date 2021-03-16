import React, {useContext, useEffect, useState} from "react";
import {Lang} from "../../entities/interfaces";
import LocaleContext from "../../LocaleContext";
import {vocabulary} from "../../consts/vocabulary";
import {DBUtils} from "../../services/DBUtils";

type ClockWidgetProps = { countryid: string };


export const ClockWidget: React.FC<ClockWidgetProps> = ({countryid}) => {
    const language = useContext<Lang>(LocaleContext)
    const [date, setDate] = useState<string>('');
    const [offSetSec, setOffSetSec] = useState<number>(0);

    //Replaces componentDidMount and componentWillUnmount
    useEffect(() => {
        const getOffsetSec = async () => {
            const countryObj = DBUtils.getCountryObjectByLang(countryid, language)

            setOffSetSec(countryObj.offsetSec);
        };

        getOffsetSec();

        let timerID = setInterval( () => clock(), 1000 );

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function clock() {
        const date = new Date();

        date.setSeconds(date.getSeconds() + date.getTimezoneOffset() * 60 + offSetSec);

        const monthNum = date.getMonth();
        const dayNum = date.getDay();
        const day = date.getDate();

        const dayName = vocabulary.dayNameSmallArray[language][dayNum];
        const monthName = vocabulary.monthName[language][monthNum];

        const hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
        const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
        const seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

        setDate(dayName + ' ' + day + ' ' + monthName + ' ' + hours + ':' + minutes + ':' + seconds);
    }


    return (
        <div className="clock-wrapper">
            {date}
        </div>
    );
};
