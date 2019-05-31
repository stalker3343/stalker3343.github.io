using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.Common;
using MySql.Data.MySqlClient;

namespace DataBase
{
    public partial class zakupkaUPostavshika : Form
    {
        MySqlConnection conn = DBUtils.GetDBConnection();
        public zakupkaUPostavshika()
        {
            InitializeComponent();

        }

        private void zakupkaUPostavshika_Load(object sender, EventArgs e)
        {
            fillProvires();
            listView1.Visible = false;
        }
        public void fillProvires()
        {
            conn.Open();

            MySqlCommand cmd = new MySqlCommand(@"SELECT Name FROM `corsov`.`providers`;", conn);
            MySqlDataReader dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                String sName = dr["Name"].ToString();
                comboBox1.Items.Add(sName);
            }
            conn.Close();

          
        }

        private async void button2_Click(object sender, EventArgs e)
        {
            string post = comboBox1.Text;
            label1.Text = post.Trim();
            listView1.Clear();
           
            listView1.GridLines = true;
            listView1.FullRowSelect = true;
            listView1.View = View.Details;
            listView1.Columns.Add("Код закупки");
            listView1.Columns.Add("Цена закупки");
            listView1.Columns.Add("Обьём закупки");
            listView1.Columns.Add("Название товара");
            listView1.Columns.Add("Дата закупки");
            listView1.Columns.Add("Категория товара");

            await LoadTovar(comboBox1.Text);

            listView1.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listView1.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);

          
        }

        private async Task LoadTovar(string nameProviders)
        {
            conn.Open();
      
            listView1.Visible = true;
            MySqlDataReader sqlReader = null;
            MySqlCommand command = new MySqlCommand(@" SELECT `Kod zakupki` As 'Код закупки',`Zena zakupki` As 'Цена закупки',`Objom zakupki` As 'Обьём закупки',`Nazvanie tovara` As 'Название товара',  DATE_FORMAT(`Date zakupki`,'%d/%m/%Y') As 'Дата закупки',  NameCateg As 'Категория товара',Code_categ,CodeProvider FROM corsov.buytovar,kateg_tovar,providers where providers_CodeProvider = CodeProvider AND Kateg_tovar_Code_categ = Code_categ and Name = @name;", conn);
            command.Parameters.AddWithValue("name", nameProviders);
            try
            {
                sqlReader = command.ExecuteReader();

                while (await sqlReader.ReadAsync())
                {
                    ListViewItem item = new ListViewItem(new string[] {
                    Convert.ToString(sqlReader["Код закупки"]),
                    Convert.ToString(sqlReader["Цена закупки"]),
                    Convert.ToString(sqlReader["Обьём закупки"]),
                    Convert.ToString(sqlReader["Название товара"]),
                    Convert.ToString(sqlReader["Дата закупки"]),
                    Convert.ToString(sqlReader["Категория товара"]),

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
            conn.Close();
        }

        private void button8_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void button7_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
