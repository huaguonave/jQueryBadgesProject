$(function() {

  // your code will go here
  $.ajax({
   url: 'https://www.codeschool.com/users/hguonave.json',
   dataType: 'jsonp',
   success: function(response) {
     $.each(response, function(index, el)
      {
        var courses.completed = response.courses.completed;
        $("#badges").append('<div class="course"></div>');
        $( ".course" ).append("<h3>"+courses.completed[index].title+"</h3>");
        $( ".course" ).append('<img src="'+courses.completed[index].badge+'"/>');
        $( ".course" ).append('<a href="'+courses.completed[index].url+'" target="_blank" class="btn btn-primary">See Course</a>'); 
      });
   }
 });

});
