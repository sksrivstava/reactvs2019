using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Syncfusion.JavaScript.Models;
using Syncfusion.JavaScript;
using Syncfusion.EJ.Export;
using Syncfusion.XlsIO;
using Syncfusion.EJ2.Spreadsheet;
using System.IO;
//using System.Web.Mvc;
using AcceptVerbsAttribute = System.Web.Mvc.AcceptVerbsAttribute;
using Controller = Microsoft.AspNetCore.Mvc.Controller;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting.Internal;

namespace MVCService.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ServiceController :  ControllerBase


    {
        private HostingEnvironment _env;

        public ServiceController(HostingEnvironment env)
        {
            _env = env;
        }
      
        [HttpPost]
        public string loadExcel(string fileName)
        {
            
            // string fileName = HttpContext.Current.Request.Params["FileName"], jsonData;
            string jsonData;
            try
            {
                var webRoot = _env.ContentRootPath;
                var file = System.IO.Path.Combine(webRoot, fileName);

                Stream fileStream = System.IO.File.Open(file, FileMode.Open, FileAccess.Read);
                ImportRequest impReq = new ImportRequest();
                impReq.FileStream = fileStream;
                jsonData = Syncfusion.EJ.Export.Spreadsheet.Open(impReq);
                fileStream.Close();
                return jsonData;
            }
            catch (Exception ex)
            {
                return "Failure";
            }
        }

        //[HttpPost]
        //public string saveAsExcel()
        //{
        //    var webRoot = _env.ContentRootPath;
        //    var file = System.IO.Path.Combine(webRoot, fileName);

        //    //string fileName = HttpContext.Current.Request.Params["fileName"];
        //    string sheetModel = HttpContext.Current.Request.Params["sheetModel"], sheetData = HttpContext.Current.Request.Params["sheetData"];
        //    //File Save to server here
        //    ExcelEngine excelEngine = new ExcelEngine();
        //    IApplication application = excelEngine.Excel;
        //    try
        //    {
        //        // Convert Spreadsheet data as Stream
        //        var fileStream = Spreadsheet.Save(sheetModel, sheetData, ExportFormat.XLSX, ExcelVersion.Excel2013);
        //        fileStream.Position = 0; //Reset reader position
        //        IWorkbook workbook = application.Workbooks.Open(fileStream);
        //        var filePath = HttpContext.Current.Server.MapPath("~/Files/") + fileName;
        //        workbook.SaveAs(filePath);
        //        return "Success";
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Failure";
        //    }
        //}
        //[HttpPost] 
        //public ActionResult Import(ImportRequest importRequest)
        //{
        //    //importRequest.Url = "http://mvc.syncfusion.com/Spreadsheet/LargeData.xlsx";
        //    //return importRequest.SpreadsheetActions();
        //    string fileName = HttpContext.Request.QueryString.["FileName"], jsonData;
        //    try
        //    {
        //        Stream fileStream = File.Open(HttpContext.Current.Server.MapPath("~/Files/") + fileName, FileMode.Open, FileAccess.Read);
        //        ImportRequest impReq = new ImportRequest();
        //        impReq.FileStream = fileStream;
        //        jsonData = Spreadsheet.Open(impReq);
        //        fileStream.Close();
        //        return jsonData;
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Failure";
        //    }
        //}

    }
}
