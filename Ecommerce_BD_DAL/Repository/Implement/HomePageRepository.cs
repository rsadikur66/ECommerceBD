using Ecommerce_BD_DAL.Repository.Interface;
using Ecommerce_BD_DAL.Repository.Query;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Ecommerce_BD_DAL.Repository.Implement
{
    public class HomePageRepository : IHomePage
    {
        HomePageQuery obj = new HomePageQuery();
        public HomePageRepository(HomePageQuery _obj)
        {
            this.obj = _obj;
        }

        public DataTable GetcategoryList()
        {
            var data = obj.GetcategoryList();
            return data;
        }

        public DataTable GetProductByCategory(string catid)
        {
            var data = obj.GetProductByCategory(catid);
            return data;
        }
    }
}