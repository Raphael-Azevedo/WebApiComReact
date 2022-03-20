using AlunosApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AlunosApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunosController : ControllerBase
    {
        private IAlunosService _alunosService;

        public AlunosController(IAlunosService alunosService)
        {
            _alunosService = alunosService;
        }
    }
}
