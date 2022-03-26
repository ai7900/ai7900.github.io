
const source = 
["DLRAW.NET-0001.jpg",
"DLRAW.NET-0002.jpg",
"DLRAW.NET-0003.jpg",
"DLRAW.NET-0004.jpg",
"DLRAW.NET-0005.jpg",
"DLRAW.NET-0006.jpg",
"DLRAW.NET-0007.jpg",
"DLRAW.NET-0008.jpg",
"DLRAW.NET-0009.jpg",
"DLRAW.NET-0010.jpg",
"fade.png",
"laffing-girlf.gif",
"yukkuri.jpg",
]

const path = "content/";


/*
const path = "file:///C:/Users/matst/Documents/GitHub/raspberry_pi_server/RBPI website/content/filenames.txt";

function readTextFile(file)
{
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function(){
		if(rawFile.readystate === 4)
		{
			if(rawFile.status === 200 || rawfile.status == 0)
			{
				var allText = rawFile.responseText;
				alert(allText);
			}
		}
	}
	rawFile.send(null);
}
*/

function addElement()
{	
	//readTextFile(path);
	
	//lists the source images in source
	source.forEach(element => console.log(element));
	
	source.forEach((element) => {
		var elem = document.createElement("img");
		elem.setAttribute("src", path + element);
		document.getElementById("placehere").appendChild(elem);
	})
	
	var test = document.createElement("P");
	test.innerText = "test";
	document.getElementById("placehere").appendChild(test);
}