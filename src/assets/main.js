$(function() {

  // your code will go here
  $.ajax({
   url: 'https://www.codeschool.com/users/hguonave.json',
   dataType: 'jsonp',
   success: function(response) {
     var coursesCompleted = response.courses.completed;
     $.each(coursesCompleted, function(index, el)
      {
        $("#badges").append('<div class="course"></div>');
        $( ".course" ).html("<h3>"+el.title+"</h3>");
        $( ".course" ).html('<img src="'+el.badge+'"/>');
        $( ".course" ).html('<a href="'+el.url+'" target="_blank" class="btn btn-primary">See Course</a>');
      });
   }
 });

});
