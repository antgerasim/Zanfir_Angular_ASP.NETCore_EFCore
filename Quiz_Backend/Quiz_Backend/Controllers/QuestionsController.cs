using Microsoft.AspNetCore.Mvc;
using Quiz_Backend.Data;
using Quiz_Backend.Models;
using System.Collections.Generic;

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
            return new Question[] {
                new Question(){ Text = "hello"},
                new Question(){Text = "hi"}
            };
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Question question)
        {
            context.Questions.Add(question);
            context.SaveChanges();
        }
    }
}

//weiter mit D:\Torrents\Building Applications with Angular, ASP.NET Core, and Entity Framework Core\5. Displaying and Editing Data in Angular with ASP.NET Core\609024_05_01 - Show questions component in Angular.mp4