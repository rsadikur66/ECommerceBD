using Ecommerce_BD_DAL.Model;
using Ecommerce_BD_DAL.Repository.Interface.Setup;
using Ecommerce_BD_DAL.Repository.Query.Setup;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Ecommerce_BD_DAL.Repository.Implement.Setup
{
    public class CategorySetupRepository : ICategorySetup
    {
        readonly CategorySetupDAL _categorySetupDal = new CategorySetupDAL();

        public bool DeleteCategoryRecord(int catId)
        {
            var data = _categorySetupDal.DeleteCategoryRecord(catId);
            return data;
        }

        public DataTable GetAllCategories()
        {
            var data = _categorySetupDal.GetCategoriesAllData();
            return data;
        }
        public bool InsertData(string lang1, string lang2)
        {
            var data = _categorySetupDal.InsertData(lang1, lang2);
            return data;
        }
        public bool updateData(CategoryModel catMod)
        {
            var data = _categorySetupDal.UpdateData(catMod);
            return data;
        }
        
    }
}