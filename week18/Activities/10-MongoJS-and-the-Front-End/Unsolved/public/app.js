function displayResults(data) {
  for(i=0; i<data.length; i++){
  var row = $("<tr>")
  var td1 = $("<td>")
  td1.text(data[i].name)
  var td2 = $("<td>")
  td2.text(data[i].numlegs)
  var td3 = $("<td>")
  td3.text(data[i].class)
  var td4 = $("<td>")
  td4.text(data[i].weight)
  var td5 = $("<td>")
  td5.text(data[i].whatIWouldReallyCallIt)
  row.append(td1)
  row.append(td2)
  row.append(td3)
  row.append(td4)
  row.append(td5)
  $("#table").append(row)
  }
}


$.getJSON("/all", function(data) {
  displayResults(data);
});


$("#weight-sort").on("click", function(){
  $("#table").empty()
  $.getJSON("/weight", function(data) {
    displayResults(data);
  });
})


$("#name-sort").on("click", function(){
  $("#table").empty()
  $.getJSON("/name", function(data) {
    displayResults(data);
  });

})

