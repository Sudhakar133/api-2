let div=document.createElement("div");
div.setAttribute("class", "main1");

let formgroup=document.createElement("div");
formgroup.setAttribute("class", "form-group");

let input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "form-control");
input.setAttribute("id", "main");
input.setAttribute("placeholder", "Search by Country Name");
input.style.width="420px";

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="160px";
button.style.marginTop="20px";
button.addEventListener("click", foo);

let result=document.createElement("div");
result.classList.add("active", "res");

var container=document.createElement("div");
container.setAttribute("class", "container");

var row=document.createElement("div");
row.setAttribute("class", "row");

container.append(row);
result.append(container);
formgroup.append(input,button);
div.append(formgroup);
document.body.append(div,result);

async function foo(){
let name=document.getElementById("main").value;
console.log(name);
let res=await fetch(`http://universities.hipolabs.com/search?name=${name}`);
let res1= await res.json();
console.log(res1);
try {
    for(var i=0;i<res1.length;i++){
    var cname=res1[i].country;
    var id=res1[i].alpha_two_code;
    var name1=res1[i].name;
    var web=res1[i].web_pages;
    // var model=result[i].Model_ID;
    // var mname=result[i].Model_Name;
    console.log(cname,id,name1,web);
    var div1=document.createElement("div");
    div1.innerHTML=` <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text">Country Name & ID: ${cname} & ${id}</p>
                                <p class="card-text">Institute Name: ${name1}</p>
                                <p class="card-text">Web Page: ${web}</p>
                            </div>
                        </div>
                    </div>`;
    row.append(div1);
    }
} catch (error) {
    console.log("invalid"+error.message);
}
}