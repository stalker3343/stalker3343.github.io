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
    public partial class kategTovar : Form
    {
        MySqlDataAdapter mda;
        DataSet ds;
        MySqlCommandBuilder bilder;
        public kategTovar()
        {
            InitializeComponent();
        }
        private void kategTovar_Load(object sender, EventArgs e)
        {
                MySqlConnection conn = DBUtils.GetDBConnection();
                conn.Open();
                mda = new MySqlDataAdapter(" SELECT Code_categ AS 'Код категории',  NameCateg AS 'Название катеории товара', Opisanie AS 'Описание категории', Nazenka AS 'Наценка'  FROM corsov.kateg_tovar ORDER BY 'Код категории';", conn);
                mda.MissingSchemaAction = MissingSchemaAction.AddWithKey;
                ds = new DataSet();
                bilder = new MySqlCommandBuilder(mda);
                mda.Fill(ds, "Kateg_tovar");
                dataGridView1.DataSource = ds.Tables["Kateg_tovar"];
                dataGridView1.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill;
        }


        private void button8_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void button7_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            mda.Update(ds.Tables["Kateg_tovar"]);
            MessageBox.Show("Изменения сохранены");
        }
    }
}
