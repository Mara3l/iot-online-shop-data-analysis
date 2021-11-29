import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

import Page from "../components/Page";
import { Insights } from "../md/full";

const Home = () => {
    return (
        <Page>
            <h1>Short term analysis</h1>
            <div style={{ height: "300px" }}>
                <InsightView insight={Insights.OrdersStatusLast7Days} />
            </div>

            <h1>Long term analysis</h1>

            <div style={{ height: "300px" }}>
                <InsightView insight={Insights.OrdersMonth} />
            </div>
        </Page>
    );
};

export default Home;
