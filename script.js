url="https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane"
//1.Search for the nationality based on the name.
async function api(){
    v = fetch(url);
    out = await v;
    prom = out.json();
    out1 = await prom;
    console.log(out1);
    for(let i of out1){
        try{
               console.log(i.country.countiresname[0]);
        }
           catch{
           console.log("error");
       }
       
    }
}
api()

//2.If you get the response back, display the top two countries.
async function api(){
    v = fetch(url);
    out = await v;
    prom = out.json();
    out1 = await prom;
    console.log(out1);
    for(let i of out1){
        try{
               console.log(i.country[0].countires);
        }
           catch{
           console.log("error");
       }
       
    }
}
api()

//3.Also display the probability value.
async function api(){
    v = fetch(url);
    out = await v;
    prom = out.json();
    out1 = await prom;
    console.log(out1);
    for(let i of out1){
        try{
               console.log(i.country[0].probability);
        }
           catch{
           console.log("error");
       }
       
    }
}
api()

//4.Implement the search filter based on the input text given and the text should be highlighted.
document.getElementById('inp').addEventListener('keyup',keyupfun);
function keyupfun(){
    var a = document.querySelectorAll('li');
    for(let i=0 ; i<a.length; i++){
        var val = document.getElementById('inp').value.toLowerCase();
        if(a[i].innerHTML.toLowerCase().indexOf(val) != -1){
            a[i].style.display = 'block';
        }else{
            a[i].style.display = 'none';
        }
    }
}