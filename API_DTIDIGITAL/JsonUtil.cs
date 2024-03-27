using API_DTIDIGITAL.Entidades;
using Newtonsoft.Json;
using System.Text;

namespace API_DTIDIGITAL
{
    public class JsonUtil
    {
        public static List<Lembrete> CarregarJsons()
        {
            var file = @"Lembretes.json";

            return JsonConvert.DeserializeObject<List<Lembrete>>(File.ReadAllText(file, Encoding.UTF8));
        }

        public static bool ModificarJson(List<Lembrete> newJson)
        {
            try
            {
                List<Lembrete> novo = newJson;
                string output = JsonConvert.SerializeObject(novo);

                File.WriteAllText(@"Lembretes.json", output);
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }
        }
    }
}
