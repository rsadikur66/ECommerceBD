using Ecommerce_BD_DAL.Repository.Interface.Setup;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ecommerce_BD.Controllers.Setup
{
    public class ProductSetupController : Controller
    {
        public IProductSetup repository;

        public ProductSetupController(IProductSetup _repository)
        {
            repository = _repository;
        }
        // GET: ProductSetup
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult GetProductsList()
        {
            var productListItem = repository.GetProductListData();
            string jsonstring = string.Empty;
            jsonstring = JsonConvert.SerializeObject(productListItem);
            return Json(jsonstring, JsonRequestBehavior.AllowGet);

        }
        [HttpGet]
        public ActionResult GetCategories()
        {
            try
            {
                var itemCategoriesData = repository.GetCategoriesData();
                string JSONstring = string.Empty;
                JSONstring = JsonConvert.SerializeObject(itemCategoriesData);
                return Json(JSONstring, JsonRequestBehavior.AllowGet);
            }
            catch (Exception exc)
            {
                return Json(exc.Message, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult GetBrands()
        {
            try
            {
                var itemBrandsData = repository.GetBrandData();
                string JSONstring = string.Empty;
                JSONstring = JsonConvert.SerializeObject(itemBrandsData);
                return Json(JSONstring, JsonRequestBehavior.AllowGet);
            }
            catch (Exception exc)
            {
                return Json(exc.Message, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ContentResult PicUpload()
        {
            string path = Server.MapPath("~/PicUpload/");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            foreach (string key in Request.Files)
            {
                HttpPostedFileBase postedFile = Request.Files[key];
                postedFile.SaveAs(path + postedFile.FileName);
            }

            return Content("Success");
        }
    }
}