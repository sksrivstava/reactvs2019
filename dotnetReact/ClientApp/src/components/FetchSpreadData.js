import * as React from "react";
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as WeatherForecastsStore from '../store/WeatherForecasts';
import $ from 'jquery';
import { DataManager, Query } from '@syncfusion/ej2-data';
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

    //// Save excel file to the server.
    //function saveAsExcel(args) {
    //    var xlObj = $("#Spreadsheet").data("ejSpreadsheet"), fileName = $("#fileName").val(), exportProp = xlObj.XLExport.getExportProps();
    //    $.ajax({
    //    type: "POST",
    //        url: "/Spreadsheet/saveAsExcel",
    //        data: {fileName: fileName, sheetModel: exportProp.model, sheetData: exportProp.data },
    //        success: function () {
    //    // Success code here.
    //}
    //    });
    //}

    // Load excel file from the server to the Spreadsheet.
const state = {
    data: ''
  
};
 

export class FetchSpreadData extends SpreadsheetComponent {
    //constructor() {
    //    super(...arguments);
    //    this.query = new Query().
    //        select(['OrderID', 'CustomerID', 'ShipName', 'ShipCity', 'ShipCountry', 'Freight']).take(100);
    //    this.data = new DataManager({
    //        url: 'https://js.syncfusion.com/demos/ejServices//wcf/Northwind.svc/Orders',
    //        crossDomain: true
    //    });
    //    this.boldRight = { fontWeight: "bold", textAlign: "right" };
    //    this.bold = { fontWeight: "bold" };

    //}
    constructor(props) {
        super(props);
        this.boldRight = { fontWeight: "bold", textAlign: "right" };
        this.bold = { fontWeight: "bold" };
        this.state = {
            dataexl: {}
        }
       
    }
    
    saveFile() {
       var resp = this.spreadsheet.save({ fileName: "Sample" });
    }
    loadFile() {
        let request = new XMLHttpRequest();
        request.responseType = "blob";
        request.onload = () => {
            let file = new File([request.response], 'Sample' + ".xlsx");
            this.spreadsheet.open({ file: file });
        }
        request.open("GET", "http://localhost:53142/Files/" + 'Sample1' + ".xlsx");
        request.send();
    }
    componentDidMount() {
        let request = new XMLHttpRequest();
        request.responseType = "blob";
        request.onload = () => {
            let file = new File([request.response], 'Sample' + ".xlsx");
            this.spreadsheet.open({ file: file });
        }
        request.open("GET", "http://localhost:53142/Files/" + 'Sample' + ".xlsx");
        request.send();
        this.spreadsheet.isEdit = false;
    }

    //componentDidMount() {
    //    var filenm = "Samples1.xlsx";
    //   // var xlObj = $("#Spreadsheet").data("ejSpreadsheet"), fileName = filenm;
    //    var xlObj = document.getElementById("spreadsheet"), fileName = filenm;
   
    //    //$.ajax({
    //    //    type: "POST",
    //    //    url: "http://localhost:57038/api/Fileopern",
    //    //    data: { fileName: filenm },
    //    //    success: function (data) {
    //    //        console.log(data);
    //    //        this.setState({
    //    //            dataexl: data
    //    //        })
    //    //      //  xlObj.loadFromJSON(data);
    //    //    }
    //    //});
    //}

    //loadExcel(args) {
    //    var filenm = "Samples1.xlsx";
    //   // var xlObj = $("#Spreadsheet").data("ejSpreadsheet"), fileName = $("#fileName").val();
    //    var xlObj = $("#spreadsheet").data("ejSpreadsheet"), fileName = filenm;
    //    //$.ajax({
    //    //    url: "http://localhost:57038/api/Fileopern",
    //    //    data: { fileName: fileName },
    //    //    async: true,
    //    //    dataType: 'jsonp'   //you may use jsonp for cross origin request
           
    //    //}).then(function (data) {
    //    //    //this.setState({
    //    //    //    data: data
    //    //    //});
    //    //    xlObj.loadFromJSON(data);

    //    //});

    //    $.ajax({
    //        type: "POST",
    //         url: "http://localhost:57038/api/Fileopern",
    //       data: { fileName: fileName },
    //        success: function (data) {
    //            console.log(data);
    //            xlObj.loadFromJSON(JSON.parse(data));
    //           // xlObj.loadFromJSON(data);
    //        }
    //    });
    //}

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
        this.spreadsheet.allowEditing = false; 
        //this.spreadsheet.open("http://localhost:55008/Samples1.xlsx");
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
                     <button class='e-btn' onClick={this.saveFile.bind(this)}>Save as Excel</button>
                    <button class='e-btn' onClick={this.loadFile.bind(this)}>Load Excel</button>
                    </div>
                <div id="spreadsheet"></div>
            <div className="control-pane">
                <div className="control-section spreadsheet-control">
                        <SpreadsheetComponent openUrl='http://localhost:53142/Home/Open'
                            saveUrl='http://localhost:53142/Home/Save' ref={(ssObj) => { this.spreadsheet = ssObj; }}
                            cellEdit={false}
                            editSettings={true}>
                            <SheetsDirective>
                                <SheetDirective name='Shipment Details'>
                                    <RangesDirective>
                                        <RangeDirective dataSource={this.data} query={this.query}></RangeDirective>
                                    </RangesDirective>
                                    <ColumnsDirective>
                                        <ColumnDirective width={100}></ColumnDirective>
                                        <ColumnDirective width={130}></ColumnDirective>
                                        <ColumnDirective width={150}></ColumnDirective>
                                        <ColumnDirective width={200}></ColumnDirective>
                                        <ColumnDirective width={180}></ColumnDirective>
                                    </ColumnsDirective>
                                </SheetDirective>
                            </SheetsDirective>
                    </SpreadsheetComponent>


                </div>
                </div>
                
                </div>
        );
    }
}
