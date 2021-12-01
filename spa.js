//Intialization parameters
let country='in';
let apiKey='c72d86e7ee124c51adb8d5db992560b0';//0e51fff3f853efe1e2d3f1b119b0dbdf
//pub_2508596ac684ff3ecee44729b48882f91418
//Grab the news Container
let newsAccordian=document.getElementById("newsAccordion");
//Create an ajax get request
const xhr=new XMLHttpRequest();
const result="http://api.mediastack.com/v1/news?access_key=0e51fff3f853efe1e2d3f1b119b0dbdf&sources=cnn,bbc";
//"https://newsapi.org/v2/top-headlines?country="+country+"&apiKey="+apiKey;
xhr.open('GET', result, true);
xhr.getResponseHeader('Content-type', 'application/json');

// What to do when response is ready
xhr.onload = function () {
    if(this.status === 200){
        let json=JSON.parse(this.responseText);
        let articles=json.data;
        let newsHtml="";
        var index=0;
        for(var i=0;i<articles.length;i++){
            var element=articles[i];
            // if(element.content==null){
            //     element.content="";
            // }
            // else{
            //     element.content=element.content+".";
            // }
            if(element.image==null){
                continue;
            }
            index++;
            let news=`<div class="accordion-item"><h2 class="accordion-header" id="heading${index}"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><span id="hide"><strong>Breaking News </span>${index}: &nbsp </strong>${element.title}</button></h2><div id="collapse${index}" class="accordion-collapse collapse collapsed" aria-labelledby="heading${index}" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="img-container"><img src=${element.image} id="image_incident"></div><div class="text-container"><p><h4>${element.description}</h4></p><a href=${element.url} target="_blank">Read more here</a></div></div></div></div>`;
            newsHtml+=news;
        }       
        newsAccordian.innerHTML=newsHtml;
    }
    else{
        console.log("Some error occured")
    }
}
xhr.send();
