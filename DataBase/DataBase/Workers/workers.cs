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
    public partial class workers : Form
    {
        public workers()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void Doljnosti_Click(object sender, EventArgs e)
        {
            this.Hide();
            doljnosti doljnosti = new doljnosti();
            doljnosti.ShowDialog();
            this.Show();
        }

        private void workersList_Click(object sender, EventArgs e)
        {
            this.Hide();
            sotrudniki sotrudniki = new sotrudniki();
            sotrudniki.ShowDialog();
            this.Show();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            this.Hide();
            vacationSchedule vacationSchedule = new vacationSchedule();
            vacationSchedule.ShowDialog();
            this.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Hide();
            tabelWorkTime tabelWorkTime = new tabelWorkTime();
            tabelWorkTime.ShowDialog();
            this.Show();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Hide();
            vedomostNAchislenia vedomostNAchislenia = new vedomostNAchislenia();
            vedomostNAchislenia.ShowDialog();
            this.Show();
        }

        private void файлToolStripMenuItem_Click(object sender, EventArgs e)
        {

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
