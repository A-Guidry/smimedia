function toggleOff(id)
{var e=document.getElementById(id);e.style.display="none";}

function toggleOn(id)
{var e=document.getElementById(id);e.style.display="";}

function fadeIn(id)
{jQuery('#'+id+'').fadeIn(800);}

function fadeOut(id)
{$('#'+id+'').fadeOut(800);}

function slideDown(id)
{$('#'+id+'').slideDown(800);}

function slideUp(id)
{$('#'+id+'').slideUp(800);} 


function checkEmail(email){var isValid=true;AtPos=email.indexOf("@")
StopPos=email.lastIndexOf(".")
if(AtPos==-1||StopPos==-1){isValid=false;}if(StopPos<AtPos){isValid=false;}if(StopPos-AtPos==1){isValid=false;}return isValid;}

function run(url){var ajaxReq;try{ajaxReq=new XMLHttpRequest();}
catch(e){try{ajaxReq=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e){try{ajaxReq=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e){alert("The Web site does use JavaScript. Please enable JavaScript through your browser preferences.");return false;}}}
ajaxReq.open("GET",url);ajaxReq.send(null);}

function notify(id){fadeIn(id);setInterval("endNotification(\'"+id+"\')",4000);}
function endNotification(identifier){fadeOut(identifier);}
