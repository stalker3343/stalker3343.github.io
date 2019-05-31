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
namespace DataBase
{
    public partial class zakupkaTov : Form
    {
        private MySqlConnection conn = null;
        public zakupkaTov()
        {
            InitializeComponent();
        }

        private void выходToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }


        private async void zakupkaTov_Load(object sender, EventArgs e)
        {
            const string Connect = "Server =  127.0.0.1; Database = corsov; port= 3306; User Id = root; password= 12345";
            conn = new MySqlConnection(Connect);
         
            await conn.OpenAsync();
            listView1.GridLines = true;
            listView1.FullRowSelect = true;
            listView1.View = View.Details;
            listView1.Columns.Add("Код закупки");
            listView1.Columns.Add("Цена закупки");
            listView1.Columns.Add("Обьём закупки");
            listView1.Columns.Add("Название товара");
            listView1.Columns.Add("Дата закупки");
            listView1.Columns.Add("Поставщик");

            listView2.GridLines = true;
            listView2.FullRowSelect = true;
            listView2.View = View.Details;
            listView2.Columns.Add("Код закупки");
            listView2.Columns.Add("Цена закупки");
            listView2.Columns.Add("Обьём закупки");
            listView2.Columns.Add("Название товара");
            listView2.Columns.Add("Дата закупки");
            listView2.Columns.Add("Поставщик");

            //listView3.GridLines = true;
            //listView3.FullRowSelect = true;
            //listView3.View = View.Details;
            //listView3.Columns.Add("Код закупки");
            //listView3.Columns.Add("Цена закупки");
            //listView3.Columns.Add("Обьём закупки");
            //listView3.Columns.Add("Название товара");
            //listView3.Columns.Add("Дата закупки");
            //listView3.Columns.Add("Поставщик");

            listView4.GridLines = true;
            listView4.FullRowSelect = true;
            listView4.View = View.Details;
            listView4.Columns.Add("Код закупки");
            listView4.Columns.Add("Цена закупки");
            listView4.Columns.Add("Обьём закупки");
            listView4.Columns.Add("Название товара");
            listView4.Columns.Add("Дата закупки");
            listView4.Columns.Add("Поставщик");

            listView5.GridLines = true;
            listView5.FullRowSelect = true;
            listView5.View = View.Details;
            listView5.Columns.Add("Код закупки");
            listView5.Columns.Add("Цена закупки");
            listView5.Columns.Add("Обьём закупки");
            listView5.Columns.Add("Название товара");
            listView5.Columns.Add("Дата закупки");
            listView5.Columns.Add("Поставщик");

            listView6.GridLines = true;
            listView6.FullRowSelect = true;
            listView6.View = View.Details;
            listView6.Columns.Add("Код закупки");
            listView6.Columns.Add("Цена закупки");
            listView6.Columns.Add("Обьём закупки");
            listView6.Columns.Add("Название товара");
            listView6.Columns.Add("Дата закупки");
            listView6.Columns.Add("Поставщик");

            listView7.GridLines = true;
            listView7.FullRowSelect = true;
            listView7.View = View.Details;
            listView7.Columns.Add("Код закупки");
            listView7.Columns.Add("Цена закупки");
            listView7.Columns.Add("Обьём закупки");
            listView7.Columns.Add("Название товара");
            listView7.Columns.Add("Дата закупки");
            listView7.Columns.Add("Поставщик");

            listView8.GridLines = true;
            listView8.FullRowSelect = true;
            listView8.View = View.Details;
            listView8.Columns.Add("Код закупки");
            listView8.Columns.Add("Цена закупки");
            listView8.Columns.Add("Обьём закупки");
            listView8.Columns.Add("Название товара");
            listView8.Columns.Add("Дата закупки");
            listView8.Columns.Add("Поставщик");


            await LoadZakupki(listView1, 3);
            await LoadZakupki(listView2, 4);
            //await LoadZakupki(listView3, 5);
            await LoadZakupki(listView4, 5);
            await LoadZakupki(listView5, 6);
            await LoadZakupki(listView6, 7);
            await LoadZakupki(listView7, 8);
            await LoadZakupki(listView8, 9);

            listView1.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listView1.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);
            listView2.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listView2.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);

            listView3.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listView3.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);

            listView4.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listView4.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);

            listView5.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listView5.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);

            listView6.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listView6.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);

            listView7.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listView7.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);

            listView8.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listView8.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);


        }
        private async Task LoadAllZakupki()
        {
            await LoadZakupki(listView1, 3);
            await LoadZakupki(listView2, 4);
            //await LoadZakupki(listView3, 5);
            await LoadZakupki(listView4, 5);
            await LoadZakupki(listView5, 6);
            await LoadZakupki(listView6, 7);
            await LoadZakupki(listView7, 8);
            await LoadZakupki(listView8, 9);
        }

        private async Task ClearAllZakupki()
        {
            listView1.Items.Clear();
            listView2.Items.Clear();
            listView4.Items.Clear();
            listView5.Items.Clear();
            listView6.Items.Clear();
            listView7.Items.Clear();
            listView8.Items.Clear();
    
        }

        private async Task LoadZakupki( ListView lisVie, int codeZakup)
        {
            MySqlDataReader sqlReader = null;
            MySqlCommand command = new MySqlCommand(@" SELECT `Kod zakupki` As 'Код закупки',`Zena zakupki` As 'Цена закупки',`Objom zakupki` As 'Обьём закупки',`Nazvanie tovara` As 'Название товара',  DATE_FORMAT(`Date zakupki`,'%d/%m/%Y') As 'Дата закупки', Name As 'Поставщик', NameCateg As 'Категория товара',Code_categ,CodeProvider FROM corsov.buytovar,kateg_tovar,providers where providers_CodeProvider = CodeProvider AND Kateg_tovar_Code_categ = Code_categ and Kateg_tovar_Code_categ=@code;", conn);
            command.Parameters.AddWithValue("code", codeZakup);
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
                    Convert.ToString(sqlReader["Поставщик"]),

                         });
                    lisVie.Items.Add(item);
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

        private async void toolStripButton1_Click(object sender, EventArgs e)
        {
            zakupkaAdd zakupkaAdd = new zakupkaAdd(conn);
            this.Hide();
            zakupkaAdd.ShowDialog();
            ClearAllZakupki();
            await LoadAllZakupki();
            this.Show();
        }


        private async void toolStripButton2_Click(object sender, EventArgs e)
        {
            ListView lV = (ListView)tabControl1.SelectedTab.Controls[0];
            
            if (lV.SelectedItems.Count > 0)
            {
                ZakupkaUdate zakupkiUpdate = new ZakupkaUdate(conn, Convert.ToInt32(lV.SelectedItems[0].SubItems[0].Text));
                this.Hide();
                zakupkiUpdate.ShowDialog();
                ClearAllZakupki();
                  await LoadAllZakupki();
                this.Show();

            }
            else
            {
                MessageBox.Show("Выделете строку для изменения", "Ошибка", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private async void toolStripButton3_Click(object sender, EventArgs e)
        {
            ListView lV = (ListView)tabControl1.SelectedTab.Controls[0];
            if (lV.SelectedItems.Count > 0)
            {
                DialogResult res = MessageBox.Show("Вы действительно хотите удалить данную закупку", "Удаление закупки", MessageBoxButtons.OKCancel, MessageBoxIcon.Exclamation);
                switch (res)
                {
                    case DialogResult.OK:
                        MySqlCommand dellSotrComand = new MySqlCommand("DELETE FROM `corsov`.`buytovar` WHERE (`Kod zakupki` = @id);", conn);
                        dellSotrComand.Parameters.AddWithValue("id", Convert.ToInt32(lV.SelectedItems[0].SubItems[0].Text));
                        try
                        {
                            await dellSotrComand.ExecuteNonQueryAsync();
                        }
                        catch (Exception exp)
                        {
                            MessageBox.Show(exp.Message.ToString(), exp.Source.ToString(), MessageBoxButtons.OK, MessageBoxIcon.Error);
                        }
                        ClearAllZakupki();
                        await LoadAllZakupki();
                        break;
                }
            }
            else
            {
                MessageBox.Show("Выделете строку для удаления", "Ошибка", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void button8_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void button7_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void button9_Click(object sender, EventArgs e)
        {
            zatratizakupki zatratiZakup = new zatratizakupki(conn);
            this.Hide();
            zatratiZakup.ShowDialog();
            this.Show();
        }
    }
}
