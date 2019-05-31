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
    public partial class updateVocation : Form
    {
        private MySqlConnection conn = null;
        private int id;

        public updateVocation(MySqlConnection sqlconn, int id)
        {
            InitializeComponent();
            conn = sqlconn;
            this.id = id;

            comboBox2.Text = getNameEmployes(id);
            fillEmployes();
        }
        public string getNameEmployes(int id)
        {
            conn.Open();
            MySqlCommand cmd = new MySqlCommand(@"SELECT firstLastName
                                                  FROM `corsov`.`employees` 
                                                  where codeEmployees = 
                                                  (select employees_codeEmployees from vacationschedule 
                                                        where Id = @code);", conn);
            cmd.Parameters.AddWithValue("code", id);
            string name = Convert.ToString(cmd.ExecuteScalar());
            conn.Close();
            return name;

        }
        public int getCodeEmployes(string name)
        {

            MySqlCommand cmd = new MySqlCommand(@"SELECT codeEmployees FROM `corsov`.`employees`  where firstLastName = @name;", conn);
            cmd.Parameters.AddWithValue("name", name);
            int code = Convert.ToInt32(cmd.ExecuteScalar());

            return code;

        }

        public void fillEmployes()
        {
            conn.Open();
          
            MySqlCommand cmd = new MySqlCommand(@"SELECT firstLastName FROM `corsov`.`employees`;", conn);
            MySqlDataReader dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                String sName = dr["firstLastName"].ToString();
                comboBox2.Items.Add(sName);
            }

            conn.Close();
        }

        private async void updateVocation_Load(object sender, EventArgs e)
        {
            conn.Open();
            MySqlCommand command = new MySqlCommand(@" select typeShadule, workYearShadule,dateAndNumberPrikaz,firstDayShadule,lastDayShadule from vacationschedule where Id = @id; ", conn);

            command.Parameters.AddWithValue("id", id);
            MySqlDataReader sqlReader = null;
            try
            {
                sqlReader = command.ExecuteReader();
             
                while (await sqlReader.ReadAsync())
                {
                    DateTime fDay = Convert.ToDateTime(sqlReader["firstDayShadule"]);
                    DateTime lDay = Convert.ToDateTime(sqlReader["lastDayShadule"]);
                    typeVok.Text = Convert.ToString(sqlReader["typeShadule"]);
                    textBox1.Text = Convert.ToString(sqlReader["workYearShadule"]);
                    textBox4.Text = Convert.ToString(sqlReader["dateAndNumberPrikaz"]);
                    textBox2.Text = Convert.ToString(fDay.ToString("dd.MM.yyyy"));
                    textBox3.Text = Convert.ToString(lDay.ToString("dd.MM.yyyy"));

                }
            }
            catch (Exception exp)
            {
                MessageBox.Show(exp.Message.ToString(), exp.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            finally
            {

                if (sqlReader != null )
                    sqlReader.Close();
                conn.Close();



            }
        }

    

        private async void update_Click(object sender, EventArgs e)
        {

            conn.Open();
            DateTime fDay = Convert.ToDateTime(textBox2.Text);
            DateTime lDay = Convert.ToDateTime(textBox3.Text);
            MySqlCommand updateVocation = new MySqlCommand(@"UPDATE `corsov`.`vacationSchedule` SET `typeShadule` = @type, `yearShadule` = @year, `monthShadule` = @month, `firstDayShadule` = @fDay, `lastDayShadule` = @lDay, `employees_codeEmployees` = @employe,`workYearShadule` = @workYear,`dateAndNumberPrikaz` = @prikaz WHERE (Id = @id);", conn);
            updateVocation.Parameters.AddWithValue("id", id);

            updateVocation.Parameters.AddWithValue("type", typeVok.Text);
            updateVocation.Parameters.AddWithValue("year", fDay.Year + "-01-01");
            updateVocation.Parameters.AddWithValue("month", fDay.Year + "-" + fDay.Month + "-01");
            updateVocation.Parameters.AddWithValue("fDay", fDay);
            updateVocation.Parameters.AddWithValue("lDay", lDay);
            updateVocation.Parameters.AddWithValue("employe", getCodeEmployes(comboBox2.Text));
            updateVocation.Parameters.AddWithValue("workYear", textBox1.Text);
            updateVocation.Parameters.AddWithValue("prikaz", textBox4.Text);

          
            try
            {
               
                await updateVocation.ExecuteNonQueryAsync();
                MessageBox.Show("Изменение прошло успешно", "Изменение прошло успешно", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
                Close();
                conn.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), ex.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
                conn.Close();
            }

        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
