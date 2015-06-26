window.addEventListener("DOMContentLoaded", function() {

  $("#myModal #submitButton").click(function() { 
      var text = $("#message-text").val();
      $('#myModal').modal('hide');
      alert(text);
  });

})