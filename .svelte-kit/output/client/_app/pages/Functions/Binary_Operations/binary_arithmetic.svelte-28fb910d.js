import{S as $,i as G,s as K,t as f,e as m,k as R,h as o,c as u,a as d,d as t,m as D,b as n,P as V,g as r,G as T,K as U}from"../../../chunks/vendor-7ab9b2a4.js";function O(y){let l,s,q,_,c,x,v,a,F,w,A,E,k,p,C,B,b,M,I,h,P,S;return{c(){l=f(`Just for fun, I made a C++ demonstration that adds and subtracts binary numbers using elementary arithmetic. Here it is: \r
`),s=m("iframe"),_=R(),c=m("p"),x=f("This does the same thing only more elegantly, using using bitwise operators:"),v=R(),a=m("iframe"),w=R(),A=m("br"),E=m("br"),k=f(`\r
\r
ECMAScript 2015 (ES6) introduced typed arrays, making it convenient to efficiently store information in individual bits. After an ArrayBuffer instance is defined, it can be accessed by an instance of DataView. \r
\r
An efficient implementation of the sieve of Eratosthenes, located on this website at `),p=m("a"),C=f('"../bitmask_prime_generator"'),B=f(`, begins with: \r
`),b=m("pre"),M=f(y[0]),I=f(". It took thirty seconds to compute prime numbers up to one billion. The series ended with 999999667, 999999677, 999999733, 999999739, 999999751, 999999757, 999999761, 999999797, 999999883, 999999893, 999999929, and 999999937. These numbers are identical to those shown at "),h=m("a"),P=f("Prime I.T."),S=f("."),this.h()},l(e){l=o(e,`Just for fun, I made a C++ demonstration that adds and subtracts binary numbers using elementary arithmetic. Here it is: \r
`),s=u(e,"IFRAME",{frameborder:!0,width:!0,height:!0,src:!0}),d(s).forEach(t),_=D(e),c=u(e,"P",{});var i=d(c);x=o(i,"This does the same thing only more elegantly, using using bitwise operators:"),i.forEach(t),v=D(e),a=u(e,"IFRAME",{frameborder:!0,width:!0,height:!0,src:!0}),d(a).forEach(t),w=D(e),A=u(e,"BR",{}),E=u(e,"BR",{}),k=o(e,`\r
\r
ECMAScript 2015 (ES6) introduced typed arrays, making it convenient to efficiently store information in individual bits. After an ArrayBuffer instance is defined, it can be accessed by an instance of DataView. \r
\r
An efficient implementation of the sieve of Eratosthenes, located on this website at `),p=u(e,"A",{href:!0});var H=d(p);C=o(H,'"../bitmask_prime_generator"'),H.forEach(t),B=o(e,`, begins with: \r
`),b=u(e,"PRE",{});var J=d(b);M=o(J,y[0]),J.forEach(t),I=o(e,". It took thirty seconds to compute prime numbers up to one billion. The series ended with 999999667, 999999677, 999999733, 999999739, 999999751, 999999757, 999999761, 999999797, 999999883, 999999893, 999999929, and 999999937. These numbers are identical to those shown at "),h=u(e,"A",{href:!0});var N=d(h);P=o(N,"Prime I.T."),N.forEach(t),S=o(e,"."),this.h()},h(){n(s,"frameborder","0"),n(s,"width","80%"),n(s,"height","500px"),V(s.src,q="https://replit.com/@DavidSchalk1/Binary-Addition-Using-Arithmetic?lite=true")||n(s,"src",q),n(a,"frameborder","0"),n(a,"width","80%"),n(a,"height","500px"),V(a.src,F="https://replit.com/@DavidSchalk1/Binary-Addition-Using-Bitwise-Operators?lite=true")||n(a,"src",F),n(p,"href","../bitmask_prime_generator"),n(h,"href","http://compoasso.free.fr/primelistweb/page/prime/liste_online_en.php")},m(e,i){r(e,l,i),r(e,s,i),r(e,_,i),r(e,c,i),T(c,x),r(e,v,i),r(e,a,i),r(e,w,i),r(e,A,i),r(e,E,i),r(e,k,i),r(e,p,i),T(p,C),r(e,B,i),r(e,b,i),T(b,M),r(e,I,i),r(e,h,i),T(h,P),r(e,S,i)},p:U,i:U,o:U,d(e){e&&t(l),e&&t(s),e&&t(_),e&&t(c),e&&t(v),e&&t(a),e&&t(w),e&&t(A),e&&t(E),e&&t(k),e&&t(p),e&&t(B),e&&t(b),e&&t(I),e&&t(h),e&&t(S)}}}function j(y){var l=`function sieve (N) {
    var buf = new ArrayBuffer(1.1 * Math.ceil(N/8));
    var view = new Uint8Array(buf);`;return[l]}class L extends ${constructor(l){super();G(this,l,j,O,K,{})}}export{L as default};
