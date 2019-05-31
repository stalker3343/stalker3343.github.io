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


namespace DataBase
{
    public partial class vacationSchedule : Form
    {
        private MySqlConnection conn = null;

        public vacationSchedule()
        {
            InitializeComponent();
            const string Connect = "Server =  127.0.0.1; Database = corsov; port= 3306; User Id = root; password= 12345";
            conn = new MySqlConnection(Connect);
        }

        private  void vacationSchedule_Load(object sender, EventArgs e)
        {
            listView1.Visible = false;
            label3.Visible = false;
        }
  

        private async Task LoadVacations()
        {

            string RawYearShadule = Year.Text + ".01.01";
            DateTime YearShadule = Convert.ToDateTime(RawYearShadule);

            MySqlDataReader sqlReader = null;
            MySqlCommand command = new MySqlCommand(@" SELECT   typeShadule AS 'Вид отпуска',   
			                                                     workYearShadule AS 'Рабочий год' ,
                                                                dateAndNumberPrikaz AS 'Приказ', 
                                                                DATE_FORMAT(monthShadule,'%m') AS 'Период отпуска',  
                                                                Id AS 'ID',
                                                             
                                                                DATE_FORMAT( firstDayShadule, '%d/%m/%Y') AS 'Первый день', 
                                                                DATE_FORMAT( lastDayShadule,'%d/%m/%Y') AS 'Последний день',   
            
                                                                firstLastName AS 'ФИО' ,
                                                                namePosition AS 'Должность' 
            
                                                                FROM vacationSchedule
                                                                JOIN employees 
                                                                ON employees_codeEmployees = codeEmployees
                                                                JOIN Positions  
                                                                ON Positions_codePositions = codePositions 
                                                                where yearShadule = @year;", conn);
            command.Parameters.AddWithValue("year", YearShadule.ToString("yyyy-MM-dd"));
            try
            {
                sqlReader = command.ExecuteReader();

                while (await sqlReader.ReadAsync())
                {
                    ListViewItem item = new ListViewItem(new string[] {
                    Convert.ToString(sqlReader["ID"]),
                    Convert.ToString(sqlReader["Должность"]),
                    Convert.ToString(sqlReader["ФИО"]),
                    Convert.ToString(sqlReader["Вид отпуска"]),
                    Convert.ToString(sqlReader["Период отпуска"]),
                    Convert.ToString(sqlReader["Приказ"]),
                    Convert.ToString(sqlReader["Первый день"]),
                    Convert.ToString( sqlReader["Последний день"]),
                    Convert.ToString( sqlReader["Рабочий год"]),
                         });
                    listView1.Items.Add(item);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), ex.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            finally
            {
                if (sqlReader != null && !sqlReader.IsClosed)
                    sqlReader.Close();
            }



        }

        private async void button1_Click(object sender, EventArgs e)
        {
            label3.Visible = true;
            label3.Text = "График отпусков на " + Year.Text + " год";
            listView1.Clear();
            listView1.Visible = true;


            await conn.OpenAsync();
            // Display grid lines.
            listView1.GridLines = true;
            // Select the item and subitems when selection is made.
            listView1.FullRowSelect = true;

            listView1.LabelWrap = true;

            // Set the view to show details.
            listView1.View = View.Details;
            listView1.Columns.Add("ID");

            listView1.Columns.Add("Должность");
            listView1.Columns.Add("ФИО Сотрудника");
            listView1.Columns.Add("Вид отпуска");
            listView1.Columns.Add("Период предоставления отпуска");
            listView1.Columns.Add("Дата и номер приказа");
            listView1.Columns.Add("Дата первого дня отпуска");
            listView1.Columns.Add("Дата последнего дня отпуска");
            listView1.Columns.Add("За какой рабочий год");


            await LoadVacations();
            listView1.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listView1.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);
            listView1.Columns[0].Width = 0;
            await conn.CloseAsync();
        }

        private void addVacation_Click(object sender, EventArgs e)
        {
            
        }

        private  void toolStripButton1_Click(object sender, EventArgs e)
        {
            using (addVocation add = new addVocation(conn))
            {
                add.ShowDialog();
            }
        }

        private async void toolStripButton2_Click(object sender, EventArgs e)
        {
            if (listView1.SelectedItems.Count > 0)
            {
                using (updateVocation updateVocation = new updateVocation(conn, Convert.ToInt32(listView1.SelectedItems[0].SubItems[0].Text)))
                {
                    updateVocation.ShowDialog();
                    conn.Open();
                    listView1.Items.Clear();
                    await LoadVacations();
                    conn.Close();
                }


               
             

            }
            else
            {
                MessageBox.Show("Выделете строку для изменения", "Ошибка", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private async void toolStripButton3_Click(object sender, EventArgs e)
        {
            if (listView1.SelectedItems.Count > 0)
            {
                DialogResult res = MessageBox.Show("Вы действительно хотите удалить отпуск", "Удаление отпуска", MessageBoxButtons.OKCancel, MessageBoxIcon.Exclamation);
                switch (res)
                {
                    case DialogResult.OK:
                        conn.Open();
                        MySqlCommand dellSotrComand = new MySqlCommand("DELETE FROM `corsov`.`vacationschedule` WHERE (`Id` = @id);", conn);
                        dellSotrComand.Parameters.AddWithValue("id", Convert.ToInt32(listView1.SelectedItems[0].SubItems[0].Text));
                        try
                        {
                            await dellSotrComand.ExecuteNonQueryAsync();
                        }
                        catch (Exception exp)
                        {
                            MessageBox.Show(exp.Message.ToString(), exp.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
                        }
                        listView1.Items.Clear();
                        await LoadVacations();
                        conn.Close();




                        break;
                }
            }
            else
            {
                MessageBox.Show("Выделете строку для удаления", "Ошибка", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
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
