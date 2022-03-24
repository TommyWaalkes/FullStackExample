using System;
using System.Collections.Generic;

namespace FullStack.Models
{
    public partial class Cat
    {
        public int Id { get; set; }
        public string? Fname { get; set; }
        public bool? IsDeclawed { get; set; }
    }
}
