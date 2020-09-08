import * as React from "react";
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as WeatherForecastsStore from '../store/WeatherForecasts';
import $ from 'jquery';

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

    // Save excel file to the server.
    function saveAsExcel(args) {
        var xlObj = $("#Spreadsheet").data("ejSpreadsheet"), fileName = $("#fileName").val(), exportProp = xlObj.XLExport.getExportProps();
        $.ajax({
        type: "POST",
            url: "/Spreadsheet/saveAsExcel",
            data: {fileName: fileName, sheetModel: exportProp.model, sheetData: exportProp.data },
            success: function () {
        // Success code here.
    }
        });
    }

    // Load excel file from the server to the Spreadsheet.
const state = {
    data: ''
  
};
 

export class FetchSpreadData extends SpreadsheetComponent {
    constructor() {
        super(...arguments);
        this.boldRight = { fontWeight: "bold", textAlign: "right" };
        this.bold = { fontWeight: "bold" };
    }
    componentDidMount() {
        var filenm = "Samples1.xlsx";
        var xlObj = $("#Spreadsheet").data("ejSpreadsheet"), fileName = filenm;
       
        $.ajax({
            type: "POST",
            url: "http://localhost:57038/api/Fileopern",
            data: { fileName: filenm },
            success: function (data) {
                //console.log(data);
                //this.setState({
                //data: data
           // });
               // xlObj.loadFromJSON(data);
            }
        });
    }

    loadExcel(args) {
        var filenm = "Samples1.xlsx";
       // var xlObj = $("#Spreadsheet").data("ejSpreadsheet"), fileName = $("#fileName").val();
        var xlObj = $("#Spreadsheet").data("ejSpreadsheet"), fileName = filenm;
        //$.ajax({
        //    url: "http://localhost:57038/api/Fileopern",
        //    data: { fileName: fileName },
        //    async: true,
        //    dataType: 'jsonp'   //you may use jsonp for cross origin request
           
        //}).then(function (data) {
        //    //this.setState({
        //    //    data: data
        //    //});
        //    xlObj.loadFromJSON(data);

        //});

        $.ajax({
            type: "POST",
             url: "http://localhost:57038/api/Fileopern",
           data: { fileName: fileName },
            success: function (data) {
                console.log(data);
                xlObj.loadFromJSON(data);
            }
        });
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
        //    importSettings: {    sheetData={this.state.data}
        //        importMapper: "http://js.syncfusion.com/demos/ejservices/api/Spreadsheet/Import",
        //        importUrl: "http://localhost:55008/Samples1.xlsx"
        //    }
        //});

    }

    render() {
        return (
            <div>
                <div>
                    
                    <button onClick={this.loadExcel}>Load file</button></div>
            <div className="control-pane">
                <div className="control-section spreadsheet-control">
                    <SpreadsheetComponent>
                        <spreadsheet id="Spreadsheet" allowImport="true">
                            
                        </spreadsheet>
                    </SpreadsheetComponent>


                </div>
                </div>
                
                </div>
        );
    }
}
