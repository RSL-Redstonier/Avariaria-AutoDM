//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------Christmas tree initializer
//Extremely Important.
var decor = `__`
var treTop = []
var t_hig = [  ]
var t_md = [    ]
var t_l = [      ]
var topLog = {}
var bottom = {}

/*
treTop
t_hig
decor
*/
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------Basic Definitions
var mousedownTimeout;
var keyDownHandler;

var R = 0;
var G = 0;
var B = 0;

var mouse_click = false;
var mouse_click_time = 0;

var weight_symbol = "W";
var gold_symbol = "C";

var tile_h = 25;
var tile_w = 25;

var inventory_page = 0;
var player_page = 0;
var selected_player = 0;
var selected_page = "Main";
var selected_tile = 50;
var draw = topLog;

var button_bar = true;
var editing = false;
var removing = false;
var prefix = '';

var move = bottom;
move.moving = false;
move.player_to_move = 0;
move.from_tile = 0;

var exception_list = [
  'Ukles',
  'ukles'
];

var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
var month_days = [
31,
28,
31,
30,
31,
30,
31,
31,
30,
31,
30,
31
];

var tile_types = [
  "Water",
  "Grass",
  "Trees",
  "Rock",
  "Sand",
  "Snow"
];

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------Function Setup
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var canvas2 = document.getElementById("map");
var map = canvas2.getContext("2d");

function successFunc(data) {
	var output = '';
	//for(var i = 0; i < strips.length; i++){
	//	output += JSON.stringify(data[i]);
	//}
	alert(data[1]);
}

var search_querry = {
	update: 1
};
Sheetsu.read("https://sheetsu.com/apis/v1.0su/c7ff6b959a92",{search: search_querry},successFunc);

function pick_start(){
  var test = random(123,676);
  if(save.world.Map[test].X_Cord == 0 || save.world.Map[test].X_Cord == 1 || save.world.Map[test].X_Cord == 2 || save.world.Map[test].X_Cord == 37 || save.world.Map[test].X_Cord == 38 || save.world.Map[test].X_Cord == 39){
    pick_start();
  }else if(save.world.Map[test].Y_Cord == 0 || save.world.Map[test].Y_Cord == 1 || save.world.Map[test].Y_Cord == 2 || save.world.Map[test].Y_Cord == 17 || save.world.Map[test].Y_Cord == 18 || save.world.Map[test].Y_Cord == 19){
    pick_start();
  }else if(save.world.Map[test].Name == "Starting Field") {
    pick_start();
  }else{
    save.world.starting_tile = test;
  }
}

function remove_object(input_array,item_to_remove){
  var new_array = t_l;
  for (var i = 0; i < input_array.length; i++) {
    if (i != item_to_remove) {
      new_array.push(input_array[i]);
    }
  }
  return new_array;
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function whole(value){
  if (value % 1 === 0) {
    return true;
  }
}

// Magic. Do not touch.
String.prototype.replaceAll = function(str1, str2, ignore){
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
};

function wait(ms){
	 var start = new Date().getTime();
	 var end = start;
	 while(end < start + ms){
	 end = new Date().getTime();
	}
}

function remove_exception(input,type){
  switch (type) {
    case 'array':
      for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < exception_list.length; j++) {
          if(input[i] == exception_list[j]){
            input = remove_object(input,i);
          }
        }
      }
    break;
    case 'string':
      for (var j = 0; j < exception_list.length; j++) {
        input = input.replaceAll(exception_list[j],'');
      }
    break;
  }
  return input;
}

