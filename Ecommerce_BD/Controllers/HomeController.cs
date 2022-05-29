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
        public IHomePage repository;

        public HomeController(IHomePage _repository)
        {
            repository = _repository;
        }
       
        [HttpGet]
        public ActionResult GetcategoryList()
        {
            try
            {
                var ItemBrand = repository.GetcategoryList();
                string JSONstring = string.Empty;
                JSONstring = JsonConvert.SerializeObject(ItemBrand);
                return Json(JSONstring, JsonRequestBehavior.AllowGet);
            }
            catch (Exception exc)
            {
                return Json(exc.Message, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        //public ActionResult GetHomeData()
        //{
        //    try
        //    {
        //        var ItemBrand = repository.GetHomeData();
        //        string JSONstring = string.Empty;
        //        JSONstring = JsonConvert.SerializeObject(ItemBrand);
        //        return Json(JSONstring, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception exc)
        //    {
        //        return Json(exc.Message, JsonRequestBehavior.AllowGet);
        //    }
        //}
       [HttpPost]
        public ActionResult GetProductsByCat(string catId)
        {
            try
            {
                var data = repository.GetProductByCategory(catId);
                string JSONstring = string.Empty;
                JSONstring = JsonConvert.SerializeObject(data);
                return Json(JSONstring, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message, JsonRequestBehavior.AllowGet);
            }
            //var ddd = classQ.getProductsDataByCategory(categoryId);
            //string json = JsonConvert.SerializeObject(ddd, Formatting.Indented);
            //return Ok(json);

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