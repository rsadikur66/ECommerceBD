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
            Command($@"INSERT INTO CATEGORIES (T_LANG1_NAME, T_LANG2_NAME) VALUES ('{lang1}','{lang2}')");
            return true;
        }
        public bool UpdateData(int catId, string lang1, string lang2)
        {
            Command($@"UPDATE CATEGORIES SET  T_LANG1_NAME='{lang1}',T_LANG2_NAME='{lang2}' WHERE CATEGORY_ID = {catId};");
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