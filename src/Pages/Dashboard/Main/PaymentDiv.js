import React from "react";
import { Grid } from "@mui/material";
import CreditCardImage from '../../../Assets/creditCardImage1.png';
import PaypalImage from '../../../Assets/payPal.jpg';
import AddCardIcon from '@mui/icons-material/AddCard';

export const PaymentDiv = () => {
    return (
        <>
            <Grid
                item
                xs={12}
                container
                direction='row'
                pt={{ xs: 3, sm: 4, md: 3, lg: 3 }}
            >
                <Grid
                    container
                    direction={{ xs: 'row', sm: 'row', md: 'column', lg: 'column' }}
                    item
                    xs={12} sm={12} md={2} lg={2}
                    // pt={{ xs: 2, sm: 0, md: 0, lg: 1 }}
                    columnGap={4}
                    gap={{ xs: 3, sm: 3, md: 2, lg: 2 }}

                >
                    <Grid>
                        <b className="method">
                            Payment Methods
                        </b>
                    </Grid>

                    <Grid className="lastModified">
                        <p>Last Modified </p>
                        <b> 04 jan 2020</b>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12} sm={12} md={10} lg={10}
                    container
                    pt={{ xs: 3, sm: 3, md: 2, lg: 2 }}
                >
                    <Grid item xs={4}
                        container
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        <img className="CreditCardImage" src={CreditCardImage} alt="CreditCardImage" />
                    </Grid>
                    <Grid item xs={4}
                        container
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        <img className="paypalImage" src={PaypalImage} alt="CreditCardImage" />
                    </Grid>
                    <Grid item xs={4}
                        container
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        <Grid className="uploadImage" >
                            <Grid
                                className="InnerUploadImage"
                                container
                                justifyContent="center"
                                alignItems="center"
                                direction='column'
                            >
                                <AddCardIcon />
                                <p>Add Card</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}