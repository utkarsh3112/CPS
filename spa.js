var apikey="c5e0fee78dc1ef6ae562ab561f105dd3";
// var apikey="fdee7e386cdb503c1101964a76cfe631";
var ddi=document.getElementById("checking");
var g=document.createElement("select");
g.setAttribute("id","ddl");
g.onchange=check;
var counTrans = {    
    "AU": "Australia",   
    "BR": "Brazil",   
    "CA": "Canada",
    "CN": "China",  
    "EG": "Egypt",   
    "FR": "France",   
    "GR": "Greece",   
    "HK": "Hongkong",  
    "IN": "India",   
    "IE": "Ireland",   
    "IL": "Israel",   
    "IT": "Italy",   
    "JP": "Japan", 
    "NL": "Netherlands",  
    "NO": "Norway",   
    "PE": "Peru",   
    "PH": "Philippines",   
    "PK": "Pakistan", 
    "PT": "Portugal",   
    "RO": "Romania",   
    "RU": "Russia",   
    "SG": "Singapore",  
    "SE": "Sweden",  
    "TW": "Taiwan", 
    "UA": "Ukraine",     
    "GB": "United Kingdom",   
    "US": "United States of America"
    };
var ios=1;
for(let key in counTrans){
    let opt=document.createElement("option");
    opt.setAttribute("value",key.toLowerCase());
    opt.setAttribute("id",ios++);
    opt.innerText=counTrans[key];
    if(key=="IN"){
        opt.setAttribute("selected","selected");
    }
    g.append(opt);
}
ddi.appendChild(g);


check();

function check(){

    let country=document.getElementById("ddl").value;

    let newsAccordian=document.getElementById("newsAccordion");
    const xhr=new XMLHttpRequest();
    const result="https://gnews.io/api/v4/top-headlines?token="+apikey+"&country="+country+"&lang=en";
    xhr.open('GET', result, true);
    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onload = function () {
        if(this.status === 200){
            let json=JSON.parse(this.responseText);
            let articles=json.articles;
            let newsHtml="";
            var index=0;
            if(articles.length==0){
                alert("No new top headlines choose another city");
                checki();                
            }
            for(var i=0;i<articles.length;i++){
                var element=articles[i];
                if(element.content==null){
                    element.content="";
                }
                else{
                    element.content=element.content+".";
                }           
                if(element.image==null){
                    continue;
                }
                index++;
                let news=`<div class="accordion-item"><h2 class="accordion-header" id="heading${index}"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><span id="hide"><strong>Breaking News </span>${index}: &nbsp </strong>${element.title}</button></h2><div id="collapse${index}" class="accordion-collapse collapse collapsed" aria-labelledby="heading${index}" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="img-container"><img src=${element.image} id="image_incident"></div><div class="text-container"><p><h4>${element.description}</h4></p>${element.content}<br><a href=${element.url} target="_blank">Read more here</a></div></div></div></div>`;
                newsHtml+=news;
            }       
            newsAccordian.innerHTML=newsHtml;
        }
        else{
            console.log("Some error occured")
        }
    }
    xhr.send();
}
function checki(){
    document.getElementById("9").selected="selected"
    let country=document.getElementById("ddl").value;

    let newsAccordian=document.getElementById("newsAccordion");
    const xhr=new XMLHttpRequest();
    const result="https://gnews.io/api/v4/top-headlines?token="+apikey+"&country="+country+"&lang=en";
    xhr.open('GET', result, true);
    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onload = function () {
        if(this.status === 200){
            let json=JSON.parse(this.responseText);
            let articles=json.articles;
            let newsHtml="";
            var index=0;
            if(articles.length==0){
                alert("No new top headlines choose another city");
                checki(1);                
            }
            for(var i=0;i<articles.length;i++){
                var element=articles[i];
                if(element.content==null){
                    element.content="";
                }
                else{
                    element.content=element.content+".";
                }           
                if(element.image==null){
                    continue;
                }
                index++;
                let news=`<div class="accordion-item"><h2 class="accordion-header" id="heading${index}"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><span id="hide"><strong>Breaking News </span>${index}: &nbsp </strong>${element.title}</button></h2><div id="collapse${index}" class="accordion-collapse collapse collapsed" aria-labelledby="heading${index}" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="img-container"><img src=${element.image} id="image_incident"></div><div class="text-container"><p><h4>${element.description}</h4></p>${element.content}<br><a href=${element.url} target="_blank">Read more here</a></div></div></div></div>`;
                newsHtml+=news;
            }       
            newsAccordian.innerHTML=newsHtml;
        }
        else{
            console.log("Some error occured")
        }
    }
    xhr.send();
}
