using Ecommerce_BD_DAL.Repository.Interface.Setup;
using Ecommerce_BD_DAL.Repository.Query.Setup;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Ecommerce_BD_DAL.Repository.Implement.Setup
{
    public class ProductSetupRepository : IProductSetup
    {
        readonly ProductSetupDAL _productSetupDal = new ProductSetupDAL();

        public DataTable GetBrandData()
        {
            var data = _productSetupDal.GetBrandData();
            return data;
        }

        public DataTable GetCategoriesData()
        {
            var data = _productSetupDal.GetCategoriesData();
            return data;
        }
        public DataTable GetProductListData()
        {
            var data = _productSetupDal.GetProductListData();
            return data;
        }
    }
}