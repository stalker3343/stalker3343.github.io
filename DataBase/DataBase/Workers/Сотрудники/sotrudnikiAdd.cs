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

namespace DataBase
{
    public partial class sotrudnikiAdd : Form
    {
        private MySqlConnection conn = null;
        int posNum;
        public sotrudnikiAdd(MySqlConnection sqlconn)
        {
            InitializeComponent();

            conn = sqlconn;
        }

        private async void button1_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(textBox1.Text) && !string.IsNullOrWhiteSpace(textBox1.Text) &&
                  !string.IsNullOrEmpty(textBox2.Text) && !string.IsNullOrWhiteSpace(textBox2.Text) &&
                  !string.IsNullOrEmpty(textBox4.Text) && !string.IsNullOrWhiteSpace(textBox4.Text) &&
                  !string.IsNullOrEmpty(textBox5.Text) && !string.IsNullOrWhiteSpace(textBox5.Text) &&
                  !string.IsNullOrEmpty(textBox3.Text) && !string.IsNullOrWhiteSpace(textBox3.Text) &&
                  !string.IsNullOrEmpty(textBox6.Text) && !string.IsNullOrWhiteSpace(textBox6.Text))
            {

                MySqlCommand Koddoljn = new MySqlCommand(@"SELECT codePositions FROM positions WHERE namePosition = @namedoljn;", conn);
                Koddoljn.Parameters.AddWithValue("namedoljn", textBox6.Text);
                //try
                //{
                    MySqlDataReader dr = Koddoljn.ExecuteReader();
                    while (dr.Read())
                        posNum = Convert.ToInt32(dr["codePositions"]);
                    dr.Close();
                //}
                //catch(Exception ex) { 
                  //  MessageBox.Show(ex.Message.ToString(), ex.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
                //}

                MySqlCommand command = new MySqlCommand("INSERT INTO `corsov`.`employees` (`firstLastName`, `dateBorn`, `address`, `EmployeesTelephone`, `emloyessINN`, `Positions_codePositions`) VALUES (@FIO, @DATE, @LOCATION, @TELL, @INN, @POS);", conn);
                command.Parameters.AddWithValue("FIO", textBox1.Text);
                command.Parameters.AddWithValue("DATE", Convert.ToDateTime(textBox2.Text));
                command.Parameters.AddWithValue("LOCATION", textBox4.Text);
                command.Parameters.AddWithValue("TELL", textBox5.Text);
                command.Parameters.AddWithValue("INN", textBox3.Text);
                command.Parameters.AddWithValue("POS", Convert.ToInt32(posNum));



                try
                {
                    await command.ExecuteNonQueryAsync();
                    MessageBox.Show("Добавление прошло успешно", "Добавление прошло успешно", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
                    Close();
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message, "Ошибка!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            else
            {
                MessageBox.Show("Заполните все поля", "Ошибка!", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }


        }

        private void button2_Click(object sender, EventArgs e)
        {
            Close();
        }
    }
}
