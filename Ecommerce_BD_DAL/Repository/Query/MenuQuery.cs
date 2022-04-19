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
            return Query($"select f.T_FORM_CODE,f.T_LANG2_NAME form_name,f.T_FORM_TYPE_CODE,ft.T_FORM_TYPE_NAME_ENG formtype_name,(replace(f.T_LANG2_NAME, ' ', '')) linktext From FORMS f inner join FORMS_TYPE ft on f.T_FORM_TYPE_CODE = ft.T_FORM_TYPE_CODE");
        }

        public DataTable GetHomeData()
        {
            return Query($"select PRODUCTS003.productid,PRODUCTS003.englishproductname Product_Name,PRODUCTS003.productprice Price,PHOTO004.pictureid, PHOTO004.picturename Picture from PRODUCTS003 LEFT JOIN PHOTO004 ON PRODUCTS003.productid = PHOTO004.productid");
        }
        public DataTable GetcategoryList()
        {
            return Query($"SELECT * FROM CATS001");
        }

    }
}