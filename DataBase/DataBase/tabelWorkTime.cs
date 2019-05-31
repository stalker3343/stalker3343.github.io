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
    public partial class tabelWorkTime : Form
    {
        MySqlConnection conn = null;
        public tabelWorkTime()
        {
            InitializeComponent();
            conn = DBUtils.GetDBConnection();

        }




        private void tabelWorkTime_Load(object sender, EventArgs e)
        {

            dataGridView1.Visible = false;
            label1.Visible = false;

            for (int i = 1; i < 32; i++)
            {
                string Day = Convert.ToString(i);

                int index = dataGridView1.Columns.Add(Day, Day);
                dataGridView1.Columns[i + 1].Width = 30;
            }
            dataGridView1.Columns.Add("monthSum", "отработано за месяц");


        }


        private void button2_Click(object sender, EventArgs e)
        {
            DateTime month = Convert.ToDateTime("01." + Year.Text);



            dataGridView1.Rows.Clear();


            dataGridView1.Visible = true;
            label1.Visible = true;
            label1.Text = "Табель учёта рабочего времени за " + month.ToString("Y");
            int rows = 1;
            //dataGridView1.Rows[0].Cells[0]
            conn.Open();

            MySqlDataReader sqlReader = null;
            MySqlCommand command = new MySqlCommand(@" SELECT firstLastName, codeEmployees FROM employees ; ", conn);
            try
            {
                sqlReader = command.ExecuteReader();

                while (sqlReader.Read())
                {
                    int rowNumber = dataGridView1.Rows.Add();
                    dataGridView1.Rows[rowNumber].Cells[0].Value = rows;
                    dataGridView1.Rows[rowNumber].Cells[1].Value = sqlReader["firstLastName"];

                    rows++;
                }
                sqlReader.Close();

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), ex.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
                sqlReader.Close();
            }
            finally
            {
                sqlReader.Close();

            }




            for (int i = 0; i < rows-1; i++)
            {




                int rowSum = 0;
                DateTime innerMonth = month;
                for (int j = 0; j < DateTime.DaysInMonth(month.Year, month.Month); j++)
                {

                    MySqlCommand command1 = new MySqlCommand(@" SELECT codeEmployees  FROM employees where firstLastName = @name", conn);
                    command1.Parameters.AddWithValue("@name", Convert.ToString(dataGridView1.Rows[i].Cells[1].Value));
                    int code = Convert.ToInt32(command1.ExecuteScalar());



                    MySqlDataReader sqlReaderIdVok = null;
                    MySqlCommand commandIdVok = new MySqlCommand(@" SELECT Id  FROM employees JOIN vacationSchedule ON employees_codeEmployees= codeEmployees where yearShadule = @year and monthShadule = @month and codeEmployees = @code ", conn);
                    commandIdVok.Parameters.AddWithValue("code", code);
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

                        if (innerMonth >= fDay && innerMonth <= lDay)
                        {
                            dataGridView1.Rows[i].Cells[j + 2].Value = 0;
                        }
                        else
                        {
                            //Дублирование1
                            if (innerMonth.DayOfWeek == DayOfWeek.Sunday || innerMonth.DayOfWeek == DayOfWeek.Saturday)
                            {
                                dataGridView1.Rows[i].Cells[j + 2].Value = 0;
                                rowSum = rowSum + 0;
                            }
                            else
                            {
                                dataGridView1.Rows[i].Cells[j + 2].Value = 8;
                                rowSum = rowSum + 8;
                            }
                        }


                    }
                    else
                    {
                        sqlReaderIdVok.Close();
                        //Дублирование2
                        if (innerMonth.DayOfWeek == DayOfWeek.Sunday || innerMonth.DayOfWeek == DayOfWeek.Saturday)
                        {
                            dataGridView1.Rows[i].Cells[j + 2].Value = 0;
                            rowSum = rowSum + 0;
                        }
                        else
                        {
                            dataGridView1.Rows[i].Cells[j + 2].Value = 8;
                            rowSum = rowSum + 8;
                        }
                    }








                    innerMonth = innerMonth.AddDays(1);
                }
                dataGridView1.Rows[i].Cells[33].Value = rowSum;


            }
            conn.Close();











        }

        private void button7_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void button8_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
