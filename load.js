var filestring = false; 
function load_file(){
	var fileToLoad = document.getElementById("fileToLoad").files[0];
	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) {
		var textFromFileLoaded = fileLoadedEvent.target.result;
		filestring = textFromFileLoaded;
		save = JSON.parse(filestring);
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}