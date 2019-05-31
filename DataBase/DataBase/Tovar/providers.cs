using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Windows.Forms;
using System.Data.Common;
using MySql.Data.MySqlClient;

namespace DataBase
{
    public partial class providers : Form
    {
        MySqlDataAdapter mda;
        DataSet ds;
        MySqlCommandBuilder bilder;
        public providers()
        {
            InitializeComponent();
        }

        private void providers_Load(object sender, EventArgs e)
        {
            MySqlConnection conn = DBUtils.GetDBConnection();
            conn.Open();
            mda = new MySqlDataAdapter(" SELECT CodeProvider AS 'Код поставщика',  Name AS 'Название поставщика', Address AS 'Адрес', Phone AS 'Телефон', INN AS 'ИНН'  FROM providers;", conn);
            mda.MissingSchemaAction = MissingSchemaAction.AddWithKey;
            ds = new DataSet();
            bilder = new MySqlCommandBuilder(mda);
            mda.Fill(ds, "providers");
            dataGridView1.DataSource = ds.Tables["providers"];
            dataGridView1.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            mda.Update(ds.Tables["providers"]);
            MessageBox.Show("Изменения сохранены");
        }

        private void button7_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void button8_Click(object sender, EventArgs e)
        {
            this.Close();
            Environment.Exit(0);
        }
    }
}
