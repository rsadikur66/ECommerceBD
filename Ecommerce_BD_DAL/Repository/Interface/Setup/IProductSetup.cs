using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce_BD_DAL.Repository.Interface.Setup
{
   public interface IProductSetup
    {
        DataTable GetCategoriesData();
        DataTable GetBrandData();
        DataTable GetProductListData();
    }
}
