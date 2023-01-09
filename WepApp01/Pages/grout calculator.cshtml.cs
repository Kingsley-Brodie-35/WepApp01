using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WepApp01.Pages
{
    [BindProperties]
    public class GroutCalculatorsModel : PageModel
    {
        public int length { get; set; }
        public int width { get; set; }
        public int depth { get; set; }
        public float spacers { get; set; }
        public int area { get; set; }
        public float totalGrout { get; set; }    

        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            totalGrout = ((width + length) * (spacers * depth) * 2) / (width * length) * area;
            totalGrout = (float)((totalGrout * .15) + totalGrout);
            return Page();
        }
    }
}
