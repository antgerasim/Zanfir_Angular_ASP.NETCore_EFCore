using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quiz_Backend.Data;
using Quiz_Backend.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz_Backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        private readonly QuizContext context;

        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return context.Questions;
        }

        // GET api/values
        [HttpGet("{quizId}")]
        public IEnumerable<Question> Get([FromRoute] int quizId)
        {
            return context.Questions.Where(q => q.Id == quizId);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Question question)
        {
            var quiz = context.Quiz.SingleOrDefault(q => q.Id == question.QuizId);

            if (quiz == null)
            {
                return NotFound();
            }

            context.Questions.Add(question);
            await context.SaveChangesAsync();
            return Ok(question);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(int id, [FromBody]Question questionData)
        {
            //var question = await context.Questions.SingleOrDefaultAsync(q => q.Id == id); dont need since using context.entry

            if (id != questionData.Id)
            {
                return BadRequest();
            }
            context.Entry(questionData).State = EntityState.Modified;

            await context.SaveChangesAsync();

            return Ok(questionData);
        }
    }
}