function rect(x,y,w,h,fill,stroke){
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.fillStyle = fill;
	ctx.strokeStyle = stroke;
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

function drawText(size,x,y,text,color){
	ctx.font = size+" Arial";
	ctx.fillStyle = color;
	ctx.fillText(text, x, y);
}

function data_listing(x,y,page,text,type,execute){
	if(selected_page == page){
		drawText("16px",x,y,text,"BLACK");
		if(typeof type !== 'undefined'){
			var X = x+8;
			var Y = y+13;
			if(mouse.X >= X && mouse.X <= X+(text.length * 7) && mouse.Y >= Y && mouse.Y <= (Y+14) && mouse_click){
				if(execute){
					eval(type);
				}else{
					type = type.split("|");
					data_handle(type[0],type[1]);
				}
			}
		}
	}
}

function data_handle(type,extra){
  switch(type){
    case "New Player":
      if(confirm("Add New Player?")){
        save.Players.push(new_player);
      }
    break;
    default:
      if(editing){
        edit(type,extra);
      }else if(removing){
        remove(type,extra);
      }else if(!editing && !removing){
        if(extra == 'Add'){
          add(type);
        }else{
          view(type,extra);
        }
      }
  }
}

function button(num,text,toggle,on_click){
	rect(10,10+(num*30),80,20,"rgba(0, 0, 0, 0.1)","BLACK");//Base
	if(mouse.X >= 16 && mouse.X <= 98 && mouse.Y >= 35+(num*30) && mouse.Y <= 58+(num*30)){
		rect(10,10+(num*30),80,20,"rgba(0, 0, 0, 0.2)","BLACK");//Hylight
	}
	text = text.split("|");
	drawText(text[0],13,26+(num*30),text[1],"BLACK");
	if(toggle){
		rect(10,10+(num*30),80,20,"rgba(0, 0, 0, 0.5)","BLACK");
	}
	if(typeof on_click !== 'undefined'){
		if(mouse.X >= 16 && mouse.X <= 98 && mouse.Y >= 35+(num*30) && mouse.Y <= 58+(num*30) && mouse_click){
			button_handler(on_click);
		}
	}
}

function button_handler(type){
	switch (type) {
		case "edit":
			if (editing == true){
				editing = false;
			}else{
				editing = true;
				removing = false;
			}
		break;
		case "remove":
			if (removing == true){
				removing = false;
			}else{
				removing = true;
				editing = false;
			}
		break;
		case "player_view":
			if (selected_page == "Select Player"){
				selected_page = "Main";
			}else{
				selected_page = "Select Player";
			}
		break;
		case "description_view":
			if (selected_page == "Character Description"){
				selected_page = "Main";
			}else{
				selected_page = "Character Description";
			}
		break;
		case "inventory_view":
			if (selected_page == "Inventory"){
				selected_page = "Main";
			}else{
				selected_page = "Inventory";
			}
		break;
		case "world_view":
			if (selected_page == "World"){
				selected_page = "Main";
			}else{
				selected_page = "World";
			}
		break;
    case "change_time":
			var change_time = prompt(" - Add Time: a \n\n - Reverse Time: r\n\n - Years = y1\n - Months = m1\n - Days = d1");
			if(change_time !== null){
        change_time = change_time.toLowerCase();
        if(change_time.charAt(0) == 'a'){
          time('add',change_time.replace(/a/g,''));
        }else if(change_time.charAt(0) == 'r'){
          time('',change_time.replace(/r/g,''));
        }

			}
		break;
    case "map_view":
			if (selected_page == "Map"){
				selected_page = "Main";
			}else{
				selected_page = "Map";
			}
		break;
	}
}

function map_rect(x,y,w,h,fill,stroke){
	map.beginPath();
	map.rect(x, y, w, h);
	map.fillStyle = fill;
	map.strokeStyle = stroke;
	map.stroke();
	map.fill();
	map.closePath();
}

function map_elipse(x,y,w,h,fill,stroke){
	map.beginPath();
  map.ellipse(x, y, w, h, Math.PI / 4, 0, 2 * Math.PI);
	map.fillStyle = fill;
	map.strokeStyle = stroke;
	map.stroke();
	map.fill();
	map.closePath();
}

var canvas_x = 9;
var canvas_y = 469;

function map_tile(x,y,tile_num){
  map_rect(x,y,tile_w,tile_h,"rgba(255, 255, 255, 0.1)","BLACK");

  if(mouse.X >= (x+canvas_x) && mouse.X <= ((x+canvas_x)+tile_h) && mouse.Y >= (y+canvas_y) && mouse.Y <= ((y+canvas_y)+tile_w)){
    map_rect(x,y,tile_w,tile_h,"rgba(0, 0, 0, 0.1)","BLACK");
  }
  if(selected_tile == tile_num){
    map_rect(x,y,tile_w,tile_h,"rgba(0, 0, 0, 0.5)","BLACK");
  }

  if (save.world.Map[tile_num].Name != "Undiscovered Tile") {
    switch (save.world.Map[tile_num].Type) {
      case "Water":
        map_rect(x,y,tile_w,tile_h,"rgba(94, 120, 224, 0.7)","BLACK");
      break;
      case "Grass":
        map_rect(x,y,tile_w,tile_h,"rgba(0, 255, 0, 0.7)","BLACK");
      break;
      case "Trees":
        map_rect(x,y,tile_w,tile_h,"rgba(40, 138, 40, 0.7)","BLACK");
      break;
      case "Rock":
        map_rect(x,y,tile_w,tile_h,"rgba(161, 161, 161, 0.7)","BLACK");
      break;
      case "Sand":
        map_rect(x,y,tile_w,tile_h,"rgba(194,178,128, 0.7)","BLACK");
      break;
      case "Snow":
        map_rect(x,y,tile_w,tile_h,"rgba(255,250,250, 0.7)","BLACK");
      break;
    }
  }
  switch (save.world.Map[tile_num].Name) {
    case "Undiscovered Tile":
      map_rect(x,y,tile_w,tile_h,"rgba(0, 0, 0, 0.7)","BLACK");
    break;
    case "Starting Field":
      map_elipse(x+tile_w / 2,y+tile_h / 2,tile_w / 3,tile_h / 3,"rgba(77, 255, 255, 0.5)","BLACK");
    break;
  }

  if(save.world.Map[tile_num].Occupants.length !== 0){
    map_elipse(x+tile_w / 2,y+tile_h / 2,tile_w / 4,tile_h / 4,"rgba(50, 90, 255, 0.5)","BLACK");
  }

  if(mouse.X >= (x+canvas_x) && mouse.X <= ((x+canvas_x)+tile_h) && mouse.Y >= (y+canvas_y) && mouse.Y <= ((y+canvas_y)+tile_w) && mouse_click){
    if(move.moving){
      move.moving = false;
      save.world.Map[tile_num].Occupants.push(save.world.Map[move.from_tile].Occupants[move.player_to_move]);
      save.world.Map[move.from_tile].Occupants = remove_object(save.world.Map[move.from_tile].Occupants,move.player_to_move);
      save.Players[move.player_to_move].Ch_Location = tile_num;
    }else{
      selected_tile = tile_num;
    }
  }

}

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------Cord Viewer + Terminal
var cords = true;
var terminal = false;
var info = document.getElementById('info');
var mouse = topLog;

function tellPos(p){
	mouse.X = p.pageX;
	mouse.Y = p.pageY;

	if (cords == true){
		info.innerHTML = 'Position X : ' + mouse.X + '<br />Position Y : ' + mouse.Y;
	}else{
	info.innerHTML = '';
	}
}

var command_log = t_md;
function terminal(){
  eval(String(document.getElementById('terminal').value));
}
function keyDownHandler(e){
  switch (e.keyCode) {
    case 67:
      if (cords === false){
  			cords = true;
  		}else{
  			cords = false;
  		}
    break;
    case 191:
      var terminal = prompt("Command Line",command_log[(command_log.length - 1)]);
  		command_log.push(terminal);
  		eval(terminal);
    break;
    case 220:
      if (terminal === false){
  			terminal = true;
        document.getElementById('terminal').hidden = false;
  		}else{
  			terminal = false;
        document.getElementById('terminal').hidden = true;
  		}
    break;
    case 32:
      //save.world.starting_tile = false;
    break;
  }
}

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------Mouse Detection
document.addEventListener('mousemove', tellPos, false);
document.addEventListener("keydown", keyDownHandler, false);
document.body.onmousedown = function(){
	window.clearTimeout(mousedownTimeout);
};
document.body.onmouseup = function(){
	mousedownTimeout = window.setTimeout(on_mouse_click, 0);
};
function on_mouse_click(player,world){
	mouse_click_time = 1;
}

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------Buttons
function buttons(){
	rect(0,0,100,439,"rgba(0, 0, 0, 0.1)","BLACK");

	button(0,"18px|Edit",editing,"edit");
	button(1,"18px|Remove",removing,"remove");
	button(2,"15px|Char Desc",(selected_page == "Character Description"),"description_view");
	button(3,"18px|Inventory",(selected_page == "Inventory"),"inventory_view");
	button(4,"18px|Time",false,"change_time");
	button(5,"18px|UNUSED",false,"");
	button(6,"18px|UNUSED",false,"");
	button(7,"18px|UNUSED",false,"");
	button(8,"18px|UNUSED",false,"");
	button(9,"18px|UNUSED",false,"");
	button(10,"18px|UNUSED",false,"");
	button(11,"18px|Map",(selected_page == "Map"),"map_view");
	button(12,"18px|World",(selected_page == "World"),"world_view");
	button(13,"18px|Player",(selected_page == "Select Player"),"player_view");
}

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------Draw functions
draw.inventory = function(){
	data_listing(121,20,"Inventory","Inventory:  - Weight: " + save.Players[selected_player].Ch_CurrentInvWeight + weight_symbol + "  - Max Weight: " + save.Players[selected_player].Ch_MaxInvWeight + weight_symbol,'Item|Add');
	data_listing(600,20,"Inventory","<==",'if(inventory_page >= 4) inventory_page -= 4;',true);
	data_listing(630,20,"Inventory","><",'inventory_page = 0;',true);
  data_listing(650,20,"Inventory","==>",'inventory_page += 4;',true);
	data_listing(680,20,"Inventory","Page:"+((inventory_page / 4)+1),'');
	save.Players[selected_player].Ch_CurrentInvWeight = 0;
	var base_y = 1;
	var num_per_line = 20;
	for (var i = 0; i < (save.Players[selected_player].Ch_Inventory.length-1); i++) {
		var x = 130+(300*(Math.trunc(i / num_per_line)));
		var a = (i / num_per_line);
		if(whole(a)){
			base_y = 1;
		}
		var y = 20 + (20*base_y);

    x -= (300*inventory_page);
		data_listing(x,y,"Inventory",'  - ' + save.Players[selected_player].Ch_Inventory[i].Item,'Item|'+i);
		save.Players[selected_player].Ch_CurrentInvWeight += (save.Players[selected_player].Ch_Inventory[i].Count * save.Players[selected_player].Ch_Inventory[i].Weight);
    base_y++;
	}

};


draw.player_data = function(){
	data_listing(131,20,"Main","Player: "+save.Players[selected_player].Player,'Player');
	data_listing(131,40,"Main","  - Character Name: " + save.Players[selected_player].Ch_Name,'Character Name');
	data_listing(131,60,"Main","  - Age: " + save.Players[selected_player].Ch_Age,'Age');
	data_listing(131,80,"Main","  - Race: " + save.Players[selected_player].Ch_Race,'Race');
	data_listing(131,100,"Main","  - Money: " + save.Players[selected_player].Ch_Money + gold_symbol,'Money');
	data_listing(131,120,"Main","  - Health: " + save.Players[selected_player].Ch_Health + " - Max: " + save.Players[selected_player].Ch_MaxHealth + "	" + save.Players[selected_player].Ch_Statuses.Health,'Health');
	data_listing(131,140,"Main","  - Food: " + save.Players[selected_player].Ch_Food + " - Max: " + save.Players[selected_player].Ch_MaxFood,'Food');
	data_listing(131,160,"Main","  - Hunger Rate: " + save.Players[selected_player].Ch_HungerRate + " Per Day",'Hunger Rate');
	data_listing(131,180,"Main","  - Thirst: " + save.Players[selected_player].Ch_Thirst + " - Max: " + save.Players[selected_player].Ch_MaxThirst,'Thirst');
	data_listing(131,200,"Main","  - Thirst Rate: " + save.Players[selected_player].Ch_ThirstRate + " Per Day",'Thirst Rate');
	data_listing(131,220,"Main","  - Location: " + save.Players[selected_player].Ch_Location,'Location');
	if (save.Players[selected_player].Ch_Team == "True"){
		data_listing(131,240,"Main","  - This player is on a team",'Team');
	}else{
		data_listing(131,240,"Main","  - This player is not on a team",'Team');
	}
	data_listing(131,260,"Main","  - Status: " + save.Players[selected_player].Ch_Statuses.Life,'Status');
	data_listing(131,280,"Main","  - Class: " + save.Players[selected_player].Ch_CurrentClass + " Lv. " + save.Players[selected_player].Ch_CurrentClassLevel + " Exp. " + save.Players[selected_player].Ch_CurrentClassExp,'Class');
	data_listing(131,300,"Main","  - Player Description",'Description');
	data_listing(131,320,"Main","  - Player Back-story",'Back-story');
};


draw.world = function(){
	drawText("16px",131,20,"World: " + save.world.Name,"BLACK");
	data_listing(131,40,"World","  - Date (DMY): " + save.world.Date.Day + "/" + save.world.Date.Month + "/" + save.world.Date.Year,"Date");
};


draw.select_player = function(){
  drawText("16px",131,20,'Select Player: ',"BLACK");

  data_listing(400,20,"Select Player",'New Player','New Player|null');
  data_listing(600,20,"Select Player","<==",'if(player_page >= 4) player_page -= 4;',true);
	data_listing(630,20,"Select Player","><",'player_page = 0;',true);
  data_listing(650,20,"Select Player","==>",'player_page += 4;',true);
	data_listing(680,20,"Select Player","Page:"+((player_page / 4)+1),'');
	var base_y = 1;
	var num_per_line = 20;
	for (var i = 0; i < save.Players.length; i++) {
		var x = 130+(200*(Math.trunc(i / num_per_line)));
		var a = (i / num_per_line);
		if(whole(a)){
			base_y = 1;
		}
		var y = 20 + (20*base_y);

    x -= (300*player_page);
		data_listing(x,y,"Select Player",'  - ' + save.Players[i].Player,'Select Player|'+i);
		base_y++;
	}

};

/*
drawText("16px",121,20,"Player: " + save.Players[selected_player].Player,"BLACK");
drawText("16px",121,40,"Resources: ","BLACK");

for(var t = 0;t < save.Players[selected_player].Ch_Resources.length; t++){
  if(save.Players[selected_player].Ch_Resources[t].Regen == true){
    if(save.Players[selected_player].Ch_Resources[t].Regen_Rate < 0){
      drawText("16px",121,60 + (t * 20),"- " + save.Players[selected_player].Ch_Resources[t].Name+" ["+save.Players[selected_player].Ch_Resources[t].Value+"/"+save.Players[selected_player].Ch_Resources[t].Max+"] - { "+save.Players[selected_player].Ch_Resources[t].Regen_Rate+" a day.}","BLACK");
    }else{
      drawText("16px",121,60 + (t * 20),"- " + save.Players[selected_player].Ch_Resources[t].Name+" ["+save.Players[selected_player].Ch_Resources[t].Value+"/"+save.Players[selected_player].Ch_Resources[t].Max+"] - { +"+save.Players[selected_player].Ch_Resources[t].Regen_Rate+" a day.}","BLACK");
    }
  }else{
    drawText("16px",121,60 + (t * 20),"- " + save.Players[selected_player].Ch_Resources[t].Name+" ["+save.Players[selected_player].Ch_Resources[t].Value+"/"+save.Players[selected_player].Ch_Resources[t].Max+"] - {No Auto Regen}","BLACK");
  }
}

drawText("16px",450,40,"Effects: ","BLACK");
for(var y = 0;y < save.Players[selected_player].Ch_Statuses.Effects.length; y++){
    drawText("16px",450,60 + (y * 20),"- " + save.Players[selected_player].Ch_Statuses.Effects[y],"BLACK");
}
*/
draw.character_desc = function(){

};
/*data_listing(110,15,"Map","XY:"+map_x+'/'+map_y,'');
var base_y = 0;
var base_x = 0;
var num_per_col = Math.trunc((document.getElementById('c').height - 30) / tile_h);
var num_per_line = Math.trunc((document.getElementById('c').width - 130) / tile_w);
for (var i = 0; i < save.world.Map.length; i++){
  //var x = 130+(tile_w*(Math.trunc(i / num_per_col)));
  var a = (i / num_per_col);
  var b = (a / num_per_line);
  var x = 130+(tile_w*base_x);
  if(whole(a)){
    base_y = 1;
    base_x++;
  }
  var y = ((0 - tile_h) + 30) + (tile_h*base_y);


  x -= (tile_w*map_x);
  y -= (tile_h*map_y);


  map_tile(x,y,i);

}*/
/*
for (var j = 0; j < 20; j++) {
  for (var i = 0; i < 40; i++) {
    save.world.Map.push({
    	X_Cord: i,
    	Y_Cord: j,
    	Name: "Undiscovered Tile",
      Description: "",
      Occupants: [],
    	Weather: "",
      Land_Space: [
        {}
      ],
      Effects: [],
    })
  }
}
save = save.world.Map;
document.getElementById("inputFileNameToSaveAs").value = 'map_grid';
save_file();
*/

draw.world_map = function(){
  document.getElementById('map').hidden = false;
  data_listing(131,20,"Map","Selected Tile: "+save.world.Map[selected_tile].Name,'Tile_Name');
  data_listing(131,40,"Map"," - XY: "+save.world.Map[selected_tile].X_Cord+'/'+save.world.Map[selected_tile].Y_Cord+' ('+selected_tile+')','');
  data_listing(131,60,"Map"," - Description",'Tile_Description');
  data_listing(131,80,"Map"," - Type: "+save.world.Map[selected_tile].Type,'Tile_Type');
  data_listing(131,100,"Map"," - Weather: "+save.world.Map[selected_tile].Weather,'Tile_Weather');
  data_listing(131,120,"Map"," - Occupants: ",'');
  for (var i = 0; i < save.world.Map[selected_tile].Occupants.length; i++) {
    data_listing(131,120+(20*(i+1)),"Map","   - "+save.world.Map[selected_tile].Occupants[i],'Tile_Occupants|'+i);
  }

  for (var i = 0; i < save.world.Map.length; i++) {
    if(typeof save.world.Map[i].Name != "undefined") {
      map_tile((tile_w * save.world.Map[i].X_Cord + 1),(tile_h * save.world.Map[i].Y_Cord + 1),i);
    }
  }
};
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------Specific Functions

function edit(type,extra){
	var edit;
	prefix = 'Player ('+save.Players[selected_player].Player+') ';
	switch(type) {
		case "Max Weight":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Ch_MaxInvWeight);
			if(edit !== null){
        edit = edit.replace(/[^\d.-]/g, '');
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Ch_MaxInvWeight = Number(edit);
			}
		break;
		case "Player":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Player);
			if(edit !== null){
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Player = edit;
			}
		break;
		case "Character Name":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Ch_Name);
			if(edit !== null){
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Ch_Name = edit;
			}
		break;
		case "Age":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Ch_Age);
			if(edit !== null){
        edit = edit.replace(/[^\d.-]/g, '');
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Ch_Age = Number(edit);
			}
		break;
		case "Race":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Ch_Race);
			if(edit !== null){
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Ch_Race = edit;
			}
		break;
		case "Money":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Ch_Money);
			if(edit !== null){
        edit = edit.replace(/[^\d.-]/g, '');
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Ch_Name = Number(edit);
			}
		break;
		case "Health":
			edit = prompt(prefix+type+" Edit\n\nHealth/Max Health",save.Players[selected_player].Ch_Health+'/'+save.Players[selected_player].Ch_MaxHealth);
			if(edit !== null){
        edit = remove_exception(edit,'string');
				edit = edit.split('/');
				save.Players[selected_player].Ch_Health = Number(edit[0]);
				save.Players[selected_player].Ch_MaxHealth = Number(edit[1]);
			}
		break;
		case "Food":
			edit = prompt(prefix+type+" Edit\n\nFood/Max Food",save.Players[selected_player].Ch_Food+'/'+save.Players[selected_player].Ch_MaxFood);
			if(edit !== null){
        edit = remove_exception(edit,'string');
				edit = edit.split('/');
				save.Players[selected_player].Ch_Food = Number(edit[0]);
				save.Players[selected_player].Ch_MaxFood = Number(edit[1]);
			}
		break;
		case "Hunger Rate":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Ch_HungerRate);
			if(edit !== null){
        edit = edit.replace(/[^\d.-]/g, '');
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Ch_HungerRate = Number(edit);
			}
		break;
		case "Thirst":
			edit = prompt(prefix+type+" Edit\n\nHydration/Max Hydration",save.Players[selected_player].Ch_Thirst+'/'+save.Players[selected_player].Ch_MaxThirst);
			if(edit !== null){
        edit = remove_exception(edit,'string');
				edit = edit.split('/');
				save.Players[selected_player].Ch_Thirst = Number(edit[0]);
				save.Players[selected_player].Ch_MaxThirst = Number(edit[1]);
			}
		break;
		case "Thirst Rate":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Ch_ThirstRate);
			if(edit !== null){
        edit = edit.replace(/[^\d.-]/g, '');
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Ch_ThirstRate = Number(edit);
			}
		break;
		case "Location":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Ch_Location);
			if(edit !== null){
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Ch_Location = edit;
			}
		break;
		case "Team":
			if(save.Players[selected_player].Ch_Team == "False"){
				save.Players[selected_player].Ch_Team = "True";
			}else{
				save.Players[selected_player].Ch_Team = "False";
			}
		break;
		case "Life":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Ch_Statuses.Life);
			if(edit !== null){
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Ch_Statuses.Life = edit;
			}
		break;
		case "Class":
			edit = prompt(prefix+type+" Edit\n\nClass/Level/XP",save.Players[selected_player].Ch_CurrentClass+'/'+save.Players[selected_player].Ch_CurrentClassLevel+'/'+save.Players[selected_player].Ch_CurrentClassExp);
			if(edit !== null){
        edit = remove_exception(edit,'string');
				edit = edit.split('/');
				save.Players[selected_player].Ch_CurrentClass = edit[0];
				save.Players[selected_player].Ch_CurrentClassLevel = Number(edit[1]);
				save.Players[selected_player].Ch_CurrentClassExp = Number(edit[2]);
			}
		break;
		case "Description":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Ch_Description.Misc);
			if(edit !== null){
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Ch_Description.Misc = edit;
			}
		break;
		case "Back-story":
			edit = prompt(prefix+type+" Edit",save.Players[selected_player].Ch_Backstory);
			if(edit !== null){
        edit = remove_exception(edit,'string');
				save.Players[selected_player].Ch_Backstory = edit;
			}
		break;
    case "Item":
      if(typeof save.Players[selected_player].Ch_Inventory[Number(extra)] == 'undefined'){
  			alert("Item slot empty, nothing edit.");
  		}else{
        var segment_to_edit = prompt("Not Case sensitive\n\n- Item = i\n- Weight = w\n- Count = c\n- Average Worth = a\n- Description = d");
        if(segment_to_edit !== null){
          segment_to_edit = segment_to_edit.toLowerCase();
          switch(segment_to_edit.charAt(0)){
    				case "i":
    			    edit = prompt(prefix+"Item Slot("+Number(extra)+") Edit \nItem",save.Players[selected_player].Ch_Inventory[Number(extra)].Item);
              if(edit !== null){
                edit = remove_exception(edit,'string');
          			save.Players[selected_player].Ch_Inventory[Number(extra)].Item = edit;
          		}
    				break;
    				case "w":
              edit = prompt(prefix+"Item Slot("+Number(extra)+") Edit \nWeight",save.Players[selected_player].Ch_Inventory[Number(extra)].Weight);
              if(edit !== null){
                edit = remove_exception(edit,'string');
                save.Players[selected_player].Ch_Inventory[Number(extra)].Weight = Number(edit);
              }
    				break;
    				case "c":
              edit = prompt(prefix+"Item Slot("+Number(extra)+") Edit \nCount",save.Players[selected_player].Ch_Inventory[Number(extra)].Count);
              if(edit !== null){
                edit = remove_exception(edit,'string');
                save.Players[selected_player].Ch_Inventory[Number(extra)].Count = Number(edit);
              }
    				break;
    				case "a":
              edit = prompt(prefix+"Item Slot("+Number(extra)+") Edit \nAverage Worth",save.Players[selected_player].Ch_Inventory[Number(extra)].AvWorth);
              if(edit !== null){
                edit = remove_exception(edit,'string');
                save.Players[selected_player].Ch_Inventory[Number(extra)].AvWorth = Number(edit);
              }
    				break;
    				case "d":
              edit = prompt(prefix+"Item Slot("+Number(extra)+") Edit \nDescription",save.Players[selected_player].Ch_Inventory[Number(extra)].Desc);
              if(edit !== null){
                edit = remove_exception(edit,'string');
                save.Players[selected_player].Ch_Inventory[Number(extra)].Desc = edit;
              }
            break;
    			}
        }
  		}
    break;
    case "Date":
			edit = prompt('World ('+save.world.Name+') '+type+" Edit",save.world.Date.Day + "/" + save.world.Date.Month + "/" + save.world.Date.Year);
			if(edit !== null){
        edit = remove_exception(edit,'string');
        edit = edit.split("/");
				save.world.Date.Day = Number(edit[0]);
        save.world.Date.Month = Number(edit[1]);
        save.world.Date.Year = Number(edit[2]);
			}
		break;
    case "Tile_Name":
    edit = prompt('World ('+save.world.Name+') Tile ('+selected_tile+') '+extra+' Edit',save.world.Map[selected_tile].Name);
      if(edit !== null){
        edit = remove_exception(edit,'string');
        save.world.Map[selected_tile].Name = edit;
      }
    break;
    case "Tile_Type":
    edit = prompt('World ('+save.world.Name+') Tile ('+selected_tile+') '+extra+' Edit',save.world.Map[selected_tile].Type);
      if(edit !== null){
        edit = remove_exception(edit,'string');
        save.world.Map[selected_tile].Type = edit;
      }
    break;
    case "Tile_Description":
    edit = prompt('World ('+save.world.Name+') Tile ('+selected_tile+') '+extra+' Edit',save.world.Map[selected_tile].Description);
      if(edit !== null){
        edit = remove_exception(edit,'string');
        save.world.Map[selected_tile].Description = edit;
      }
    break;
    case "Tile_Weather":
    edit = prompt('World ('+save.world.Name+') Tile ('+selected_tile+') '+extra+' Edit',save.world.Map[selected_tile].Weather);
      if(edit !== null){
        edit = remove_exception(edit,'string');
        save.world.Map[selected_tile].Weather = edit;
      }
		break;
		default:
			alert("--ERROR--\nCode tried to edit non-editable value");
	}
}

