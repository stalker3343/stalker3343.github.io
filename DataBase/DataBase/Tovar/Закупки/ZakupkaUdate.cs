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
    public partial class ZakupkaUdate : Form
    {
        private MySqlConnection conn = null;
        private int id;
        int codePost;
        int codeCateg;

        int codePost1;
        int codeCateg1;
        public ZakupkaUdate(MySqlConnection sqlconn, int id)
        {
            InitializeComponent();

            conn = sqlconn;
            this.id = id;
        }

        private async void button1_Click(object sender, EventArgs e)
        {
            MySqlCommand updateZakupki = new MySqlCommand(@"UPDATE `corsov`.`buytovar` SET `Zena zakupki` = @cena, `Objom zakupki` = @objom, `Nazvanie tovara` = @nazvanie, `Date zakupki` = @date, `Kateg_tovar_Code_categ` = @codeCateg, providers_CodeProvider = @CodeProvider WHERE (`Kod zakupki` = @id);", conn);
            updateZakupki.Parameters.AddWithValue("id", id);
            updateZakupki.Parameters.AddWithValue("cena", textBox3.Text);
            updateZakupki.Parameters.AddWithValue("objom",textBox5.Text);
            updateZakupki.Parameters.AddWithValue("nazvanie", textBox1.Text);
            updateZakupki.Parameters.AddWithValue("date", Convert.ToDateTime(textBox4.Text));

            MySqlCommand KoddeKateg = new MySqlCommand(@"Select Code_categ from kateg_tovar where NameCateg = @namekateg;", conn);
            KoddeKateg.Parameters.AddWithValue("namekateg", textBox2.Text);
            try
            {
                MySqlDataReader dr = KoddeKateg.ExecuteReader();
                while (dr.Read())
                    codeCateg1 = Convert.ToInt32(dr["Code_categ"]);
                dr.Close();
                updateZakupki.Parameters.AddWithValue("codeCateg", codeCateg1);

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), ex.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
            }


            MySqlCommand kodePosatvsh = new MySqlCommand(@"Select CodeProvider from providers where Name = @nameprovide;", conn);
            kodePosatvsh.Parameters.AddWithValue("nameprovide", textBox6.Text);
            try
            {
                MySqlDataReader DRCodeCateg = kodePosatvsh.ExecuteReader();
                while (DRCodeCateg.Read())
                    codePost1 = Convert.ToInt32(DRCodeCateg["CodeProvider"]);
                DRCodeCateg.Close();
                updateZakupki.Parameters.AddWithValue("CodeProvider", codePost1);

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), ex.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

            await updateZakupki.ExecuteNonQueryAsync();
            MessageBox.Show("Изменение прошло успешно", "Изменение прошло успешно", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
            Close();
        }

        private async void ZakupkaUdate_Load(object sender, EventArgs e)
        {
            MySqlCommand command = new MySqlCommand(@" select `Kod zakupki` As 'Код закупки',`Zena zakupki` As 'Цена закупки',`Objom zakupki` As 'Обьём закупки',`Nazvanie tovara` As 'Название товара',  DATE_FORMAT(`Date zakupki`,'%d/%m/%Y') As 'Дата закупки',providers_CodeProvider As 'Поставщик',Kateg_tovar_Code_categ As 'Категория товара' FROM corsov.buytovar where `Kod zakupki` = @id;", conn);
            command.Parameters.AddWithValue("id", id);

            MySqlDataReader sqlReader = null;
            try
            {
                sqlReader = command.ExecuteReader();
                while (await sqlReader.ReadAsync())
                {
   
                   textBox3.Text = Convert.ToString(sqlReader["Цена закупки"]);
                    textBox5.Text = Convert.ToString(sqlReader["Обьём закупки"]);
                    textBox1.Text = Convert.ToString(sqlReader["Название товара"]);
                    textBox4.Text = Convert.ToString(sqlReader["Дата закупки"]);
                //textBox6.Text = Convert.ToString(sqlReader["Поставщик"]);
                 //textBox2.Text = Convert.ToString(sqlReader["Категория товара"]);



                    codePost = Convert.ToInt32(sqlReader["Поставщик"]);
                    codeCateg = Convert.ToInt32(sqlReader["Категория товара"]);
                }
            }
            catch (Exception exp)
            {
                MessageBox.Show(exp.Message.ToString(), exp.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            finally
            {

                if (sqlReader != null && !sqlReader.IsClosed)
                    sqlReader.Close();
                MySqlCommand NamPostav = new MySqlCommand(@"SELECT Name FROM providers WHERE CodeProvider = @codePost;", conn);
                NamPostav.Parameters.AddWithValue("codePost", codePost);
                MySqlDataReader DRpost = NamPostav.ExecuteReader();
                while (DRpost.Read())
                    textBox6.Text = Convert.ToString(DRpost["Name"]);
                DRpost.Close();

                MySqlCommand NamKAteg = new MySqlCommand(@"SELECT NameCateg FROM kateg_tovar WHERE Code_categ =@codeCateg ;", conn);
                NamKAteg.Parameters.AddWithValue("codeCateg", codeCateg);
                MySqlDataReader DRNAmecateg = NamKAteg.ExecuteReader();
                while (DRNAmecateg.Read())
                    textBox2.Text = Convert.ToString(DRNAmecateg["NameCateg"]);
                DRNAmecateg.Close();

            }
        }
    }
}
