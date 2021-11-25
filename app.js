var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var coords={lon: 78.1792, lat: 26.2236};
var humid=document.querySelector('.humidity');
var sun=document.querySelector('.sun');
var sign=document.querySelector('.sign');

button.addEventListener('click',weatherData());


function weatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374'+'&units=metric')
    .then(response => response.json())
    .then(data => {
      var imageURL="http://openweathermap.org/img/wn/"+ data.weather[0].icon+"@2x.png";
      coords=data.coord;
      var srx=`https://flagcdn.com/40x30/${data.sys.country.toLowerCase()}.png`;
      var tempValue = data['main']['temp'];
      var nameValue = data['name']+", "+counTrans[data.sys.country]+" "+`<img src=${srx}>`;
      var descValue = data['weather'][0]['description'];
      var wind=data.wind.speed;
      var lat=(coords.lat>=0)?"<small>°N</small>":"<small>°S</small>";
      var lon=(coords.lon>=0)?"<small>°E</small>":"<small>°W</small>";
      main.innerHTML = nameValue+" ("+Math.round(coords.lat)+lat+","+Math.round(coords.lon)+lon+")";
      desc.innerHTML = 'The weather conditions are '+descValue+".";
      temp.innerHTML = "Temperature "+tempValue+'&#8451'+" ("+data.weather[0].main+")";
      clouds.innerHTML="Wind Speed: "+wind+'m/s';
      sign.innerHTML=`<img src=${imageURL} style="width:13%" >`;
      humid.innerHTML="Humidity: "+data.main.humidity+'%';
      sun.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunrise-fill" viewBox="0 0 16 16"><path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/></svg>'+" "+timeTransform(data.sys.sunrise)+" "+'<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunset-fill" viewBox="0 0 16 16"><path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/></svg>'+" "+timeTransform(data.sys.sunset);
      input.value ="";
    })
    
    .catch(err => console.log("Wrong city name!"));
    }

    function timeTransform(unix_time) {
        var data = new Date(unix_time*1000);
        return data.toLocaleTimeString();
      }


      var counTrans = {   
        "AO": "Angola",   
        "AF": "Afghanistan",   
        "AL": "Albania",   
        "DZ": "Algeria",   
        "AD": "Andorra",   
        "AI": "Anguilla",   
        "AG": "Barbuda Antigua",   
        "AR": "Argentina",   
        "AM": "Armenia",   
        "AU": "Australia",   
        "AT": "Austria",   
        "AZ": "Azerbaijan",   
        "BS": "Bahamas",   
        "BH": "Bahrain",   
        "BD": "Bangladesh",   
        "BB": "Barbados",   
        "BY": "Belarus",   
        "BE": "Belgium",   
        "BZ": "Belize",   
        "BJ": "Benin",   
        "BM": "Bermuda Is.",   
        "BO": "Bolivia",   
        "BW": "Botswana",   
        "BR": "Brazil",   
        "BN": "Brunei",   
        "BG": "Bulgaria",   
        "BF": "Burkina-faso",   
        "MM": "Burma",   
        "BI": "Burundi",   
        "CM": "Cameroon",   
        "CA": "Canada",   
        "CF": "Central African Republic",   
        "TD": "Chad",   
        "CL": "Chile",   
        "CN": "China",   
        "CO": "Colombia",   
        "CG": "Congo",   
        "CK": "Cook Is.",   
        "CR": "Costa Rica",   
        "CU": "Cuba",   
        "CY": "Cyprus",   
        "CZ": "Czech Republic",   
        "DK": "Denmark",   
        "DJ": "Djibouti",   
        "DO": "Dominica Rep.",   
        "EC": "Ecuador",   
        "EG": "Egypt",   
        "SV": "EI Salvador",   
        "EE": "Estonia",   
        "ET": "Ethiopia",   
        "FJ": "Fiji",   
        "FI": "Finland",   
        "FR": "France",   
        "GF": "French Guiana",   
        "GA": "Gabon",   
        "GM": "Gambia",   
        "GE": "Georgia",   
        "DE": "Germany",   
        "GH": "Ghana",   
        "GI": "Gibraltar",   
        "GR": "Greece",   
        "GD": "Grenada",   
        "GU": "Guam",   
        "GT": "Guatemala",   
        "GN": "Guinea",   
        "GY": "Guyana",   
        "HT": "Haiti",   
        "HN": "Honduras",   
        "HK": "Hongkong",   
        "HU": "Hungary",   
        "IS": "Iceland",   
        "IN": "India",   
        "ID": "Indonesia",   
        "IR": "Iran",   
        "IQ": "Iraq",   
        "IE": "Ireland",   
        "IL": "Israel",   
        "IT": "Italy",   
        "JM": "Jamaica",   
        "JP": "Japan",   
        "JO": "Jordan",   
        "KH": "Kampuchea (Cambodia)",   
        "KZ": "Kazakstan",   
        "KE": "Kenya",   
        "KR": "Korea",   
        "KW": "Kuwait",   
        "KG": "Kyrgyzstan",   
        "LA": "Laos",   
        "LV": "Latvia",   
        "LB": "Lebanon",   
        "LS": "Lesotho",   
        "LR": "Liberia",   
        "LY": "Libya",   
        "LI": "Liechtenstein",   
        "LT": "Lithuania",   
        "LU": "Luxembourg",   
        "MO": "Macao",   
        "MG": "Madagascar",   
        "MW": "Malawi",   
        "MY": "Malaysia",   
        "MV": "Maldives",   
        "ML": "Mali",   
        "MT": "Malta",   
        "MU": "Mauritius",   
        "MX": "Mexico",   
        "MD": "Moldova",   
        "MC": "Monaco",   
        "MN": "Mongolia",   
        "MS": "Montserrat Is.",   
        "MA": "Morocco",   
        "MZ": "Mozambique",   
        "NA": "Namibia",   
        "NR": "Nauru",   
        "NP": "Nepal",   
        "NL": "Netherlands",   
        "NZ": "New Zealand",   
        "NI": "Nicaragua",   
        "NE": "Niger",   
        "NG": "Nigeria",   
        "KP": "North Korea",   
        "NO": "Norway",   
        "OM": "Oman",   
        "PK": "Pakistan",   
        "PA": "Panama",   
        "PG": "Papua New Cuinea",   
        "PY": "Paraguay",   
        "PE": "Peru",   
        "PH": "Philippines",   
        "PL": "Poland",   
        "PF": "French Polynesia",   
        "PT": "Portugal",   
        "PR": "Puerto Rico",   
        "QA": "Qatar",   
        "RO": "Romania",   
        "RU": "Russia",   
        "LC": "Saint Lueia",   
        "VC": "Saint Vincent",   
        "SM": "San Marino",   
        "ST": "Sao Tome and Principe",   
        "SA": "Saudi Arabia",   
        "SN": "Senegal",   
        "SC": "Seychelles",   
        "SL": "Sierra Leone",   
        "SG": "Singapore",   
        "SK": "Slovakia",   
        "SI": "Slovenia",   
        "SB": "Solomon Is.",   
        "SO": "Somali",   
        "ZA": "South Africa",   
        "ES": "Spain",   
        "LK": "Sri Lanka",   
        "SD": "Sudan",   
        "SR": "Suriname",   
        "SZ": "Swaziland",   
        "SE": "Sweden",   
        "CH": "Switzerland",   
        "SY": "Syria",   
        "TW": "Taiwan",   
        "TJ": "Tajikstan",   
        "TZ": "Tanzania",   
        "TH": "Thailand",   
        "TG": "Togo",   
        "TO": "Tonga",   
        "TT": "Trinidad and Tobago",   
        "TN": "Tunisia",   
        "TR": "Turkey",   
        "TM": "Turkmenistan",   
        "UG": "Uganda",   
        "UA": "Ukraine",   
        "AE": "United Arab Emirates",   
        "GB": "United Kiongdom",   
        "US": "United States of America",   
        "UY": "Uruguay",   
        "UZ": "Uzbekistan",   
        "VE": "Venezuela",   
        "VN": "Vietnam",   
        "YE": "Yemen",   
        "YU": "Yugoslavia",   
        "ZW": "Zimbabwe",   
        "ZR": "Zaire",   
        "ZM": "Zambia"  
        };