function remove(type,extra){
	prefix = 'Player ('+save.Players[selected_player].Player+') ';
	switch(type) {
		case "Item":
      save.Players[selected_player].Ch_Inventory = remove_object(save.Players[selected_player].Ch_Inventory,Number(extra));
		break;
    case "Select Player":
      if(save.Players.length >= 2){
        if(confirm('Delete Player ('+save.Players[Number(extra)].Player+') ? \n\n This is not reverseable.')){
          if(confirm('Are You Sure You Want To Delete Player ('+save.Players[Number(extra)].Player+') ? \n\n This is not reverseable.')){
            if(confirm('Are You 100% COMPLETLY Sure You Want To Delete Player ('+save.Players[Number(extra)].Player+') ? \n\n This is not reverseable.')){
              selected_player = 0;
              save.Players = remove_object(save.Players,Number(extra));
              alert('Player Deleated');
            }
          }
        }
      }else{
        alert("You cant delete your last player.");
      }
		break;
		default:
			alert("--ERROR--\nCode tried to remove non-removeable value");
	}
}

function view(type,extra){
	prefix = 'Player ('+save.Players[selected_player].Player+') ';
	switch(type) {
		case "Description":
			alert(prefix+type+" View\n\n"+save.Players[selected_player].Ch_Description.Misc);
		break;
		case "Back-story":
			alert(prefix+type+" View\n\n"+save.Players[selected_player].Ch_Backstory);
		break;
		case "Item":
			var name = "- "+save.Players[selected_player].Ch_Inventory[extra].Item;
			var count = "\n- Count: "+save.Players[selected_player].Ch_Inventory[extra].Count;
			var weight = "\n- Weight Per: "+save.Players[selected_player].Ch_Inventory[extra].Weight+weight_symbol;
			var total_weight = "\n- Weight Total: "+(save.Players[selected_player].Ch_Inventory[extra].Weight*save.Players[selected_player].Ch_Inventory[extra].Count)+weight_symbol;
			var worth = "\n- Average Worth Per: "+save.Players[selected_player].Ch_Inventory[extra].AvWorth+gold_symbol;
			var total_worth = "\n- Average Worth Total: "+(save.Players[selected_player].Ch_Inventory[extra].AvWorth*save.Players[selected_player].Ch_Inventory[extra].Count)+gold_symbol;
			var desc = "\n- Description:\n"+save.Players[selected_player].Ch_Inventory[extra].Desc;
			alert(prefix+type+' Slot '+(Number(extra)+1)+" View\n\n"+name+count+weight+total_weight+worth+total_worth+desc);
		break;
    case "Select Player":
      selected_player = Number(extra);
      selected_page = "Main";
    break;
    case "Date":
      alert('World ('+save.world.Name+') '+type+" View\n\n"+get_date(Number(save.world.Date.Day),Number(save.world.Date.Month),Number(save.world.Date.Year)));
    break;
    case "Tile_Description":
      alert(save.world.Map[selected_tile].Description);
    break;
    case "Tile_Occupants":
      if(confirm('Move Player ('+save.world.Map[selected_tile].Occupants[Number(extra)]+') ')){
        alert('Select tile to move Player ('+save.world.Map[selected_tile].Occupants[Number(extra)]+') to');
        move.player_to_move = Number(extra);
        move.from_tile = selected_tile;
        move.moving = true;
      }
    break;
	}
}

