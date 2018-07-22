using Microsoft.EntityFrameworkCore;
using Quiz_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz_Backend.Data
{
    public class QuizContext : DbContext
    {
        public QuizContext(DbContextOptions<QuizContext> options) : base(options)
        {

        }

        public DbSet<Question> Questions { get; set; }

        public DbSet<Quiz_Backend.Models.Quiz> Quiz { get; set; }
    }
}
