 var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var cords = true;
var mousedownTimeout;
var mX = 0;
var mY = 0;
var keyDownHandler;

var R = 0;
var G = 0;
var B = 0;

var info = document.getElementById('info');

var weightsymble = "W";
var goldsymble = "C";
var save = { 
Players:[
{},
{
 Player:"Player 1",
 Ch_Name:"Mr testing guy",
 Ch_FName:"Mr",
 Ch_MName:"testing",
 Ch_LName:"guy",
 Ch_Age:20,
 Ch_AgeSuccessFactor:0,
 Ch_Race:"Human",
 Ch_CurrentClass:"Office Worker",
 Ch_CurrentClassLevel:4,
 Ch_CurrentClassExp:35,
 Ch_PastClasses:{},
 Ch_Health:100,
 Ch_MaxHealth:100,
 Ch_Money: 10,
 Ch_Statuses:{
 Life:"Alive",  
 Health:"Healthy",
 },
 Ch_Inventory:{
   //"Item name", weight per item, quantity,edible, onEat
   Slot1:{Item:"Stale bread",Weight:1,Quantity:2,Edible:"True",onEat:"takes 2 damage from chipping tooth",AvWorth:2,Desc:"Stale bread, not so tasty"},
   Slot2:{Item:"Staler bread",Weight:1,Quantity:2,Edible:"True",onEat:"takes 4 damage from chipping tooth",AvWorth:2,Desc:"Tastes as good as rocks"},
   Slot3:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot4:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot5:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot6:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot7:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot8:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot9:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot10:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot11:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot12:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot13:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot14:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot15:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot16:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot17:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot18:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot19:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot20:{Item:"Testing item",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
 },
 Ch_MaxInvWeight:100,
 Ch_CurrentInvWeight:10,
 Ch_Team:"True",
 Ch_Location:"Normal office cubical",
 Ch_Food:30,
 Ch_MaxFood:30,
 Ch_HungerRate:-1,
 Ch_Thirst:3,
 Ch_MaxThirst:3,
 Ch_ThirstRate:-1,
 Ch_SkillsSpellsAbilities:{}
},
{
 Player:"Empty",
 Ch_Name:"",
 Ch_FName:"",
 Ch_MName:"",
 Ch_LName:"",
 Ch_Age:0,
 Ch_AgeSuccessFactor:0,
 Ch_Race:"",
 Ch_CurrentClass:"",
 Ch_CurrentClassLevel:0,
 Ch_CurrentClassExp:0,
 Ch_PastClasses:{
  
 },
 Ch_Health:100,
 Ch_MaxHealth:100,
 Ch_Money: 0,
 Ch_Statuses:{
 Life:"Alive",  
 Health:"Healthy", 
 },
 Ch_Inventory:{
   //"Item name", weight per item, quantity,edible, onEat
   Slot1:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 2 damage from chipping tooth",AvWorth:2,Desc:"Stale bread, not so tasty"},
   Slot2:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 4 damage from chipping tooth",AvWorth:2,Desc:"Tastes as good as rocks"},
   Slot3:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot4:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot5:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot6:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot7:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot8:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot9:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot10:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot11:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot12:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot13:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot14:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot15:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot16:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot17:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot18:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot19:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot20:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
 },
 Ch_MaxInvWeight:100,
 Ch_CurrentInvWeight:0,
 Ch_Team:"False",
 Ch_Location:"Non-Existance",
 Ch_Food:30,
 Ch_MaxFood:30,
 Ch_HungerRate:-1,
 Ch_Thirst:3,
 Ch_MaxThirst:3,
 Ch_ThirstRate:-1,
 Ch_SkillsSpellsAbilities:{}
},
{
 Player:"Empty",
 Ch_Name:"",
 Ch_FName:"",
 Ch_MName:"",
 Ch_LName:"",
 Ch_Age:0,
 Ch_AgeSuccessFactor:0,
 Ch_Race:"",
 Ch_CurrentClass:"",
 Ch_CurrentClassLevel:0,
 Ch_CurrentClassExp:0,
 Ch_PastClasses:{
 },
 Ch_Health:100,
 Ch_MaxHealth:100,
 Ch_Money: 0,
 Ch_Statuses:{
 Life:"Alive",  
 Health:"Healthy", 
 },
 Ch_Inventory:{
   //"Item name", weight per item, quantity,edible, onEat
   Slot1:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 2 damage from chipping tooth",AvWorth:2,Desc:"Stale bread, not so tasty"},
   Slot2:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 4 damage from chipping tooth",AvWorth:2,Desc:"Tastes as good as rocks"},
   Slot3:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot4:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot5:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot6:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot7:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot8:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot9:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot10:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot11:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot12:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot13:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot14:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot15:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot16:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot17:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot18:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot19:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot20:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
 },
 Ch_MaxInvWeight:100,
 Ch_CurrentInvWeight:0,
 Ch_Team:"False",
 Ch_Location:"Non-Existance",
 Ch_Food:30,
 Ch_MaxFood:30,
 Ch_HungerRate:-1,
 Ch_Thirst:3,
 Ch_MaxThirst:3,
 Ch_ThirstRate:-1,
 Ch_SkillsSpellsAbilities:{}
},
{
 Player:"Empty",
 Ch_Name:"",
 Ch_FName:"",
 Ch_MName:"",
 Ch_LName:"",
 Ch_Age:0,
 Ch_AgeSuccessFactor:0,
 Ch_Race:"",
 Ch_CurrentClass:"",
 Ch_CurrentClassLevel:0,
 Ch_CurrentClassExp:0,
 Ch_PastClasses:{
 },
 Ch_Health:100,
 Ch_MaxHealth:100,
 Ch_Money: 0,
 Ch_Statuses:{
 Life:"Alive",  
 Health:"Healthy", 
 },
 Ch_Inventory:{
   //"Item name", weight per item, quantity,edible, onEat
   Slot1:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 2 damage from chipping tooth",AvWorth:2,Desc:"Stale bread, not so tasty"},
   Slot2:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 4 damage from chipping tooth",AvWorth:2,Desc:"Tastes as good as rocks"},
   Slot3:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot4:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot5:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot6:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot7:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot8:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot9:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot10:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot11:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot12:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot13:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot14:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot15:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot16:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot17:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot18:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot19:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot20:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
 },
 Ch_MaxInvWeight:100,
 Ch_CurrentInvWeight:0,
 Ch_Team:"False",
 Ch_Location:"Non-Existance",
 Ch_Food:30,
 Ch_MaxFood:30,
 Ch_HungerRate:-1,
 Ch_Thirst:3,
 Ch_MaxThirst:3,
 Ch_ThirstRate:-1,
 Ch_SkillsSpellsAbilities:{}
},
{
 Player:"Empty",
 Ch_Name:"",
 Ch_FName:"",
 Ch_MName:"",
 Ch_LName:"",
 Ch_Age:0,
 Ch_AgeSuccessFactor:0,
 Ch_Race:"",
 Ch_CurrentClass:"",
 Ch_CurrentClassLevel:0,
 Ch_CurrentClassExp:0,
 Ch_PastClasses:{
 },
 Ch_Health:100,
 Ch_MaxHealth:100,
 Ch_Money: 0,
 Ch_Statuses:{
 Life:"Alive",  
 Health:"Healthy", 
 },
 Ch_Inventory:{
   //"Item name", weight per item, quantity,edible, onEat
   Slot1:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 2 damage from chipping tooth",AvWorth:2,Desc:"Stale bread, not so tasty"},
   Slot2:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 4 damage from chipping tooth",AvWorth:2,Desc:"Tastes as good as rocks"},
   Slot3:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot4:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot5:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot6:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot7:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot8:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot9:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot10:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot11:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot12:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot13:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot14:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot15:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot16:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot17:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot18:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot19:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot20:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
 },
 Ch_MaxInvWeight:100,
 Ch_CurrentInvWeight:0,
 Ch_Team:"False",
 Ch_Location:"Non-Existance",
 Ch_Food:30,
 Ch_MaxFood:30,
 Ch_HungerRate:-1,
 Ch_Thirst:3,
 Ch_MaxThirst:3,
 Ch_ThirstRate:-1,
 Ch_SkillsSpellsAbilities:{}
},
{
 Player:"Empty",
 Ch_Name:"",
 Ch_FName:"",
 Ch_MName:"",
 Ch_LName:"",
 Ch_Age:0,
 Ch_AgeSuccessFactor:0,
 Ch_Race:"",
 Ch_CurrentClass:"",
 Ch_CurrentClassLevel:0,
 Ch_CurrentClassExp:0,
 Ch_PastClasses:{
 },
 Ch_Health:100,
 Ch_MaxHealth:100,
 Ch_Money: 0,
 Ch_Statuses:{
 Life:"Alive",  
 Health:"Healthy", 
 },
 Ch_Inventory:{
   //"Item name", weight per item, quantity,edible, onEat
   Slot1:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 2 damage from chipping tooth",AvWorth:2,Desc:"Stale bread, not so tasty"},
   Slot2:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 4 damage from chipping tooth",AvWorth:2,Desc:"Tastes as good as rocks"},
   Slot3:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot4:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot5:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot6:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot7:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot8:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot9:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot10:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot11:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot12:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot13:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot14:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot15:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot16:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot17:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot18:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot19:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot20:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
 },
 Ch_MaxInvWeight:100,
 Ch_CurrentInvWeight:0,
 Ch_Team:"False",
 Ch_Location:"Non-Existance",
 Ch_Food:30,
 Ch_MaxFood:30,
 Ch_HungerRate:-1,
 Ch_Thirst:3,
 Ch_MaxThirst:3,
 Ch_ThirstRate:-1,
 Ch_SkillsSpellsAbilities:{}
},
{
 Player:"Empty",
 Ch_Name:"",
 Ch_FName:"",
 Ch_MName:"",
 Ch_LName:"",
 Ch_Age:0,
 Ch_AgeSuccessFactor:0,
 Ch_Race:"",
 Ch_CurrentClass:"",
 Ch_CurrentClassLevel:0,
 Ch_CurrentClassExp:0,
 Ch_PastClasses:{
 },
 Ch_Health:100,
 Ch_MaxHealth:100,
 Ch_Money: 0,
 Ch_Statuses:{
 Life:"Alive",  
 Health:"Healthy", 
 },
 Ch_Inventory:{
   //"Item name", weight per item, quantity,edible, onEat
   Slot1:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 2 damage from chipping tooth",AvWorth:2,Desc:"Stale bread, not so tasty"},
   Slot2:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 4 damage from chipping tooth",AvWorth:2,Desc:"Tastes as good as rocks"},
   Slot3:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot4:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot5:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot6:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot7:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot8:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot9:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot10:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot11:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot12:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot13:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot14:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot15:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot16:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot17:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot18:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot19:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot20:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
 },
 Ch_MaxInvWeight:100,
 Ch_CurrentInvWeight:0,
 Ch_Team:"False",
 Ch_Location:"Non-Existance",
 Ch_Food:30,
 Ch_MaxFood:30,
 Ch_HungerRate:-1,
 Ch_Thirst:3,
 Ch_MaxThirst:3,
 Ch_ThirstRate:-1,
 Ch_SkillsSpellsAbilities:{}
},
{
 Player:"Empty",
 Ch_Name:"",
 Ch_FName:"",
 Ch_MName:"",
 Ch_LName:"",
 Ch_Age:0,
 Ch_AgeSuccessFactor:0,
 Ch_Race:"",
 Ch_CurrentClass:"",
 Ch_CurrentClassLevel:0,
 Ch_CurrentClassExp:0,
 Ch_PastClasses:{
 },
 Ch_Health:100,
 Ch_MaxHealth:100,
 Ch_Money: 0,
 Ch_Statuses:{
 Life:"Alive",  
 Health:"Healthy", 
 },
 Ch_Inventory:{
   //"Item name", weight per item, quantity,edible, onEat
   Slot1:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 2 damage from chipping tooth",AvWorth:2,Desc:"Stale bread, not so tasty"},
   Slot2:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 4 damage from chipping tooth",AvWorth:2,Desc:"Tastes as good as rocks"},
   Slot3:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot4:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot5:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot6:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot7:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot8:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot9:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot10:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot11:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot12:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot13:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot14:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot15:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot16:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot17:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot18:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot19:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot20:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
 },
 Ch_MaxInvWeight:100,
 Ch_CurrentInvWeight:0,
 Ch_Team:"False",
 Ch_Location:"Non-Existance",
 Ch_Food:30,
 Ch_MaxFood:30,
 Ch_HungerRate:-1,
 Ch_Thirst:3,
 Ch_MaxThirst:3,
 Ch_ThirstRate:-1,
 Ch_SkillsSpellsAbilities:{}
},
{
 Player:"Empty",
 Ch_Name:"",
 Ch_FName:"",
 Ch_MName:"",
 Ch_LName:"",
 Ch_Age:0,
 Ch_AgeSuccessFactor:0,
 Ch_Race:"",
 Ch_CurrentClass:"",
 Ch_CurrentClassLevel:0,
 Ch_CurrentClassExp:0,
 Ch_PastClasses:{
 },
 Ch_Health:100,
 Ch_MaxHealth:100,
 Ch_Money: 0,
 Ch_Statuses:{
 Life:"Alive",  
 Health:"Healthy", 
 },
 Ch_Inventory:{
   //"Item name", weight per item, quantity,edible, onEat
   Slot1:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 2 damage from chipping tooth",AvWorth:2,Desc:"Stale bread, not so tasty"},
   Slot2:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 4 damage from chipping tooth",AvWorth:2,Desc:"Tastes as good as rocks"},
   Slot3:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot4:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot5:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot6:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot7:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot8:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot9:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot10:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot11:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot12:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot13:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot14:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot15:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot16:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot17:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot18:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot19:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot20:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
 },
 Ch_MaxInvWeight:100,
 Ch_CurrentInvWeight:0,
 Ch_Team:"False",
 Ch_Location:"Non-Existance",
 Ch_Food:30,
 Ch_MaxFood:30,
 Ch_HungerRate:-1,
 Ch_Thirst:3,
 Ch_MaxThirst:3,
 Ch_ThirstRate:-1,
 Ch_SkillsSpellsAbilities:{}
},
{
 Player:"Empty",
 Ch_Name:"",
 Ch_FName:"",
 Ch_MName:"",
 Ch_LName:"",
 Ch_Age:0,
 Ch_AgeSuccessFactor:0,
 Ch_Race:"",
 Ch_CurrentClass:"",
 Ch_CurrentClassLevel:0,
 Ch_CurrentClassExp:0,
 Ch_PastClasses:{
 },
 Ch_Health:100,
 Ch_MaxHealth:100,
 Ch_Money: 0,
 Ch_Statuses:{
 Life:"Alive",  
 Health:"Healthy", 
 },
 Ch_Inventory:{
   //"Item name", weight per item, quantity,edible, onEat
   Slot1:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 2 damage from chipping tooth",AvWorth:2,Desc:"Stale bread, not so tasty"},
   Slot2:{Item:"empty",Weight:1,Quantity:2,Edible:"True",onEat:"takes 4 damage from chipping tooth",AvWorth:2,Desc:"Tastes as good as rocks"},
   Slot3:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot4:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot5:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot6:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot7:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot8:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot9:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot10:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot11:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot12:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot13:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot14:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot15:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot16:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot17:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot18:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot19:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
   Slot20:{Item:"empty",Weight:1,Quantity:2,Edible:"False",onEat:"",AvWorth:2,Desc:"This exists just for testing"},
 },
 Ch_MaxInvWeight:100,
 Ch_CurrentInvWeight:0,
 Ch_Team:"False",
 Ch_Location:"Non-Existance",
 Ch_Food:30,
 Ch_MaxFood:30,
 Ch_HungerRate:-1,
 Ch_Thirst:3,
 Ch_MaxThirst:3,
 Ch_ThirstRate:-1,
 Ch_SkillsSpellsAbilities:{}
},],
world:{
 Name:"Testing world",
 Time:0,
 Hour:0,
 Day:20,
 Month:11,
 Year:1542,
}}

var editing = false;
var removing = false;
var viewing = false;
var selected = 0;
var selectednum = 0;
var selected_player = 1;

function saveTextAsFile(){
    var textToSave = JSON.stringify(save);
 
    var textToSaveAsBlob = new Blob([textToSave], {type:"application/javascript"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();}
 
function destroyClickedElement(event){document.body.removeChild(event.target);}

var filestring = false; 
var fileparse = false;
function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        //if(save.Players[selected_player] == player1){}
      // save.Players[selected_player] = JSON.parse(textFromFileLoaded);
     filestring = textFromFileLoaded;
     //fileparse = JSON.parse(filestring);
     //save = filestring;
     save = JSON.parse(filestring);
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}
 

function tellPos(p){
  if(cords == true){
    info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;
  }else{
    info.innerHTML = '';
       }
  mX = p.pageX;
  mY = p.pageY;
}
addEventListener('mousemove', tellPos, false);
document.addEventListener("keydown", keyDownHandler, false);
document.body.onmousedown = function() { 
 window.clearTimeout(mousedownTimeout);
};
document.body.onmouseup = function() {
 mousedownTimeout = window.setTimeout(doStuff(save.Players[selected_player],save.world), 0);
};

function keyDownHandler(e){
   if (e.keyCode == 67){
if(cords === false){
  cords = true;
}
 else{
  cords = false;
}
   }
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

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function drawText(size,x,y,text,color) {
  ctx.font = size+" Arial";
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

function doStuff(player,world) {
 var viewings = true;
if (viewing == true){
if(mX >= 81 && mX <= 390){
 if(mY >= 35 && mY <= 50 && mX >= 81 && mX <= 81+(save.Players[1].Player.length*10)){selected_player = 1;viewings = false;}
 if(mY >= 55 && mY <= 70 && mX >= 81 && mX <= 81+(save.Players[2].Player.length*10)){selected_player = 2;viewings = false;}
 if(mY >= 75 && mY <= 90 && mX >= 81 && mX <= 81+(save.Players[3].Player.length*10)){selected_player = 3;viewings = false;}
 if(mY >= 95 && mY <= 110 && mX >= 81 && mX <= 81+(save.Players[4].Player.length*10)){selected_player = 4;viewings = false;}
 if(mY >= 115 && mY <= 130 && mX >= 81 && mX <= 81+(save.Players[5].Player.length*10)){selected_player = 5;viewings = false;}
 if(mY >= 135 && mY <= 150 && mX >= 81 && mX <= 81+(save.Players[6].Player.length*10)){selected_player = 6;viewings = false;}
 if(mY >= 155 && mY <= 170 && mX >= 81 && mX <= 81+(save.Players[7].Player.length*10)){selected_player = 7;viewings = false;}
 if(mY >= 175 && mY <= 190 && mX >= 81 && mX <= 81+(save.Players[8].Player.length*10)){selected_player = 8;viewings = false;}
 if(mY >= 195 && mY <= 210 && mX >= 81 && mX <= 81+(save.Players[9].Player.length*10)){selected_player = 9;viewings = false;}
 if(mY >= 215 && mY <= 230 && mX >= 81 && mX <= 81+(save.Players[10].Player.length*10)){selected_player = 10;viewings = false;}
}}
if (viewing == false){
if(mX >= 81 && mX <= 390){
    var length1 = player.Ch_Inventory.Slot1.Item;
    if(mY >= 35 && mY <= 50 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot1;var selectednum = 1; }
    var length1 = player.Ch_Inventory.Slot2.Item;
    if(mY >= 55 && mY <= 70 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot2;var selectednum = 2; }
    var length1 = player.Ch_Inventory.Slot3.Item;
    if(mY >= 75 && mY <= 90 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot3;var selectednum = 3;}
    var length1 = player.Ch_Inventory.Slot4.Item;
    if(mY >= 95 && mY <= 110 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot4;var selectednum = 4; }
    var length1 = player.Ch_Inventory.Slot5.Item;
    if(mY >= 115 && mY <= 130 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot5;var selectednum = 5; }
    var length1 = player.Ch_Inventory.Slot6.Item;
    if(mY >= 135 && mY <= 150 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot6;var selectednum = 6; }
    var length1 = player.Ch_Inventory.Slot7.Item;
    if(mY >= 155 && mY <= 170 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot7;var selectednum = 7; }
    var length1 = player.Ch_Inventory.Slot8.Item;
    if(mY >= 175 && mY <= 190 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot8;var selectednum = 8; }
    var length1 = player.Ch_Inventory.Slot9.Item;
    if(mY >= 195 && mY <= 210 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot9;var selectednum = 9; }
    var length1 = player.Ch_Inventory.Slot10.Item;
    if(mY >= 215 && mY <= 230 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot10;var selectednum = 10; }
    var length1 = player.Ch_Inventory.Slot11.Item;
    if(mY >= 235 && mY <= 250 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot11;var selectednum = 11; }
    var length1 = player.Ch_Inventory.Slot12.Item;
    if(mY >= 255 && mY <= 270 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot12;var selectednum = 12; }
    var length1 = player.Ch_Inventory.Slot13.Item;
    if(mY >= 275 && mY <= 290 && mX >= 81 && mX <= 810+(length1.length*10)){var selected = player.Ch_Inventory.Slot13;var selectednum = 13; }
    var length1 = player.Ch_Inventory.Slot14.Item;
    if(mY >= 295 && mY <= 310 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot14;var selectednum = 14; }
    var length1 = player.Ch_Inventory.Slot15.Item;
    if(mY >= 315 && mY <= 330 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot15;var selectednum = 15; }
    var length1 = player.Ch_Inventory.Slot16.Item;
    if(mY >= 335 && mY <= 350 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot16;var selectednum = 16; }
    var length1 = player.Ch_Inventory.Slot17.Item;
    if(mY >= 355 && mY <= 370 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot17;var selectednum = 17; }
    var length1 = player.Ch_Inventory.Slot18.Item;
    if(mY >= 375 && mY <= 390 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot18;var selectednum = 18; }
    var length1 = player.Ch_Inventory.Slot19.Item;
    if(mY >= 395 && mY <= 410 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot19;var selectednum = 19; }
    var length1 = player.Ch_Inventory.Slot20.Item;
    if(mY >= 415 && mY <= 430 && mX >= 81 && mX <= 81+(length1.length*10)){var selected = player.Ch_Inventory.Slot20;var selectednum = 20; }
}
 
if (mY >= 15 && mY <= 38 && mX >= 15 && mX <= 66){
 if(editing == false){
  editing = true;
  removing = false;
}else{
  editing = false;
}
}
if (mY >= 45 && mY <= 70 && mX >= 15 && mX <= 66){
 if(removing == false){
  removing = true;
  editing = false;
}else{
  removing = false;
}
}
if (mY >= 105 && mY <= 128 && mX >= 15 && mX <= 66){
var timechangestype = prompt("-Add Time - a \n\n-Reverse Time - r").toLowerCase();
 if(timechangestype.charAt(0) == "a"){
  var timeaddtype = prompt("Adding Time\n\n- Years/12months - y3\n- Months/30days - mo3\n- Days/24hours - d3\n- Hours/60ms - h3\n- Minuits/1min - m3").toLowerCase();
  if (timeaddtype.charAt(0) == "y"){
   var timechangingvalue = Number(timeaddtype.replace(/\D/g,''));
   world.Year = world.Year+timechangingvalue;
  if(save.Players[1].Player != "Empty"){save.Players[1].Ch_Age +=timechangingvalue;}
  if(save.Players[2].Player != "Empty"){save.Players[2].Ch_Age +=timechangingvalue;}
  if(save.Players[3].Player != "Empty"){save.Players[3].Ch_Age +=timechangingvalue;}
  if(save.Players[4].Player != "Empty"){save.Players[4].Ch_Age +=timechangingvalue;}
  if(save.Players[5].Player != "Empty"){save.Players[5].Ch_Age +=timechangingvalue;}
  if(save.Players[6].Player != "Empty"){save.Players[6].Ch_Age +=timechangingvalue;}
  if(save.Players[7].Player != "Empty"){save.Players[7].Ch_Age +=timechangingvalue;}
  if(save.Players[8].Player != "Empty"){save.Players[8].Ch_Age +=timechangingvalue;}
  if(save.Players[9].Player != "Empty"){save.Players[9].Ch_Age +=timechangingvalue;}
  if(save.Players[10].Player != "Empty"){save.Players[10].Ch_Age +=timechangingvalue;}
   }
  if (timeaddtype.charAt(1) == "o"){
   var timechangingvalue = Number(timeaddtype.replace(/\D/g,''));
   world.Month = world.Month+timechangingvalue;}
  if (timeaddtype.charAt(0) == "d"){
   var timechangingvalue = Number(timeaddtype.replace(/\D/g,''));
   world.Day = world.Day+timechangingvalue;
  if(save.Players[1].Player != "Empty"){PlayerStatHandeling(save.Players[1],"hunger",1*timechangingvalue,"sub");PlayerStatHandeling(save.Players[1],"thirst",1*timechangingvalue,"sub");}
  if(save.Players[2].Player != "Empty"){PlayerStatHandeling(save.Players[2],"hunger",1*timechangingvalue,"sub");PlayerStatHandeling(save.Players[2],"thirst",1*timechangingvalue,"sub");}
  if(save.Players[3].Player != "Empty"){PlayerStatHandeling(save.Players[3],"hunger",1*timechangingvalue,"sub");PlayerStatHandeling(save.Players[3],"thirst",1*timechangingvalue,"sub");}
  if(save.Players[4].Player != "Empty"){PlayerStatHandeling(save.Players[4],"hunger",1*timechangingvalue,"sub");PlayerStatHandeling(save.Players[4],"thirst",1*timechangingvalue,"sub");}
  if(save.Players[5].Player != "Empty"){PlayerStatHandeling(save.Players[5],"hunger",1*timechangingvalue,"sub");PlayerStatHandeling(save.Players[5],"thirst",1*timechangingvalue,"sub");}
  if(save.Players[6].Player != "Empty"){PlayerStatHandeling(save.Players[6],"hunger",1*timechangingvalue,"sub");PlayerStatHandeling(save.Players[6],"thirst",1*timechangingvalue,"sub");}
  if(save.Players[7].Player != "Empty"){PlayerStatHandeling(save.Players[7],"hunger",1*timechangingvalue,"sub");PlayerStatHandeling(save.Players[7],"thirst",1*timechangingvalue,"sub");}
  if(save.Players[8].Player != "Empty"){PlayerStatHandeling(save.Players[8],"hunger",1*timechangingvalue,"sub");PlayerStatHandeling(save.Players[8],"thirst",1*timechangingvalue,"sub");}
  if(save.Players[9].Player != "Empty"){PlayerStatHandeling(save.Players[9],"hunger",1*timechangingvalue,"sub");PlayerStatHandeling(save.Players[9],"thirst",1*timechangingvalue,"sub");}
  if(save.Players[10].Player != "Empty"){PlayerStatHandeling(save.Players[10],"hunger",1*timechangingvalue,"sub");PlayerStatHandeling(save.Players[10],"thirst",1*timechangingvalue,"sub");}
  }
  if (timeaddtype.charAt(0) == "h"){ 
   var timechangingvalue = Number(timeaddtype.replace(/\D/g,''));
   world.Hour = world.Hour+timechangingvalue;}
  if (timeaddtype.charAt(0) == "m"){
   var timechangingvalue = Number(timeaddtype.replace(/\D/g,''));
   world.Time = world.Time+timechangingvalue;}
  
} 
 if(timechangestype.charAt(0) == "r"){
 var timeremtype = prompt("Removing Time\n\n- Years/12months - y3\n- Months/30days - mo3\n- Days/24hours - d3\n- Hours/60ms - h3\n- Minuits/1min - m3").toLowerCase();
  if (timeremtype.charAt(0) == "y"){
   var timechangingvalue = Number(timeremtype.replace(/\D/g,''));
   world.Year = world.Year-timechangingvalue;
  if(save.Players[1].Player != "Empty"){save.Players[1].Ch_Age -=timechangingvalue;}
  if(save.Players[2].Player != "Empty"){save.Players[2].Ch_Age -=timechangingvalue;}
  if(save.Players[3].Player != "Empty"){save.Players[3].Ch_Age -=timechangingvalue;}
  if(save.Players[4].Player != "Empty"){save.Players[4].Ch_Age -=timechangingvalue;}
  if(save.Players[5].Player != "Empty"){save.Players[5].Ch_Age -=timechangingvalue;}
  if(save.Players[6].Player != "Empty"){save.Players[6].Ch_Age -=timechangingvalue;}
  if(save.Players[7].Player != "Empty"){save.Players[7].Ch_Age -=timechangingvalue;}
  if(save.Players[8].Player != "Empty"){save.Players[8].Ch_Age -=timechangingvalue;}
  if(save.Players[9].Player != "Empty"){save.Players[9].Ch_Age -=timechangingvalue;}
  if(save.Players[10].Player != "Empty"){save.Players[10].Ch_Age -=timechangingvalue;}
   }
  if (timeremtype.charAt(1) == "o"){
   var timechangingvalue = Number(timeremtype.replace(/\D/g,''));
   world.Month = world.Month-timechangingvalue;}
  if (timeremtype.charAt(0) == "d"){
   var timechangingvalue = Number(timeremtype.replace(/\D/g,''));
   world.Day = world.Day-timechangingvalue; 
  if(save.Players[1].Player != "Empty"){PlayerStatHandeling(save.Players[1],"hunger",1*timechangingvalue,"add");PlayerStatHandeling(save.Players[1],"thirst",1*timechangingvalue,"add");}
  if(save.Players[2].Player != "Empty"){PlayerStatHandeling(save.Players[2],"hunger",1*timechangingvalue,"add");PlayerStatHandeling(save.Players[2],"thirst",1*timechangingvalue,"add");}
  if(save.Players[3].Player != "Empty"){PlayerStatHandeling(save.Players[3],"hunger",1*timechangingvalue,"add");PlayerStatHandeling(save.Players[3],"thirst",1*timechangingvalue,"add");}
  if(save.Players[4].Player != "Empty"){PlayerStatHandeling(save.Players[4],"hunger",1*timechangingvalue,"add");PlayerStatHandeling(save.Players[4],"thirst",1*timechangingvalue,"add");}
  if(save.Players[5].Player != "Empty"){PlayerStatHandeling(save.Players[5],"hunger",1*timechangingvalue,"add");PlayerStatHandeling(save.Players[5],"thirst",1*timechangingvalue,"add");}
  if(save.Players[6].Player != "Empty"){PlayerStatHandeling(save.Players[6],"hunger",1*timechangingvalue,"add");PlayerStatHandeling(save.Players[6],"thirst",1*timechangingvalue,"add");}
  if(save.Players[7].Player != "Empty"){PlayerStatHandeling(save.Players[7],"hunger",1*timechangingvalue,"add");PlayerStatHandeling(save.Players[7],"thirst",1*timechangingvalue,"add");}
  if(save.Players[8].Player != "Empty"){PlayerStatHandeling(save.Players[8],"hunger",1*timechangingvalue,"add");PlayerStatHandeling(save.Players[8],"thirst",1*timechangingvalue,"add");}
  if(save.Players[9].Player != "Empty"){PlayerStatHandeling(save.Players[9],"hunger",1*timechangingvalue,"add");PlayerStatHandeling(save.Players[9],"thirst",1*timechangingvalue,"add");}
  if(save.Players[10].Player != "Empty"){PlayerStatHandeling(save.Players[10],"hunger",1*timechangingvalue,"add");PlayerStatHandeling(save.Players[10],"thirst",1*timechangingvalue,"add");}
   }
  if (timeremtype.charAt(0) == "h"){
   var timechangingvalue = Number(timeremtype.replace(/\D/g,''));
   world.Hour = world.Hour-timechangingvalue;}
  if (timeremtype.charAt(0) == "m"){
   var timechangingvalue = Number(timeremtype.replace(/\D/g,''));
   world.Time = world.Time-timechangingvalue;}

}
}

if(mX >= 850 && mX <= 1200){
 if (mY >= 30 && mY <= 50){
  if (world.Month == 1){var monthname = "January";}
  if (world.Month == 2){var monthname = "February";}
  if (world.Month == 3){var monthname = "March";}
  if (world.Month == 4){var monthname = "April";}
  if (world.Month == 5){var monthname = "May";}
  if (world.Month == 6){var monthname = "June";}
  if (world.Month == 7){var monthname = "July";}
  if (world.Month == 8){var monthname = "August";}
  if (world.Month == 9){var monthname = "September";}
  if (world.Month == 10){var monthname = "October";}
  if (world.Month == 11){var monthname = "November";}
  if (world.Month == 12){var monthname = "December";}
  alert("- Time: "+monthname+" "+world.Day+", "+world.Year+"   "+world.Hour+":"+world.Time); 
 }
}
}
 
if (mY >= 195 && mY <= 218 && mX >= 15 && mX <= 66){
 if(viewing == false){
  viewing = true;
  editing = false;
  removing = false;
}else{
  viewing = false;
}}
//if (mY >= 195 && mY <= 218 && mX >= 15 && mX <= 66){
//var playerviewnum = prompt("-View Player <1-10> \n"+save.Players[1].Player+"\n"+save.Players[2].Player+"\n"+save.Players[3].Player+"\n"+save.Players[4].Player+"\n"+save.Players[5].Player+"\n"+save.Players[6].Player+"\n"+save.Players[7].Player+"\n"+save.Players[8].Player+"\n"+save.Players[9].Player+"\n"+save.Players[10].Player);
//if(playerviewnum != nil){selected_player = playerviewnum;}
//selected_player = playerviewnum;
//} 
 
if (viewing == false){
if (editing == false){
 if (removing == false){
 if (selected.Item !== "empty"){
   if (selected.Edible == "True"){
    alert("- " + selected.Item + "\n- This item is edible.\n- Count: " + selected.Quantity + "\n- Weight Per: " + selected.Weight + weightsymble + "\n- Total Weight: " +       (selected.Weight*selected.Quantity) + weightsymble + "\n- Average Worth Each: "+ selected.AvWorth + goldsymble + "\n- Average Worth Total: " + (selected.AvWorth*selected.Quantity) + goldsymble + "\n- Description: " + selected.Desc); 
   }
   if (selected.Edible == "False"){
    alert("- "+selected.Item + "\n- This item is not edible.\n- Count: " + selected.Quantity + "\n- Weight Per: " + selected.Weight +weightsymble+ "\n- Total Weight: " + (selected.Weight*selected.Quantity) + weightsymble+"\n- Average Worth Each: "+selected.AvWorth + goldsymble +"\n- Average Worth Total: "+(selected.AvWorth*selected.Quantity) + goldsymble + "\n- Description: " + selected.Desc); 
  }
  }
 if (selected.Item == "empty"){
  if (confirm("-Add Item?")){
   var addprompt1 = prompt("Adding Item to "+player.Player+"\n\nItem Name",selected.Item);
   var addprompt2 = prompt("Adding Item to "+player.Player+"\n\nCount",selected.Quantity);
   var addprompt3 = prompt("Adding Item to "+player.Player+"\n\nWeight Per Item",selected.Weight);
   var addprompt4 = prompt("Adding Item to "+player.Player+"\n\nAverage Worth",selected.AvWorth);
   var addprompt7 = prompt("Adding Item to "+player.Player+"\n\nDescription",selected.Desc);
   var addprompt5 = prompt("Adding Item to "+player.Player+"\n\nEdible",selected.Edible).toLowerCase();
  if (addprompt5.charAt(0) == "t"){
     var addprompt6 = prompt("Adding Item to "+player.Player+"\n\nMessage on eat",selected.onEat);
      selected.onEat = addprompt6;
      selected.Edible = "True";
  }else{
   selected.Edible = "False";
  }
selected.Item = addprompt1;
selected.Quantity = addprompt2;
invnumber.Weight = addprompt3;
selected.AvWorth = addprompt4;
selected.Desc = addprompt7;
}
draw();  
  }
 }
  if (removing == true && length1 !== 0){
   selected.Item = "empty";
   selected.Weight = 0;
   selected.Quantity = 0;
   selected.Edible = "False";
   selected.onEat = "";
   selected.AvWorth = 0;
   selected.Desc = "";
   removing = false;
   draw();
  }
}
if (editing == true){
if(mY >= 15 && mY <= 30 && mX >= 505 && mX <= 555){var playeredit = prompt("Player "+selected_player+" Name Edit",save.Players[selected_player].Player);save.Players[selected_player].Player = playeredit;}
if(mY >= 35 && mY <= 50 && mX >= 505 && mX <= 640){var playeredit = prompt("Player "+selected_player+" Character Name Edit",save.Players[selected_player].Ch_Name);save.Players[selected_player].Ch_Name = playeredit;}
if(mY >= 55 && mY <= 70 && mX >= 505 && mX <= 550){var playeredit = prompt("Player "+selected_player+" Age Edit",save.Players[selected_player].Ch_Age);save.Players[selected_player].Ch_Age = playeredit;}
if(mY >= 75 && mY <= 90 && mX >= 505 && mX <= 555){var playeredit = prompt("Player "+selected_player+" Race Edit",save.Players[selected_player].Ch_Race);save.Players[selected_player].Ch_Race = playeredit;}
if(mY >= 95 && mY <= 110 && mX >= 505 && mX <= 570){var playeredit = prompt("Player "+selected_player+" Money Edit",save.Players[selected_player].Ch_Money);save.Players[selected_player].Ch_Money = playeredit;}
if(mY >= 115 && mY <= 130 && mX >= 505 && mX <= 570){var playeredit = prompt("Player "+selected_player+" Health Edit\n- m<num> sets max",save.Players[selected_player].Ch_Health);if(playeredit.charAt(0) == "m"){save.Players[selected_player].Ch_MaxHealth = Number(playeredit.replace(/\D/g,''));}else{save.Players[selected_player].Ch_Health = playeredit;}}
if(mY >= 135 && mY <= 150 && mX >= 505 && mX <= 559){var playeredit = prompt("Player "+selected_player+" Food Edit\n- m<num> sets max",save.Players[selected_player].Ch_Food);if(playeredit.charAt(0) == "m"){save.Players[selected_player].Ch_MaxFood = Number(playeredit.replace(/\D/g,''));}else{save.Players[selected_player].Ch_Food = playeredit;}}
if(mY >= 155 && mY <= 170 && mX >= 505 && mX <= 615){var playeredit = prompt("Player "+selected_player+" Hunger Rate Edit",save.Players[selected_player].Ch_HungerRate);save.Players[selected_player].Ch_HungerRate = playeredit;}
if(mY >= 175 && mY <= 190 && mX >= 505 && mX <= 560){var playeredit = prompt("Player "+selected_player+" Thirst Edit\n- m<num> sets max",save.Players[selected_player].Ch_Thirst);if(playeredit.charAt(0) == "m"){save.Players[selected_player].Ch_MaxThirst = Number(playeredit.replace(/\D/g,''));}else{save.Players[selected_player].Ch_Thirst = playeredit;}}
if(mY >= 195 && mY <= 210 && mX >= 505 && mX <= 600){var playeredit = prompt("Player "+selected_player+" Thirst Rate Edit",save.Players[selected_player].Ch_ThirstRate);save.Players[selected_player].Ch_ThirstRate = playeredit;}
if(mY >= 215 && mY <= 230 && mX >= 505 && mX <= 585){var playeredit = prompt("Player "+selected_player+" Location Edit",save.Players[selected_player].Ch_Location);save.Players[selected_player].Ch_Location = playeredit;}
if(mY >= 235 && mY <= 250 && mX >= 505 && mX <= 690){if(save.Players[selected_player].Ch_Team == "False"){save.Players[selected_player].Ch_Team = "True";}else{save.Players[selected_player].Ch_Team = "False";}}
if(mY >= 255 && mY <= 270 && mX >= 505 && mX <= 565){var playeredit = prompt("Player "+selected_player+" Status Edit",save.Players[selected_player].Ch_Statuses.Life);save.Players[selected_player].Ch_Statuses.Life = playeredit;}
if(mY >= 275 && mY <= 290 && mX >= 505 && mX <= 562){var playeredit = prompt("Player "+selected_player+" Class Edit\n-l<num> sets Level\n-e<num> sets Experience",save.Players[selected_player].Ch_CurrentClass);if(playeredit.charAt(0) == "l"){save.Players[selected_player].Ch_CurrentClassLevel = Number(playeredit.replace(/\D/g,''));}else{if(playeredit.charAt(0) == "e"){save.Players[selected_player].Ch_CurrentClassExp = Number(playeredit.replace(/\D/g,''));}else{save.Players[selected_player].Ch_CurrentClass = playeredit;}}}
if(mY >= 15 && mY <= 30 && mX >= 88 && mX <= 400){var playeredit = prompt("Player "+selected_player+" Max Weight Edit",save.Players[selected_player].Ch_MaxInvWeight);save.Players[selected_player].Ch_MaxInvWeight = playeredit;}
 if (selected.Item !== "empty"){
    var editpart = prompt("-Message on eat - m\n-Edible - e\n-Description - d\n-Average Worth - a\n-Count - c\n-Weight per - w\n-Item - i").toLowerCase();
    switch(editpart.charAt(0)){
      case "m":
      var editpromptm = prompt("Editing "+player.Player+" Item slot "+selectednum+"\nMessage on eat",selected.onEat);
      selected.onEat = editpromptm;
      draw();  
      break;
      case "e":
      var editprompte = prompt("Editing "+player.Player+" Item slot "+selectednum+"\nEdible",selected.Edible);
      selected.Edible = editprompte;
      draw(); 
      break;
      case "a":
      var editprompta = prompt("Editing "+player.Player+" Item slot "+selectednum+"\nAverage Worth per",selected.AvWorth);
      selected.AvWorth = editprompta;
      draw(); 
      break;
      case "c":
      var editpromptc = prompt("Editing "+player.Player+" Item slot "+selectednum+"\nCount",selected.Quantity);
      selected.Quantity = editpromptc;
      draw(); 
      break;
      case "w":
      var editpromptw = prompt("Editing "+player.Player+" Item slot "+selectednum+"\nWeight per",selected.Weight);
      selected.Weight = editpromptw;
      draw(); 
      break;
      case "i":
      var editprompti = prompt("Editing "+player.Player+" Item slot "+selectednum+"\nItem",selected.Item);
      selected.Item = editprompti;
      draw(); 
      break;
      case "d":
      var editpromptd = prompt("Editing "+player.Player+" Item slot "+selectednum+"\nDescription",selected.Desc);
      selected.Desc = editpromptd;
      draw(); 
      break;
    } 
 }
 if (selected.Item == "empty"){
  confirm("Slot is empty and cannot be edited")
  }
}
}
 if(viewings == false){viewing = false;viewings = true;}
}//when mouse is clicked

function DrawShapes(){
  if (editing == true){rect(10,10,48,20,"rgba(10, 10, 10, 0.5)","BLACK");}
  if (editing == false){rect(10,10,48,20,"rgba(34, 93, 55, 0.2)","BLACK");}
 
  if (removing == true){rect(10,40,48,20,"rgba(10, 10, 10, 0.5)","BLACK");}
  if (removing == false){rect(10,40,48,20,"rgba(34, 93, 55, 0.2)","BLACK");}
 
  rect(10,100,48,20,"rgba(34, 93, 55, 0.2)","BLACK");
 
  if (viewing == true){rect(10,190,48,20,"rgba(10, 10, 10, 0.5)","BLACK");}
  if (viewing == false){rect(10,190,48,20,"rgba(34, 93, 55, 0.2)","BLACK");}
}

function ListItem(height,slot){
  if (slot.Item != "empty"){
   drawText("16px",81,20+(20*height),"- "+slot.Item,"BLACK");
      };
}
function DrawPlayer(player){
  player.Ch_CurrentInvWeight = (player.Ch_Inventory.Slot1.Weight*player.Ch_Inventory.Slot1.Quantity)+(player.Ch_Inventory.Slot2.Weight*player.Ch_Inventory.Slot2.Quantity)+(player.Ch_Inventory.Slot3.Weight*player.Ch_Inventory.Slot3.Quantity)+(player.Ch_Inventory.Slot4.Weight*player.Ch_Inventory.Slot4.Quantity)+(player.Ch_Inventory.Slot5.Weight*player.Ch_Inventory.Slot5.Quantity)+(player.Ch_Inventory.Slot6.Weight*player.Ch_Inventory.Slot6.Quantity)+(player.Ch_Inventory.Slot7.Weight*player.Ch_Inventory.Slot7.Quantity)+(player.Ch_Inventory.Slot8.Weight*player.Ch_Inventory.Slot8.Quantity)+(player.Ch_Inventory.Slot9.Weight*player.Ch_Inventory.Slot9.Quantity)+(player.Ch_Inventory.Slot10.Weight*player.Ch_Inventory.Slot10.Quantity)+(player.Ch_Inventory.Slot11.Weight*player.Ch_Inventory.Slot11.Quantity)+(player.Ch_Inventory.Slot12.Weight*player.Ch_Inventory.Slot12.Quantity)+(player.Ch_Inventory.Slot13.Weight*player.Ch_Inventory.Slot13.Quantity)+(player.Ch_Inventory.Slot14.Weight*player.Ch_Inventory.Slot14.Quantity)+(player.Ch_Inventory.Slot15.Weight*player.Ch_Inventory.Slot15.Quantity)+(player.Ch_Inventory.Slot16.Weight*player.Ch_Inventory.Slot16.Quantity)+(player.Ch_Inventory.Slot17.Weight*player.Ch_Inventory.Slot17.Quantity)+(player.Ch_Inventory.Slot18.Weight*player.Ch_Inventory.Slot18.Quantity)+(player.Ch_Inventory.Slot19.Weight*player.Ch_Inventory.Slot19.Quantity)+(player.Ch_Inventory.Slot20.Weight*player.Ch_Inventory.Slot20.Quantity)
  drawText("16px",81,20,"Inventory: - Weight: "+player.Ch_CurrentInvWeight+ weightsymble +" - Max Weight: "+player.Ch_MaxInvWeight+weightsymble,"BLACK");
  ListItem(1,player.Ch_Inventory.Slot1);
  ListItem(2,player.Ch_Inventory.Slot2);
  ListItem(3,player.Ch_Inventory.Slot3);
  ListItem(4,player.Ch_Inventory.Slot4);
  ListItem(5,player.Ch_Inventory.Slot5);
  ListItem(6,player.Ch_Inventory.Slot6);
  ListItem(7,player.Ch_Inventory.Slot7);
  ListItem(8,player.Ch_Inventory.Slot8);
  ListItem(9,player.Ch_Inventory.Slot9);
  ListItem(10,player.Ch_Inventory.Slot10);
  ListItem(11,player.Ch_Inventory.Slot11);
  ListItem(12,player.Ch_Inventory.Slot12);
  ListItem(13,player.Ch_Inventory.Slot13);
  ListItem(14,player.Ch_Inventory.Slot14);
  ListItem(15,player.Ch_Inventory.Slot15);
  ListItem(16,player.Ch_Inventory.Slot16);
  ListItem(17,player.Ch_Inventory.Slot17);
  ListItem(18,player.Ch_Inventory.Slot18);
  ListItem(19,player.Ch_Inventory.Slot19);
  ListItem(20,player.Ch_Inventory.Slot20);
 
  drawText("16px",500,20,"Player: "+player.Player,"BLACK");
  drawText("16px",500,40,"- Character Name: "+player.Ch_Name,"BLACK");
  drawText("16px",500,60,"- Age: "+player.Ch_Age,"BLACK");
  drawText("16px",500,80,"- Race: "+player.Ch_Race,"BLACK");
  drawText("16px",500,100,"- Money: "+player.Ch_Money+goldsymble,"BLACK");
  drawText("16px",500,120,"- Health: "+player.Ch_Health+" - Max: "+player.Ch_MaxHealth+"  "+player.Ch_Statuses.Health,"BLACK");
  drawText("16px",500,140,"- Food: "+player.Ch_Food+" - Max: "+player.Ch_MaxFood,"BLACK");
  drawText("16px",500,160,"- Hunger Rate: "+player.Ch_HungerRate+" Per Day","BLACK");
  drawText("16px",500,180,"- Thirst: "+player.Ch_Thirst+" - Max: "+player.Ch_MaxThirst,"BLACK");
  drawText("16px",500,200,"- Thirst Rate: "+player.Ch_ThirstRate+" Per Day","BLACK");
  drawText("16px",500,220,"- Location: "+player.Ch_Location,"BLACK");
  if (player.Ch_Team == "False"){drawText("16px",500,240,"- This player is not on a team","BLACK");}
  if (player.Ch_Team == "True"){drawText("16px",500,240,"- This player is on a team","BLACK");}
  drawText("16px",500,260,"- Status: "+player.Ch_Statuses.Life,"BLACK");
  drawText("16px",500,280,"- Class: "+player.Ch_CurrentClass+" Lv. "+player.Ch_CurrentClassLevel+" Exp. "+player.Ch_CurrentClassExp,"BLACK");
}

function DrawWorld(world){
   if (viewing == false){
  drawText("16px",850,20,"World: "+world.Name,"BLACK");
  drawText("16px",850,40,"- Time Passed: Y"+world.Year+"  M"+world.Month+"  D"+world.Day+"  Time"+world.Hour+":"+world.Time,"BLACK");
   }
if (viewing == true){ 
 drawText("16px",81,20+(20*1),save.Players[1].Player,"BLACK");
 drawText("16px",81,20+(20*2),save.Players[2].Player,"BLACK");
 drawText("16px",81,20+(20*3),save.Players[3].Player,"BLACK");
 drawText("16px",81,20+(20*4),save.Players[4].Player,"BLACK");
 drawText("16px",81,20+(20*5),save.Players[5].Player,"BLACK");
 drawText("16px",81,20+(20*6),save.Players[6].Player,"BLACK");
 drawText("16px",81,20+(20*7),save.Players[7].Player,"BLACK");
 drawText("16px",81,20+(20*8),save.Players[8].Player,"BLACK");
 drawText("16px",81,20+(20*9),save.Players[9].Player,"BLACK");
 drawText("16px",81,20+(20*10),save.Players[10].Player,"BLACK");
}
  drawText("18px",13,26,"Edit","BLACK");
  drawText("18px",13,56,"Del","BLACK");
  drawText("18px",13,116,"Time","BLACK");
  drawText("18px",10,176,"Players","BLACK");
  drawText("18px",13,206,"View","BLACK");
}
 //Ch_CurrentClass:"Office Worker",
 //Ch_CurrentClassLevel:4,
 //Ch_CurrentClassExp:35,
 //Ch_PastClasses:{},
 //Ch_Statuses:{},
 //Ch_SkillsSpellsAbilities:{},
function HurtPlayer(player,type,num){
 if (type == "internal"){player.Ch_Health = player.Ch_Health - num;}
 if (type == "run_health"){if (player.Ch_Health <= 0){player.Ch_Statuses.Life = "Dead";player.Ch_Statuses.Health = "Dead";}
  if (player.Ch_Health > player.Ch_MaxHealth){player.Ch_Health = player.Ch_MaxHealth;}}
}
function PlayerStatHandeling(player,type,num,form){
if(type == "run_hunger"){
 if (player.Ch_Food > player.Ch_MaxFood){player.Ch_Food = player.Ch_MaxFood;}
 if (player.Ch_Food < 0){player.Ch_Food = 0;}}
if(type == "run_thirst"){
 if (player.Ch_Thirst > player.Ch_MaxThirst){player.Ch_Thirst = player.Ch_MaxThirst;}
 if (player.Ch_Thirst < 0){player.Ch_Thirst = 0;}}
 
if(type == "hunger"){
 if(form == "add"){
for (var i = 0; i < num; i++) {
 player.Ch_Food = player.Ch_Food + (player.Ch_HungerRate*-1);
}}if(form == "sub"){
  for (var i = 0; i < num; i++) {
   player.Ch_Food = player.Ch_Food - (player.Ch_HungerRate*-1);
   if (player.Ch_Food <= 0){HurtPlayer(player,"internal",(player.Ch_HungerRate*-1));}}}}

if(type == "thirst"){
 if(form == "add"){
for (var i = 0; i < num; i++) {
 player.Ch_Thirst = player.Ch_Thirst + (player.Ch_ThirstRate*-1);
}}if(form == "sub"){
  for (var i = 0; i < num; i++) {
   player.Ch_Thirst = player.Ch_Thirst - (player.Ch_ThirstRate*-1);
   if (player.Ch_Thirst <= 0){HurtPlayer(player,"internal",(player.Ch_ThirstRate*-1));}}}}
}
function WorldStatHandeling(world){

}
function TimeStatHandeling(world){
 if (world.Time > 59){
   world.Hour = world.Hour + 1;
   world.Time = world.Time - 60;}
 if (world.Hour > 23){
   world.Day = world.Day + 1;
  if(save.Players[1].Player != "Empty"){PlayerStatHandeling(save.Players[1],"hunger",1,"sub");PlayerStatHandeling(save.Players[1],"thirst",1,"sub");}
  if(save.Players[2].Player != "Empty"){PlayerStatHandeling(save.Players[2],"hunger",1,"sub");PlayerStatHandeling(save.Players[2],"thirst",1,"sub");}
  if(save.Players[3].Player != "Empty"){PlayerStatHandeling(save.Players[3],"hunger",1,"sub");PlayerStatHandeling(save.Players[3],"thirst",1,"sub");}
  if(save.Players[4].Player != "Empty"){PlayerStatHandeling(save.Players[4],"hunger",1,"sub");PlayerStatHandeling(save.Players[4],"thirst",1,"sub");}
  if(save.Players[5].Player != "Empty"){PlayerStatHandeling(save.Players[5],"hunger",1,"sub");PlayerStatHandeling(save.Players[5],"thirst",1,"sub");}
  if(save.Players[6].Player != "Empty"){PlayerStatHandeling(save.Players[6],"hunger",1,"sub");PlayerStatHandeling(save.Players[6],"thirst",1,"sub");}
  if(save.Players[7].Player != "Empty"){PlayerStatHandeling(save.Players[7],"hunger",1,"sub");PlayerStatHandeling(save.Players[7],"thirst",1,"sub");}
  if(save.Players[8].Player != "Empty"){PlayerStatHandeling(save.Players[8],"hunger",1,"sub");PlayerStatHandeling(save.Players[8],"thirst",1,"sub");}
  if(save.Players[9].Player != "Empty"){PlayerStatHandeling(save.Players[9],"hunger",1,"sub");PlayerStatHandeling(save.Players[9],"thirst",1,"sub");}
  if(save.Players[10].Player != "Empty"){PlayerStatHandeling(save.Players[10],"hunger",1,"sub");PlayerStatHandeling(save.Players[10],"thirst",1,"sub");}
   world.Hour = world.Hour - 23;}
 if (world.Day > 29){
   world.Month = world.Month + 1;
   world.Day = world.Day - 30;}
 if (world.Month > 11){
   world.Year = world.Year + 1;
  if(save.Players[1].Player != "Empty"){save.Players[1].Ch_Age +=1;}
  if(save.Players[2].Player != "Empty"){save.Players[2].Ch_Age +=1;}
  if(save.Players[3].Player != "Empty"){save.Players[3].Ch_Age +=1;}
  if(save.Players[4].Player != "Empty"){save.Players[4].Ch_Age +=1;}
  if(save.Players[5].Player != "Empty"){save.Players[5].Ch_Age +=1;}
  if(save.Players[6].Player != "Empty"){save.Players[6].Ch_Age +=1;}
  if(save.Players[7].Player != "Empty"){save.Players[7].Ch_Age +=1;}
  if(save.Players[8].Player != "Empty"){save.Players[8].Ch_Age +=1;}
  if(save.Players[9].Player != "Empty"){save.Players[9].Ch_Age +=1;}
  if(save.Players[10].Player != "Empty"){save.Players[10].Ch_Age +=1;}
   world.Month = world.Month - 12;}
 
 if (world.Time < 0){
   world.Hour = world.Hour - 1;
   world.Time = world.Time + 60;}
 if (world.Hour < 0){
   world.Day = world.Day - 1;
  if(save.Players[1].Player != "Empty"){PlayerStatHandeling(save.Players[1],"hunger",1,"add");PlayerStatHandeling(save.Players[1],"thirst",1,"add");}
  if(save.Players[2].Player != "Empty"){PlayerStatHandeling(save.Players[2],"hunger",1,"add");PlayerStatHandeling(save.Players[2],"thirst",1,"add");}
  if(save.Players[3].Player != "Empty"){PlayerStatHandeling(save.Players[3],"hunger",1,"add");PlayerStatHandeling(save.Players[3],"thirst",1,"add");}
  if(save.Players[4].Player != "Empty"){PlayerStatHandeling(save.Players[4],"hunger",1,"add");PlayerStatHandeling(save.Players[4],"thirst",1,"add");}
  if(save.Players[5].Player != "Empty"){PlayerStatHandeling(save.Players[5],"hunger",1,"add");PlayerStatHandeling(save.Players[5],"thirst",1,"add");}
  if(save.Players[6].Player != "Empty"){PlayerStatHandeling(save.Players[6],"hunger",1,"add");PlayerStatHandeling(save.Players[6],"thirst",1,"add");}
  if(save.Players[7].Player != "Empty"){PlayerStatHandeling(save.Players[7],"hunger",1,"add");PlayerStatHandeling(save.Players[7],"thirst",1,"add");}
  if(save.Players[8].Player != "Empty"){PlayerStatHandeling(save.Players[8],"hunger",1,"add");PlayerStatHandeling(save.Players[8],"thirst",1,"add");}
  if(save.Players[9].Player != "Empty"){PlayerStatHandeling(save.Players[9],"hunger",1,"add");PlayerStatHandeling(save.Players[9],"thirst",1,"add");}
  if(save.Players[10].Player != "Empty"){PlayerStatHandeling(save.Players[10],"hunger",1,"add");PlayerStatHandeling(save.Players[10],"thirst",1,"add");}
   world.Hour = world.Hour + 23;}
 if (world.Day < 0){
   world.Month = world.Month - 1;
   world.Day = world.Day + 30;}
 if (world.Month < 0){
   world.Year = world.Year - 1;
  if(save.Players[1].Player != "Empty"){save.Players[1].Ch_Age -=1;}
  if(save.Players[2].Player != "Empty"){save.Players[2].Ch_Age -=1;}
  if(save.Players[3].Player != "Empty"){save.Players[3].Ch_Age -=1;}
  if(save.Players[4].Player != "Empty"){save.Players[4].Ch_Age -=1;}
  if(save.Players[5].Player != "Empty"){save.Players[5].Ch_Age -=1;}
  if(save.Players[6].Player != "Empty"){save.Players[6].Ch_Age -=1;}
  if(save.Players[7].Player != "Empty"){save.Players[7].Ch_Age -=1;}
  if(save.Players[8].Player != "Empty"){save.Players[8].Ch_Age -=1;}
  if(save.Players[9].Player != "Empty"){save.Players[9].Ch_Age -=1;}
  if(save.Players[10].Player != "Empty"){save.Players[10].Ch_Age -=1;}
   world.Month = world.Month + 12;}
}
function MouseMoves(){
if (mY >= 15 && mY <= 38 && mX >= 15 && mX <= 66){
rect(10,10,48,20,"rgba(30, 30, 55, 0.5)","BLACK");}
 
if (mY >= 45 && mY <= 70 && mX >= 15 && mX <= 66){
rect(10,40,48,20,"rgba(30, 30, 55, 0.5)","BLACK");}

if (mY >= 105 && mY <= 128 && mX >= 15 && mX <= 66){
rect(10,100,48,20,"rgba(30, 30, 55, 0.5)","BLACK");}

if (mY >= 195 && mY <= 218 && mX >= 15 && mX <= 66){
rect(10,190,48,20,"rgba(30, 30, 55, 0.5)","BLACK");}
 
}
function multiplayerrun(){
  if(save.Players[1].Player != "Empty"){PlayerStatHandeling(save.Players[1],"run_hunger");PlayerStatHandeling(save.Players[1],"run_thirst");HurtPlayer(save.Players[1],"run_health");}
  if(save.Players[2].Player != "Empty"){PlayerStatHandeling(save.Players[2],"run_hunger");PlayerStatHandeling(save.Players[2],"run_thirst");HurtPlayer(save.Players[2],"run_health");}
  if(save.Players[3].Player != "Empty"){PlayerStatHandeling(save.Players[3],"run_hunger");PlayerStatHandeling(save.Players[3],"run_thirst");HurtPlayer(save.Players[3],"run_health");}
  if(save.Players[4].Player != "Empty"){PlayerStatHandeling(save.Players[4],"run_hunger");PlayerStatHandeling(save.Players[4],"run_thirst");HurtPlayer(save.Players[4],"run_health");}
  if(save.Players[5].Player != "Empty"){PlayerStatHandeling(save.Players[5],"run_hunger");PlayerStatHandeling(save.Players[5],"run_thirst");HurtPlayer(save.Players[5],"run_health");}
  if(save.Players[6].Player != "Empty"){PlayerStatHandeling(save.Players[6],"run_hunger");PlayerStatHandeling(save.Players[6],"run_thirst");HurtPlayer(save.Players[6],"run_health");}
  if(save.Players[7].Player != "Empty"){PlayerStatHandeling(save.Players[7],"run_hunger");PlayerStatHandeling(save.Players[7],"run_thirst");HurtPlayer(save.Players[7],"run_health");}
  if(save.Players[8].Player != "Empty"){PlayerStatHandeling(save.Players[8],"run_hunger");PlayerStatHandeling(save.Players[8],"run_thirst");HurtPlayer(save.Players[8],"run_health");}
  if(save.Players[9].Player != "Empty"){PlayerStatHandeling(save.Players[9],"run_hunger");PlayerStatHandeling(save.Players[9],"run_thirst");HurtPlayer(save.Players[9],"run_health");}
  if(save.Players[10].Player != "Empty"){PlayerStatHandeling(save.Players[10],"run_hunger");PlayerStatHandeling(save.Players[10],"run_thirst");HurtPlayer(save.Players[10],"run_health");}
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  DrawShapes();
  if (viewing == false){
  DrawPlayer(save.Players[selected_player]);}
  multiplayerrun();
  DrawWorld(save.world);
  WorldStatHandeling(save.world);
  TimeStatHandeling(save.world);
  MouseMoves();
 
   ctx.clearRect(0, 0, canvas.width, canvas.height);
  DrawShapes();
  if (viewing == false){
  DrawPlayer(save.Players[selected_player]);}
  multiplayerrun();
  DrawWorld(save.world);
  WorldStatHandeling(save.world);
  TimeStatHandeling(save.world);
  MouseMoves();
 
 
  if (save.world.Month == 0){save.world.Month = 1;}
  requestAnimationFrame(draw);
}
draw();