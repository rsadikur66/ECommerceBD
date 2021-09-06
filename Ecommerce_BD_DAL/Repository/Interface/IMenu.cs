using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce_BD_DAL.Repository.Interface
{
    public interface IMenu
    {
        DataTable MenuData();
        DataTable GetHomeData();
    }
}
