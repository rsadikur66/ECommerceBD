using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Ecommerce_BD_DAL.Repository.Query
{
    public class HomePageQuery:CommonDAL
    {
        public DataTable GetcategoryList()
        {
            return Query($"SELECT * FROM CATS001");
        }
        public DataTable GetProductByCategory(string catid)
        {
            return Query($"SELECT ProductId,ProductName,Price,cast(Quantity AS VARCHAR(10)) +' '+ MeaUnitName QuantityName,CATS001.CategoryName,ImageName FROM PRODUCTS003 LEFT JOIN CATS001 ON PRODUCTS003.CategoryId = CATS001.CategoryId LEFT JOIN MeasurementUnit005 ON PRODUCTS003.MeaUnitId = MeasurementUnit005.MeaUnitId WHERE PRODUCTS003.CategoryId = '{catid}'");
            //return Query($"SELECT * FROM CATS001");
        }
    }
}