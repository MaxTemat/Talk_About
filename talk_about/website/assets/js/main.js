/*************************************************
The Maxt JS template
*************************************************/

/********** Header scroll **************/
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
/********** End header scroll **************/

/********** Show send SMS button **********/

  function ShowHide_Send() {
    let divSendSms = document.getElementById("send_sms").innerHTML;
    let sendFile = document.getElementById("send_file");
    let sendVoice = document.getElementById("send_voice");
    let sendBtn = document.getElementById("send_btn");
    
    if (divSendSms.length > 0) {
      sendFile.style.display='none';
      sendVoice.style.display='none';
      sendBtn.style.display='inline';
    } else {
      sendFile.style.display='inline';
      sendVoice.style.display='inline';
      sendBtn.style.display='none';
    }
  }

/********** End show send SMS button **********/