import React from "react";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { CurrencyWidget } from "../components/CurrencyWidget/CurrencyWidget";
import { ClockWidget } from "../components/ClockWidget/ClockWidget";

const CountryPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const { t } = useTranslation();

    return (
        <>
            <h2>{t("country.name")}</h2>
            <h1>Country Page ID = {id}</h1>
            <CurrencyWidget countryid={id} />
            <ClockWidget countryid={id} />
        </>
    );
};

export default CountryPage;
