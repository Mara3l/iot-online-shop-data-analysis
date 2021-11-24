import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

import Page from "../components/Page";
import { Insights } from "../md/full";

const Home = () => {
    return (
        <Page>
            <h3 style={{ color: "black" }}>Orders by city</h3>
            <InsightView insight={Insights.City_1} />
            <h3 style={{ color: "black" }}>State of orders by date</h3>
            <InsightView insight={Insights.StateOfOrdersByDate} />
        </Page>
    );
};
export default Home;
