using API_DTIDIGITAL.Entidades;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Immutable;

namespace API_DTIDIGITAL.Controllers
{
    public class LembreteController : MainController
    {
        [HttpGet, Route("Todos")]
        public async Task<IActionResult> buscarTodosLembretes() 
        {
            try
            {
                List<Lembrete> saida = new List<Lembrete>();
                saida = JsonUtil.CarregarJsons();
                return StatusCode(200, saida);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);                
            }
        }

        [HttpGet, Route("{id}")]
        public async Task<IActionResult> buscarLembreteEspecifico([FromRoute] int id)
        {
            try
            {
                Lembrete saida = new Lembrete();

                List<Lembrete> lembretes = JsonUtil.CarregarJsons();
                saida = lembretes.FirstOrDefault(x => x.id == id);
                return StatusCode(200, saida);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost, Route("Criar")]
        public async Task<IActionResult> criarNovoLembrete([FromBody] Lembrete novo)
        {
            try
            {
                List<Lembrete> lembretes = JsonUtil.CarregarJsons();

                if (lembretes.Count > 0)
                {
                    var ultimo = lembretes.LastOrDefault();
                    novo.id = lembretes.LastOrDefault().id+1;
                }
                else 
                {
                    novo.id = 1;
                }

                lembretes.Add(novo);
                JsonUtil.ModificarJson(lembretes);
                
                return StatusCode(200, novo);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete, Route("Deletar/{id}")]
        public async Task<IActionResult> deletarLembrete([FromRoute] int id)
        {
            try
            {
                List<Lembrete> lembretes = new List<Lembrete>();
                lembretes = JsonUtil.CarregarJsons();
                
                Lembrete lembrete = lembretes.FirstOrDefault(x => x.id == id);
                lembretes.Remove(lembrete);

                JsonUtil.ModificarJson(lembretes);

                return StatusCode(200);
            }
            catch (Exception ex)
            {
                return StatusCode(500,ex.Message);
            }
        }
    }
}
