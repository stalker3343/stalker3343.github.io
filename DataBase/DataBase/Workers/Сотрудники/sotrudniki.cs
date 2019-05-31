using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


using System.Data.SqlClient;
using System.Collections;

namespace DataBase
{





    public partial class sotrudniki : Form
    {
        private MySqlConnection conn = null;
  

        public sotrudniki()
        {
            InitializeComponent();
            
        }

        private void button7_Click(object sender, EventArgs e)
        {
            if (conn != null && conn.State != ConnectionState.Closed)
                conn.Close();
            this.Close();

        }

        private void button8_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private async void sotrudniki_Load(object sender, EventArgs e)
        {
          
            const string Connect = "Server =  127.0.0.1; Database = corsov; port= 3306; User Id = root; password= 12345";
            conn = new MySqlConnection(Connect);


            await conn.OpenAsync();
            // Display grid lines.
            listView1.GridLines = true;
            // Select the item and subitems when selection is made.
            listView1.FullRowSelect = true;
            // Set the view to show details.
            listView1.View = View.Details;
            listView1.Columns.Add("Код работника");
            listView1.Columns.Add("ФИО");
            listView1.Columns.Add("Дата рождения");
            listView1.Columns.Add("Адрес");
            listView1.Columns.Add("Телефон");
            listView1.Columns.Add("ИНН");
            listView1.Columns.Add("Должность");

            await LoadEmployees();
            listView1.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listView1.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);


        }


        private async Task LoadEmployees()
        {
            MySqlDataReader sqlReader = null;
            MySqlCommand command = new MySqlCommand(@" SELECT   codeEmployees AS 'Код работника',
                                                                firstLastName AS 'ФИО',   
                                                                DATE_FORMAT(dateBorn,'%d/%m/%Y') AS 'Дата рождения',  
                                                                address AS 'Адрес', 
                                                                EmployeesTelephone AS 'Телефон', 
                                                                emloyessINN AS 'ИНН', 
                                                                Positions_codePositions AS 'Код должности',
                                                                namePosition As 'Должность' 

                                                                FROM employees, positions  
                                                                WHERE Positions_codePositions = codePositions; ", conn);
            try
            {
                sqlReader = command.ExecuteReader();

                while (await sqlReader.ReadAsync())
                {
                    ListViewItem item = new ListViewItem(new string[] {
                    Convert.ToString(sqlReader["Код работника"]),
                    Convert.ToString(sqlReader["ФИО"]),
                    Convert.ToString(sqlReader["Дата рождения"]),
                    Convert.ToString(sqlReader["Адрес"]),
                    Convert.ToString(sqlReader["Телефон"]),
                    Convert.ToString(sqlReader["ИНН"]),
                    Convert.ToString( sqlReader["Должность"]),
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

        private void выходToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if ( conn != null && conn.State != ConnectionState.Closed)
                conn.Close();
            Environment.Exit(0);


        }

        private void sotrudniki_FormClosing(object sender, FormClosingEventArgs e)
        {
            if (conn != null )
                conn.Close();
        }

        //private async void button1_Click(object sender, EventArgs e)
        //{
        //    if (label15.Visible)
        //        label15.Visible = false;

        //   
             
        //        MySqlCommand command = new MySqlCommand("INSERT INTO `corsov`.`employees` (`firstLastName`, `dateBorn`, `address`, `EmployeesTelephone`, `emloyessINN`, `Positions_codePositions`) VALUES (@FIO, @DATE, @LOCATION, @TELL, @INN, @POS);", conn);
        //    command.Parameters.AddWithValue("FIO", textBox1.Text);
        //    command.Parameters.AddWithValue("DATE", textBox2.Text);
        //    command.Parameters.AddWithValue("LOCATION", textBox4.Text);
        //    command.Parameters.AddWithValue("TELL", textBox5.Text);
        //    command.Parameters.AddWithValue("INN", textBox3.Text);
        //        //command.Parameters.Add("@POS", MySqlDbType.Int16);
        //        //command.Parameters["@POS"].Value = Convert.ToInt16 (textBox6.Text);
        //        command.Parameters.AddWithValue("POS", textBox6.Text);
        //        await command.ExecuteNonQueryAsync();
        //        textBox1.Text = "";
        //        textBox2.Text = "";
        //        textBox4.Text = "";
        //        textBox5.Text = "";
        //        textBox3.Text = "";
        //        textBox6.Text = "";
        //        MessageBox.Show("Добавление сотрудника выдачи прошло успешно", "Добавление сотрудника прошло успешно", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
        //    }
        //    else
        //    {
        //        label15.Visible = true;

        //        label15.Text = " Все поля должны быть заполнены!";
        //    }
        //}

       

        //private async void toolStripButton5_Click(object sender, EventArgs e)
        //{
        //    listView1.Items.Clear();
        //    await LoadEmployees();
        //}

        private async void toolStripButton1_Click(object sender, EventArgs e)
        {
            sotrudnikiAdd sotrudnikiAdd = new sotrudnikiAdd(conn);
            this.Hide();
            sotrudnikiAdd.ShowDialog();
            listView1.Items.Clear();
            await LoadEmployees();
            this.Show();
        }



        private async void toolStripButton2_Click(object sender, EventArgs e)
        {
            if (listView1.SelectedItems.Count > 0)
            {

                
                sotrudnikiUpdate sotrudnikiUpdate = new sotrudnikiUpdate(conn, Convert.ToInt32(listView1.SelectedItems[0].SubItems[0].Text));
                
                this.Hide();
                sotrudnikiUpdate.ShowDialog();
                listView1.Items.Clear();
                await LoadEmployees();
                this.Show();

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
                DialogResult res = MessageBox.Show("Вы действительно хотите удалить данного сотрудника", "Удаление сотрудника", MessageBoxButtons.OKCancel, MessageBoxIcon.Exclamation);
                switch (res)
                {
                    case DialogResult.OK:
                        MySqlCommand dellSotrComand = new MySqlCommand("DELETE FROM `corsov`.`employees` WHERE (`codeEmployees` = @id);", conn);
                        dellSotrComand.Parameters.AddWithValue("id", Convert.ToInt32(listView1.SelectedItems[0].SubItems[0].Text));
                        try
                        {
                            await dellSotrComand.ExecuteNonQueryAsync();
                        }
                        catch( Exception exp)
                        {
                            MessageBox.Show(exp.Message.ToString(), exp.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
                        }
                        listView1.Items.Clear();
                        await LoadEmployees();




                        break;
                }
            }
            else
            {
                MessageBox.Show("Выделете строку для удаления", "Ошибка", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

       

        private void listView1_ColumnClick(object sender, ColumnClickEventArgs e)
        {
            this.listView1.ListViewItemSorter = new ListViewColumnComparer(e.Column);
        }
    }
    class ListViewColumnComparer : IComparer
    {
        public int ColumnIndex { get; set; }

        public ListViewColumnComparer(int columnIndex)
        {
            ColumnIndex = columnIndex;
        }

        public int Compare(object x, object y)
        {
            try
            {
                return String.Compare(
                ((ListViewItem)x).SubItems[ColumnIndex].Text,
                ((ListViewItem)y).SubItems[ColumnIndex].Text);
            }
            catch (Exception) // если вдруг столбец пустой (или что-то пошло не так)
            {
                return 0;
            }
        }
    }


}
