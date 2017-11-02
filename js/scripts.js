$("form.input-form").submit(function(event){

var date = $("input#date").val();
var activity =$("input#activity").val();
var from = $("input#from").val();
var to = $("input#to").val();


$("#list ul").append("<li> From " + from+ " to "+to+", on "+date+" : Do "+activity+".</li>"+"<input type='radio'>Done</input>"+"<input type='radio>TO DO</input>'");

event.preventDefault();
});
