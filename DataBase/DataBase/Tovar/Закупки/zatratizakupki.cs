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
    public partial class zatratizakupki : Form
    {
        private MySqlConnection conn = null;
        public zatratizakupki(MySqlConnection sqlconn)
        {
            InitializeComponent();
            conn = sqlconn;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(textBox1.Text) && !string.IsNullOrWhiteSpace(textBox1.Text)&&
                !string.IsNullOrEmpty(textBox2.Text) && !string.IsNullOrWhiteSpace(textBox2.Text)
                )
            {
                try
                {
                    MySqlCommand zatrati = new MySqlCommand(@"SELECT sum(`Zena zakupki`) as 'Затраты' from buytovar  where `Date zakupki` between   @date1 and   @date2  ; ", conn);
                    zatrati.Parameters.AddWithValue("date1", Convert.ToDateTime( textBox1.Text));
                    zatrati.Parameters.AddWithValue("date2", Convert.ToDateTime(textBox2.Text));
                    MySqlDataReader dr = zatrati.ExecuteReader();
                    while (dr.Read())
                        textBox3.Text = Convert.ToString(dr["Затраты"]);
                    dr.Close();
                }
                catch (FormatException)
                {
                    MessageBox.Show("Формат Даты введён неверно", "Ошибка!", MessageBoxButtons.OK, MessageBoxIcon.Error);
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

        private void button3_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Close();
        }
    }
}
