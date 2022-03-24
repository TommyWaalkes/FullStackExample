using FullStack.Models;
using Microsoft.AspNetCore.Mvc;

namespace FullStack.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CatsController : ControllerBase
    {
        CatsContext db = new CatsContext();

        [HttpGet]
        public List<Cat> GetCats()
        {
            return db.Cats.ToList();
        }

        [HttpGet("{id}")]
        public Cat GetCat(int id)
        {
            List<Cat> cats = db.Cats.ToList();

            Cat c = cats.Where(c => c.Id == id).First();

            return c;
        }

        [HttpDelete("{id}")]
        public void DeleteCat(int id)
        {
            Cat? c = db.Cats.Find(id);
            db.Cats.Remove(c);
            db.SaveChanges();

        }

        [HttpPost("{id}")]
        public void UpdateCat(int id, Cat updatedCat)
        {
            //Cat c = db.Cats.Find(id);
            updatedCat.Id = id;
            db.Cats.Update(updatedCat);

            db.SaveChanges();
        }

        [HttpPut]
        public void CreateCat(Cat newCat)
        {
            db.Cats.Add(newCat);
            db.SaveChanges();
        }
    }
}
