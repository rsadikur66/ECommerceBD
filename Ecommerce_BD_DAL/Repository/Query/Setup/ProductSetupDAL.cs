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
        public DataTable GetProductListData()
        {
            return Query($@"select p.Product_Id,p.Category_Id,p.T_LANG2_NAME ProductName,p.Price,pin.Quantity, c.T_LANG2_NAME category from products p join categories c on p.Category_Id = c.CATEGORY_ID join product_inventory pin on p.Inventory_Id = pin.Id");
        }
    }
}