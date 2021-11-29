/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2021-11-29T10:13:09.937Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import {
    newAttribute,
    newMeasure,
    IAttribute,
    IMeasure,
    IMeasureDefinition,
    idRef,
} from "@gooddata/sdk-model";

/**
 * Attribute Title: Id
 * Attribute ID: orderitems.id
 */
export const Id: IAttribute = newAttribute("orderitems.id");
/**
 * Attribute Title: Id
 * Attribute ID: orders.id
 */
export const Id_1: IAttribute = newAttribute("orders.id");
/**
 * Attribute Title: Status
 * Attribute ID: orders.status
 */
export const Status: IAttribute = newAttribute("orders.status");
/**
 * Attribute Title: Id
 * Attribute ID: products.id
 */
export const Id_2: IAttribute = newAttribute("products.id");
/**
 * Attribute Title: Name
 * Attribute ID: products.name
 */
export const Name: IAttribute = newAttribute("products.name");
/**
 * Attribute Title: Type
 * Attribute ID: products.type
 */
export const Type: IAttribute = newAttribute("products.type");
/**
 * Attribute Title: City
 * Attribute ID: users.city
 */
export const City: IAttribute = newAttribute("users.city");
/**
 * Attribute Title: Firstname
 * Attribute ID: users.firstname
 */
export const Firstname: IAttribute = newAttribute("users.firstname");
/**
 * Attribute Title: Gender
 * Attribute ID: users.gender
 */
export const Gender: IAttribute = newAttribute("users.gender");
/**
 * Attribute Title: Id
 * Attribute ID: users.id
 */
export const Id_3: IAttribute = newAttribute("users.id");
/**
 * Attribute Title: Lastname
 * Attribute ID: users.lastname
 */
export const Lastname: IAttribute = newAttribute("users.lastname");
/**
 * Metric Title: Average age
 * Metric ID: average_age
 * Metric Type: MAQL Metric
 */
export const AverageAge: IMeasure<IMeasureDefinition> = newMeasure(idRef("average_age", "measure"));
/**
 * Fact Title: Quantity
 * Fact ID: orderitems.quantity
 */
