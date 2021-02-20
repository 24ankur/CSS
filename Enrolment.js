function validate_form()
{
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let web=document.getElementById('website').value;
    document.write(name);
}

function showRecord()
{
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let web=document.getElementById('website').value;
    let img=document.getElementById('image').value;
    let gen;
    var ele = document.getElementsByName('gridRadios');           
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                    gen=ele[i].value;
                 
            } 
    let skill="";
    var ele = document.getElementsByName('Checkbox');           
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                    skill=skill+ele[i].value+" ";
                 
            }
    let originalDetails=document.getElementById("tbody").innerHTML;
    res=name+"<br>"+gen+"<br>"+web+"<br>"+email+"<br>"+skill;
    //let res=originalDetails+"<tr><td><tr>"+name+"</tr><tr>"+gen+'</tr><tr><a href="#">'+web+"</a></tr><tr>"+email+"</tr><tr>"+skill+"</tr></td></tr>";
    //<img src="..." class="img-fluid" alt="...">
    document.getElementById("tbody").innerHTML=originalDetails+'<tr><td>'+res+'</td><td><img src="'+img+'" height="100px" width="100px" class="img" ></td></tr>';

}
