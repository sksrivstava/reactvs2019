import * as React from "react";
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as WeatherForecastsStore from '../store/WeatherForecasts';

import {
    SpreadsheetComponent,
    SheetsDirective,
    SheetDirective,
    ColumnsDirective,
    RangesDirective,
    RangeDirective,
    RowsDirective,
    RowDirective,
    CellsDirective,
    CellDirective,
    ColumnDirective,
} from "@syncfusion/ej2-react-spreadsheet";
//import { data } from "../Data/DataSource";
import "./sreadsheet.css";



export class FetchSpreadData extends SpreadsheetComponent {
    constructor() {
        super(...arguments);
        this.boldRight = { fontWeight: "bold", textAlign: "right" };
        this.bold = { fontWeight: "bold" };
    }

//    <script>
//    $(function () {
//        $("#Spreadsheet").ejSpreadsheet({
//            allowImport: true,
//            importSettings: {
//                importMapper: "http://js.syncfusion.com/demos/ejservices/api/Spreadsheet/Import",
//                importUrl: "http://mvc.syncfusion.com/Spreadsheet/LargeData.xlsx"
//            }
//        });
//});
//</script>
    
    onCreated() {
        this.spreadsheet.cellFormat(
            { fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },
            "A1:F1"
        );
        this.spreadsheet.numberFormat("$#,##0.00", "F2:F31");
        this.spreadsheet.open("http://localhost:55008/Samples1.xlsx");
        //var aa=   this.spreadsheet.ejSpreadsheet({
        //    allowImport: true,
        //    importSettings: {
        //        importMapper: "http://js.syncfusion.com/demos/ejservices/api/Spreadsheet/Import",
        //        importUrl: "http://localhost:55008/Samples1.xlsx"
        //    }
        //});

    }

    render() {
        return (
            <div className="control-pane">
                <div className="control-section spreadsheet-control">
                    <SpreadsheetComponent>
                        <spreadsheet id="Spreadsheet" allowImport="true">
                            <importScripts open="http://localhost:55008/Samples1.xlsx" ImportMapper="SpreadsheetHandler.ashx"></importScripts>
                        </spreadsheet>
                    </SpreadsheetComponent>


                </div>
            </div>
        );
    }
}
