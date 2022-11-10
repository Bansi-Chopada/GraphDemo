import { Grid } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../Assets/SliderImages/img1.jpg';
import img2 from '../Assets/SliderImages/img2.jpg';
import img3 from '../Assets/SliderImages/img3.jpg';
import img4 from '../Assets/SliderImages/img4.jpg';
import img5 from '../Assets/SliderImages/img5.jpg';
import img6 from '../Assets/SliderImages/img6.jpg';

export const ImageSlider = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    return (
        <>
            <Grid className="carouselDiv" >
                <Carousel responsive={responsive} infinite>
                    <Grid>
                        <img src={img1} alt="slider_Image" />
                    </Grid>
                    <Grid>
                        <img src={img2} alt="slider_Image" />
                    </Grid>
                    <Grid>
                        <img src={img3} alt="slider_Image" />
                    </Grid>
                    <Grid>
                        <img src={img4} alt="slider_Image" />
                    </Grid>
                    <Grid>
                        <img src={img5} alt="slider_Image" />
                    </Grid>
                    <Grid>
                        <img src={img6} alt="slider_Image" />
                    </Grid>
                </Carousel>
            </Grid>
        </>
    );
}
