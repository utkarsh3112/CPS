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
ddi.append(g);
check();

function check(){
    let country=document.getElementById("ddl").value;

    let newsAccordian=document.getElementById("newsAccordion");
    const xhr=new XMLHttpRequest();
    const result="https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=c72d86e7ee124c51adb8d5db992560b0&lang=en";
    xhr.open('GET', result, true);
    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onload = function () {
        if(this.status === 200){
            let json=JSON.parse(this.responseText);
            let articles=json.articles;
            let newsHtml="";
            var index=0;
            for(var i=0;i<articles.length;i++){
                var element=articles[i];
                if(element.content==null){
                    element.content="";
                }
                else{
                    element.content=element.content+".";
                }
                if(element.urlToImage==null){
                    continue;
                }
                index++;
                let news=`<div class="accordion-item"><h2 class="accordion-header" id="heading${index}"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><span id="hide"><strong>Breaking News ${index}:</span> &nbsp </strong>${element.title}</button></h2><div id="collapse${index}" class="accordion-collapse collapse collapsed" aria-labelledby="heading${index}" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="img-container"><img src=${element.urlToImage} id="image_incident"></div><div class="text-container"><p><h4>${element.description}</h4></p>${element.content}<br><a href=${element.url} target="_blank">Read more here</a></div></div></div></div>`;
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
