using Ecommerce_BD_DAL.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Ecommerce_BD_DAL.Repository.Query.Setup
{
    public class CategorySetupDAL: CommonDAL
    {
        public DataTable GetCategoriesAllData()
        {
            var query = Query($@"select * from CATEGORIES");
            return query;
        }
        public bool InsertData(string lang1, string lang2)
        {
            Command($@"INSERT INTO CATEGORIES (T_LANG1_NAME, T_LANG2_NAME) VALUES (N'{lang1}','{lang2}')");
            return true;
        }
        public bool UpdateData(CategoryModel catMod)
        {
            Command($@"UPDATE CATEGORIES SET  T_LANG1_NAME=N'{catMod.T_LANG1_NAME}',T_LANG2_NAME='{catMod.T_LANG2_NAME}' WHERE CATEGORY_ID = {catMod.CATEGORY_ID};");
            return true;
        }
        public bool DeleteCategoryRecord(int catid)
        {
            Command($@"DELETE  from CATEGORIES where CATEGORY_ID = '{catid}'");
            return true;
        }
        public DataTable GetReportData()
        {
            var data = Query($@"Select * from CATEGORIES");
            return data;
        }
    }
}