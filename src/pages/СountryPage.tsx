import React from "react";

import { useParams } from "react-router-dom";

const CountryPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return <h1>Country Page ID = {id} </h1>;
};

export default CountryPage;
