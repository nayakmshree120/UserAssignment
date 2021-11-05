var selectedRow=null;

function onFormSubmit(e){

event.preventDefault();
var formData=readFormData();

if( validation() && (selectedRow==null)){
    insertNewRecord(formData);
}
resetData();
}

//retrive ddata

function readFormData()
{
    var formData={}
    formData["name"]=document.getElementById("name").value ;
    formData["age"]=document.getElementById("age").value ;
    formData["date"]=document.getElementById("date").value ;
   var Gender=document.querySelector('input[name="gender"]:checked');
   
   if(Gender){
    var genderValue=Gender.value;
   }
    formData["gender"]= genderValue;
 
    return formData;

}
//insert data

function insertNewRecord(data){
 var table=document.getElementById("list").getElementsByTagName('tbody')[0];
var newRow=table.insertRow(table.length);
var cell1=newRow.insertCell(0);
cell1.innerHTML=data.name;

var cell2=newRow.insertCell(1);
cell2.innerHTML=data.age;

var cell3=newRow.insertCell(2);
cell3.innerHTML=data.date;

var cell4=newRow.insertCell(3);
cell4.innerHTML=data.gender;

var cell5=newRow.insertCell(4);
cell5.innerHTML=`<button onclick='onDelete(this)' >Delete </button>`

}

//delete data

function onDelete(td)
{
    
    row=td.parentElement.parentElement;
    document.getElementById("list").deleteRow(row.rowIndex);
    
    resetData();
}

//resetdata
function resetData(){
    document.getElementById('name').value='';
    document.getElementById('age').value='';
    document.getElementById('date').value='';
    document.getElementsByName('gender').value='';
}

//validate data

function  validation(){
   
    var Name=document.getElementById("name").value ;
    var Age=document.getElementById("age").value ;
    var Date=document.getElementById("date").value;
    
    
     var username=/^([A-Za-z]*)$/ ;
     
     
  if(username.test(Name) && !(Name==""))
    {
    document.getElementById("nameErr").innerHTML='';
    }
       
     else
     {
        document.getElementById("nameErr").innerHTML='name not be blank';
        return false;
     }
     if(!(Age<1 || Age>100))
     {
         document.getElementById("ageErr").innerHTML='';
     }
     else
     {
        document.getElementById("ageErr").innerHTML='age must between 1 to 100';
        return false;
    }
    if(!(Date==""))
    {
        document.getElementById("dateErr").innerHTML='';
    }
    else{
        document.getElementById("dateErr").innerHTML='date not be blank';
        return false;
    }
   
    var gender = document.getElementsByName('gender');
        var genValue = false;

        for(var i=0; i<gender.length;i++){
            if(gender[i].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
            document.getElementById("genErr").innerHTML="Please Choose the gender";
            return false;
        }
        else{
            document.getElementById("genErr").innerHTML=""; 
        }
  
return true;
}