function add(type){
	var add;
	var form = {Item: "empty", Weight: 0, Count: 0, AvWorth: 0, Desc: ""};
	var form2 = bottom;
	prefix = 'Player ('+save.Players[selected_player].Player+') Adding ';
	if(!confirm('Player ('+save.Players[selected_player].Player+') Add Item?')){
		type='';
	}
	switch(type){
		case "Item":
			add = prompt(prefix+type+'\n\nItem Name',form.Item);
			if(add !== null){
				form.Item = add;
			}
			add = prompt(prefix+type+'\n\nItem Weight',form.Weight);
			if(add !== null){
				form.Weight = Number(add);
			}
			add = prompt(prefix+type+'\n\nItem Count',form.Count);
			if(add !== null){
				form.Count = Number(add);
			}
			add = prompt(prefix+type+'\n\nItem Average Worth',form.AvWorth);
			if(add !== null){
				form.AvWorth = Number(add);
			}
			add = prompt(prefix+type+'\n\nItem Description',form.Desc);
			if(add !== null){
				form.Desc = add;
			}
      form.Item = remove_exception(form.Item,'string');
      form.Desc = remove_exception(form.Desc,'string');
			save.Players[selected_player].Ch_Inventory[save.Players[selected_player].Ch_Inventory.length-1] = form;
			save.Players[selected_player].Ch_Inventory.push(form2);
		break;
		case "":
		break;
		default:
			alert("--ERROR--\nCode tried to add non-addable value");
	}
}

