$(document).ready(function() {
    $("#jobSearchSubmit").click(function() {
      $('.show-grid').remove()
	  $('p').remove()
      var dept = $( "#jobSearch option:selected" ).text();
	  if(dept == 'PW & IT'){
		  dept = '.net Developer II';
	  }
      var jobLocation = $( "#locationSearch option:selected" ).text();
      var jobtype = $( "#jobTypeSearch option:selected" ).text();
      /*searchResult */

      var txt1 = "<div style='padding-top:9px;' class='row show-grid'><div class='col-xs-6 col-md-4'>Department";
        var txt2 = "</div><div class='col-xs-6 col-md-4'>Location";
        var txt3 = "</div><div class='col-xs-6 col-md-4'>Role</div></div>";
        $('#searchResult').append(txt1 + txt2 + txt3);
        $('#searchResult').children().first().css({ "background-color": "#0054d5", color: "white" });
      bindJobDetails(dept, jobLocation, jobtype)
      
      $('#searchResult').click(function(e){
            if($(e.target).hasClass("dept-container")){
                var val = $(e.target).text();
                e.stopPropagation();

                var link = "";
                if(val == "HR")
                    link = "https://n2.appone.devmsp.com/MainInfoReq.asp?R_ID=2481582&B_ID=91&fid=1&Adid=&ssbgcolor=273A5B&SearchScreenID=2188&CountryID=23&LanguageID=2";
                else if(val == ".net Developer II")
                    link = "https://n2.appone.devmsp.com/MainInfoReq.asp?R_ID=2481926&B_ID=91&fid=1&Adid=&ssbgcolor=273A5B&SearchScreenID=2188&CountryID=23&LanguageID=2";
                if(link != "")
                    window.open(link);
            }
      });

      $(".show-grid").css("cursor", "pointer");
    });
	
	function bindJobDetails(dept, jobLocation, jobtype){
	  var txt1 = "<div class='row show-grid'><div class='dept-text col-xs-6 col-md-4'>" + dept;
      var txt2 = "</div><div class='col-xs-6 col-md-4'>Bangalore";
      var txt3 =  "</div><div class='col-xs-6 col-md-4 job-type'>" +jobtype+"</div></div>";

      
		if((dept == 'All department') && ((jobLocation == 'All locations') || (jobLocation == 'Bangalore')) && (jobtype == 'All job types')) 
		{
				hcd('HR', 'Bangalore', 'Full Time')
				hcd('.net Developer II', 'Bangalore', 'Full Time')
				hcd('Support', 'Bangalore', 'Full Time')
				hcd('HR', 'Bangalore', 'Part Time')
				hcd('.net Developer II', 'Bangalore', 'Part Time')
				hcd('Support', 'Bangalore', 'Part Time')
				hcd('HR', 'Bangalore', 'Contract')
				hcd('.net Developer II', 'Bangalore', 'Contract')
				hcd('Support', 'Bangalore', 'Contract')
		}
		else if(jobLocation == 'Delhi'){
			var noresultext = "<p style='text-align:center;'>No Result ...........</p>"
			$('#searchResult').append(noresultext)
		}
		else {
			$('#searchResult').append(txt1 +txt2+ txt3)
		}
	}
	
	function hcd(dept, jobLocation, jobtype){
		var hcd1 = "<div class='row show-grid'><div  class='dept-container container-cell col-xs-6 col-md-4'>" + dept;
		var hcd2 = "</div><div class='container-cell col-xs-6 col-md-4'>" +jobLocation;
		var hcd3 =  "</div><div class='col-xs-6 col-md-4 job-type'>" +jobtype+"</div></div>"; 
		
		
		$('#searchResult').append($(hcd1 +hcd2+ hcd3));
	}
  });
  
  