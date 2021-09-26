using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Ecommerce_BD_DAL.Repository
{
    public class CommonDAL
    {
        private SqlTransaction sqlTransaction;
        readonly SqlConnection sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["SqlCon"].ConnectionString);
        public void BeginTransaction()
        {
            if (sqlConnection.State != ConnectionState.Open)
            {
                sqlConnection.Open();
                sqlTransaction = sqlConnection.BeginTransaction();
            }
        }
        public void CommitTransaction()
        {
            sqlTransaction.Commit();
        }
        public void RollbackTransaction()
        {
            sqlTransaction.Rollback();
        }
        public DataTable Query(string query)
        {
            var sqlconnection = new SqlConnection(ConfigurationManager.ConnectionStrings["SqlCon"].ConnectionString);
            var sqlcommand = new SqlCommand
            {
                Connection = sqlconnection,
                CommandText = query
            };
            var sqladapter = new SqlDataAdapter(sqlcommand);
            var datatable = new DataTable();
            sqladapter.Fill(datatable);
            return datatable;
        }
        public bool Command(string command)
        {
            if (sqlConnection.State != ConnectionState.Open)
                sqlConnection.Open();
            var sqlCommand = new SqlCommand
            {
                Connection = sqlConnection,
                CommandText = command
            };
            return sqlCommand.ExecuteNonQuery() > 0;
        }

    }
}