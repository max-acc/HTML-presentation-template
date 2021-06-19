//Made by Max
//Github: https://github.com/max-acc

//Only edit this if you know what you are doing

var openPage = 1;
function nextSubtopic() {
  switch (openPage) {
    case 0:
      window.location.href = "#structure";
      openPage++;
      document.getElementById("inputbox").focus();
      break;
    case 1:
      window.location.href = "#Subtopic01";
      openPage++;
      document.getElementById("inputbox").focus();
      break;
    case 2:
      window.location.href = "#Subtopic02";
      openPage++;
      document.getElementById("inputbox").focus();
      break;
    case 3:
      window.location.href = "#Subtopic03";
      openPage++;
      document.getElementById("inputbox").focus();
      break;
    case 4:
      window.location.href = "#Subtopic04";
      openPage++;
      document.getElementById("inputbox").focus();
      break;
    case 5:
      window.location.href = "#Subtopic05";
      openPage++;
      document.getElementById("inputbox").focus();
      break;
    case 6:
      window.location.href = "#Subtopic06";
      openPage++;
      document.getElementById("inputbox").focus();
      break;
    case 7:
      window.location.href = "#Subtopic07";
      openPage++;
      document.getElementById("inputbox").focus();
      break;
    case 8:
      window.location.href = "#Subtopic08";
      openPage++;
      document.getElementById("inputbox").focus();
      break;
    case 9:
      window.location.href = "#sources";
      openPage++;
      document.getElementById("inputbox").focus();
      break;
    default:
      break;
  }
}
