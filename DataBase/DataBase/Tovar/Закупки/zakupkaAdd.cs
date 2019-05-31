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
    public partial class zakupkaAdd : Form
    {
        private MySqlConnection conn = null;
        int posNum;
        int kategNum;
        public zakupkaAdd(MySqlConnection sqlconn)
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

                MySqlCommand KodPostavsika = new MySqlCommand(@"SELECT CodeProvider FROM providers WHERE `providers`.`Name` = @postacshikName;", conn);
                KodPostavsika.Parameters.AddWithValue("postacshikName", textBox6.Text);

                MySqlDataReader dr = KodPostavsika.ExecuteReader();
                while (dr.Read())
                    posNum = Convert.ToInt32(dr["CodeProvider"]);
                dr.Close();


                MySqlCommand Kodkategorii = new MySqlCommand(@"SELECT Code_categ FROM kateg_tovar WHERE NameCateg = @kategName;", conn);
                Kodkategorii.Parameters.AddWithValue("kategName", textBox2.Text);

                MySqlDataReader DRCodcateg = Kodkategorii.ExecuteReader();
                while (DRCodcateg.Read())
                    kategNum = Convert.ToInt32(DRCodcateg["Code_categ"]);
                DRCodcateg.Close();


                MySqlCommand command = new MySqlCommand(@"INSERT INTO `corsov`.`buytovar` (`Zena zakupki`, `Objom zakupki`, `Nazvanie tovara`, `Date zakupki`, `providers_CodeProvider`, `Kateg_tovar_Code_categ`) VALUES (@zena, @objom, @nazvTov, @date, @CodeProvider, @Code_categ);", conn);
                command.Parameters.AddWithValue("nazvTov", textBox1.Text);
                command.Parameters.AddWithValue("date", Convert.ToDateTime(textBox4.Text));
                command.Parameters.AddWithValue("objom", textBox5.Text);
                command.Parameters.AddWithValue("zena", textBox3.Text);
                command.Parameters.AddWithValue("CodeProvider", Convert.ToInt32(posNum));
                command.Parameters.AddWithValue("Code_categ", Convert.ToInt32(kategNum));

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
            this.Close();
        }
    }
}
