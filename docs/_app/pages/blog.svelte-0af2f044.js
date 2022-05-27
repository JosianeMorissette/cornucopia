import{S as Z,i as ee,s as ie,K as X,L as Y,a as q,d as r,b as v,g as l,J as p,E as T,w as S,x as j,y as J,q as F,o as A,B as K,F as de,e as x,k as g,t as w,c as b,m as _,h as N,j as pe,G as ce,H as fe,I as qe,M as ve,N as he}from"../chunks/index-84a5d862.js";import{N as xe,L as be,F as ge}from"../chunks/NavLayout-a5818757.js";import"../chunks/singletons-9258cc6c.js";function _e(d){let e,u,t,s;return{c(){e=X("svg"),u=X("path"),t=X("path"),this.h()},l(o){e=Y(o,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0});var a=q(e);u=Y(a,"path",{d:!0,fill:!0}),q(u).forEach(r),t=Y(a,"path",{d:!0}),q(t).forEach(r),a.forEach(r),this.h()},h(){v(u,"d","M0 0h24v24H0V0z"),v(u,"fill","none"),v(t,"d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"),v(e,"xmlns","http://www.w3.org/2000/svg"),v(e,"class",s=d[0]+" flex-none"),v(e,"fill","currentColor"),v(e,"viewBox","0 0 24 24")},m(o,a){l(o,e,a),p(e,u),p(e,t)},p(o,[a]){a&1&&s!==(s=o[0]+" flex-none")&&v(e,"class",s)},i:T,o:T,d(o){o&&r(e)}}}function $e(d,e,u){let{class:t=""}=e;return d.$$set=s=>{"class"in s&&u(0,t=s.class)},[t]}class Ee extends Z{constructor(e){super(),ee(this,e,$e,_e,ie,{class:0})}}function Pe(d){let e,u,t,s,o;return e=new Ee({props:{class:"h-5 w-5"}}),{c(){S(e.$$.fragment),u=g(),t=x("h1"),s=w("Go back")},l(a){j(e.$$.fragment,a),u=_(a),t=b(a,"H1",{});var n=q(t);s=N(n,"Go back"),n.forEach(r)},m(a,n){J(e,a,n),l(a,u,n),l(a,t,n),p(t,s),o=!0},p:T,i(a){o||(F(e.$$.fragment,a),o=!0)},o(a){A(e.$$.fragment,a),o=!1},d(a){K(e,a),a&&r(u),a&&r(t)}}}function De(d){let e,u,t,s,o,a,n,E,k,C,M,B,L,$,D;t=new be({props:{href:"/blogList",$$slots:{default:[Pe]},$$scope:{ctx:d}}});const y=d[2].default,f=de(y,d,d[3],null);return $=new ge({}),{c(){e=x("div"),u=x("div"),S(t.$$.fragment),s=g(),o=x("div"),a=x("div"),n=x("h1"),E=w(d[0]),k=g(),C=x("h4"),M=w(d[1]),B=g(),f&&f.c(),L=g(),S($.$$.fragment),this.h()},l(m){e=b(m,"DIV",{class:!0});var h=q(e);u=b(h,"DIV",{class:!0});var I=q(u);j(t.$$.fragment,I),I.forEach(r),s=_(h),o=b(h,"DIV",{class:!0});var H=q(o);a=b(H,"DIV",{class:!0});var P=q(a);n=b(P,"H1",{class:!0});var Q=q(n);E=N(Q,d[0]),Q.forEach(r),k=_(P),C=b(P,"H4",{class:!0});var V=q(C);M=N(V,d[1]),V.forEach(r),B=_(P),f&&f.l(P),L=_(P),j($.$$.fragment,P),P.forEach(r),H.forEach(r),h.forEach(r),this.h()},h(){v(u,"class","w-full space-x-10 py-6 "),v(n,"class","md:text-6xl"),v(C,"class","text-zinc-500 font-normal -mt-4 md:-mt-10"),v(a,"class","prose md:prose-lg max-w-none"),v(o,"class","max-w-4xl"),v(e,"class","w-full flex flex-col items-center ")},m(m,h){l(m,e,h),p(e,u),J(t,u,null),p(e,s),p(e,o),p(o,a),p(a,n),p(n,E),p(a,k),p(a,C),p(C,M),p(a,B),f&&f.m(a,null),p(a,L),J($,a,null),D=!0},p(m,h){const I={};h&8&&(I.$$scope={dirty:h,ctx:m}),t.$set(I),(!D||h&1)&&pe(E,m[0]),(!D||h&2)&&pe(M,m[1]),f&&f.p&&(!D||h&8)&&ce(f,y,m,m[3],D?qe(y,m[3],h,null):fe(m[3]),null)},i(m){D||(F(t.$$.fragment,m),F(f,m),F($.$$.fragment,m),D=!0)},o(m){A(t.$$.fragment,m),A(f,m),A($.$$.fragment,m),D=!1},d(m){m&&r(e),K(t),f&&f.d(m),K($)}}}function Ie(d){let e,u;return e=new xe({props:{$$slots:{default:[De]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){J(e,t,s),u=!0},p(t,[s]){const o={};s&11&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){u||(F(e.$$.fragment,t),u=!0)},o(t){A(e.$$.fragment,t),u=!1},d(t){K(e,t)}}}function we(d,e,u){let{$$slots:t={},$$scope:s}=e,{title:o}=e,{date_author:a}=e;return d.$$set=n=>{"title"in n&&u(0,o=n.title),"date_author"in n&&u(1,a=n.date_author),"$$scope"in n&&u(3,s=n.$$scope)},[o,a,t,s]}class Ne extends Z{constructor(e){super(),ee(this,e,we,Ie,ie,{title:0,date_author:1})}}function Ce(d){let e,u,t,s,o,a,n,E,k,C,M,B,L,$,D,y,f,m,h,I,H,P,Q,V,O,G,U,R,z,W;return{c(){e=x("h2"),u=w(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo asperiores placeat
		numquam? Architecto placeat delectus fuga optio doloremque alias?`),t=g(),s=x("p"),o=w(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non voluptates sapiente pariatur. Est
		excepturi rem dolorem, veritatis officiis cumque voluptatibus odit iusto accusantium velit et
		expedita perferendis accusamus corrupti!`),a=g(),n=x("div"),E=x("img"),C=g(),M=x("p"),B=w(`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),L=g(),$=x("p"),D=w(`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),y=g(),f=x("p"),m=w(`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),h=g(),I=x("p"),H=w(`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),P=g(),Q=x("p"),V=w(`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),O=g(),G=x("p"),U=w(`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),R=g(),z=x("p"),W=w(`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),this.h()},l(i){e=b(i,"H2",{class:!0});var c=q(e);u=N(c,`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo asperiores placeat
		numquam? Architecto placeat delectus fuga optio doloremque alias?`),c.forEach(r),t=_(i),s=b(i,"P",{});var te=q(s);o=N(te,`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non voluptates sapiente pariatur. Est
		excepturi rem dolorem, veritatis officiis cumque voluptatibus odit iusto accusantium velit et
		expedita perferendis accusamus corrupti!`),te.forEach(r),a=_(i),n=b(i,"DIV",{class:!0});var ae=q(n);E=b(ae,"IMG",{alt:!0,"aria-hidden":!0,class:!0,src:!0}),ae.forEach(r),C=_(i),M=b(i,"P",{});var se=q(M);B=N(se,`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),se.forEach(r),L=_(i),$=b(i,"P",{});var re=q($);D=N(re,`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),re.forEach(r),y=_(i),f=b(i,"P",{});var ue=q(f);m=N(ue,`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),ue.forEach(r),h=_(i),I=b(i,"P",{});var oe=q(I);H=N(oe,`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),oe.forEach(r),P=_(i),Q=b(i,"P",{});var ne=q(Q);V=N(ne,`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),ne.forEach(r),O=_(i),G=b(i,"P",{});var me=q(G);U=N(me,`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),me.forEach(r),R=_(i),z=b(i,"P",{});var le=q(z);W=N(le,`Nemo deleniti enim error tempore voluptatum! Quas, labore officia beatae reprehenderit a tempora
		deserunt eaque saepe, assumenda, molestiae vero hic minus fugiat. Culpa error exercitationem,
		natus laudantium repellat voluptatem dignissimos, consequatur ipsum reiciendis voluptatibus
		aspernatur minima esse assumenda dolores atque a ad? Dolore impedit aliquam, sint quidem hic
		quisquam rerum ipsum sequi eos tempora consectetur ea libero exercitationem nemo tenetur debitis
		corporis? Expedita consequuntur eum iste, exercitationem magni fugiat molestias dolor porro
		veniam non ea perferendis suscipit ipsum debitis dolorem quaerat adipisci architecto
		repudiandae. Praesentium ea asperiores dolorem exercitationem recusandae illo, nihil dicta hic
		itaque iure perspiciatis, possimus deleniti adipisci libero, id enim quod accusamus inventore ut
		est vero ipsam. Maiores officia delectus assumenda quod vero animi repellendus voluptatum ex
		placeat minima rerum dolor enim fugiat similique cumque asperiores nulla at velit, aliquid
		facilis reiciendis maxime facere vitae error! Id, sapiente ipsum.`),le.forEach(r),this.h()},h(){v(e,"class","font-normal pt-6 text-zinc-300"),v(E,"alt","Diagram of a use case of cornucopia"),v(E,"aria-hidden","true"),v(E,"class","w-full h-full"),he(E.src,k="/CornucopiaDiagram.svg")||v(E,"src",k),v(n,"class","my-12")},m(i,c){l(i,e,c),p(e,u),l(i,t,c),l(i,s,c),p(s,o),l(i,a,c),l(i,n,c),p(n,E),l(i,C,c),l(i,M,c),p(M,B),l(i,L,c),l(i,$,c),p($,D),l(i,y,c),l(i,f,c),p(f,m),l(i,h,c),l(i,I,c),p(I,H),l(i,P,c),l(i,Q,c),p(Q,V),l(i,O,c),l(i,G,c),p(G,U),l(i,R,c),l(i,z,c),p(z,W)},p:T,d(i){i&&r(e),i&&r(t),i&&r(s),i&&r(a),i&&r(n),i&&r(C),i&&r(M),i&&r(L),i&&r($),i&&r(y),i&&r(f),i&&r(h),i&&r(I),i&&r(P),i&&r(Q),i&&r(O),i&&r(G),i&&r(R),i&&r(z)}}}function Me(d){let e,u,t;return u=new Ne({props:{title:"New features on the way!",date_author:"May 14, 2022 by Louis Gariepy",$$slots:{default:[Ce]},$$scope:{ctx:d}}}),{c(){e=g(),S(u.$$.fragment),this.h()},l(s){ve('[data-svelte="svelte-hfp9t8"]',document.head).forEach(r),e=_(s),j(u.$$.fragment,s),this.h()},h(){document.title="Blog"},m(s,o){l(s,e,o),J(u,s,o),t=!0},p(s,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:s}),u.$set(a)},i(s){t||(F(u.$$.fragment,s),t=!0)},o(s){A(u.$$.fragment,s),t=!1},d(s){s&&r(e),K(u,s)}}}class Be extends Z{constructor(e){super(),ee(this,e,null,Me,ie,{})}}export{Be as default};