function time(type,val){
  val = val.split(",");
  for (var i = 0; i < val.length; i++) {
    switch(val[i].charAt(0)){
      case "y":
        if(type == 'add'){
          save.world.Date.Year += Number(val[i].replace(/\D/g,''));
          for (var j = 0; j < save.Players.length; j++) {
            if (save.Players[j].Player !== "Empty"){
              save.Players[j].Ch_Age += Number(val[i].replace(/\D/g,''));
            }
          }
        }else{
          save.world.Date.Year -= Number(val[i].replace(/\D/g,''));
          for (var j = 0; j < save.Players.length; j++) {
            if (save.Players[j].Player !== "Empty"){
              save.Players[j].Ch_Age -= Number(val[i].replace(/\D/g,''));
            }
          }
        }
      break;
      case "m":
        if(type == 'add'){
          save.world.Date.Month += Number(val[i].replace(/\D/g,''));
        }else{
          save.world.Date.Month -= Number(val[i].replace(/\D/g,''));
        }
      break;
      case "d":
        if(type == 'add'){
          save.world.Date.Day += Number(val[i].replace(/\D/g,''));
          for (var j = 0; j < save.Players.length; j++) {
            if (save.Players[j].Player != "Empty"){
              save.Players[j].Ch_Food += (Number(val[i].replace(/\D/g,'')) * save.Players[j].Ch_HungerRate);
              save.Players[j].Ch_Thirst += (Number(val[i].replace(/\D/g,'')) * save.Players[j].Ch_ThirstRate);
            }
          }
        }else{
          save.world.Date.Day -= Number(val[i].replace(/\D/g,''));
          for (var j = 0; j < save.Players.length; j++) {
            if (save.Players[j].Player != "Empty"){
              save.Players[j].Ch_Food -= (Number(val[i].replace(/\D/g,''))*save.Players[j].Ch_HungerRate);
              save.Players[j].Ch_Thirst -= (Number(val[i].replace(/\D/g,''))*save.Players[j].Ch_ThirstRate);
            }
          }
        }
      break;
    }
  }
}

