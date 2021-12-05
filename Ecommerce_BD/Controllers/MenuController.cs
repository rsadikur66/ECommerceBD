using Ecommerce_BD_DAL.Repository.Interface;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ecommerce_BD.Controllers
{
    public class MenuController : Controller
    {
        public IMenu repository;

        public MenuController(IMenu _repository)
        {
            repository = _repository;
        }
        // GET: Menu
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetMenuData()
        {
            try
            {
                var ItemBrand = repository.MenuData();
                string JSONstring = string.Empty;
                JSONstring = JsonConvert.SerializeObject(ItemBrand);
                return Json(JSONstring, JsonRequestBehavior.AllowGet);
            }
            catch (Exception exc)
            {
                return Json(exc.Message, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult GetLabelData(string formCode)
        {
            try
            {
                var ItemBrand = repository.GetLabelData(formCode);
                string JSONstring = string.Empty;
                JSONstring = JsonConvert.SerializeObject(ItemBrand);
                return Json(JSONstring, JsonRequestBehavior.AllowGet);
            }
            catch (Exception exc)
            {
                return Json(exc.Message, JsonRequestBehavior.AllowGet);
            }
        }


    }
}