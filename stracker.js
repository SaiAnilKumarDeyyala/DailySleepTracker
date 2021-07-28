var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var timeAdder = document.getElementById('timeAdder');
var btn = document.getElementById('addBtn');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  timeAdder.style.display = "block";
}

span.onclick = function() {
  timeAdder.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    timeAdder.style.display = "none";
  }
}

var n = 1;
var x = 0;

function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * (1000 * 60 * 60);
    var minutes = Math.floor(diff / 1000 / 60);
    diff -= minutes * (1000 * 60);
    var seconds = Math.floor(diff / 1000);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;

    var totalTime = (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes + ":" + (seconds<= 9 ? "0" : "") + seconds;
    var splitTime = totalTime.split(':');
    return splitTime[0] + " hrs " + splitTime[1] + " minutes ";
}


document.getElementById("btn").addEventListener("click", function(event){
  event.preventDefault();
  var AddRown = document.getElementById('show');
  var NewRow = AddRown.insertRow(n);

  list1[x] = document.getElementById("date").value;
  startTime = document.getElementById("bedTime").value;
  endTime = document.getElementById("wakeUpTime").value;
  

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);

  

  cel1.innerHTML = list1[x];
  cel2.innerHTML = startTime;
  cel3.innerHTML = endTime;
  cel4.innerHTML = diff(startTime,endTime);

  n++;
  x++;
});