// Dark Sorcery. if(self != "Dark Sorcerer") should_touch = false;
function get_day(day, month, year) {
  var a = Math.floor((14 - month) / 12);
  var y = year - a;
  var m = month + 12 * a - 2;
  var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
  Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
  return d;
}
function get_end(day) {
    if (day == 1 || day == 21 || day == 31) return 'st';
    if (day == 2 || day == 22) return 'nd';
    if (day == 3 || day == 23) return 'rd';
    else {
        return 'th';
    }
}
function get_date(day, month, year) {
    return days[get_day(day, month, year)] + ', ' + months[month - 1] + ' ' + day + get_end(day) + ', ' + year
}
function check_leap_year(year){
  year = Number(year);
  if(whole(year / 4) && !whole(year / 100)){
    return true;
  }
  if(whole(year / 400)){
    return true;
  }
}

function time_tick(){
  if(save.world.Date.Month == 0){
    save.world.Date.Month = 1;
  }
  if(save.world.Date.Month > 12){
    save.world.Date.Month -= 12;
    save.world.Date.Year += 1;
  }
  if(save.world.Date.Month < 0){
    save.world.Date.Month += 12;
    save.world.Date.Year -= 1;
  }

  var day_limit = month_days[save.world.Date.Month - 1];
  if(day_limit == 28 && check_leap_year(save.world.Date.Year)){
    day_limit = 29;
  }

  if(save.world.Date.Day <= 0){
    save.world.Date.Day += day_limit;
    save.world.Date.Month -= 1;
  }
  if(save.world.Date.Day > day_limit){
    save.world.Date.Day -= day_limit;
    save.world.Date.Month += 1;
  }
  if(save.world.Date.Day == 0){
    save.world.Date.Day = 1;
  }
}

