import React from "react";

import styles from "./app.scss";
import CountryCard from "./components/CountryCard/CountryCard";

const App: React.FC = () => {
    return (
        <>
            <div className={styles.helloText}>Hello Travel App</div>;
            <CountryCard />
        </>
    );
};

export default App;
