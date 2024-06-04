const displayGrading = () => {
    document.getElementById("gradingBtn").addEventListener("click", (e) => {
    let gradesInput = document.getElementById("grades").value;
    let input = gradesInput.split(",").map((string) => Number(string));
    let output = grades(input);
    document.getElementById("gradeInput").innerHTML = `Grades Submitted: <br><br>${input.join(", ")}`;
    
    let outputString = `
    <br>
    Total: ${output.Total} <br>
    Average: ${output.Average} <br>
    Highest: ${output.Highest} <br>
    Lowest: ${output.Lowest} <br>
    Passing: ${output.Passing}`;

    document.getElementById("gradeOutput").innerHTML = `Results: <br>${outputString}`;

    });
}

        
function grades(input){
    let output = {};
    let totalValue = 0;
    let passingValue;
    let highestValue = Math.max.apply(null, input);
    let lowestValue = Math.min.apply(null, input);
    for (let i=0; i<input.length; i++){
        totalValue += input[i];

        if (output.Average >= 60){
            passingValue = true;
        }else{
            passingValue = false;
        }

        output["Total"] = totalValue;
        output["Average"] = parseFloat((output["Total"]/input.length).toFixed(1));
        output["Highest"] = highestValue;
        output["Lowest"] = lowestValue;
        output["Passing"] = passingValue;    
    };

    console.log(output);
    return output;
}


displayGrading();