function stats_tick(){
	for (var i = 0; i < save.Players.length; i++) {
    if(save.Players[selected_player].Player != 'Empty'){
      if(save.Players[selected_player].Ch_Health > save.Players[selected_player].Ch_MaxHealth){
        save.Players[selected_player].Ch_Health = save.Players[selected_player].Ch_MaxHealth;
      }

      if(save.Players[selected_player].Ch_Food > save.Players[selected_player].Ch_MaxFood){
        save.Players[selected_player].Ch_Food = save.Players[selected_player].Ch_MaxFood;
      }
      if(save.Players[selected_player].Ch_Food < 0){
        save.Players[selected_player].Ch_Food = 0;
      }

      if(save.Players[selected_player].Ch_Thirst > save.Players[selected_player].Ch_MaxThirst){
        save.Players[selected_player].Ch_Thirst = save.Players[selected_player].Ch_MaxThirst;
      }
      if(save.Players[selected_player].Ch_Thirst < 0){
        save.Players[selected_player].Ch_Thirst = 0;
      }

    }
  }
}

function tile_touch(tile_num,tile_to_check,method){
  tile_num += 50;
  switch (method) {
    case "direct":
      if(save.world.Map[(tile_num - 1)].Type == tile_to_check || save.world.Map[(tile_num + 1)].Type == tile_to_check || save.world.Map[(tile_num + 40)].Type == tile_to_check || save.world.Map[(tile_num - 40)].Type == tile_to_check){
        return true;
      }
    break;
    case "diag":
      if(save.world.Map[(tile_num + 39)].Type == tile_to_check || save.world.Map[(tile_num + 41)].Type == tile_to_check || save.world.Map[(tile_num - 39)].Type == tile_to_check || save.world.Map[(tile_num - 41)].Type == tile_to_check){
        return true;
      }
    case "33":
      if(save.world.Map[(tile_num + 39)].Type == tile_to_check || save.world.Map[(tile_num + 41)].Type == tile_to_check || save.world.Map[(tile_num - 39)].Type == tile_to_check || save.world.Map[(tile_num - 41)].Type == tile_to_check || save.world.Map[(tile_num - 1)].Type == tile_to_check || save.world.Map[(tile_num + 1)].Type == tile_to_check || save.world.Map[(tile_num + 40)].Type == tile_to_check || save.world.Map[(tile_num - 40)].Type == tile_to_check){
        return true;
      }
    break;
  }
  return "failed";
}

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------Main Loop Function

