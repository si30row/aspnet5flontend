using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace flontend01.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Json02()
        {
            //list data
            var objList = new List<object>();
            objList.Add(new { id = 1, name = "hoge" });
            objList.Add(new { id = 2, name = "foo" });

            //response
            object obj = new { status = "OK", data = objList };

            //return
            return Json(obj, JsonRequestBehavior.AllowGet);

        }
    }
}