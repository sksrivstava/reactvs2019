using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Syncfusion.JavaScript.Models;
using Syncfusion.JavaScript;
using Syncfusion.EJ.Export;
using Syncfusion.XlsIO;
using Syncfusion.EJ2.Spreadsheet;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting.Internal;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MVCService.Controllers
{
    [ApiController]
    [Route("api/fileserv")]
    public class fileservController : ControllerBase
    {
        // GET: api/<FileServController>
        private HostingEnvironment _env;

        public fileservController(HostingEnvironment env)
        {
            _env = env;
        }

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
    [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<FileServController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<FileServController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<FileServController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<FileServController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