export const Quantity = {
    /**
     * Fact Title: Quantity
     * Fact ID: orderitems.quantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("orderitems.quantity", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Quantity
     * Fact ID: orderitems.quantity
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("orderitems.quantity", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Quantity
     * Fact ID: orderitems.quantity
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("orderitems.quantity", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Quantity
     * Fact ID: orderitems.quantity
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("orderitems.quantity", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Quantity
     * Fact ID: orderitems.quantity
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("orderitems.quantity", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Quantity
     * Fact ID: orderitems.quantity
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("orderitems.quantity", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Cost
 * Fact ID: products.cost
 */
export const Cost = {
    /**
     * Fact Title: Cost
     * Fact ID: products.cost
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("products.cost", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Cost
     * Fact ID: products.cost
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("products.cost", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Cost
     * Fact ID: products.cost
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("products.cost", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Cost
     * Fact ID: products.cost
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("products.cost", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Cost
     * Fact ID: products.cost
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("products.cost", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Cost
     * Fact ID: products.cost
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("products.cost", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: products.price
 */
export const Price = {
    /**
     * Fact Title: Price
     * Fact ID: products.price
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("products.price", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Price
     * Fact ID: products.price
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("products.price", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Price
     * Fact ID: products.price
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("products.price", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Price
     * Fact ID: products.price
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("products.price", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Price
     * Fact ID: products.price
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("products.price", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Price
     * Fact ID: products.price
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("products.price", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Age
 * Fact ID: users.age
 */
export const Age = {
    /**
     * Fact Title: Age
     * Fact ID: users.age
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("users.age", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Age
     * Fact ID: users.age
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("users.age", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Age
     * Fact ID: users.age
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("users.age", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Age
     * Fact ID: users.age
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("users.age", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Age
     * Fact ID: users.age
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("users.age", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Age
     * Fact ID: users.age
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("users.age", "fact"), m => m.aggregation("runsum")),
};
/**
 * Attribute Title: Createdat - Year
 * Attribute ID: createdat.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatYear: IAttribute = newAttribute("createdat.year");
/**
 * Attribute Title: Createdat - Week of Year
 * Attribute ID: createdat.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatWeekOfYear: IAttribute = newAttribute("createdat.weekOfYear");
/**
 * Attribute Title: Createdat - Week/Year
 * Attribute ID: createdat.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatWeekYear: IAttribute = newAttribute("createdat.week");
/**
 * Attribute Title: Createdat - Quarter of Year
 * Attribute ID: createdat.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatQuarterOfYear: IAttribute = newAttribute("createdat.quarterOfYear");
/**
 * Attribute Title: Createdat - Quarter/Year
 * Attribute ID: createdat.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatQuarterYear: IAttribute = newAttribute("createdat.quarter");
/**
 * Attribute Title: Createdat - Month of Year
 * Attribute ID: createdat.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatMonthOfYear: IAttribute = newAttribute("createdat.monthOfYear");
/**
 * Attribute Title: Createdat - Month/Year
 * Attribute ID: createdat.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatMonthYear: IAttribute = newAttribute("createdat.month");
/**
 * Attribute Title: Createdat - Minute of Hour
 * Attribute ID: createdat.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatMinuteOfHour: IAttribute = newAttribute("createdat.minuteOfHour");
/**
 * Attribute Title: Createdat - Minute
 * Attribute ID: createdat.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatMinute: IAttribute = newAttribute("createdat.minute");
/**
 * Attribute Title: Createdat - Hour of Day
 * Attribute ID: createdat.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatHourOfDay: IAttribute = newAttribute("createdat.hourOfDay");
/**
 * Attribute Title: Createdat - Hour
 * Attribute ID: createdat.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatHour: IAttribute = newAttribute("createdat.hour");
/**
 * Attribute Title: Createdat - Day of Year
 * Attribute ID: createdat.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatDayOfYear: IAttribute = newAttribute("createdat.dayOfYear");
/**
 * Attribute Title: Createdat - Day of Week
 * Attribute ID: createdat.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatDayOfWeek: IAttribute = newAttribute("createdat.dayOfWeek");
/**
 * Attribute Title: Createdat - Day of Month
 * Attribute ID: createdat.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatDayOfMonth: IAttribute = newAttribute("createdat.dayOfMonth");
/**
 * Attribute Title: Createdat - Date
 * Attribute ID: createdat.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CreatedatDate: IAttribute = newAttribute("createdat.day");
/**
 * Attribute Title: Solvedat - Year
 * Attribute ID: solvedat.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatYear: IAttribute = newAttribute("solvedat.year");
/**
 * Attribute Title: Solvedat - Week of Year
 * Attribute ID: solvedat.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatWeekOfYear: IAttribute = newAttribute("solvedat.weekOfYear");
/**
 * Attribute Title: Solvedat - Week/Year
 * Attribute ID: solvedat.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatWeekYear: IAttribute = newAttribute("solvedat.week");
/**
 * Attribute Title: Solvedat - Quarter of Year
 * Attribute ID: solvedat.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatQuarterOfYear: IAttribute = newAttribute("solvedat.quarterOfYear");
/**
 * Attribute Title: Solvedat - Quarter/Year
 * Attribute ID: solvedat.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatQuarterYear: IAttribute = newAttribute("solvedat.quarter");
/**
 * Attribute Title: Solvedat - Month of Year
 * Attribute ID: solvedat.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatMonthOfYear: IAttribute = newAttribute("solvedat.monthOfYear");
/**
 * Attribute Title: Solvedat - Month/Year
 * Attribute ID: solvedat.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatMonthYear: IAttribute = newAttribute("solvedat.month");
/**
 * Attribute Title: Solvedat - Minute of Hour
 * Attribute ID: solvedat.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatMinuteOfHour: IAttribute = newAttribute("solvedat.minuteOfHour");
/**
 * Attribute Title: Solvedat - Minute
 * Attribute ID: solvedat.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatMinute: IAttribute = newAttribute("solvedat.minute");
/**
 * Attribute Title: Solvedat - Hour of Day
 * Attribute ID: solvedat.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatHourOfDay: IAttribute = newAttribute("solvedat.hourOfDay");
/**
 * Attribute Title: Solvedat - Hour
 * Attribute ID: solvedat.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatHour: IAttribute = newAttribute("solvedat.hour");
/**
 * Attribute Title: Solvedat - Day of Year
 * Attribute ID: solvedat.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatDayOfYear: IAttribute = newAttribute("solvedat.dayOfYear");
/**
 * Attribute Title: Solvedat - Day of Week
 * Attribute ID: solvedat.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatDayOfWeek: IAttribute = newAttribute("solvedat.dayOfWeek");
/**
 * Attribute Title: Solvedat - Day of Month
 * Attribute ID: solvedat.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatDayOfMonth: IAttribute = newAttribute("solvedat.dayOfMonth");
/**
 * Attribute Title: Solvedat - Date
 * Attribute ID: solvedat.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const SolvedatDate: IAttribute = newAttribute("solvedat.day");
/** Available Date Data Sets */
export const DateDatasets = {
    /**
     * Date Data Set Title: Createdat
     * Date Data Set ID: createdat
     */
    Createdat: {
        ref: idRef("createdat", "dataSet"),
        identifier: "createdat",
        /**
         * Date Attribute: Createdat - Year
         * Date Attribute ID: createdat.year
         */ CreatedatYear: {
            ref: idRef("createdat.year", "attribute"),
            identifier: "createdat.year",
            /**
             * Display Form Title: Createdat - Year
             * Display Form ID: createdat.year
             */ Default: newAttribute("createdat.year"),
        },
        /**
         * Date Attribute: Createdat - Week of Year
         * Date Attribute ID: createdat.weekOfYear
         */ CreatedatWeekOfYear: {
            ref: idRef("createdat.weekOfYear", "attribute"),
            identifier: "createdat.weekOfYear",
            /**
             * Display Form Title: Createdat - Week of Year
             * Display Form ID: createdat.weekOfYear
             */ Default: newAttribute("createdat.weekOfYear"),
        },
        /**
         * Date Attribute: Createdat - Week/Year
         * Date Attribute ID: createdat.week
         */ CreatedatWeekYear: {
            ref: idRef("createdat.week", "attribute"),
            identifier: "createdat.week",
            /**
             * Display Form Title: Createdat - Week/Year
             * Display Form ID: createdat.week
             */ Default: newAttribute("createdat.week"),
        },
        /**
         * Date Attribute: Createdat - Quarter of Year
         * Date Attribute ID: createdat.quarterOfYear
         */ CreatedatQuarterOfYear: {
            ref: idRef("createdat.quarterOfYear", "attribute"),
            identifier: "createdat.quarterOfYear",
            /**
             * Display Form Title: Createdat - Quarter of Year
             * Display Form ID: createdat.quarterOfYear
             */ Default: newAttribute("createdat.quarterOfYear"),
        },
        /**
         * Date Attribute: Createdat - Quarter/Year
         * Date Attribute ID: createdat.quarter
         */ CreatedatQuarterYear: {
            ref: idRef("createdat.quarter", "attribute"),
            identifier: "createdat.quarter",
            /**
             * Display Form Title: Createdat - Quarter/Year
             * Display Form ID: createdat.quarter
             */ Default: newAttribute("createdat.quarter"),
        },
        /**
         * Date Attribute: Createdat - Month of Year
         * Date Attribute ID: createdat.monthOfYear
         */ CreatedatMonthOfYear: {
            ref: idRef("createdat.monthOfYear", "attribute"),
            identifier: "createdat.monthOfYear",
            /**
             * Display Form Title: Createdat - Month of Year
             * Display Form ID: createdat.monthOfYear
             */ Default: newAttribute("createdat.monthOfYear"),
        },
        /**
         * Date Attribute: Createdat - Month/Year
         * Date Attribute ID: createdat.month
         */ CreatedatMonthYear: {
            ref: idRef("createdat.month", "attribute"),
            identifier: "createdat.month",
            /**
             * Display Form Title: Createdat - Month/Year
             * Display Form ID: createdat.month
             */ Default: newAttribute("createdat.month"),
        },
        /**
         * Date Attribute: Createdat - Minute of Hour
         * Date Attribute ID: createdat.minuteOfHour
         */ CreatedatMinuteOfHour: {
            ref: idRef("createdat.minuteOfHour", "attribute"),
            identifier: "createdat.minuteOfHour",
            /**
             * Display Form Title: Createdat - Minute of Hour
             * Display Form ID: createdat.minuteOfHour
             */ Default: newAttribute("createdat.minuteOfHour"),
        },
        /**
         * Date Attribute: Createdat - Minute
         * Date Attribute ID: createdat.minute
         */ CreatedatMinute: {
            ref: idRef("createdat.minute", "attribute"),
            identifier: "createdat.minute",
            /**
             * Display Form Title: Createdat - Minute
             * Display Form ID: createdat.minute
             */ Default: newAttribute("createdat.minute"),
        },
        /**
         * Date Attribute: Createdat - Hour of Day
         * Date Attribute ID: createdat.hourOfDay
         */ CreatedatHourOfDay: {
            ref: idRef("createdat.hourOfDay", "attribute"),
            identifier: "createdat.hourOfDay",
            /**
             * Display Form Title: Createdat - Hour of Day
             * Display Form ID: createdat.hourOfDay
             */ Default: newAttribute("createdat.hourOfDay"),
        },
        /**
         * Date Attribute: Createdat - Hour
         * Date Attribute ID: createdat.hour
         */ CreatedatHour: {
            ref: idRef("createdat.hour", "attribute"),
            identifier: "createdat.hour",
            /**
             * Display Form Title: Createdat - Hour
             * Display Form ID: createdat.hour
             */ Default: newAttribute("createdat.hour"),
        },
        /**
         * Date Attribute: Createdat - Day of Year
         * Date Attribute ID: createdat.dayOfYear
         */ CreatedatDayOfYear: {
            ref: idRef("createdat.dayOfYear", "attribute"),
            identifier: "createdat.dayOfYear",
            /**
             * Display Form Title: Createdat - Day of Year
             * Display Form ID: createdat.dayOfYear
             */ Default: newAttribute("createdat.dayOfYear"),
        },
        /**
         * Date Attribute: Createdat - Day of Week
         * Date Attribute ID: createdat.dayOfWeek
         */ CreatedatDayOfWeek: {
            ref: idRef("createdat.dayOfWeek", "attribute"),
            identifier: "createdat.dayOfWeek",
            /**
             * Display Form Title: Createdat - Day of Week
             * Display Form ID: createdat.dayOfWeek
             */ Default: newAttribute("createdat.dayOfWeek"),
        },
        /**
         * Date Attribute: Createdat - Day of Month
         * Date Attribute ID: createdat.dayOfMonth
         */ CreatedatDayOfMonth: {
            ref: idRef("createdat.dayOfMonth", "attribute"),
            identifier: "createdat.dayOfMonth",
            /**
             * Display Form Title: Createdat - Day of Month
             * Display Form ID: createdat.dayOfMonth
             */ Default: newAttribute("createdat.dayOfMonth"),
        },
        /**
         * Date Attribute: Createdat - Date
         * Date Attribute ID: createdat.day
         */ CreatedatDate: {
            ref: idRef("createdat.day", "attribute"),
            identifier: "createdat.day",
            /**
             * Display Form Title: Createdat - Date
             * Display Form ID: createdat.day
             */ Default: newAttribute("createdat.day"),
        },
    },
    /**
     * Date Data Set Title: Solvedat
     * Date Data Set ID: solvedat
     */ Solvedat: {
        ref: idRef("solvedat", "dataSet"),
        identifier: "solvedat",
        /**
         * Date Attribute: Solvedat - Year
         * Date Attribute ID: solvedat.year
         */ SolvedatYear: {
            ref: idRef("solvedat.year", "attribute"),
            identifier: "solvedat.year",
            /**
             * Display Form Title: Solvedat - Year
             * Display Form ID: solvedat.year
             */ Default: newAttribute("solvedat.year"),
        },
        /**
         * Date Attribute: Solvedat - Week of Year
         * Date Attribute ID: solvedat.weekOfYear
         */ SolvedatWeekOfYear: {
            ref: idRef("solvedat.weekOfYear", "attribute"),
            identifier: "solvedat.weekOfYear",
            /**
             * Display Form Title: Solvedat - Week of Year
             * Display Form ID: solvedat.weekOfYear
             */ Default: newAttribute("solvedat.weekOfYear"),
        },
        /**
         * Date Attribute: Solvedat - Week/Year
         * Date Attribute ID: solvedat.week
         */ SolvedatWeekYear: {
            ref: idRef("solvedat.week", "attribute"),
            identifier: "solvedat.week",
            /**
             * Display Form Title: Solvedat - Week/Year
             * Display Form ID: solvedat.week
             */ Default: newAttribute("solvedat.week"),
        },
        /**
         * Date Attribute: Solvedat - Quarter of Year
         * Date Attribute ID: solvedat.quarterOfYear
         */ SolvedatQuarterOfYear: {
            ref: idRef("solvedat.quarterOfYear", "attribute"),
            identifier: "solvedat.quarterOfYear",
            /**
             * Display Form Title: Solvedat - Quarter of Year
             * Display Form ID: solvedat.quarterOfYear
             */ Default: newAttribute("solvedat.quarterOfYear"),
        },
        /**
         * Date Attribute: Solvedat - Quarter/Year
         * Date Attribute ID: solvedat.quarter
         */ SolvedatQuarterYear: {
            ref: idRef("solvedat.quarter", "attribute"),
            identifier: "solvedat.quarter",
            /**
             * Display Form Title: Solvedat - Quarter/Year
             * Display Form ID: solvedat.quarter
             */ Default: newAttribute("solvedat.quarter"),
        },
        /**
         * Date Attribute: Solvedat - Month of Year
         * Date Attribute ID: solvedat.monthOfYear
         */ SolvedatMonthOfYear: {
            ref: idRef("solvedat.monthOfYear", "attribute"),
            identifier: "solvedat.monthOfYear",
            /**
             * Display Form Title: Solvedat - Month of Year
             * Display Form ID: solvedat.monthOfYear
             */ Default: newAttribute("solvedat.monthOfYear"),
        },
        /**
         * Date Attribute: Solvedat - Month/Year
         * Date Attribute ID: solvedat.month
         */ SolvedatMonthYear: {
            ref: idRef("solvedat.month", "attribute"),
            identifier: "solvedat.month",
            /**
             * Display Form Title: Solvedat - Month/Year
             * Display Form ID: solvedat.month
             */ Default: newAttribute("solvedat.month"),
        },
        /**
         * Date Attribute: Solvedat - Minute of Hour
         * Date Attribute ID: solvedat.minuteOfHour
         */ SolvedatMinuteOfHour: {
            ref: idRef("solvedat.minuteOfHour", "attribute"),
            identifier: "solvedat.minuteOfHour",
            /**
             * Display Form Title: Solvedat - Minute of Hour
             * Display Form ID: solvedat.minuteOfHour
             */ Default: newAttribute("solvedat.minuteOfHour"),
        },
        /**
         * Date Attribute: Solvedat - Minute
         * Date Attribute ID: solvedat.minute
         */ SolvedatMinute: {
            ref: idRef("solvedat.minute", "attribute"),
            identifier: "solvedat.minute",
            /**
             * Display Form Title: Solvedat - Minute
             * Display Form ID: solvedat.minute
             */ Default: newAttribute("solvedat.minute"),
        },
        /**
         * Date Attribute: Solvedat - Hour of Day
         * Date Attribute ID: solvedat.hourOfDay
         */ SolvedatHourOfDay: {
            ref: idRef("solvedat.hourOfDay", "attribute"),
            identifier: "solvedat.hourOfDay",
            /**
             * Display Form Title: Solvedat - Hour of Day
             * Display Form ID: solvedat.hourOfDay
             */ Default: newAttribute("solvedat.hourOfDay"),
        },
        /**
         * Date Attribute: Solvedat - Hour
         * Date Attribute ID: solvedat.hour
         */ SolvedatHour: {
            ref: idRef("solvedat.hour", "attribute"),
            identifier: "solvedat.hour",
            /**
             * Display Form Title: Solvedat - Hour
             * Display Form ID: solvedat.hour
             */ Default: newAttribute("solvedat.hour"),
        },
        /**
         * Date Attribute: Solvedat - Day of Year
         * Date Attribute ID: solvedat.dayOfYear
         */ SolvedatDayOfYear: {
            ref: idRef("solvedat.dayOfYear", "attribute"),
            identifier: "solvedat.dayOfYear",
            /**
             * Display Form Title: Solvedat - Day of Year
             * Display Form ID: solvedat.dayOfYear
             */ Default: newAttribute("solvedat.dayOfYear"),
        },
        /**
         * Date Attribute: Solvedat - Day of Week
         * Date Attribute ID: solvedat.dayOfWeek
         */ SolvedatDayOfWeek: {
            ref: idRef("solvedat.dayOfWeek", "attribute"),
            identifier: "solvedat.dayOfWeek",
            /**
             * Display Form Title: Solvedat - Day of Week
             * Display Form ID: solvedat.dayOfWeek
             */ Default: newAttribute("solvedat.dayOfWeek"),
        },
        /**
         * Date Attribute: Solvedat - Day of Month
         * Date Attribute ID: solvedat.dayOfMonth
         */ SolvedatDayOfMonth: {
            ref: idRef("solvedat.dayOfMonth", "attribute"),
            identifier: "solvedat.dayOfMonth",
            /**
             * Display Form Title: Solvedat - Day of Month
             * Display Form ID: solvedat.dayOfMonth
             */ Default: newAttribute("solvedat.dayOfMonth"),
        },
        /**
         * Date Attribute: Solvedat - Date
         * Date Attribute ID: solvedat.day
         */ SolvedatDate: {
            ref: idRef("solvedat.day", "attribute"),
            identifier: "solvedat.day",
            /**
             * Display Form Title: Solvedat - Date
             * Display Form ID: solvedat.day
             */ Default: newAttribute("solvedat.day"),
        },
    },
};
export const Insights = {
    /**
     * Insight Title: Orders / Month
     * Insight ID: cc348267-6c26-4a48-a1c0-149df6a2d4c3
     */
    OrdersMonth: "cc348267-6c26-4a48-a1c0-149df6a2d4c3",
    /**
     * Insight Title: Orders Status / Week
     * Insight ID: a1e6cd11-8806-4b6e-9cdf-dac4b6742715
     */ OrdersStatusWeek: "a1e6cd11-8806-4b6e-9cdf-dac4b6742715",
};
export const Dashboards = {
    /**
     * Dashboard Title: Short Term
     * Dashboard ID: 23f5aac4-1500-4679-9c4e-5e2069378607
     */
    ShortTerm: "23f5aac4-1500-4679-9c4e-5e2069378607",
};
