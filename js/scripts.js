$("form.input-form").submit(function(event){
var date = $("input#date").val();
$("#list p").append(date);
  event.preventDefault();
});
