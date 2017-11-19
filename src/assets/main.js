$(function() {

  // your code will go here
  $.ajax({
   url: 'https://www.codeschool.com/users/hguonave.json',
   dataType: 'jsonp',
   success: function(response) {
     $.each(response, function(index, el)
      {
        var coursesCompleted = response.courses.completed;
        $("#badges").append('<div class="course"></div>');
        $( ".course" ).append("<h3>"+coursesCompleted[index].title+"</h3>");
        $( ".course" ).append('<img src="'+coursesCompleted[index].badge+'"/>');
        $( ".course" ).append('<a href="'+coursesCompleted[index].url+'" target="_blank" class="btn btn-primary">See Course</a>');
      });
   }
 });

});
