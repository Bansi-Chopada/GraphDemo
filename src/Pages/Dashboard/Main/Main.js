import React from "react";
import { Header } from "./Header";
import { ChartDiv } from "./ChartDiv";
import { PaymentDiv } from "./PaymentDiv";
import { TimelineDiv } from "./TimelineDiv";

export const Main = () => {

    return (
        <>
            <Header />
            <ChartDiv />
            <PaymentDiv />
            <TimelineDiv />
        </>
    )
}