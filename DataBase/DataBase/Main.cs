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
using System.Diagnostics;
namespace DataBase
{
    public partial class Main : Form
    {
        public Main()
        {
            InitializeComponent();
        }


        private void button8_Click(object sender, EventArgs e)
        {
            this.Close();
            Application.Exit();
        }



        private void button7_Click_1(object sender, EventArgs e)
        {
            this.Close();

        }

       





        private void назадыToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void выйтыToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Close();
            Application.Exit();
        }

    
        private void оПрограммеToolStripMenuItem_Click(object sender, EventArgs e)
        {
            AboutProg aboutProg = new AboutProg();
            this.Hide();
            aboutProg.ShowDialog();
            this.Show();
        }

        private void помощьToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Help.ShowHelp(this, "Rucovodstvo.chm", HelpNavigator.TableOfContents);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            this.Hide();
            Tovar Tovar = new Tovar();
            Tovar.ShowDialog();
            this.Show();
           
        }

        private void button9_Click(object sender, EventArgs e)
        {
            this.Hide();
            workers workers = new workers();
            workers.ShowDialog();
            this.Show();
        }

   
    }
}
