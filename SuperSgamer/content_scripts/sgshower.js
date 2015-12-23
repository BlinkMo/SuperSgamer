document.getElementById("jrzbwrap").style.display="none";


var TFlength = document.getElementById("postlist").getElementsByClassName("t_f").length;

var arrayPostId = new Array(TFlength);
var arrayPostMessage = new Array(TFlength);
var arrayPost = new Array(TFlength);

for(var i=0;i<TFlength;i++)
{
	arrayPostId[i] = document.getElementById("postlist").getElementsByClassName("t_f")[i].id;
	arrayPostMessage[i] = document.getElementById("postlist").getElementsByClassName("t_f")[i].innerText;
	arrayPost[i] = arrayPostId[i].substring(0,4)+arrayPostId[i].substring(11);
}
for(i=1;i<TFlength;i++)
{
	for(var j=0;j<i;j++)
	{
		if(arrayPostMessage[i] == arrayPostMessage[j])
		{
			document.getElementById(arrayPost[i]).style.display="none";
			break;
		}
	}
}

