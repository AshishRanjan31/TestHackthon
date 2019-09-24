$(document).ready(function() {
    $("#jobSearchSubmit").click(function() {
      $('.show-grid').remove()
      var dept = $( "#jobSearch option:selected" ).text();
      var jobLocation = $( "#locationSearch option:selected" ).text();
      var jobtype = $( "#jobTypeSearch option:selected" ).text();
      /*searchResult */

      var txt1 = "<div class='row show-grid'><div class='col-xs-6 col-md-4'>" + dept;
      var txt2 = "</div><div class='col-xs-6 col-md-4'>" +jobLocation;
      var txt3 =  "</div><div class='col-xs-6 col-md-4 job-type'>" +jobtype+"</div></div>";

      $('#searchResult').append(txt1 +txt2+ txt3)
        
       
    });
  });