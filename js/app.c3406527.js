(function(){"use strict";var e={2222:function(e,a,s){var i=s(5130),n=s(6768);const t={id:"app"};function r(e,a,s,i,r,l){const c=(0,n.g2)("ResumenEjecutivo"),o=(0,n.g2)("IncidentesDetectados"),d=(0,n.g2)("ExploitsPublicados"),u=(0,n.g2)("VulnerabilidadesCVE"),m=(0,n.g2)("AlertasAmenazas"),p=(0,n.g2)("FuentesInteligencia"),v=(0,n.g2)("Mitigaciones");return(0,n.uX)(),(0,n.CE)("div",t,[(0,n.bF)(c,{mes:r.mes,"año":r.año,totalVulnerabilidades:r.totalVulnerabilidades,vulnerabilidadesCriticas:r.vulnerabilidadesCriticas,vulnerabilidadesAltas:r.vulnerabilidadesAltas,vulnerabilidadesMedias:r.vulnerabilidadesMedias,sectoresAfectados:r.sectoresAfectados,gruposRansomware:r.gruposRansomware,"campañasIngenieria":r.campañasIngenieria},null,8,["mes","año","totalVulnerabilidades","vulnerabilidadesCriticas","vulnerabilidadesAltas","vulnerabilidadesMedias","sectoresAfectados","gruposRansomware","campañasIngenieria"]),(0,n.bF)(o,{incidentes:r.incidentes},null,8,["incidentes"]),(0,n.bF)(d,{exploits:r.exploits},null,8,["exploits"]),(0,n.bF)(u,{cves:r.cves},null,8,["cves"]),(0,n.bF)(m,{alertas:r.alertas},null,8,["alertas"]),(0,n.bF)(p,{fuentes:r.fuentes},null,8,["fuentes"]),(0,n.bF)(v,{mitigaciones:r.mitigaciones},null,8,["mitigaciones"])])}var l=s(4232);const c={class:"card mb-4 animate__animated animate__fadeIn"},o={class:"card-body"},d={class:"resumen-grid"},u={class:"resumen-texto"},m={class:"resumen-dashboard"},p={class:"indicator-grid"};function v(e,a,s,i,t,r){return(0,n.uX)(),(0,n.CE)("div",c,[a[13]||(a[13]=(0,n.Lk)("div",{class:"card-header"},[(0,n.Lk)("h2",null,"Resumen Ejecutivo")],-1)),(0,n.Lk)("div",o,[(0,n.Lk)("div",d,[(0,n.Lk)("div",u,[(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.puntosResumen,((e,a)=>((0,n.uX)(),(0,n.CE)("li",{key:a},(0,l.v_)(e),1)))),128))])]),(0,n.Lk)("div",m,[(0,n.Lk)("div",p,[(0,n.Lk)("div",{class:"indicator-item",onClick:a[0]||(a[0]=e=>r.scrollToSection("incidentes"))},a[6]||(a[6]=[(0,n.Lk)("i",{class:"fas fa-exclamation-triangle fa-2x icono"},null,-1),(0,n.Lk)("h4",null,"4",-1),(0,n.Lk)("small",null,"Incidentes",-1),(0,n.Lk)("span",{class:"text-danger"},"+400%",-1)])),(0,n.Lk)("div",{class:"indicator-item",onClick:a[1]||(a[1]=e=>r.scrollToSection("zero-days"))},a[7]||(a[7]=[(0,n.Lk)("i",{class:"fas fa-bug fa-2x icono"},null,-1),(0,n.Lk)("h4",null,"6",-1),(0,n.Lk)("small",null,"Zero Days",-1),(0,n.Lk)("span",{class:"text-muted"},"0%",-1)])),(0,n.Lk)("div",{class:"indicator-item",onClick:a[2]||(a[2]=e=>r.scrollToSection("exploits"))},a[8]||(a[8]=[(0,n.Lk)("i",{class:"fas fa-code fa-2x icono"},null,-1),(0,n.Lk)("h4",null,"22",-1),(0,n.Lk)("small",null,"Exploits",-1),(0,n.Lk)("span",{class:"text-success"},"+25%",-1)])),(0,n.Lk)("div",{class:"indicator-item",onClick:a[3]||(a[3]=e=>r.scrollToSection("vulnerabilidades"))},a[9]||(a[9]=[(0,n.Lk)("i",{class:"fas fa-shield-alt fa-2x icono"},null,-1),(0,n.Lk)("h4",null,"9",-1),(0,n.Lk)("small",null,"Nuevos CVE",-1),(0,n.Lk)("span",{class:"text-success"},"+10%",-1)])),(0,n.Lk)("div",{class:"indicator-item",onClick:a[4]||(a[4]=e=>r.scrollToSection("conclusiones"))},a[10]||(a[10]=[(0,n.Lk)("i",{class:"fas fa-tools fa-2x icono"},null,-1),(0,n.Lk)("h4",null,"0",-1),(0,n.Lk)("small",null,"Mitigaciones",-1),(0,n.Lk)("span",{class:"text-muted"},"0%",-1)])),(0,n.Lk)("div",{class:"indicator-item",onClick:a[5]||(a[5]=e=>r.scrollToSection("alertas"))},a[11]||(a[11]=[(0,n.Lk)("i",{class:"fas fa-bell fa-2x icono"},null,-1),(0,n.Lk)("h4",null,"4",-1),(0,n.Lk)("small",null,"Alertas",-1),(0,n.Lk)("span",{class:"text-danger"},"+400%",-1)]))])])]),a[12]||(a[12]=(0,n.Lk)("div",{class:"alert alert-secondary mt-3"},[(0,n.Lk)("em",null,"Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.")],-1))])])}var f={props:{mes:String,"año":String,totalVulnerabilidades:Number,vulnerabilidadesCriticas:Number,vulnerabilidadesAltas:Number,vulnerabilidadesMedias:Number,sectoresAfectados:String,gruposRansomware:String,"campañasIngenieria":String},computed:{puntosResumen(){return[`En ${this.mes} de ${this.año}, se publicaron ${this.totalVulnerabilidades} nuevas vulnerabilidades. De estas, ${this.vulnerabilidadesCriticas} fue crítica, ${this.vulnerabilidadesAltas} se calificaron como altas y ${this.vulnerabilidadesMedias} como medias.`,`En el mes de ${this.mes} se registraron importantes ataques dirigidos al sector de ${this.sectoresAfectados}.`,"Se descubrieron nuevas vulnerabilidades explotadas en naturaleza que impactan a Microsoft, Fortinet y Palo Alto.",`Los grupos más destacados en la publicación de nuevas víctimas fueron ${this.gruposRansomware}.`,`Además, se descubrieron nuevas campañas de ${this.campañasIngenieria}.`]}},methods:{scrollToSection(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}}},L=s(1241);const b=(0,L.A)(f,[["render",v],["__scopeId","data-v-17ae16cc"]]);var k=b;const g={id:"incidentes",class:"card mb-4 animate__animated animate__fadeIn"},h={class:"card-body"},C={class:"list-group"};function y(e,a,s,i,t,r){return(0,n.uX)(),(0,n.CE)("div",g,[a[2]||(a[2]=(0,n.Lk)("div",{class:"card-header"},[(0,n.Lk)("h2",null,"Incidentes Detectados")],-1)),(0,n.Lk)("div",h,[a[0]||(a[0]=(0,n.Lk)("p",{class:"text-muted"},"El conocimiento y la vigilancia de los ciber incidentes es fundamentales para la seguridad de cualquier organización. La respuesta ante estos incidentes y su posterior análisis post mortem son cruciales para el proceso de fortalecimiento de los sistemas. Al mantenerse informadas sobre los últimos ataques, las organizaciones pueden identificar y mitigar posibles amenazas.",-1)),(0,n.Lk)("ul",C,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.incidentes,((e,a)=>((0,n.uX)(),(0,n.CE)("li",{key:a,class:"list-group-item"},[(0,n.Lk)("strong",null,(0,l.v_)(e.fecha)+":",1),(0,n.eW)(" "+(0,l.v_)(e.empresa)+" - "+(0,l.v_)(e.sector),1)])))),128))]),a[1]||(a[1]=(0,n.Lk)("div",{class:"alert alert-secondary mt-3"},[(0,n.Lk)("em",null,"Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.")],-1))])])}var _={props:{incidentes:Array}};const A=(0,L.A)(_,[["render",y],["__scopeId","data-v-0f30da9c"]]);var E=A;const x={id:"exploits",class:"card mb-4 animate__animated animate__fadeIn"},I={class:"card-body"},T={class:"table table-striped"};function S(e,a,s,i,t,r){return(0,n.uX)(),(0,n.CE)("div",x,[a[3]||(a[3]=(0,n.Lk)("div",{class:"card-header"},[(0,n.Lk)("h2",null,"Exploits Publicados")],-1)),(0,n.Lk)("div",I,[a[1]||(a[1]=(0,n.Lk)("p",{class:"text-muted"},"Los exploit son puertas traseras que los atacantes pueden utilizar permitiendo el robo de datos, la instalación de malware, la toma de control de sistemas y múltiples ataques a sistemas informáticos. Al comprender estos exploit, la amenaza que representan y cómo funcionan, las empresas pueden tomar medidas proactivas para protegerse de ataques cibernéticos.",-1)),(0,n.Lk)("table",T,[a[0]||(a[0]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"Fecha"),(0,n.Lk)("th",null,"Exploit"),(0,n.Lk)("th",null,"Tipo"),(0,n.Lk)("th",null,"Plataforma")])],-1)),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.exploits,((e,a)=>((0,n.uX)(),(0,n.CE)("tr",{key:a},[(0,n.Lk)("td",null,(0,l.v_)(e.fecha),1),(0,n.Lk)("td",null,(0,l.v_)(e.nombre),1),(0,n.Lk)("td",null,(0,l.v_)(e.tipo),1),(0,n.Lk)("td",null,(0,l.v_)(e.plataforma),1)])))),128))])]),a[2]||(a[2]=(0,n.Lk)("div",{class:"alert alert-secondary mt-3"},[(0,n.Lk)("em",null,"Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.")],-1))])])}var R={props:{exploits:Array}};const w=(0,L.A)(R,[["render",S],["__scopeId","data-v-0d09906d"]]);var F=w;const P={id:"vulnerabilidades",class:"card mb-4 animate__animated animate__fadeIn"},X={class:"card-body"},V={class:"table table-striped"};function z(e,a,s,i,t,r){return(0,n.uX)(),(0,n.CE)("div",P,[a[3]||(a[3]=(0,n.Lk)("div",{class:"card-header"},[(0,n.Lk)("h2",null,"Nuevas Vulnerabilidades")],-1)),(0,n.Lk)("div",X,[a[1]||(a[1]=(0,n.Lk)("p",{class:"text-muted"},"Las Vulnerabilidades Comunes Enumeradas (CVE) proporcionan detalles sobre vulnerabilidades de seguridad en sistemas y software, permitiendo a las organizaciones identificar y mitigar posibles amenazas. Las CVE aquí listadas son sumamente relevantes para la seguridad de los sistemas, recomendamos realizar las mitigaciones necesarias para evitar la exposición a estas vulnerabilidades.",-1)),(0,n.Lk)("table",V,[a[0]||(a[0]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"CVE"),(0,n.Lk)("th",null,"Aplicación"),(0,n.Lk)("th",null,"CVSS")])],-1)),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.cves,((e,a)=>((0,n.uX)(),(0,n.CE)("tr",{key:a},[(0,n.Lk)("td",null,(0,l.v_)(e.id),1),(0,n.Lk)("td",null,(0,l.v_)(e.aplicativo),1),(0,n.Lk)("td",null,[(0,n.Lk)("span",{class:(0,l.C4)(r.getCvssClass(e.cvss))},(0,l.v_)(e.cvss),3)])])))),128))])]),a[2]||(a[2]=(0,n.Lk)("div",{class:"alert alert-secondary mt-3"},[(0,n.Lk)("em",null,"Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.")],-1))])])}var M={props:{cves:Array},methods:{getCvssClass(e){return e>=9?"badge badge-danger":e>=7?"badge badge-warning":"badge badge-success"}}};const q=(0,L.A)(M,[["render",z],["__scopeId","data-v-0f97471b"]]);var O=q;const j={id:"alertas",class:"card mb-4 animate__animated animate__fadeIn"},$={class:"card-body"};function K(e,a,s,i,t,r){return(0,n.uX)(),(0,n.CE)("div",j,[a[2]||(a[2]=(0,n.Lk)("div",{class:"card-header"},[(0,n.Lk)("h2",null,"Alertas de Amenazas Cibernéticas")],-1)),(0,n.Lk)("div",$,[a[0]||(a[0]=(0,n.Lk)("p",{class:"text-muted"},[(0,n.eW)(" Las alertas de Cyber Threat Intelligence son notificaciones que informan sobre amenazas cibernéticas identificadas, como vulnerabilidades o ataques activos. El "),(0,n.Lk)("strong",null,"Traffic Light Protocol (TLP)"),(0,n.eW)(" es un conjunto de directrices que regulan la divulgación de información sensible, utilizando colores para indicar los límites de compartición establecidos por el remitente. La importancia de estas alertas y del TLP radica en su capacidad para comunicar información crítica de manera segura y eficiente, asegurando que solo las partes adecuadas tengan acceso a la información necesaria para protegerse contra amenazas cibernéticas. ")],-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.alertas,((e,a)=>((0,n.uX)(),(0,n.CE)("div",{key:a,class:"mt-4"},[(0,n.Lk)("h4",null,"Threat Landscape: "+(0,l.v_)(e.tipo),1),(0,n.Lk)("p",null,(0,l.v_)(e.descripcion),1)])))),128)),a[1]||(a[1]=(0,n.Lk)("div",{class:"alert alert-secondary mt-3"},[(0,n.Lk)("em",null,"Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.")],-1))])])}var N={props:{alertas:Array}};const D=(0,L.A)(N,[["render",K],["__scopeId","data-v-7ffdec02"]]);var W=D;const B={id:"fuentes",class:"card mb-4 animate__animated animate__fadeIn"},G={class:"card-body"};function Q(e,a,s,i,t,r){return(0,n.uX)(),(0,n.CE)("div",B,[a[2]||(a[2]=(0,n.Lk)("div",{class:"card-header"},[(0,n.Lk)("h2",null,"Referencias")],-1)),(0,n.Lk)("div",G,[a[0]||(a[0]=(0,n.Lk)("p",null," La información presentada en este informe ha sido recopilada de las siguientes fuentes confiables: ",-1)),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.fuentes,((e,a)=>((0,n.uX)(),(0,n.CE)("li",{key:a},[(0,n.Lk)("strong",null,(0,l.v_)(e.nombre),1),(0,n.eW)(": "+(0,l.v_)(e.referencia),1)])))),128))]),a[1]||(a[1]=(0,n.Lk)("div",{class:"alert alert-secondary mt-3"},[(0,n.Lk)("em",null,"Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.")],-1))])])}var Z={props:{fuentes:Array}};const H=(0,L.A)(Z,[["render",Q],["__scopeId","data-v-261e3466"]]);var J=H;const U={id:"mitigaciones",class:"card mb-4 animate__animated animate__fadeIn"},Y={class:"card-body"};function ee(e,a,s,i,t,r){return(0,n.uX)(),(0,n.CE)("div",U,[a[1]||(a[1]=(0,n.Lk)("div",{class:"card-header"},[(0,n.Lk)("h2",null,"Mitigaciones")],-1)),(0,n.Lk)("div",Y,[(0,n.Lk)("p",null," Para contrarrestar las amenazas cibernéticas identificadas en "+(0,l.v_)(s.mes)+" de "+(0,l.v_)(s.año)+", se recomiendan las siguientes medidas de mitigación: ",1),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.mitigaciones,((e,a)=>((0,n.uX)(),(0,n.CE)("li",{key:a},[(0,n.Lk)("strong",null,(0,l.v_)(e),1)])))),128))]),a[0]||(a[0]=(0,n.Lk)("div",{class:"alert alert-secondary mt-3"},[(0,n.Lk)("em",null,"Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.")],-1))])])}var ae={props:{mes:String,"año":String,mitigaciones:Array}};const se=(0,L.A)(ae,[["render",ee],["__scopeId","data-v-7f26aaa9"]]);var ie=se,ne={components:{ResumenEjecutivo:k,IncidentesDetectados:E,ExploitsPublicados:F,VulnerabilidadesCVE:O,AlertasAmenazas:W,FuentesInteligencia:J,Mitigaciones:ie},data(){return{mes:"Febrero","año":"2025",totalVulnerabilidades:3711,vulnerabilidadesCriticas:1,vulnerabilidadesAltas:49,vulnerabilidadesMedias:729,sectoresAfectados:"Salud, Industrial, Gubernamental",gruposRansomware:"DragonRaaS, Akira","campañasIngenieria":"troyanos bancarios y Botnets",incidentes:[{fecha:"03/02",empresa:"Technico",sector:"Ransomware Arcus Media"},{fecha:"04/02",empresa:"360 Energy",sector:"Akira"},{fecha:"13/02",empresa:"Swiss Medical",sector:"574,600 registros"}],exploits:[{fecha:"28/02",nombre:"XSS en Label Studio",tipo:"Network",plataforma:"Label Studio"},{fecha:"28/02",nombre:"RCE en FortiManager 7.6.0",tipo:"Remote Code",plataforma:"Fortinet"}],cves:[{id:"CVE-2025-0108",aplicativo:"Palo Alto PAN-OS",cvss:7.3},{id:"CVE-2024-45569",aplicativo:"Qualcomm Snapdragon",cvss:9.8}],alertas:[{tipo:"Campaña del troyano bancario Coyote",descripcion:"Archivos LNK que inyectan PowerShell",severidad:"Alto"},{tipo:"Ransomware Makop y Lynx",descripcion:"Ataques en LATAM",severidad:"Crítico"}],fuentes:[{nombre:"FortiGuard Labs",referencia:"Detección de campañas de ransomware"},{nombre:"MITRE ATT&CK",referencia:"Tácticas y técnicas de grupos de amenazas"}],mitigaciones:["Actualizaciones y Parches","Protección contra Ransomware","Detección de Troyanos Bancarios"]}}};const te=(0,L.A)(ne,[["render",r]]);var re=te;(0,i.Ef)(re).mount("#app")}},a={};function s(i){var n=a[i];if(void 0!==n)return n.exports;var t=a[i]={exports:{}};return e[i].call(t.exports,t,t.exports,s),t.exports}s.m=e,function(){var e=[];s.O=function(a,i,n,t){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],t=e[d][2];for(var l=!0,c=0;c<i.length;c++)(!1&t||r>=t)&&Object.keys(s.O).every((function(e){return s.O[e](i[c])}))?i.splice(c--,1):(l=!1,t<r&&(r=t));if(l){e.splice(d--,1);var o=n();void 0!==o&&(a=o)}}return a}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[i,n,t]}}(),function(){s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,{a:a}),a}}(),function(){s.d=function(e,a){for(var i in a)s.o(a,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};s.O.j=function(a){return 0===e[a]};var a=function(a,i){var n,t,r=i[0],l=i[1],c=i[2],o=0;if(r.some((function(a){return 0!==e[a]}))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(c)var d=c(s)}for(a&&a(i);o<r.length;o++)t=r[o],s.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return s.O(d)},i=self["webpackChunkctib"]=self["webpackChunkctib"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(2222)}));i=s.O(i)})();
//# sourceMappingURL=app.c3406527.js.map