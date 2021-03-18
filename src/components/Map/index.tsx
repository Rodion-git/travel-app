import React, { useRef, useEffect, useState } from "react";

import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import mapboxgl from "mapbox-gl";

import "./map.scss";


const accessToken =
    "pk.eyJ1IjoiYXBpbWFwcyIsImEiOiJja20zcjVyNTcwbHRpMnJucmVwNG9qM3RmIn0.IpoJOP4vnLg3gGhHMVzfjA";
mapboxgl.accessToken = accessToken;

type MapProps = {
    country: string;
    language: string;
};

const checkLang = (lang: string) => lang === "en" ? "en" : "ru" ;

const filterCountry = (arr: [{id: string, wikidata: string}]) => {
    for (let i = 0 ;i < arr.length; i++ ) {
        if (/^country\./.test(arr[i].id)) {
            return arr[i].wikidata;
        }
    }
}

const Map: React.FC<MapProps> = ({ country, language }) => {
    const mapContainer = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(false);
    const layers = [
        "country-label",
        "state-label",
        "settlement-label",
        "settlement-subdivision-label",
        "airport-label",
        "poi-label",
        "water-point-label",
        "water-line-label",
        "natural-point-label",
        "natural-line-label",
        "waterway-label",
    ];
    useEffect(() => {
        axios(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=${accessToken}`
        )
            .then((response) => {
                const { center, context } = response.data.features[0]; 
                const map: any = new mapboxgl.Map({
                    container: mapContainer.current,
                    style: "mapbox://styles/mapbox/streets-v11",
                    center,
                    zoom: 6,
                });
                map.on("load", () => {
                    new mapboxgl.Marker().setLngLat(center).addTo(map);
                    map.addControl(new mapboxgl.NavigationControl())
                        .addControl(new mapboxgl.FullscreenControl())
                        .addLayer(
                            {
                                id: "country-boundaries",
                                source: {
                                    type: "vector",
                                    url:"mapbox://mapbox.country-boundaries-v1",
                                },
                                "source-layer": "country_boundaries",
                                type: "fill",
                                paint: {
                                    "fill-color": "#d2361e",
                                    "fill-opacity": 0.1,
                                },
                            },
                            "country-label",
                            
                        )
                        .setFilter("country-boundaries",["in","wikidata_id",filterCountry(context)]);
                    layers.forEach((item) =>
                        map.setLayoutProperty(item, "text-field", [
                            "get",
                            "name_" + checkLang(language),
                        ])
                    );
                    setCheck(true);
                });
            })
            .catch(() => {
                setError(true);
            });
    }, [language]);
    return (
        <div className={`map`}>
            {check || error ? null : <CircularProgress className="spiner" />}
            <div
                className={`mapBody ${error ? "mapError" : ""}`}
                ref={mapContainer}
            />
        </div>
    );
};

export default Map;
