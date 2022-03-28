import{S as tl,i as al,s as ol,k as m,e as a,t as M,Q as nl,d as s,m as p,c as o,a as h,h as k,f as ze,P as g,b as r,g as f,G as i,L as A,j as Ge,M as cl,N as ll,R as fl,O as rl}from"../../chunks/vendor-7ab9b2a4.js";import{M as Rs,a as Ss,b as Ps,c as Ms,d as ks,e as As,f as bs,g as Es,h as ws,P as Is,i as ys,j as Hs,k as Bs,l as Cs,m as Ts,n as Ns,o as Vs,p as Ds,S as zs,q as Gs,r as Fs,s as js,t as Os,u as Us,v as Js,w as qs,x as Ls,H as Ks,y as Qs,N as Ws,z as Zs,T as Xs,A as Ys}from"../../chunks/Shaa-f7d25e62.js";import{C as xs}from"../../chunks/Chun-c77faa24.js";function ul(c){let w,n,H,J,B,ee,Pe,E,t,Me,_,z,R,se,G,He,ke,v,S,q,Be,u,F,T,Ae,Ce,j,N,be,Te,O,V,Ee,Ne,U,y,C,ie,b,D,I,ei,le,L,Fe,si,re,K,je,ii,te,Q,Oe,li,ae,W,Ue,ri,oe,Z,Je,ti,ne,X,qe,ai,ce,Y,Le,oi,fe,x,Ke,ni,Ve,ci,fi,ue,$,Qe,We,Ze,Xe,Ye,xe,me,ui,$e,pe,mi,es,he,pi,ss,ve,hi,is,ls,rs,ts,de,vi,as,os,ge,di,ns,cs,_e,gi,fs,us,Re,_i,De=c[3]()+"",ms,ps,hs,vs,we,Ri,ds,Ie,Si,gs,ye,Pi,_s,Se,Mi,P,ki,Bi;return{c(){w=m(),n=a("div"),H=a("p"),J=M(`\r
    Immutable Data Structures`),ee=m(),Pe=a("br"),E=m(),t=a("p"),Me=M('The tile on the right is your draw. To keep it, double click on the tile you wish to discard or click the drawn tile and then the tile to discard. To discard the drawn tile, click the "Draw" button or double click on the drawn tile. If you click a tile in your hand and then the drawn tile, you will revert to having no clicked tiles.'),_=m(),z=a("p"),R=M('To organize your hand, click on a tile and then click the tile located where you want to place it. This is not the way to place the drawn tile in your hand. Double clicking the tile you wish to discard and clicking the "Draw" button are the only ways to do it.'),se=m(),G=a("div"),He=M("B.length = "),ke=M(c[2]),v=m(),S=a("p"),q=a("br"),Be=m(),u=a("div"),F=a("span"),T=a("img"),Ce=m(),j=a("span"),N=a("img"),Te=m(),O=a("span"),V=a("img"),Ne=m(),U=a("span"),y=a("img"),ie=m(),b=a("span"),D=a("img"),ei=m(),le=a("span"),L=a("img"),si=m(),re=a("span"),K=a("img"),ii=m(),te=a("span"),Q=a("img"),li=m(),ae=a("span"),W=a("img"),ri=m(),oe=a("span"),Z=a("img"),ti=m(),ne=a("span"),X=a("img"),ai=m(),ce=a("span"),Y=a("img"),oi=m(),fe=a("span"),x=a("img"),ni=m(),Ve=a("span"),ci=M("."),fi=m(),ue=a("span"),$=a("img"),We=m(),Ze=a("br"),Xe=a("br"),Ye=a("br"),xe=m(),me=a("button"),ui=M("SHUFFLE"),$e=m(),pe=a("button"),mi=M("Draw"),es=m(),he=a("button"),pi=M("BACK"),ss=m(),ve=a("button"),hi=M("Forward"),is=m(),ls=a("br"),rs=a("br"),ts=m(),de=a("div"),vi=M("index: "),as=M(c[4]),os=m(),ge=a("div"),di=M("draws: "),ns=M(c[0]),cs=m(),_e=a("div"),gi=M("Current tile indeces: "),fs=M(c[1]),us=m(),Re=a("div"),_i=M("ar69: "),ms=M(De),ps=m(),hs=a("br"),vs=m(),we=a("p"),Ri=M('This module is in the "Riichi_Mahjong" and "Functional_JavaScript" section. Beginners could use it to arrange hands according to the five-block method.'),ds=m(),Ie=a("p"),Si=M("After railing against mindlessly making variables immutable, I wanted to show that immutability sometimes serves a purpose, even in small, isolated modules such as this. As is apparent from the code below, each state of the Riichi Mahjong tiles is cloned deep enough to preserve it in an array that can be traversed. I could have used numbers for this, but Mahjong tiles make a more pleasing illustration."),gs=m(),ye=a("p"),Pi=M('Events: An array, "B",  of all Riichi Mahjong tiles is shuffled. Then 14 members are spliced from its front, 13 for the hand and one for the first draw. Each time you click "Draw" or double-click the 14th tile, a number n (corresponding to image xyz[n] in the presentation) is spliced from the front of B. The code is at https://github.com/dschalk/blog.schalk.site and is also shown below:'),_s=m(),Se=a("pre"),Mi=M(c[10]),this.h()},l(e){nl('[data-svelte="svelte-ix7nim"]',document.head).forEach(s),w=p(e),n=o(e,"DIV",{style:!0});var Ai=h(n);H=o(Ai,"P",{}),h(H).forEach(s),J=k(Ai,`\r
    Immutable Data Structures`),Ai.forEach(s),ee=p(e),Pe=o(e,"BR",{}),E=p(e),t=o(e,"P",{});var Ci=h(t);Me=k(Ci,'The tile on the right is your draw. To keep it, double click on the tile you wish to discard or click the drawn tile and then the tile to discard. To discard the drawn tile, click the "Draw" button or double click on the drawn tile. If you click a tile in your hand and then the drawn tile, you will revert to having no clicked tiles.'),Ci.forEach(s),_=p(e),z=o(e,"P",{});var Ti=h(z);R=k(Ti,'To organize your hand, click on a tile and then click the tile located where you want to place it. This is not the way to place the drawn tile in your hand. Double clicking the tile you wish to discard and clicking the "Draw" button are the only ways to do it.'),Ti.forEach(s),se=p(e),G=o(e,"DIV",{});var bi=h(G);He=k(bi,"B.length = "),ke=k(bi,c[2]),bi.forEach(s),v=p(e),S=o(e,"P",{});var Ei=h(S);q=o(Ei,"BR",{}),Be=p(Ei),Ei.forEach(s),u=o(e,"DIV",{style:!0});var d=h(u);F=o(d,"SPAN",{id:!0});var Ni=h(F);T=o(Ni,"IMG",{src:!0,class:!0}),Ni.forEach(s),Ce=p(d),j=o(d,"SPAN",{id:!0});var Vi=h(j);N=o(Vi,"IMG",{src:!0,class:!0}),Vi.forEach(s),Te=p(d),O=o(d,"SPAN",{id:!0});var Di=h(O);V=o(Di,"IMG",{src:!0,class:!0}),Di.forEach(s),Ne=p(d),U=o(d,"SPAN",{id:!0});var zi=h(U);y=o(zi,"IMG",{src:!0,class:!0}),zi.forEach(s),ie=p(d),b=o(d,"SPAN",{id:!0});var Gi=h(b);D=o(Gi,"IMG",{src:!0,class:!0}),Gi.forEach(s),ei=p(d),le=o(d,"SPAN",{id:!0});var Fi=h(le);L=o(Fi,"IMG",{src:!0,class:!0}),Fi.forEach(s),si=p(d),re=o(d,"SPAN",{id:!0});var ji=h(re);K=o(ji,"IMG",{src:!0,class:!0}),ji.forEach(s),ii=p(d),te=o(d,"SPAN",{id:!0});var Oi=h(te);Q=o(Oi,"IMG",{src:!0,class:!0}),Oi.forEach(s),li=p(d),ae=o(d,"SPAN",{id:!0});var Ui=h(ae);W=o(Ui,"IMG",{src:!0,class:!0}),Ui.forEach(s),ri=p(d),oe=o(d,"SPAN",{id:!0});var Ji=h(oe);Z=o(Ji,"IMG",{src:!0,class:!0}),Ji.forEach(s),ti=p(d),ne=o(d,"SPAN",{id:!0});var qi=h(ne);X=o(qi,"IMG",{src:!0,class:!0}),qi.forEach(s),ai=p(d),ce=o(d,"SPAN",{id:!0});var Li=h(ce);Y=o(Li,"IMG",{src:!0,class:!0}),Li.forEach(s),oi=p(d),fe=o(d,"SPAN",{id:!0});var Ki=h(fe);x=o(Ki,"IMG",{src:!0,class:!0}),Ki.forEach(s),ni=p(d),Ve=o(d,"SPAN",{});var Qi=h(Ve);ci=k(Qi,"."),Qi.forEach(s),fi=p(d),ue=o(d,"SPAN",{id:!0});var Wi=h(ue);$=o(Wi,"IMG",{src:!0,class:!0}),Wi.forEach(s),d.forEach(s),We=p(e),Ze=o(e,"BR",{}),Xe=o(e,"BR",{}),Ye=o(e,"BR",{}),xe=p(e),me=o(e,"BUTTON",{});var Zi=h(me);ui=k(Zi,"SHUFFLE"),Zi.forEach(s),$e=p(e),pe=o(e,"BUTTON",{});var Xi=h(pe);mi=k(Xi,"Draw"),Xi.forEach(s),es=p(e),he=o(e,"BUTTON",{});var Yi=h(he);pi=k(Yi,"BACK"),Yi.forEach(s),ss=p(e),ve=o(e,"BUTTON",{});var xi=h(ve);hi=k(xi,"Forward"),xi.forEach(s),is=p(e),ls=o(e,"BR",{}),rs=o(e,"BR",{}),ts=p(e),de=o(e,"DIV",{});var wi=h(de);vi=k(wi,"index: "),as=k(wi,c[4]),wi.forEach(s),os=p(e),ge=o(e,"DIV",{});var Ii=h(ge);di=k(Ii,"draws: "),ns=k(Ii,c[0]),Ii.forEach(s),cs=p(e),_e=o(e,"DIV",{});var yi=h(_e);gi=k(yi,"Current tile indeces: "),fs=k(yi,c[1]),yi.forEach(s),us=p(e),Re=o(e,"DIV",{});var Hi=h(Re);_i=k(Hi,"ar69: "),ms=k(Hi,De),Hi.forEach(s),ps=p(e),hs=o(e,"BR",{}),vs=p(e),we=o(e,"P",{});var $i=h(we);Ri=k($i,'This module is in the "Riichi_Mahjong" and "Functional_JavaScript" section. Beginners could use it to arrange hands according to the five-block method.'),$i.forEach(s),ds=p(e),Ie=o(e,"P",{});var el=h(Ie);Si=k(el,"After railing against mindlessly making variables immutable, I wanted to show that immutability sometimes serves a purpose, even in small, isolated modules such as this. As is apparent from the code below, each state of the Riichi Mahjong tiles is cloned deep enough to preserve it in an array that can be traversed. I could have used numbers for this, but Mahjong tiles make a more pleasing illustration."),el.forEach(s),gs=p(e),ye=o(e,"P",{});var sl=h(ye);Pi=k(sl,'Events: An array, "B",  of all Riichi Mahjong tiles is shuffled. Then 14 members are spliced from its front, 13 for the hand and one for the first draw. Each time you click "Draw" or double-click the 14th tile, a number n (corresponding to image xyz[n] in the presentation) is spliced from the front of B. The code is at https://github.com/dschalk/blog.schalk.site and is also shown below:'),sl.forEach(s),_s=p(e),Se=o(e,"PRE",{class:!0});var il=h(Se);Mi=k(il,c[10]),il.forEach(s),this.h()},h(){document.title="Immutable data for time travel.",ze(n,"font-family","Times New Roman"),ze(n,"text-align","center"),ze(n,"font-size","38px"),g(T.src,Ae=c[1][0])||r(T,"src",Ae),r(T,"class","svelte-1hga6un"),r(F,"id","0"),g(N.src,be=c[1][1])||r(N,"src",be),r(N,"class","svelte-1hga6un"),r(j,"id","1"),g(V.src,Ee=c[1][2])||r(V,"src",Ee),r(V,"class","svelte-1hga6un"),r(O,"id","2"),g(y.src,C=c[1][3])||r(y,"src",C),r(y,"class","svelte-1hga6un"),r(U,"id","3"),g(D.src,I=c[1][4])||r(D,"src",I),r(D,"class","svelte-1hga6un"),r(b,"id","4"),g(L.src,Fe=c[1][5])||r(L,"src",Fe),r(L,"class","svelte-1hga6un"),r(le,"id","5"),g(K.src,je=c[1][6])||r(K,"src",je),r(K,"class","svelte-1hga6un"),r(re,"id","6"),g(Q.src,Oe=c[1][7])||r(Q,"src",Oe),r(Q,"class","svelte-1hga6un"),r(te,"id","7"),g(W.src,Ue=c[1][8])||r(W,"src",Ue),r(W,"class","svelte-1hga6un"),r(ae,"id","8"),g(Z.src,Je=c[1][9])||r(Z,"src",Je),r(Z,"class","svelte-1hga6un"),r(oe,"id","9"),g(X.src,qe=c[1][10])||r(X,"src",qe),r(X,"class","svelte-1hga6un"),r(ne,"id","10"),g(Y.src,Le=c[1][11])||r(Y,"src",Le),r(Y,"class","svelte-1hga6un"),r(ce,"id","11"),g(x.src,Ke=c[1][12])||r(x,"src",Ke),r(x,"class","svelte-1hga6un"),r(fe,"id","12"),g($.src,Qe=c[1][13])||r($,"src",Qe),r($,"class","svelte-1hga6un"),r(ue,"id","13"),ze(u,"color","#FF0000"),ze(u,"text-align","center"),r(Se,"class","svelte-1hga6un")},m(e,l){f(e,w,l),f(e,n,l),i(n,H),i(n,J),f(e,ee,l),f(e,Pe,l),f(e,E,l),f(e,t,l),i(t,Me),f(e,_,l),f(e,z,l),i(z,R),f(e,se,l),f(e,G,l),i(G,He),i(G,ke),f(e,v,l),f(e,S,l),i(S,q),i(S,Be),f(e,u,l),i(u,F),i(F,T),i(u,Ce),i(u,j),i(j,N),i(u,Te),i(u,O),i(O,V),i(u,Ne),i(u,U),i(U,y),i(u,ie),i(u,b),i(b,D),i(u,ei),i(u,le),i(le,L),i(u,si),i(u,re),i(re,K),i(u,ii),i(u,te),i(te,Q),i(u,li),i(u,ae),i(ae,W),i(u,ri),i(u,oe),i(oe,Z),i(u,ti),i(u,ne),i(ne,X),i(u,ai),i(u,ce),i(ce,Y),i(u,oi),i(u,fe),i(fe,x),i(u,ni),i(u,Ve),i(Ve,ci),i(u,fi),i(u,ue),i(ue,$),f(e,We,l),f(e,Ze,l),f(e,Xe,l),f(e,Ye,l),f(e,xe,l),f(e,me,l),i(me,ui),f(e,$e,l),f(e,pe,l),i(pe,mi),f(e,es,l),f(e,he,l),i(he,pi),f(e,ss,l),f(e,ve,l),i(ve,hi),f(e,is,l),f(e,ls,l),f(e,rs,l),f(e,ts,l),f(e,de,l),i(de,vi),i(de,as),f(e,os,l),f(e,ge,l),i(ge,di),i(ge,ns),f(e,cs,l),f(e,_e,l),i(_e,gi),i(_e,fs),f(e,us,l),f(e,Re,l),i(Re,_i),i(Re,ms),f(e,ps,l),f(e,hs,l),f(e,vs,l),f(e,we,l),i(we,Ri),f(e,ds,l),f(e,Ie,l),i(Ie,Si),f(e,gs,l),f(e,ye,l),i(ye,Pi),f(e,_s,l),f(e,Se,l),i(Se,Mi),P=!0,ki||(Bi=[A(F,"click",c[12]),A(j,"click",c[13]),A(O,"click",c[14]),A(U,"click",c[15]),A(b,"click",c[16]),A(le,"click",c[17]),A(re,"click",c[18]),A(te,"click",c[19]),A(ae,"click",c[20]),A(oe,"click",c[21]),A(ne,"click",c[22]),A(ce,"click",c[23]),A(fe,"click",c[24]),A(ue,"click",c[25]),A(me,"click",c[5]),A(pe,"click",c[9]),A(he,"click",c[6]),A(ve,"click",c[7])],ki=!0)},p(e,l){(!P||l[0]&4)&&Ge(ke,e[2]),(!P||l[0]&2&&!g(T.src,Ae=e[1][0]))&&r(T,"src",Ae),(!P||l[0]&2&&!g(N.src,be=e[1][1]))&&r(N,"src",be),(!P||l[0]&2&&!g(V.src,Ee=e[1][2]))&&r(V,"src",Ee),(!P||l[0]&2&&!g(y.src,C=e[1][3]))&&r(y,"src",C),(!P||l[0]&2&&!g(D.src,I=e[1][4]))&&r(D,"src",I),(!P||l[0]&2&&!g(L.src,Fe=e[1][5]))&&r(L,"src",Fe),(!P||l[0]&2&&!g(K.src,je=e[1][6]))&&r(K,"src",je),(!P||l[0]&2&&!g(Q.src,Oe=e[1][7]))&&r(Q,"src",Oe),(!P||l[0]&2&&!g(W.src,Ue=e[1][8]))&&r(W,"src",Ue),(!P||l[0]&2&&!g(Z.src,Je=e[1][9]))&&r(Z,"src",Je),(!P||l[0]&2&&!g(X.src,qe=e[1][10]))&&r(X,"src",qe),(!P||l[0]&2&&!g(Y.src,Le=e[1][11]))&&r(Y,"src",Le),(!P||l[0]&2&&!g(x.src,Ke=e[1][12]))&&r(x,"src",Ke),(!P||l[0]&2&&!g($.src,Qe=e[1][13]))&&r($,"src",Qe),(!P||l[0]&16)&&Ge(as,e[4]),(!P||l[0]&1)&&Ge(ns,e[0]),(!P||l[0]&2)&&Ge(fs,e[1]),(!P||l[0]&8)&&De!==(De=e[3]()+"")&&Ge(ms,De)},i(e){P||(cl(()=>{B||(B=ll(n,rl,{},!0)),B.run(1)}),P=!0)},o(e){B||(B=ll(n,rl,{},!1)),B.run(0),P=!1},d(e){e&&s(w),e&&s(n),e&&B&&B.end(),e&&s(ee),e&&s(Pe),e&&s(E),e&&s(t),e&&s(_),e&&s(z),e&&s(se),e&&s(G),e&&s(v),e&&s(S),e&&s(u),e&&s(We),e&&s(Ze),e&&s(Xe),e&&s(Ye),e&&s(xe),e&&s(me),e&&s($e),e&&s(pe),e&&s(es),e&&s(he),e&&s(ss),e&&s(ve),e&&s(is),e&&s(ls),e&&s(rs),e&&s(ts),e&&s(de),e&&s(os),e&&s(ge),e&&s(cs),e&&s(_e),e&&s(us),e&&s(Re),e&&s(ps),e&&s(hs),e&&s(vs),e&&s(we),e&&s(ds),e&&s(Ie),e&&s(gs),e&&s(ye),e&&s(_s),e&&s(Se),ki=!1,fl(Bi)}}}function $s(c){let w=c;for(let n=w.length-1;n>0;n--){let H=Math.floor(Math.random()*(n+1));[w[n],w[H]]=[w[H],w[n]]}return w}function ml(c,w,n){let H=0;var J=[Rs,Ss,Ps,Ms,ks,As,bs,Es,ws,Is,ys,Hs,Bs,Cs,Ts,Ns,Vs,Ds,zs,Gs,Fs,js,Os,Us,Js,qs,Ls,xs,Ks,Qs,Ws,Zs,Xs,Ys,Rs,Ss,Ps,Ms,ks,As,bs,Es,ws,Is,ys,Hs,Bs,Cs,Ts,Ns,Vs,Ds,zs,Gs,Fs,js,Os,Us,Js,qs,Ls,xs,Ks,Qs,Ws,Zs,Xs,Ys,Rs,Ss,Ps,Ms,ks,As,bs,Es,ws,Is,ys,Hs,Bs,Cs,Ts,Ns,Vs,Ds,zs,Gs,Fs,js,Os,Us,Js,qs,Ls,xs,Ks,Qs,Ws,Zs,Xs,Ys,Rs,Ss,Ps,Ms,ks,As,bs,Es,ws,Is,ys,Hs,Bs,Cs,Ts,Ns,Vs,Ds,zs,Gs,Fs,js,Os,Us,Js,qs,Ls,xs,Ks,Qs,Ws,Zs,Xs,Ys];console.log("===== xyz: ============================================"),console.log(J);var B=$s(J);console.log("===== xxx: ============================================"),console.log(B);var ee=$s(B);console.log("===== yyy: ============================================"),console.log(ee);var Pe=$s(ee);console.log("===== zzz: ============================================"),console.log(Pe);var E=J.slice(),t=E.splice(0,14);console.log("ARR is",t),console.log("B is",E);var Me=E.length,_=[t.slice()],v=[],z;v=v;let R=0;function se(){return E=J.slice(),E=$s(E),n(1,t=E.splice(0,14)),_=[t],n(4,R=0),n(0,H=0),n(11,v=[]),_=[t].slice(),t}function G(){R>0&&(n(4,R=R-1),n(1,t=_[R]))}function He(){R<_.length-1&&(n(4,R=R+1),n(1,t=_[R]))}function ke(y){n(1,t=t.slice());var C,ie,b,D;if([C,ie,b,D]=y,C<b){for(let I=C;I<b;I+=1)n(1,t[I]=t[I+1],t);n(1,t[b]=ie,t),n(4,R=R+1),n(11,v=[]),_.splice(_.length,0,t.slice()),_=_.slice()}else if(C>b){for(let I=C;I>b;I-=1)n(1,t[I]=t[I-1],t);n(1,t[b]=ie,t),n(4,R=R+1),n(11,v),_.splice(_.length,0,t.slice()),_=_.slice(),setTimeout(()=>n(11,v=[]),300)}else C===b&&q();console.log("In sw() -- ARCHIVE is",_)}var v=[];function S(y){v.push(y),v.length===2&&(v[0]===13&&v[1]===13?(n(1,t[13]=E.splice(0,1)[0],t),n(4,R+=1)):v[0]===v[1]?(n(1,t[v[0]]=t[13],t),n(4,R=q())):v[0]<13&&v[2]<13?ke(v):v[0]<13&&v[2]===13?n(11,v=[]):v[0]===13&&v[2]<13?(n(1,t[v[2]]=t[13],t),q()):(console.log("FUBAR"),se()))}function q(){return n(0,H+=1),n(4,R=n(4,R+=1)),n(11,v=[]),n(1,t[13]=E.splice(0,1)[0],t),n(2,Me=E.length),n(1,t),_.push(t.slice()),_=JSON.parse(JSON.stringify(_)),console.log("In getR() -- ARCHIVE is",_),R}v=v;let Be=`
    <script>
    import {fade} from "svelte/transition"
    import {flip} from "svelte/animate";

    function shuffle(array) {
      var m = array.length, t, i;
      // While there remain elements to shuffle\u2026
      while (m) {
        // Pick a remaining element\u2026
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
    
      return array;
    }
    
    let draws = 0;
    
    import M1 from 'images/Man1.svg';
    import M2 from 'images/Man2.svg';
    import M3 from 'images/Man3.svg';
    import M4 from 'images/Man4.svg';
    import M5 from 'images/Man5.svg';
    import M6 from 'images/Man6.svg';
    import M7 from 'images/Man7.svg';
    import M8 from 'images/Man8.svg';
    import M9 from 'images/Man9.svg';
    
    import P1 from 'images/Pin1.svg';
    import P2 from 'images/Pin2.svg';
    import P3 from 'images/Pin3.svg';
    import P4 from 'images/Pin4.svg';
    import P5 from 'images/Pin5.svg';
    import P6 from 'images/Pin6.svg';
    import P7 from 'images/Pin7.svg';
    import P8 from 'images/Pin8.svg';
    import P9 from 'images/Pin9.svg';
    
    import S1 from 'images/Sou1.svg';
    import S2 from 'images/Sou2.svg';
    import S3 from 'images/Sou3.svg';
    import S4 from 'images/Sou4.svg';
    import S5 from 'images/Sou5.svg';
    import S6 from 'images/Sou6.svg';
    import S7 from 'images/Sou7.svg';
    import S8 from 'images/Sou8.svg';
    import S9 from 'images/Sou9.svg';
    
    import Back from 'images/Back.svg';
    import Blank from 'images/Blank.svg'
    
    import Chun from 'images/Chun.svg'
    import Haku from 'images/Haku.svg'
    import Hatsu from 'images/Hatsu.svg'
    
    import Nan from 'images/Nan.svg'
    import Pei from 'images/Pei.svg'
    import Ton from 'images/Ton.svg'
    import Shaa from 'images/Shaa.svg'
    
    var xyz = [M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa]
    
    var A = Array.from(Array(136).keys())
    var B = A.slice();
    B = shuffle(B);
    var ARR = B.splice(0,14);   
    var ARCHIVE = [ARR.slice()];
    var ar69 = [];
    var argo;
    $:   argo = () => {return ar69.slice()};
    ar69 = ar69;
    let index = 0;

    function shuf() {
        B = xyz.slice()
        B = shuffle(B);
        ARR = B.splice(0,14);
        ARCHIVE = [ARR];
        index = 0;
        draws = 0;
        ar69 = [];
        ARCHIVE = [ARR].slice();
        return ARR; 
    }

    function back () {
        if (index > 0) {
            index = index - 1;
            ARR = ARCHIVE[index]
        }
    }
    
    function forward () {
        if (index < ARCHIVE.length - 1) {
            index = index + 1; 
            ARR = ARCHIVE[index]
        };
    }
    
    function sw (ar) {
        ARR = ARR.slice();
        var a, b, c, d;
        [a,b,c,d] = ar;
        if (a < c) {
            for (let i = a; i < c; i+=1) {
                ARR[i] = ARR[i+1]
            }
            ARR[c] = b;
            index = index + 1;
            ar69 = []; 
        ARCHIVE.splice(ARCHIVE.length, 0, ARR.slice());
        ARCHIVE = ARCHIVE.slice();
        }
        else if (a > c) {
            for (let i = a; i > c; i-=1) {
                ARR[i] = ARR[i-1]
            }
            ARR[c] = b;
            index = index + 1;
            ar69 = ar69;
        ARCHIVE.splice(ARCHIVE.length, 0, ARR.slice());
        ARCHIVE = ARCHIVE.slice();
        setTimeout(() => ar69 = [], 300);
        }
        else if (a === c) {
            // setTimeout(() => ar69 = [], 300);
            getR();
        } 
        console.log("ARCHIVE is", ARCHIVE); 
    }   
    var ar69 = [];
    
    function sky (a) {
        if (ar69.length === 0) ar69 = a
        else if (ar69.length === 2) {
                ar69 = ar69.concat(a);
                if (ar69[0] === 13 && ar69[2] === 13) {
                    index = getR();
                }
                else if(ar69[0] === ar69[2]) {
                    ARR[ar69[0]] = ARR[13];
                    index = getR();
                }
                else if (ar69[0] < 13 && ar69[2] < 13) sw(ar69)
                else { console.log("FUBAR"); shuf() }
        }
     };
    
    function getR() {
        draws+=1
        index = index + i;
        ar69 = [];
        ARR[13] = B.splice(0,1)[0];
        ARR = ARR;
        ARCHIVE.push(ARR.slice());
        ARCHIVE = JSON.parse(JSON.stringify(ARCHIVE));
        console.log("ARCHIVE is", ARCHIVE); 
        return index;
    }
    `;const u=()=>S([0,t[0]]),F=()=>S([1,t[1]]),T=()=>S([2,t[2]]),Ae=()=>S([3,t[3]]),Ce=()=>S([4,t[4]]),j=()=>S([5,t[5]]),N=()=>S([6,t[6]]),be=()=>S([7,t[7]]),Te=()=>S([8,t[8]]),O=()=>S([9,t[9]]),V=()=>S([10,t[10]]),Ee=()=>S([11,t[11]]),Ne=()=>S([12,t[12]]),U=()=>S([13,t[13]]);return c.$$.update=()=>{c.$$.dirty[0]&2048&&n(3,z=()=>v.slice())},[H,t,Me,z,R,se,G,He,S,q,Be,v,u,F,T,Ae,Ce,j,N,be,Te,O,V,Ee,Ne,U]}class dl extends tl{constructor(w){super();al(this,w,ml,ul,ol,{},null,[-1,-1])}}export{dl as default};
