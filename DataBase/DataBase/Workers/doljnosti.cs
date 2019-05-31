using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace DataBase
{
    public partial class doljnosti : Form
    {

        MySqlDataAdapter mda;
        DataSet ds;
        MySqlCommandBuilder bilder;
        public doljnosti()
        {
            InitializeComponent();
        }

        private void doljnosti_Load(object sender, EventArgs e)
        {

            MySqlConnection conn = DBUtils.GetDBConnection();
            conn.Open();


            mda = new MySqlDataAdapter(" SELECT codePositions AS 'Код должности',  namePosition AS 'Название должности', salary AS 'зарплата' FROM positions;", conn);
            mda.MissingSchemaAction = MissingSchemaAction.AddWithKey;
            ds = new DataSet();
            bilder = new MySqlCommandBuilder(mda);
            mda.Fill(ds, "positions");
            dataGridView1.DataSource = ds.Tables["positions"];
            dataGridView1.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            mda.Update(ds.Tables["positions"]);
            MessageBox.Show("Изменения сохранены");
        }

        private void button7_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void button8_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }
    }
}
