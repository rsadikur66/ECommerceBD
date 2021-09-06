using Ecommerce_BD_DAL.Repository.Interface;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ecommerce_BD.Controllers
{
    public class HomeController : Controller
    {
        public IMenu repository;

        public HomeController(IMenu _repository)
        {
            repository = _repository;
        }

        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult GetHomeData()
        {
            try
            {
                var ItemBrand = repository.GetHomeData();
                string JSONstring = string.Empty;
                JSONstring = JsonConvert.SerializeObject(ItemBrand);
                return Json(JSONstring, JsonRequestBehavior.AllowGet);
            }
            catch (Exception exc)
            {
                return Json(exc.Message, JsonRequestBehavior.AllowGet);
            }
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

        public ActionResult HomePage()
        {
            return View();
        }
    }
}