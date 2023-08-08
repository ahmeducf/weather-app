"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[826],{44:(e,t,r)=>{var n=r(91),s=r.n(n),a=new URL(r(36),r.b);s()(a);const o={},i=(e,t)=>{o[e]&&o[e].forEach((e=>{e(t)}))},d=(e,t)=>{o[e]=o[e]??[],o[e].push(t)},c=Symbol("SHOW_LOADING_COMPONENT"),l=Symbol("HIDE_LOADING_COMPONENT"),u=Symbol("RENDER_CONTENT"),h=Symbol("FETCH_ERROR"),m=Symbol("UNIT_CHANGE"),g=Symbol("USE_MY_LOCATION_REQUESTED"),y=Symbol("SEARCH_LOCATION"),p=Symbol("SHOW_SEARCH_LOADING_COMPONENT"),C=(Symbol("HIDE_SEARCH_LOADING_COMPONENT"),Symbol("SEARCH_LOCATION_RESULT")),f=Symbol("FETCH_SELECTED_LOCATION");var x=r(533);var L=r(41);var b=r(917),v=r(257);const _=(e,t,r)=>{const{length:n}=t,s=Math.floor(n/2),a=Math.round(t[s].temp_c),o=Math.round(t[s].temp_f),i=Math.round(t[s].chance_of_rain),{text:d,icon:c}=t[s].condition;return{getName:()=>r,getIcon:()=>c.replace("64x64","128x128"),getText:()=>d,getMedianCelsiusTemperature:()=>a,getMedianFahrenheitTemperature:()=>o,getMedianChanceOfRain:()=>i,isCurrent:()=>{const r=new Date(e),n=(0,b.Z)(r,t[0].time.split(" ")[1].split(":")[0]),s=(0,b.Z)(r,t[t.length-1].time.split(" ")[1].split(":")[0]);return(0,v.Z)(r,{start:n,end:s})}}};var w=r(817);const T=e=>{if(!e)throw new Error("Pollutant must be a value greater than or equal to 0");return{getPollutant:()=>Math.round(e),getPollutantText:()=>{let t="";return t=e<=50?"Good":e<=100?"Moderate":e<=150?"Unhealthy for Sensitive Groups":e<=200?"Unhealthy":e<=300?"Very Unhealthy":"Hazardous",t}}},S=e=>{if(!(e&&e.location&&e.current&&e.forecast))throw new Error("APP must be initialized with data");const t=(e=>{if(!(e&&e.name&&e.region&&e.country&&e.localtime&&e.tz_id))throw new Error("Location must be initialized with data");const t=`${e.name}, ${e.country}`,r=(0,x.Z)(new Date(e.localtime),"h:mm a z",{timeZone:e.tz_id});return{getLocalTime:()=>r,getName:()=>t}})(e.location),r=(e=>{const t=e.current.last_updated,r=e.current.is_day,n=e.current.condition.text,s=e.current.condition.icon.replace("64x64","128x128"),a=Math.round(e.current.temp_c),o=Math.round(e.current.temp_f),i=Math.round(e.forecast.forecastday[0].day.maxtemp_c),d=Math.round(e.forecast.forecastday[0].day.maxtemp_f),c=Math.round(e.forecast.forecastday[0].day.mintemp_c),l=Math.round(e.forecast.forecastday[0].day.mintemp_f),u=e.current.wind_kph,h=e.current.humidity,m=e.current.pressure_mb,g=e.current.vis_km,y=e.current.uv,p=e.forecast.forecastday[0].astro.moon_phase,C=e.forecast.forecastday[0].astro.sunrise,f=e.forecast.forecastday[0].astro.sunset,x=Math.round(e.current.feelslike_c),b=Math.round(e.current.feelslike_f);let v=null,_=null;return e.forecast.forecastday[0].hour.forEach((t=>{(0,L.Z)(new Date(e.location.localtime),new Date(t.time))&&(v=Math.round(t.dewpoint_c),_=Math.round(t.dewpoint_f))})),{getForecastTime:()=>t,isDayTime:()=>r,getConditionText:()=>n,getConditionIcon:()=>s,getCelsiusTemperature:()=>a,getFahrenheitTemperature:()=>o,getHighCelsiusTemperature:()=>i,getHighFahrenheitTemperature:()=>d,getLowCelsiusTemperature:()=>c,getLowFahrenheitTemperature:()=>l,getWindKph:()=>u,getHumidity:()=>h,getPressureMb:()=>m,getVisibilityKm:()=>g,getUvIndex:()=>y,getMoonPhase:()=>p,getSunriseTime:()=>C,getSunsetTime:()=>f,getFeelsLikeCelsiusTemperature:()=>x,getFeelsLikeFahrenheitTemperature:()=>b,getDewPointCelsiusTemperature:()=>v,getDewPointFahrenheitTemperature:()=>_}})(e),n=(e=>{if(!e)throw new Error("AirQuality must be initialized with data");const t=e.current.air_quality,r=e.forecast.forecastday[0].day.air_quality,n=(t.co??r.co??0)%75,s=t.no2??r.no2??0,a=(t.o3??r.o3??0)%101,o=t.so2??r.so2??0,i=t.pm2_5??r.pm2_5??0,d=t.pm10??r.pm10??0,c=()=>Math.round(Math.max(n,s,a,o,i,d));return{getAirQualityIndex:c,getAirQualityIndexText:()=>{const e=c();let t="";return t=e<=50?"Good":e<=100?"Moderate":e<=150?"Unhealthy for Sensitive Groups":e<=200?"Unhealthy":e<=300?"Very Unhealthy":"Hazardous",t},getAirQualityIndexDescription:()=>{const e=c();let t="";return t=e<=50?"Air quality is considered satisfactory, and air pollution poses little or no risk":e<=100?"Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution":e<=150?"Members of sensitive groups may experience health effects. The general public is not likely to be affected":e<=200?"Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects":e<=300?"Health warnings of emergency conditions. The entire population is more likely to be affected":"Health alert: everyone may experience more serious health effects",t},getCO:()=>T(n),getNO2:()=>T(s),getO3:()=>T(a),getSO2:()=>T(o),getPM2_5:()=>T(i),getPM10:()=>T(d)}})(e),s=(e=>{const t=e.forecast.forecastday[0].hour,{localtime:r}=e.location,n=[],s=[],a=[],o=[];t.forEach((e=>{(0,v.Z)(new Date(e.time),{start:(0,b.Z)(new Date(e.time),5),end:(0,b.Z)(new Date(e.time),11)})?n.push(e):(0,v.Z)(new Date(e.time),{start:(0,b.Z)(new Date(e.time),12),end:(0,b.Z)(new Date(e.time),16)})?s.push(e):(0,v.Z)(new Date(e.time),{start:(0,b.Z)(new Date(e.time),17),end:(0,b.Z)(new Date(e.time),23)})?a.push(e):o.push(e)}));const i=()=>_(r,n,"Morning"),d=()=>_(r,s,"Afternoon"),c=()=>_(r,a,"Evening"),l=()=>_(r,o,"Overnight");return{getMorning:i,getAfternoon:d,getEvening:c,getOvernight:l,getCurrent:()=>[i(),d(),c(),l()].filter((e=>e.isCurrent())).pop()}})(e),a=(e=>{const t=e.forecast.forecastday[0].hour.map((t=>((e,t)=>{let r=(0,w.Z)(new Date(t.time));r=`${r>12?r-12:r}:00 ${r>12?"PM":"AM"}`;const{icon:n}=t.condition,{text:s}=t.condition,a=Math.round(t.temp_c),o=Math.round(t.temp_f),i=Math.round(t.chance_of_rain);return{getTime:()=>r,getConditionIcon:()=>n.replace("64x64","128x128"),getConditionText:()=>s,getCelsiusTemperature:()=>a,getFahrenheitTemperature:()=>o,getChanceOfRain:()=>i,isCurrent:()=>(0,L.Z)(new Date(t.time),new Date(e)),getHourIndexInSortedArray:()=>{const e=r.split(":")[0];return"AM"===r.split(" ")[1]?Number(e):Number(e)+12}}})(e.location.localtime,t)));return{getCurrent:()=>t.find((e=>e.isCurrent())),getHours:()=>t}})(e);let o="C";return{getLocation:()=>t,getForecast:()=>r,getDayParts:()=>s,getDayHours:()=>a,getAirQuality:()=>n,isCelsius:()=>"C"===o,setTemperatureFormat:e=>{o=e}}},A=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(async(e,t)=>new Promise(((r,n)=>{e.getCurrentPosition(r,n,t)})))(navigator.geolocation,e)},E=async e=>(async(e,t)=>{const r=`https://api.weatherapi.com/v1/forecast.json?key=c33d409e23f845748e431828231507&q=${t}&days=1&aqi=yes&alerts=no`,n=await e(r,{mode:"cors"});if(!n.ok)throw new Error(`Request failed with status code ${n.status}: ${n.statusText}`);const s=await n.json();if(s.error)throw new Error(s.error.message);return s})(fetch,e),q=async e=>(async(e,t)=>{const r=`https://api.weatherapi.com/v1/search.json?key=c33d409e23f845748e431828231507&q=${t}`,n=await e(r,{mode:"cors"});if(!n.ok)throw new Error(`Request failed with status code ${n.status}: ${n.statusText}`);const s=await n.json();if(s.error)throw new Error(s.error.message);return s})(fetch,e);let M=null;window.addEventListener("unhandledrejection",(e=>{console.error(e),i(h,e)}));const k=async e=>(M=S(e),await new Promise((e=>{i(u,M),e()})),i(l),M),O=e=>{i(h,e),console.error(e)},D=()=>{d(m,(e=>{M.setTemperatureFormat(e),i(u,M)})),d(g,(async()=>{A().then((e=>{i(c);const{latitude:t,longitude:r}=e.coords;return`${t},${r}`})).then(E).then(k).catch(O)})),d(y,(async e=>{i(p),q(e).then((e=>{i(C,e)})).catch(O)})),d(f,(async e=>{i(c),E(e).then(k).catch(O)}))},P=()=>{document.body.classList.remove("loading"),document.querySelectorAll("body > *").forEach((e=>{e.classList.remove("hidden")}));const e=document.querySelector("body > .loader");document.body.removeChild(e)},$=(e,t,r)=>{const n=document.createElement("li");n.classList.add("forecast-list__list-item","slide"),n.setAttribute("data-index",r),t.isCurrent()&&n.classList.add("current");const s=document.createElement("div");s.classList.add("time"),s.textContent=t.isCurrent()?"Now":t.getTime(),s.setAttribute("title","Time");const a=document.createElement("div");a.classList.add("temperature");const o=document.createElement("span");o.classList.add("temp"),o.textContent=e.isCelsius()?`${t.getCelsiusTemperature()}°C`:`${t.getFahrenheitTemperature()}°F`,a.setAttribute("title","Temperature");const i=document.createElement("div");i.classList.add("icon"),i.setAttribute("title",t.getConditionText());const d=document.createElement("img");d.setAttribute("src",t.getConditionIcon()),d.setAttribute("alt",t.getConditionText()),i.setAttribute("aria-hidden","true");const c=document.createElement("div");c.classList.add("chance-of-rain");const l=document.createElement("span");return l.classList.add("percentage"),l.textContent=`${t.getChanceOfRain()}%`,c.innerHTML='<svg name="precip-rain-single" theme="full" viewBox="0 -2 5 10" width="7.5px" fill="#6adef8">\n                <title>Rain</title>\n                <path d="M4.7329.0217c-.1848-.059-.3855.0064-.4803.148L.2731 5.1191c-.0814.0922-.1501.1961-.196.3108-.2469.6009.1185 1.2697.8156 1.4943.6914.226 1.447-.0712 1.7-.6585L4.9662.4987l.0111-.0282c.073-.1807-.036-.379-.2444-.4488z"></path>\n              </svg>',c.setAttribute("title","Chance of rain"),a.appendChild(o),i.appendChild(d),c.appendChild(l),n.appendChild(s),n.appendChild(a),n.appendChild(i),n.appendChild(c),n},F=e=>{(e=>{let t=window.innerWidth>720;const r=document.querySelector(".hourly-forecast__forecast-list"),n=()=>{const t=e.getDayHours(),n=t.getHours(),s=t.getCurrent().getHourIndexInSortedArray();let a=s;s>20&&(a=s-s%4);let o=a;r.innerHTML="";let i=[];if(window.innerWidth>720)n.slice(a,a+4).forEach((t=>{const n=$(e,t,o);o+=1,r.appendChild(n)})),i=n.slice(s+4);else{const t=$(e,n[s],o);o+=1,r.appendChild(t),i=n.slice(s+1)}i.forEach((t=>{const n=$(e,t,o);n.classList.add("hidden"),o+=1,r.appendChild(n)})),(e=>{const t=window.innerWidth>720,r=e.getDayHours().getCurrent().getHourIndexInSortedArray(),n=document.querySelector(".slider-container .prev"),s=document.querySelector(".slider-container .next"),a=document.querySelectorAll(".slider-container .slide:not(.hidden)");n.classList.add("disabled"),n.classList.remove("hidden"),s.classList.remove("disabled"),s.setAttribute("aria-disabled","false"),s.classList.remove("hidden"),t&&r>20&&(n.classList.add("hidden"),s.classList.add("hidden")),a[a.length-1].style.borderRight="none",window.addEventListener("resize",(()=>{const e=document.querySelectorAll(".slider-container .slide:not(.hidden)");e[e.length-1].style.borderRight="none",window.innerWidth>720&&r>20?(n.classList.add("hidden"),s.classList.add("hidden")):window.innerWidth<=720&&r>20&&(n.classList.remove("hidden"),s.classList.remove("hidden"))})),s.addEventListener("click",(()=>{const e=document.querySelectorAll(".slider-container .slide:not(.hidden)"),t=e[e.length-1],r=t.nextElementSibling;r&&(r.classList.remove("hidden"),r.style.borderRight="none",t.style.borderRight="1px solid #dedede",e[0].classList.add("hidden"),r.nextElementSibling||(s.classList.add("disabled"),s.setAttribute("aria-disabled","true")),n.classList.remove("disabled"),n.setAttribute("aria-disabled","false"))})),n.addEventListener("click",(()=>{const e=document.querySelectorAll(".slider-container .slide:not(.hidden)"),t=e[0].previousElementSibling;t&&(t.classList.remove("hidden"),e[e.length-1].classList.add("hidden"),e[e.length-1].style.borderRight="1px solid #dedede",e.length>1&&(e[e.length-2].style.borderRight="none"),t.previousElementSibling||(n.classList.add("disabled"),n.setAttribute("aria-disabled","true")),s.classList.remove("disabled"),s.setAttribute("aria-disabled","false"))}))})(e)};n(),window.addEventListener("resize",(()=>{(window.innerWidth>720&&!t||window.innerWidth<=720&&t)&&(t=!t,n())}))})(e)},N="morning",H="afternoon",I="evening",R=()=>{const e=document.querySelector(".search-box .search-results"),t=document.querySelector(".search-box .loader-container"),r=document.querySelector(".search-box .search-results .no-results"),n=document.querySelector(".search-box .search-results .results-list");e.classList.remove("hidden"),t.classList.remove("hidden"),r.classList.add("hidden"),n.classList.add("hidden")},z=e=>{const t=document.querySelector(".search-box .search-results"),r=document.querySelector(".search-box .loader-container"),n=document.querySelector(".search-box .search-results .no-results"),s=document.querySelector(".search-box .search-results .results-list");t.classList.remove("hidden"),r.classList.add("hidden"),0===e.length?(n.classList.remove("hidden"),s.classList.add("hidden")):(n.classList.add("hidden"),s.classList.remove("hidden"),s.innerHTML="",e.forEach((e=>{const{name:r,region:n,country:a}=e,o=document.createElement("li");o.classList.add("results-list-item"),o.dataset.query=e.url,o.setAttribute("tabindex","0"),o.setAttribute("role","button"),o.textContent=`${r}, ${n}, ${a}`,s.appendChild(o),["click","keydown"].forEach((e=>{o.addEventListener(e,(e=>{if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;const{query:r}=o.dataset;i(f,r),t.classList.add("hidden"),document.querySelector("header .search-box input").value="",t.setAttribute("aria-hidden","true"),t.setAttribute("aria-expanded","false")}))}))})))},Z=e=>{(e=>{const t=document.querySelector("header .unit-switcher .celsius"),r=document.querySelector("header .unit-switcher .fahrenheit");t.addEventListener("click",(()=>{t.classList.contains("active")||(i(m,"C"),t.classList.add("active"),r.classList.remove("active"))})),r.addEventListener("click",(()=>{r.classList.contains("active")||(i(m,"F"),r.classList.add("active"),t.classList.remove("active"))}))})(),(e=>{document.querySelector("header .search-box .my-location").addEventListener("click",(()=>{i(g,e)}))})(e),(e=>{const t=document.querySelector("header .search-box input"),r=document.querySelector(".search-box .search-results");t.addEventListener("keyup",(e=>{const t=e.target.value;t&&i(y,t),r.setAttribute("aria-hidden","false"),r.setAttribute("aria-expanded","true")}))})()};d(c,(()=>{document.body.classList.add("loading"),document.querySelectorAll("body > *").forEach((e=>{e.classList.add("hidden")}));const e=document.createElement("span");e.classList.add("loader"),document.body.appendChild(e)})),d(l,P),d(p,R),d(C,z),d(u,(e=>{(e=>{const t=e.getForecast().isDayTime(),r=e.getForecast().getConditionText();r.toLowerCase().includes("cloud")||r.toLowerCase().includes("overcast")||r.toLowerCase().includes("fog")||r.toLowerCase().includes("mist")||r.toLowerCase().includes("haze")||r.toLowerCase().includes("smoke")||r.toLowerCase().includes("dust")?(document.body.classList.add("cloudy"),document.body.classList.remove("day","night")):t?(document.body.classList.add("day"),document.body.classList.remove("night","cloudy")):(document.body.classList.add("night"),document.body.classList.remove("day","cloudy")),document.body.addEventListener("click",(e=>{e.target.closest(".search-results")||document.querySelector(".search-results").classList.add("hidden")}))})(e),Z(e),(e=>{const t=document.querySelector(".current-conditions__header__info .location"),r=document.querySelector(".current-conditions__header__info .timestamp"),n=document.querySelector(".current-conditions__info .temperature .temp"),s=document.querySelector(".current-conditions__info .description"),a=document.querySelector(".current-conditions__info .icon"),o=document.querySelector(".current-conditions__info .icon img"),i=document.querySelector(".current-conditions__info .high-low .temp.high"),d=document.querySelector(".current-conditions__info .high-low .temp.low"),c=e.getLocation(),l=e.getForecast();t.textContent=c.getName(),r.textContent=c.getLocalTime(),n.textContent=e.isCelsius()?`${l.getCelsiusTemperature()}°`:`${l.getFahrenheitTemperature()}°`,s.textContent=l.getConditionText(),a.setAttribute("title",l.getConditionText()),o.src=l.getConditionIcon(),o.alt=l.getConditionText(),i.textContent=e.isCelsius()?`${l.getHighCelsiusTemperature()}°`:`${l.getHighFahrenheitTemperature()}°`,d.textContent=e.isCelsius()?`${l.getLowCelsiusTemperature()}°`:`${l.getLowFahrenheitTemperature()}°`})(e),(e=>{const t=document.querySelector(".air-quality-index__severity .severity__donut-chart .donut-chart"),r=t.querySelector(".donut-chart-indicator"),n=t.querySelector(".donut-chart-inner-value"),s=document.querySelector(".air-quality-index__severity .severity__text .title"),a=document.querySelector(".air-quality-index__severity .severity__text .description"),o=e.getAirQuality(),i=o.getAirQualityIndex(),d=o.getAirQualityIndexText(),c=o.getAirQualityIndexDescription();i<=50?(t.classList.add("good"),t.classList.remove("moderate","unhealthy-for-sensitive-groups","unhealthy","very-unhealthy","hazardous"),r.style.strokeDasharray="28.797932657906433 172.78759594743863"):i<=100?(t.classList.add("moderate"),t.classList.remove("good","unhealthy-for-sensitive-groups","unhealthy","very-unhealthy","hazardous"),r.style.strokeDasharray="57.595865315812866 172.78759594743863"):i<=150?(t.classList.add("unhealthy-for-sensitive-groups"),t.classList.remove("good","moderate","unhealthy","very-unhealthy","hazardous"),r.style.strokeDasharray="86.39379797371932 172.78759594743863"):i<=200?(t.classList.add("unhealthy"),t.classList.remove("good","moderate","unhealthy-for-sensitive-groups","very-unhealthy","hazardous"),r.style.strokeDasharray="115.19173063162564 172.78759594743863"):i<=300?(t.classList.add("very-unhealthy"),t.classList.remove("good","moderate","unhealthy-for-sensitive-groups","unhealthy","hazardous"),r.style.strokeDasharray="144.9896632895322 172.78759594743863"):(t.classList.add("hazardous"),t.classList.remove("good","moderate","unhealthy-for-sensitive-groups","unhealthy","very-unhealthy"),r.style.strokeDasharray="172.78759594743863 172.78759594743863"),n.textContent=i,s.textContent=d,a.textContent=c})(e),(e=>{document.querySelector(".today-forecast__header__info .location").textContent=e.getLocation().getName();const t=document.querySelectorAll(".today-forecast__forecast-list .forecast-list__list-item"),r=e.getDayParts(),n=r.getCurrent().getName().toLowerCase(),s=r.getMorning(),a=r.getAfternoon(),o=r.getEvening(),i=r.getOvernight();t.forEach((t=>{const r=t.querySelector(".time"),d=t.querySelector(".temperature"),c=t.querySelector(".icon"),l=t.querySelector(".icon img"),u=t.querySelector(".chance-of-rain .percentage"),h=t.dataset.part;h===N?(r.textContent=s.getName(),d.textContent=e.isCelsius()?`${s.getMedianCelsiusTemperature()}°C`:`${s.getMedianFahrenheitTemperature()}°F`,c.setAttribute("title",s.getText()),l.setAttribute("src",s.getIcon()),l.setAttribute("alt",s.getText()),u.textContent=`${s.getMedianChanceOfRain()}%`,n===N&&t.classList.add("current")):h===H?(r.textContent=a.getName(),d.textContent=e.isCelsius()?`${a.getMedianCelsiusTemperature()}°C`:`${a.getMedianFahrenheitTemperature()}°F`,c.setAttribute("title",a.getText()),l.setAttribute("src",a.getIcon()),l.setAttribute("alt",a.getText()),u.textContent=`${a.getMedianChanceOfRain()}%`,n===H&&t.classList.add("current")):h===I?(r.textContent=o.getName(),d.textContent=e.isCelsius()?`${o.getMedianCelsiusTemperature()}°C`:`${o.getMedianFahrenheitTemperature()}°F`,c.setAttribute("title",o.getText()),l.setAttribute("src",o.getIcon()),l.setAttribute("alt",o.getText()),u.textContent=`${o.getMedianChanceOfRain()}%`,n===I&&t.classList.add("current")):(r.textContent=i.getName(),d.textContent=e.isCelsius()?`${i.getMedianCelsiusTemperature()}°C`:`${i.getMedianFahrenheitTemperature()}°F`,c.setAttribute("title",i.getText()),l.setAttribute("src",i.getIcon()),l.setAttribute("alt",i.getText()),u.textContent=`${i.getMedianChanceOfRain()}%`,"overnight"===n&&t.classList.add("current"))}))})(e),(e=>{const t=document.querySelector(".today-details__header__info .location"),r=document.querySelector(".today-details__info .feels-like .temperature .temp"),n=document.querySelector(".today-details__info .sunrise-sunset .sunrise .time"),s=document.querySelector(".today-details__info .sunrise-sunset .sunset .time"),a=e.getForecast();t.textContent=e.getLocation().getName(),r.textContent=e.isCelsius()?`${a.getFeelsLikeCelsiusTemperature()}°`:`${a.getFeelsLikeFahrenheitTemperature()}°`,n.textContent=a.getSunriseTime(),s.textContent=a.getSunsetTime(),document.querySelectorAll(".info-list__list-item").forEach((t=>{const r=t.dataset.info,n=t.querySelector(".value");switch(r){case"high-low":{const t=n.querySelector(".high.temp"),r=n.querySelector(".low.temp");t.textContent=e.isCelsius()?`${a.getHighCelsiusTemperature()}°`:`${a.getHighFahrenheitTemperature()}°`,r.textContent=e.isCelsius()?`${a.getLowCelsiusTemperature()}°`:`${a.getLowFahrenheitTemperature()}°`;break}case"humidity":n.textContent=`${a.getHumidity()}%`;break;case"pressure":n.textContent=`${a.getPressureMb()} mb`;break;case"visibility":n.textContent=`${a.getVisibilityKm()} km`;break;case"wind":n.textContent=`${a.getWindKph()} km/h`;break;case"dew-point":n.textContent=e.isCelsius()?`${a.getDewPointCelsiusTemperature()}°`:`${a.getDewPointFahrenheitTemperature()}°`;break;case"uv-index":n.textContent=a.getUvIndex();break;case"moon-phase":n.textContent=a.getMoonPhase()}}))})(e),F(e),(e=>{const t=e.getAirQuality();document.querySelectorAll(".pollutants__list__item").forEach((e=>{const r=e.dataset.pollutant,n=e.querySelector(".label .severity-text"),s=e.querySelector(".donut-chart"),a=s.querySelector(".donut-chart-indicator"),o=s.querySelector(".donut-chart-inner-value"),i=(e,t,r)=>{e<=50?(t.classList.add("good"),t.classList.remove("moderate","unhealthy-for-sensitive-groups","unhealthy","very-unhealthy","hazardous"),r.style.strokeDasharray="25.65634000431664 153.93804002589985"):e<=100?(t.classList.add("moderate"),t.classList.remove("good","unhealthy-for-sensitive-groups","unhealthy","very-unhealthy","hazardous"),r.style.strokeDasharray="51.31268000863328 153.93804002589985"):e<=150?(t.classList.add("unhealthy-for-sensitive-groups"),t.classList.remove("good","moderate","unhealthy","very-unhealthy","hazardous"),r.style.strokeDasharray="76.96902001294993 153.93804002589985"):e<=200?(t.classList.add("unhealthy"),t.classList.remove("good","moderate","unhealthy-for-sensitive-groups","very-unhealthy","hazardous"),r.style.strokeDasharray="102.62536001726656 153.93804002589985"):e<=300?(t.classList.add("very-unhealthy"),r.style.strokeDasharray="128.2817000215832 153.93804002589985"):(t.classList.add("hazardous"),t.classList.remove("good","moderate","unhealthy-for-sensitive-groups","unhealthy","very-unhealthy"),r.style.strokeDasharray="153.93804002589985 153.93804002589985")};switch(r){case"co":n.textContent=t.getCO().getPollutantText(),o.textContent=t.getCO().getPollutant(),i(t.getCO().getPollutant(),s,a);break;case"no2":n.textContent=t.getNO2().getPollutantText(),o.textContent=t.getNO2().getPollutant(),i(t.getNO2().getPollutant(),s,a);break;case"o3":n.textContent=t.getO3().getPollutantText(),o.textContent=t.getO3().getPollutant(),i(t.getO3().getPollutant(),s,a);break;case"so2":n.textContent=t.getSO2().getPollutantText(),o.textContent=t.getSO2().getPollutant(),i(t.getSO2().getPollutant(),s,a);break;case"pm2_5":n.textContent=t.getPM2_5().getPollutantText(),o.textContent=t.getPM2_5().getPollutant(),i(t.getPM2_5().getPollutant(),s,a);break;case"pm10":n.textContent=t.getPM10().getPollutantText(),o.textContent=t.getPM10().getPollutant(),i(t.getPM10().getPollutant(),s,a)}}))})(e)})),i(c),E("Cairo").then(k).then(D).catch(O)},36:(e,t,r)=>{e.exports=r.p+"18c180e59d576eb97aa8.svg"}},e=>{e.O(0,[560],(()=>(44,e(e.s=44)))),e.O()}]);