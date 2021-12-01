//Intialization parameters
let country='in';
let apiKey='c72d86e7ee124c51adb8d5db992560b0';
//Grab the news Container
let newsAccordian=document.getElementById("newsAccordion");
//Create an ajax get request
const xhr=new XMLHttpRequest();
const result="https://gnews.io/api/v4/top-headlines?token=fdee7e386cdb503c1101964a76cfe631&country=in&lang=en";
//"https://newsapi.org/v2/top-headlines?country="+country+"&apiKey="+apiKey;
xhr.open('GET', result, true);
xhr.getResponseHeader('Content-type', 'application/json');

// What to do when response is ready
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
