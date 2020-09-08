using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Syncfusion.JavaScript.Models;
using Syncfusion.JavaScript;
using Syncfusion.EJ.Export;
using Syncfusion.XlsIO;
//using Syncfusion.EJ2.Spreadsheet;
using System.IO;
//using Spreadsheet =Syncfusion.EJ.Export.Spreadsheet;

namespace MVCService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileopernController : ControllerBase
    {
        //private Microsoft.Extensions.Hosting.Internal.HostingEnvironment _env;

        //public FileopernController(Microsoft.Extensions.Hosting.Internal.HostingEnvironment env)
        //{
        //    _env = env;
        //}

        public string loadExcel(string fileName)
        {

            // string fileName = HttpContext.Current.Request.Params["FileName"], jsonData;
            string jsonData;
            try
            {
                // var webRoot = _env.ContentRootPath;
                string file = "D:\\ReactApplication\\MVCService\\wwwroot\\Sample1.xlsx"; // "Sample1.xlsx"; // System.IO.Path.Combine("~/wwwroot/"+fileName);

                Stream fileStream = System.IO.File.Open(file, FileMode.Open, FileAccess.Read);
                ImportRequest impReq = new ImportRequest();
                impReq.FileStream = fileStream;
                jsonData = Spreadsheet.Open(impReq);
                fileStream.Close();
                return jsonData;
            }
            catch (Exception ex)
            {
                return "Failure";
            }
        }
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
    }
   
}
