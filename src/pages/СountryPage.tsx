import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { ICurrency } from "../entities/interfaces";
import { DBUtils } from "../services/DBUtils";
import {CurrencyWidget} from "../components/CurrencyWidget/CurrencyWidget";

const CountryPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <h1>
                Country Page ID = {id}
            </h1>

            <CurrencyWidget countryid={id} />
        </>
    );
};

export default CountryPage;
