"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("./components/Layout");
var Home_1 = require("./components/Home");
var Counter_1 = require("./components/Counter");
var FetchData_1 = require("./components/FetchData");
var FetchSpreadData_1 = require("./components/FetchSpreadData");
var Reportsheet_1 = require("./components/Reportsheet");
require("./custom.css");
exports.default = (function () { return (React.createElement(Layout_1.default, null,
    React.createElement(react_router_1.Route, { exact: true, path: '/', component: Home_1.default }),
    React.createElement(react_router_1.Route, { path: '/counter', component: Counter_1.default }),
    React.createElement(react_router_1.Route, { path: '/fetch-data/:startDateIndex?', component: FetchData_1.default }),
    React.createElement(react_router_1.Route, { path: '/SpreadSheet-data/:startDateIndex?', component: FetchSpreadData_1.FetchSpreadData }),
    React.createElement(react_router_1.Route, { path: '/SpreadSheet-typescript/:startDateIndex?', component: Reportsheet_1.Reportsheet }))); });
//# sourceMappingURL=App.js.map