function on_frame(){
  if(!save.world.starting_tile){
    pick_start();
  }else if(save.world.Map[save.world.starting_tile].Name == "Undiscovered Tile"){
    for(var i = 0; i < save.world.Map.length; i++) {
      if(save.world.Map[i].Type == "Undiscovered Tile"){
        var value = tile_types[random(0,(tile_types.length-1))];
        save.world.Map[i].Type = value;
        save.world.Map[i].Name = value;
      }
    }
    save.world.Map[save.world.starting_tile].Name = "Starting Field";

    for(var i = 0; i < save.world.Map.length; i++) {
      if(typeof save.world.Map[i].Type != 'undefined') {
        if(tile_touch(0,"Trees","direct") == true){
          //if(random(1,1) == 1){
            save.world.Map[i].Type = "Trees";
            if(save.world.Map[i].Name != 'Starting Field') {
              save.world.Map[i].Name = "Trees";
            //}
          }
        }
      }
    }

  }



  for (var i = 0; i < save.Players.length; i++) {
    if(!save.Players[i].Ch_Location){
      if(save.Players[i].Player != "Empty"){
        save.world.Map[save.world.starting_tile].Occupants.push(save.Players[i].Player);
        save.Players[i].Ch_Location = save.world.starting_tile;
      }
    }
  }

	for(var i = 0;i < 1;i++){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		map.clearRect(0, 0, canvas2.width, canvas2.height);

		if (mouse_click_time > 0){
			mouse_click = true;
			mouse_click_time -= 1;
		}else if (mouse_click_time == 0){
			mouse_click = false;
		}else if (mouse_click_time < 0){
			mouse_click_time = 0;
		}

		if (button_bar == true){
			buttons();
		}

    switch (selected_page) {
      case "Main":
        draw.player_data();
      break;
      case "Select Player":
        draw.select_player();
      break;
      case "Character Description":
        draw.character_desc();
      break;
      case "World":
        draw.world();
      break;
      case "Inventory":
        draw.inventory();
      break;
      case "Map":
        draw.world_map();
      break;
      default:
        selected_page = "Main";
    }
	}

  if(selected_page != "Map" && document.getElementById('map').hidden == false){
    document.getElementById('map').hidden = true;
  }


  time_tick();
  stats_tick();
	requestAnimationFrame(on_frame);
}
on_frame();
