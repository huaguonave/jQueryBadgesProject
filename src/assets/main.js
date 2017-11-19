$(function() {

  // your code will go here
  $.ajax({
   url: 'https://www.codeschool.com/users/hguonave.json',
   dataType: 'jsonp',
   success: function(response) {
     var coursesCompleted = response.courses.completed;
     $.each(coursesCompleted, function(index, el)
      {
        $("#badges").append('<div class="course"><h3>'+el.title+'</h3><img src="'+el.badge+'"/><a href="'+el.url+'" target="_blank" class="btn btn-primary">See Course</a></div>');
      });
   }
 });

});
