﻿using Ecommerce_BD_DAL.Repository.Interface.Setup;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ecommerce_BD.Controllers.Setup
{
    public class CategorySetupController : Controller
    {
        public ICategorySetup repository;
        public CategorySetupController(ICategorySetup _repository)
        {
            repository = _repository;
        }

        // GET: CategorySetup
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult GetAllCategoriesData()
        {
            try
            {
                var itemCategoriesData = repository.GetAllCategories();
                string JSONstring = string.Empty;
                JSONstring = JsonConvert.SerializeObject(itemCategoriesData);
                return Json(JSONstring, JsonRequestBehavior.AllowGet);
            }
            catch (Exception exc)
            {
                return Json(exc.Message, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult DeleteCategoryRecord(int catId)
        {
            try
            {
                var delCatRec = repository.DeleteCategoryRecord(catId);
                string JSONstring = string.Empty;
                JSONstring = JsonConvert.SerializeObject(delCatRec);
                return Json(JSONstring, JsonRequestBehavior.AllowGet);
            }
            catch (Exception exc)
            {
                return Json(exc.Message, JsonRequestBehavior.AllowGet);
                
            }
        }
    }
}