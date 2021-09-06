using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Ecommerce_BD_DAL.Repository.Query
{
    public class MenuQuery:CommonDAL
    {
        public DataTable FormAuthorization(string T_FORM_CODE, string T_USER_ID, string T_ROLE_CODE)
        {
            return Query($"");
        }
        public DataTable GetMenuData()
        {
            return Query($"SELECT CATEGORY_ID,T_LANG2_NAME FROM CATEGORIES");
        }

        public DataTable GetHomeData()
        {
            return Query($"SELECT Product_Name,Brand_Name,T_LANG2_NAME,Picture,Price FROM Products left JOIN Brands on Brands.Brand_Id = Products.Product_Id LEFT JOIN Categories on Categories.Category_Id = Products.Category_Id");
        }
    }
}