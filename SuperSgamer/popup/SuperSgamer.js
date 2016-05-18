document.getElementById("jrzbwrap").style.display="none";
alert("aa");


document.addEventListener("DOMContentLoaded", function () {
  checkLocalStorage();
  alert("a11a");
  document.getElementById("DailyLiveMenu").addEventListener("click", function () {
		alert("aa");
    localStorage.setItem("DailyLiveMenu",document.getElementById("DailyLiveMenu").checked);
    location.reload();
  });
  document.getElementById("RepeatRows").addEventListener("click", function () {
		alert("bb");
    localStorage.setItem("RepeatRows",document.getElementById("RepeatRows").checked);
    location.reload();
  });
	document.getElementById("Medal").addEventListener("click", function () {
    localStorage.setItem("Medal",document.getElementById("Medal").checked);
    location.reload();
  });
	document.getElementById("sgFarmButton").addEventListener("click", function () {
		alert("cc");
		location.reload();
	});
});


function checkLocalStorage(){
  if (window.localStorage == null) {
    alert("本地不支持localStorage,功能失效");
  }
  else{
    loadLocalStorage();
  }
}

function loadLocalStorage(){
	window.console.log("ss");
}
