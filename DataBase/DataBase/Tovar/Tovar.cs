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
    public partial class Tovar : Form
    {
        public Tovar()
        {
            InitializeComponent();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Hide();
            providers providers = new providers();
            providers.ShowDialog();
            this.Show();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Hide();
            kategTovar kategTovar = new kategTovar();
            kategTovar.ShowDialog();
            this.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            this.Hide();
            zakupkaTov zakupkaTov = new zakupkaTov();
            zakupkaTov.ShowDialog();
            this.Show();
        }

        private void button7_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void назадыToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void выйтыToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
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
            zakupkaUPostavshika zakupkaUPostavshika = new zakupkaUPostavshika();
            this.Hide();
            zakupkaUPostavshika.ShowDialog();
            this.Show();
        }
    }
}
