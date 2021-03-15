import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { ICurrency } from "../entities/interfaces";
import { DBUtils } from "../services/DBUtils";

const CountryPage: React.FC = () => {
    const [currencyData, setCurrencyData] = useState<ICurrency>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchData = async () => {
            const result = await DBUtils.getCurrencyObj("290", "be");

            setCurrencyData(result);
        };

        fetchData();
    }, []);
    const { t } = useTranslation();
    return (
        <>
            <h2>{t("country.name")}</h2>;<h1>Country Page ID = {id}</h1>
        </>
    );
};

export default CountryPage;
