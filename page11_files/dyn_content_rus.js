$(document).ready(function(){var e=!1,n=parseInt(document.getElementById("start_page").innerHTML)
$(window).scroll(function(){e||n<30&&$(window).scrollTop()+$(window).height()>document.getElementById("footer").offsetTop&&$.ajax({url:"/rus/auth/dyn-content/page_"+n+"/",method:"GET",beforeSend:function(){e=!0}}).done(function(o){$("#endless").append(o),e=!1,n+=1})})})
