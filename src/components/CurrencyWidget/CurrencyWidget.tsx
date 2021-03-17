import React, {useContext, useEffect, useState} from "react";
import {ICurrency, Lang} from "../../entities/interfaces";
import {DBUtils} from "../../services/DBUtils";
import LocaleContext from "../../LocaleContext";
import './currencyWidhet.scss';

type CurrencyWidgetProps = { countryid: string };



export const CurrencyWidget: React.FC<CurrencyWidgetProps> = ({countryid}) => {
    const language = useContext<Lang>(LocaleContext)
    const [currencyData, setCurrencyData] = useState<ICurrency>();

    useEffect(() => {
        const fetchData = async () => {
            const countryObj = DBUtils.getCountryObjectByLang(countryid, language)
            const result = await DBUtils.getCurrencyObj(countryObj.currId, language);

            setCurrencyData(result);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const countryObj = DBUtils.getCountryObjectByLang(countryid, language)
            const result = await DBUtils.getCurrencyObj(countryObj.currId, language);

            setCurrencyData(result);
        };

        fetchData();
    }, [language]);

    return (
        <div className="currency-wrapper">
            <p>{currencyData?.name}</p>
            <p>Scale: {currencyData?.scale}</p>
            <p>BYN: {currencyData?.bynRate}</p>
            <p>EUR: {currencyData?.eurRate}</p>
            <p>USD: {currencyData?.usdRate}</p>
        </div>
    );
};
