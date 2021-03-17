import React, {useState} from "react";
import Carousel from 'react-material-ui-carousel';
import { Paper, makeStyles } from '@material-ui/core';

import './gallery.scss';

type GalleryProps =  {
    attractionList : any
}

const useStyles = makeStyles((theme) => ({
    slider : {
        borderRadius: "20px",
        marginBottom: "16px",
    },
    heading : {
        textAlign: "center",
        fontWeight: "bold",
    },
}))

const Gallery: React.FC<GalleryProps> = ({attractionList}) => {
    const classes = useStyles();
    return <Carousel className={classes.slider}>
            {attractionList.map((item : any, index: number) => {
                return (<Paper key={index}>
                    <div className="sliderImg" style={{backgroundImage : `url('${item.image}')` }}>
                    <div className="sliderInfo" ><div className={classes.heading}>{item.name}</div>{item.description}</div>
                    </div>
                </Paper>)
            })}
         </Carousel>
}

export default Gallery;