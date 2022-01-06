using Ecommerce_BD_DAL.Repository.Interface;
using Ecommerce_BD_DAL.Repository.Query;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Ecommerce_BD_DAL.Repository.Implement
{
    public class MenuRepository : IMenu
    {
        private MenuQuery obj = new MenuQuery();

        public MenuRepository(MenuQuery _obj)
        {
            obj = _obj;
        }
        public MenuRepository()
        {
        }
        public DataTable FormAuthorization(string T_FORM_CODE, string T_USER_ID, string T_ROLE_CODE)
        {
            var Data = obj.FormAuthorization(T_FORM_CODE, T_USER_ID, T_ROLE_CODE);
            return Data;
        }

        public DataTable MenuData()
        {
            var data = obj.GetMenuData();
            return data;
        }
        public DataTable GetHomeData()
        {
            var data = obj.GetHomeData();
            return data;
        }
        public DataTable GetcategoryList()
        {
            var data = obj.GetcategoryList();
            return data;
        }
    }
}