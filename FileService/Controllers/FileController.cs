using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FileService.Controllers
{
    public class FileController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        //[HttpPost]
        //public ActionResult Import(ImportRequest importRequest)
        //{
        //    importRequest.Url = "http://mvc.syncfusion.com/Spreadsheet/LargeData.xlsx";
        //    return importRequest.SpreadsheetActions();
        //}
    }

    public class ImportRequest
    {
    }
}
