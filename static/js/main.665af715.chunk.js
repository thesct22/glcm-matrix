(this["webpackJsonpglcm-matrix"]=this["webpackJsonpglcm-matrix"]||[]).push([[0],{10:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),c=a(5),n=a.n(c),s=a(2),o=(a(10),a(1)),i=function(e){var t=Object(r.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),a=Object(s.a)(t,2),l=a[0],c=(a[1],Object(r.useState)(0)),n=Object(s.a)(c,2),i=n[0],d=n[1];!function(t){var a,r,l,c;if(e)if(0===e.degreeValue)for(a=0;a<e.randomMatrix.length;a++)for(r=0;r<e.randomMatrix[a].length-e.distanceValue+1;r++)l=e.randomMatrix[a][r],c=e.randomMatrix[a][r+e.distanceValue-1],void 0!==l&&(t[c-1][l-1]+=1);else if(90===e.degreeValue)for(a=0;a<e.randomMatrix[0].length;a++)for(r=0;r<e.randomMatrix.length-e.distanceValue+1;r++)l=e.randomMatrix[r][a],c=e.randomMatrix[r+e.distanceValue-1][a],void 0!==l&&(t[c-1][l-1]+=1);else if(45===e.degreeValue)for(a=e.distanceValue-1;a<e.randomMatrix.length;a++)for(r=0;r<e.randomMatrix[a].length-e.distanceValue+1;r++)l=e.randomMatrix[a-e.distanceValue+1][r+e.distanceValue-1],c=e.randomMatrix[a][r],void 0!==l&&(t[c-1][l-1]+=1);else if(135===e.degreeValue)for(a=0;a<e.randomMatrix.length-e.distanceValue+1;a++)for(r=0;r<e.randomMatrix[a].length-e.distanceValue+1;r++)l=e.randomMatrix[a][r],c=e.randomMatrix[a+e.distanceValue-1][r+e.distanceValue-1],void 0!==l&&(t[c-1][l-1]+=1)}(l=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]);var u=e.setInputColour,m=e.inputColour;!function(){for(var t,a,r=0;r<8;r++)for(var l=0;l<8;l++)if("#FFFFFF"!==e.GlcmColour[r][l])if(0===e.degreeValue)for(a=0;a<e.randomMatrix.length;a++)for(t=0;t<e.randomMatrix[a].length-e.distanceValue+1;t++)e.randomMatrix[a][t]===l+1&&e.randomMatrix[a][t+e.distanceValue-1]===r+1&&(m[a][t]=e.GlcmColour[r][l],m[a][t+e.distanceValue-1]=e.GlcmColour[r][l]);else if(90===e.degreeValue)for(a=0;a<e.randomMatrix.length-e.distanceValue+1;a++)for(t=0;t<e.randomMatrix[a].length;t++)e.randomMatrix[a][t]===l+1&&e.randomMatrix[a+e.distanceValue-1][t]===r+1&&(m[a][t]=e.GlcmColour[r][l],m[a+e.distanceValue-1][t]=e.GlcmColour[r][l]);else if(45===e.degreeValue)for(a=e.distanceValue-1;a<e.randomMatrix.length;a++)for(t=0;t<e.randomMatrix[a].length-e.distanceValue+1;t++)e.randomMatrix[a][t]===r+1&&e.randomMatrix[a-e.distanceValue+1][t+e.distanceValue-1]===l+1&&(m[a][t]=e.GlcmColour[r][l],m[a-e.distanceValue+1][t+e.distanceValue-1]=e.GlcmColour[r][l]);else if(135===e.degreeValue)for(a=0;a<e.randomMatrix.length-e.distanceValue+1;a++)for(t=0;t<e.randomMatrix[a].length-e.distanceValue+1;t++)e.randomMatrix[a][t]===l+1&&e.randomMatrix[a+e.distanceValue-1][t+e.distanceValue-1]===r+1&&(m[a][t]=e.GlcmColour[r][l],m[a+e.distanceValue-1][t+e.distanceValue-1]=e.GlcmColour[r][l])}();return Object(o.jsxs)("div",{id:"input",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){!function(){for(var t=e.GlcmColour,a=0;a<t.length;a++)for(var r=0;r<t[a].length;r++)t[a][r]="#FFFFFF";e.setGlcmColour(t)}(),function(e){for(var t=0;t<e.length;t++){for(var a=[],r=0;r<e[t].length;r++)a.push("#FFFFFF");e[t]=a}u(e)}(m),d(i+"_")},className:"btn btn-success align-self-start",children:"Clear Colours"})}),Object(o.jsx)("table",{style:{margin:"20px"},children:Object(o.jsx)("tbody",{children:e.randomMatrix.map((function(e,t){return Object(o.jsx)("tr",{children:e.map((function(e,a){if(void 0===m[t]){for(var r=[],l=0;l<e.length;l++)r.push("#FFFFFF");m.push(r)}var c=t+"_"+a;return Object(o.jsx)("td",{bgcolor:m[t][a],style:{borderWidth:"2px",borderColor:"#000000",borderStyle:"solid",padding:"10px",margin:"0px"},children:e},c)}))},t)}))})})]}),Object(o.jsx)("div",{children:Object(o.jsx)("table",{style:{margin:"20px"},children:Object(o.jsxs)("tbody",{children:[Object(o.jsx)("tr",{children:l[0].map((function(e,t){return Object(o.jsx)("td",{style:{padding:"10px",margin:"0px"},children:t+1},t)}))},"column_number"),l.map((function(t,a){return Object(o.jsxs)("tr",{children:[t.map((function(t,r){var l=a+"_"+r;return Object(o.jsx)("td",{style:{borderWidth:"2px",borderColor:"#000000",borderStyle:"solid",padding:"10px",margin:"0px"},bgcolor:e.GlcmColour[a][r],onClick:function(){return function(t,a){for(var r=e.GlcmColour,l=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"],c="#",n=0;n<6;n++)c+=l[Math.floor(Math.random()*l.length)];d(i===c?"":c),r[t][a]="#FFFFFF"===r[t][a]?c:"#FFFFFF",e.setGlcmColour(r)}(a,r)},children:t},l)})),Object(o.jsx)("td",{style:{padding:"10px",margin:"0px"},children:a+1},"row_number")]},a)}))]})})})]})},d=function(e,t){for(var a=[],r=0;r<e;r++){for(var l=[],c=0;c<t;c++)l.push(Math.floor(8*Math.random())+1);a.push(l)}return a},u=a(4),m=function(e){return Object(o.jsxs)("div",{className:"mt-3 m-sm-5 border p-4 p-sm-5",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h2",{children:"GLCM Properties"})})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2"}),Object(o.jsx)("div",{className:"col-4",align:"center",children:Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{diameter:100,min:0,max:135,step:45,value:e.degreeValue,theme:{defaultColor:"#333",activeColor:"#f33"},onValueChange:e.setDegreeValue,ariaLabelledBy:"degree-label",children:Object(o.jsx)("label",{id:"degree-label",children:"Degree"})})})}),Object(o.jsx)("div",{className:"col-4",align:"center",children:Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{diameter:100,min:2,max:0===e.degreeValue?e.cols:90===e.degreeValue?e.rows:e.rows>e.cols?e.cols:e.rows,step:1,value:e.distanceValue,theme:{defaultColor:"#333",activeColor:"#f33"},onValueChange:e.setDistanceValue,ariaLabelledBy:"distance-label",children:Object(o.jsx)("label",{id:"distance-label",children:"Distance"})})})})]})]})},j=function(e){return Object(o.jsxs)("div",{className:"mt-3 m-sm-5 border p-4 p-sm-5",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h2",{children:"Matrix Details"})})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-12 col-sm-4",children:Object(o.jsxs)("div",{className:"form-outline",children:[Object(o.jsx)("input",{type:"text",id:"formRows",className:"form-control",onChange:e.customRows}),Object(o.jsx)("label",{className:"form-label",htmlFor:"formRows",children:"Rows"})]})}),Object(o.jsx)("div",{className:"col-12 col-sm-4",children:Object(o.jsxs)("div",{className:"form-outline",children:[Object(o.jsx)("input",{type:"text",id:"formCols",className:"form-control",onChange:e.customCols}),Object(o.jsx)("label",{className:"form-label",htmlFor:"formCols",children:"Columns"})]})}),Object(o.jsx)("div",{className:"col-12 col-sm-4",children:Object(o.jsx)("div",{className:"form-outline",children:Object(o.jsx)("button",{onClick:function(){return e.setMatrix()},className:"btn btn-success align-self-start",children:"Click to make Matrix"})})})]})]})};var x=function(){for(var e=Object(r.useState)(6),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(5),n=Object(s.a)(c,2),u=n[0],x=n[1],b=Object(r.useState)(0),h=Object(s.a)(b,2),f=h[0],O=h[1],g=Object(r.useState)(2),v=Object(s.a)(g,2),p=v[0],F=v[1],V=[],C=0;C<8;C++){for(var M=[],N=0;N<8;N++)M.push("#FFFFFF");V.push(M)}var w=Object(r.useState)(V),G=Object(s.a)(w,2),y=G[0],S=G[1],D=Object(r.useState)(d(6,5)),k=Object(s.a)(D,2),I=k[0],B=k[1],L=[];for(C=0;C<a;C++){var R=[];for(N=0;N<u;N++)R.push("#FFFFFF");L.push(R)}var _=Object(r.useState)(L),P=Object(s.a)(_,2),A=P[0],E=P[1];return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{cols:u,rows:a,customCols:function(e){var t=parseInt(e.target.value);x(isNaN(t)||t<3?3:t)},customRows:function(e){var t=parseInt(e.target.value);l(isNaN(t)||t<3?3:t)},setMatrix:function(){O(0),F(2),B(d(a,u))}}),Object(o.jsx)(m,{degreeValue:f,setDegreeValue:O,distanceValue:p,setDistanceValue:F,rows:a,cols:u}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("div",{className:"form-outline",children:Object(o.jsx)(i,{randomMatrix:I,degreeValue:f,distanceValue:p,GlcmColour:y,setGlcmColour:S,inputColour:A,setInputColour:E})})})})})]})})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,r=t.getFID,l=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),r(e),l(e),c(e),n(e)}))};a(12),a(13),a(14);n.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.665af715.chunk.js.map