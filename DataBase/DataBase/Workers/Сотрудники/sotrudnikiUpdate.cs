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
    public partial class sotrudnikiUpdate : Form
    {
        private MySqlConnection conn = null;
        private int id;
        int code;
        public sotrudnikiUpdate(MySqlConnection sqlconn,int id)
        {
            InitializeComponent();

            conn = sqlconn;
            this.id = id;
        }

        private async void sotrudnikiUpdate_Load(object sender, EventArgs e)
        {
           
            MySqlCommand command = new MySqlCommand(@" SELECT   firstLastName AS 'ФИО',DATE_FORMAT(dateBorn,'%d/%m/%Y') AS 'Дата рождения',  address AS 'Адрес', EmployeesTelephone AS 'Телефон', emloyessINN AS 'ИНН', Positions_codePositions AS 'Код должности'    FROM employees WHERE codeEmployees = @id ; ", conn);

            command.Parameters.AddWithValue("id", id);
            MySqlDataReader sqlReader = null;
            try
            {
                sqlReader = command.ExecuteReader();
                while (await sqlReader.ReadAsync())
                {
                    textBox1.Text = Convert.ToString(sqlReader["ФИО"]);
                    textBox2.Text = Convert.ToString(sqlReader["Дата рождения"]);
                    textBox3.Text = Convert.ToString(sqlReader["ИНН"]);
                    textBox4.Text = Convert.ToString(sqlReader["Адрес"]);
                    textBox5.Text = Convert.ToString(sqlReader["Телефон"]);
                    code = Convert.ToInt32(sqlReader["Код должности"]);
                }
            }
            catch(Exception exp)
            {
                MessageBox.Show(exp.Message.ToString(), exp.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            finally {

                if (sqlReader != null && !sqlReader.IsClosed)
                    sqlReader.Close();
                MySqlCommand NamDdoljn = new MySqlCommand(@"SELECT namePosition FROM positions WHERE codePositions = @code;", conn);
                NamDdoljn.Parameters.AddWithValue("code", code);
                MySqlDataReader dr = NamDdoljn.ExecuteReader();
                while (dr.Read())
                    textBox6.Text = Convert.ToString(dr["namePosition"]);
                dr.Close();

            }


        }
        int kodDoljn;
        private async void button1_Click(object sender, EventArgs e)
        {
            MySqlCommand updateSotrudniki = new MySqlCommand(@"UPDATE `corsov`.`employees` SET `firstLastName` = @name, `dateBorn` = @date, `address` = @addres, `EmployeesTelephone` = @tell, `emloyessINN` = @inn, `Positions_codePositions` = @position WHERE (`codeEmployees` = @id);", conn);
            updateSotrudniki.Parameters.AddWithValue("id", id);
            updateSotrudniki.Parameters.AddWithValue("name", textBox1.Text);
            updateSotrudniki.Parameters.AddWithValue("date", Convert.ToDateTime(textBox2.Text));
            updateSotrudniki.Parameters.AddWithValue("addres", textBox4.Text);
            updateSotrudniki.Parameters.AddWithValue("tell", textBox5.Text);
            updateSotrudniki.Parameters.AddWithValue("inn", textBox3.Text);

            MySqlCommand Koddoljn = new MySqlCommand(@"SELECT codePositions FROM positions WHERE namePosition = @namedoljn;", conn);
            Koddoljn.Parameters.AddWithValue("namedoljn", textBox6.Text);
            try
            {
                MySqlDataReader dr = Koddoljn.ExecuteReader();
                while (dr.Read())
                    kodDoljn = Convert.ToInt32(dr["codePositions"]);
                dr.Close();
                updateSotrudniki.Parameters.AddWithValue("position", kodDoljn);
                await updateSotrudniki.ExecuteNonQueryAsync();
                MessageBox.Show("Изменение прошло успешно", "Изменение прошло успешно", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
                Close();
            }
            catch(Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), ex.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
           
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Close();
        }
    }
}
