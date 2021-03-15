import React, {useEffect, useState} from "react";
import {ICurrency} from "../../entities/interfaces";
import {DBUtils} from "../../services/DBUtils";

type CurrencyWidgetProps = { countryid: string };


export const CurrencyWidget: React.FC<CurrencyWidgetProps> = ({countryid}) => {
    const [currencyData, setCurrencyData] = useState<ICurrency>();

    useEffect(() => {
        const fetchData = async () => {
            const result = await DBUtils.getCurrencyObj("290", "be");

            setCurrencyData(result);
        };

        fetchData();
    }, []);

    return (
        <div className="currency-wrapper">
            <p>{currencyData?.name}</p>
            <p>{currencyData?.scale}</p>
            <p>{currencyData?.bynRate}</p>
            <p>{currencyData?.eurRate}</p>
            <p>{currencyData?.usdRate}</p>
        </div>
    );
};
