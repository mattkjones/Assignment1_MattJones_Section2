//Function to calculate the final grade and letter grade
$("#submitbutton").click(function () {

    //declare variables used for grade calculation and set the input variables equal to the input boxes. use parseFloat to make them usable in calculations
    var assignments = parseFloat($("#assign").val());
    var groupProject = parseFloat($("#group").val());
    var quizzes = parseFloat($("#quiz").val());
    var exams = parseFloat($("#exam").val());
    var INTEX = parseFloat($("#INTEX").val());
    var finalGrade;
    var letterGrade;

    //calculate final grade based on weights declared in syllabus
    finalGrade = (assignments * .50) +
        (groupProject * .10) +
        (quizzes * .10) +
        (exams * .20) +
        (INTEX * .10)

    //switch statement to select letter grade based off of final grade
    switch (true) {
        case finalGrade >= 94:
            letterGrade = "A";
            break;
        case finalGrade >= 90:
            letterGrade = "A-"
            break;
        case finalGrade >= 87:
            letterGrade = "B+"
            break;
        case finalGrade >= 84:
            letterGrade = "B";
            break;
        case finalGrade >= 80:
            letterGrade = "B-"
            break;
        case finalGrade >= 77:
            letterGrade = "C+"
            break;
        case finalGrade >= 74:
            letterGrade = "C";
            break;
        case finalGrade >= 70:
            letterGrade = "C-"
            break;
        case finalGrade >= 67:
            letterGrade = "D+"
            break;
        case finalGrade >= 64:
            letterGrade = "D";
            break;
        case finalGrade >= 60:
            letterGrade = "D-"
            break;
        default:
            letterGrade = "F"
    }

    //alert the user of their final grade as a percentage as well as their letter grade
    alert(finalGrade + "% which is a " + letterGrade);

});