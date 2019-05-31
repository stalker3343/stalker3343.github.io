using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

using MySql.Data.MySqlClient;
using System.Data.SqlClient;
using System.Collections;
using System.Globalization;

namespace DataBase
{
    public partial class vedomostNAchislenia : Form
    {
        MySqlConnection conn = null;
        public vedomostNAchislenia()
        {
            InitializeComponent();
            conn = DBUtils.GetDBConnection();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            dataGridView1.Visible = true;
            label1.Visible = true;
            dataGridView1.Rows.Clear();
            DateTime month = Convert.ToDateTime("01." + Year.Text);
            label1.Text = "Ведомость начисления и выплат заработной платы " + month.ToString("Y");

            int rows = 1;
            List<int> idWorkers = new List<int> { };
            conn.Open();


            MySqlDataReader sqlReader = null;
            MySqlCommand command = new MySqlCommand(@"  SELECT codeEmployees,  firstLastName , namePosition   FROM employees JOIN Positions ON Positions_codePositions =  codePositions; ", conn);

            try
            {
                sqlReader = command.ExecuteReader();
                while (sqlReader.Read())
                {
                    int rowNumber = dataGridView1.Rows.Add();
                    dataGridView1.Rows[rowNumber].Cells[0].Value = rows;
                    dataGridView1.Rows[rowNumber].Cells[1].Value = sqlReader["firstLastName"];
                    dataGridView1.Rows[rowNumber].Cells[2].Value = sqlReader["namePosition"];
                    rows++;
                    idWorkers.Add(Convert.ToInt32(sqlReader["codeEmployees"]));
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), ex.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);

            }
            finally
            {
                sqlReader.Close();
            }
            int[] idEmployes = idWorkers.ToArray<int>();
       
            for (int i = 0; i < rows-1; i++)
            {
                int rowSum = 0;
                int zarplata;
                DateTime innerMonth = month;
                MySqlCommand commandPlataWorker = new MySqlCommand(@"  SELECT    salary   FROM employees JOIN Positions ON Positions_codePositions =  codePositions where codeEmployees=@code;", conn);
                commandPlataWorker.Parameters.AddWithValue("code", idEmployes[i]);
                zarplata = Convert.ToInt32(commandPlataWorker.ExecuteScalar());
                
                for (int j = 0; j < DateTime.DaysInMonth(month.Year, month.Month); j++)
                {

                    MySqlDataReader sqlReaderIdVok = null;
                    MySqlCommand commandIdVok = new MySqlCommand(@" SELECT Id  FROM employees JOIN vacationSchedule ON employees_codeEmployees= codeEmployees where yearShadule = @year and monthShadule = @month and codeEmployees = @code ", conn);
                    commandIdVok.Parameters.AddWithValue("code", idEmployes[i]);
                    commandIdVok.Parameters.AddWithValue("year", month.ToString("yyyy-01-01"));
                    commandIdVok.Parameters.AddWithValue("month", month.ToString("yyyy-MM-dd"));
                    sqlReaderIdVok = commandIdVok.ExecuteReader();

                    if (sqlReaderIdVok.HasRows)
                    {
                        sqlReaderIdVok.Read();
                        int idVocation = Convert.ToInt32(sqlReaderIdVok["Id"]);
                        sqlReaderIdVok.Close();

                        MySqlCommand commandDay = new MySqlCommand(@" SELECT firstDayShadule,lastDayShadule  FROM vacationSchedule  where Id = @ID  ", conn);
                        commandDay.Parameters.AddWithValue("ID", idVocation);
                        MySqlDataReader sqlReaderDay = commandDay.ExecuteReader();
                        sqlReaderDay.Read();
                        DateTime fDay = Convert.ToDateTime(sqlReaderDay["firstDayShadule"]);
                        DateTime lDay = Convert.ToDateTime(sqlReaderDay["lastDayShadule"]);

                        sqlReaderDay.Close();

                        if (!(innerMonth >= fDay && innerMonth <= lDay) && !(innerMonth.DayOfWeek == DayOfWeek.Sunday || innerMonth.DayOfWeek == DayOfWeek.Saturday))
                        {
                            rowSum = rowSum + 8;
                        }
                        //Отпускные
                      
                        int colDayYear;
                        TimeSpan time = fDay - lDay;
                        if (month.Year % 4 == 0 && month.Year % 100 != 0 || month.Year % 400 == 0)
                        {
                            colDayYear = 366;
                        }
                        else
                        {
                            colDayYear = 365;
                        }

                        int otpusknie = (zarplata * 12) / colDayYear * Math.Abs( time.Days);
                        dataGridView1.Rows[i].Cells[4].Value = zarplata - otpusknie;
                        dataGridView1.Rows[i].Cells[5].Value = otpusknie;
                    }
                    else
                    {
                        sqlReaderIdVok.Close();
                        if ( !(innerMonth.DayOfWeek == DayOfWeek.Sunday || innerMonth.DayOfWeek == DayOfWeek.Saturday))
                        {
                            rowSum = rowSum + 8;
                        }
                        dataGridView1.Rows[i].Cells[4].Value = zarplata;
                        dataGridView1.Rows[i].Cells[5].Value = 0;
                    }

                    innerMonth = innerMonth.AddDays(1);

                }
                dataGridView1.Rows[i].Cells[3].Value = rowSum;
                dataGridView1.Rows[i].Cells[6].Value = (int)dataGridView1.Rows[i].Cells[4].Value + (int)dataGridView1.Rows[i].Cells[5].Value;
                dataGridView1.Rows[i].Cells[7].Value = (int)dataGridView1.Rows[i].Cells[6].Value * 0.13;
                dataGridView1.Rows[i].Cells[8].Value = (int)dataGridView1.Rows[i].Cells[6].Value * 0.87;





            }
            conn.Close();
        }

        private void vedomostNAchislenia_Load(object sender, EventArgs e)
        {
            dataGridView1.Visible = false;
            label1.Visible = false;
        }

        private void button7_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void button8_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }
    }
}
