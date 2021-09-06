using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Ecommerce_BD_DAL.Repository.Query.Setup
{
    public class ProductSetupDAL:CommonDAL
    {
        public DataTable GetCategoriesData()
        {
            return Query($@"SELECT CATEGORY_ID,T_LANG1_NAME,T_LANG2_NAME from CATEGORIES");
        }
        public DataTable GetBrandData()
        {
            return Query($@"select Brand_Id,Brand_Name from brands");
        }
    }
}