using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ecommerce_BD.Controllers.Setup
{
    public class SetupController : Controller
    {
        // GET: Setup
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ProductSetup()
        {
            return View();
        }
        public ActionResult CategorySetup()
        {
            return View();
        }
    }
}