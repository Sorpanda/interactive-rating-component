let rating = 0;
document.getElementById("rating1").onclick = function() {
  rating = 1;
  document.getElementById("selectedRating").innerHTML = rating;
}

document.getElementById("rating2").onclick = function() {
  rating = 2;
  document.getElementById("selectedRating").innerHTML = rating;
}

document.getElementById("rating3").onclick = function() {
  rating = 3;
  document.getElementById("selectedRating").innerHTML = rating;
}

document.getElementById("rating4").onclick = function() {
  rating = 4;
  document.getElementById("selectedRating").innerHTML = rating;
}

document.getElementById("rating5").onclick = function() {
  rating = 5;
  document.getElementById("selectedRating").innerHTML = rating;
}

function switchVisible() {
    if (document.getElementById('survey').style.display == 'none') {   
        }
        else {
            document.getElementById('survey').style.display = 'none';
            document.getElementById('afterSubmit').style.display = 'block';
        }
    }
   


