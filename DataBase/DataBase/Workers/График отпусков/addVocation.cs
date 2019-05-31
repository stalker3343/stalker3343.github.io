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
    public partial class addVocation : Form
    {


        private MySqlConnection conn = null;
        public addVocation(MySqlConnection sqlconn)
        {
            InitializeComponent();
            conn = sqlconn;
        }

        public void fillEmployes()
        {
            conn.Open();
            DataTable dt = new DataTable();
            MySqlCommand cmd = new MySqlCommand(@"SELECT firstLastName FROM `corsov`.`employees`;", conn);
            MySqlDataReader dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                String sName = dr["firstLastName"].ToString();
                comboBox1.Items.Add(sName);
            }

            //dt.Load(dr);
            //if (dt.Rows.Count > 0)
            //{

            //    metroComboBox1.DataSource = dt.;
            //}
            conn.Close();
        }
        public int getCodeEmployes(string name)
        {
          
            MySqlCommand cmd = new MySqlCommand(@"SELECT codeEmployees FROM `corsov`.`employees`  where firstLastName = @name;", conn);
            cmd.Parameters.AddWithValue("name", name);
            int code = Convert.ToInt32( cmd.ExecuteScalar());
          
            return code;  

        }

        private async void addVacation_Click(object sender, EventArgs e)
        {
            conn.Open();
       
            DateTime fDay = Convert.ToDateTime(textBox2.Text);
            DateTime lDay = Convert.ToDateTime(textBox3.Text);
            MySqlCommand command = new MySqlCommand(@"INSERT INTO `corsov`.`vacationSchedule` (`typeShadule`, `yearShadule`, `monthShadule`, `firstDayShadule`, `lastDayShadule`, `employees_codeEmployees`,`workYearShadule`,`dateAndNumberPrikaz`) 
                                                                                     VALUES (@TYPE, @YEAR, @MONTH, @FIRSTDAY, @LASTDAY, @CODEEMPLOY,@WORKYEAR,@PRIKAZ);", conn);


            command.Parameters.AddWithValue("TYPE", typeVok.Text);
            command.Parameters.AddWithValue("YEAR", fDay.Year+"-01-01");
            command.Parameters.AddWithValue("MONTH", fDay.Year+ "-" + fDay.Month + "-01");
            command.Parameters.AddWithValue("FIRSTDAY", fDay);
            command.Parameters.AddWithValue("LASTDAY", lDay);
            command.Parameters.AddWithValue("CODEEMPLOY", getCodeEmployes(comboBox1.Text));
            command.Parameters.AddWithValue("WORKYEAR", textBox1.Text);
            command.Parameters.AddWithValue("PRIKAZ", textBox4.Text);



            try
            {
                await command.ExecuteNonQueryAsync();
                MessageBox.Show("Добавление прошло успешно", "Добавление прошло успешно", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
                conn.Close();
                Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "Ошибка!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                conn.Close();
            }
        }

        private void addVocation_Load(object sender, EventArgs e)
        {
            fillEmployes();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
