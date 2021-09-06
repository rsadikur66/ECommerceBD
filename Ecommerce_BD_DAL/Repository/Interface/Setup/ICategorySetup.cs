using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce_BD_DAL.Repository.Interface.Setup
{
   public interface ICategorySetup
    {
        DataTable GetAllCategories();
        bool InsertData(string lang1, string lang2);
        bool UpdateData(int catId, string lang1, string lang2);
        bool DeleteCategoryRecord(int catId);
    }
}
