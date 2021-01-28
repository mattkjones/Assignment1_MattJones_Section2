using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range (0,100)]
        public float assign { get; set; }
        [Required]
        [Range(0, 100)]
        public float group { get; set; }
        [Required]
        [Range(0, 100)]
        public float quiz { get; set; }
        [Required]
        [Range(0, 100)]
        public float exam { get; set; }
        [Required]
        [Range(0, 100)]
        public float INTEX { get; set; }
    }
}
