using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Quiz_Backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;

        public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] Credentials credentails)
        {
            var user = new IdentityUser { UserName = credentails.Email, Email = credentails.Email };
            var result = await userManager.CreateAsync(user, credentails.Password);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
            await signInManager.SignInAsync(user, isPersistent: false);// since we dont use coockies but the more stateless tokens we set is persistance to false

            return Ok(CreateToken(user));
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Credentials credentials)
        {
            var result = await signInManager.PasswordSignInAsync(credentials.Email, credentials.Password, false, false);
            if (!result.Succeeded)
            {
                return BadRequest();// result dont have errors property 
            }

            var user = await userManager.FindByEmailAsync(credentials.Email);
            return Ok(CreateToken(user));
        }

        private string CreateToken(IdentityUser user)
        {
            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id)
            };

            var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is the secret phrase"));
            var sigingCredentials = new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256);

            /*Our user Id is embedded with the token itself. When a new user registers, that id will be held on that token on their browser and then passed back to any secure request*/
            var jwt = new JwtSecurityToken(signingCredentials: sigingCredentials, claims: claims);

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }

    }

    public class Credentials
    {
        public string Email { get; set; }
        public string Password { get; set; } // Abc123!
    }
}

