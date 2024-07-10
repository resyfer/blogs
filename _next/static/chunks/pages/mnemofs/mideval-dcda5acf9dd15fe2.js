(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15],{4385:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mnemofs/mideval",function(){return n(1959)}])},1959:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return u},home:function(){return l},next:function(){return m},prev:function(){return h}});var o=n(2676),a=n(109),i=n(9394),s=n(5904);n(1705);var r=n(9100),d=n(353);let h="/mnemofs/mn",l="/",m="/coming_soon",u=[{depth:2,value:"Pre-GSoC",id:"pre-gsoc"},{depth:3,value:"Pre-Apache NuttX Period",id:"pre-apache-nuttx-period"},{depth:3,value:"First PR",id:"first-pr"},{depth:3,value:"More contributions",id:"more-contributions"},{depth:3,value:"NAND Flashes",id:"nand-flashes"},{depth:3,value:"Tinkering with my board",id:"tinkering-with-my-board"},{depth:3,value:"mnemofs",id:"mnemofs"},{depth:2,value:"GSoC Community Bonding Period",id:"gsoc-community-bonding-period"},{depth:2,value:"Till Mid Term Evaluation",id:"till-mid-term-evaluation"}];function c(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",strong:"strong",hr:"hr"},(0,r.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:"Google Summer of Code '24 @ Apache NuttX, Mid Term Evaluation Blog"}),"\n",(0,o.jsx)(t.p,{children:"Hi! I am Saurav Pal, a recent graduate, and a regular passionate developer interested in systems and anything low level, and I welcome you to my blog that covers my journey as a Google Summer of Code (GSoC) Contributor for Apache NuttX in 2024, right from the very start to the very end. My project involves designing and implementing mnemofs, a NAND Flash File System for Apache NuttX."}),"\n",(0,o.jsx)(d.UW,{type:"info",emoji:"ℹ️",children:(0,o.jsx)(t.p,{children:"Disclaimer: Contains a lot of rants and yapping."})}),"\n",(0,o.jsx)(t.h2,{id:"pre-gsoc",children:"Pre-GSoC"}),"\n",(0,o.jsx)(t.h3,{id:"pre-apache-nuttx-period",children:"Pre-Apache NuttX Period"}),"\n",(0,o.jsxs)(t.p,{children:["Before the GSoC period, I was looking into Linux, trying to get started as a contributor. But first, I needed to have a fair understanding of how the whole thing works. Baby steps, you know. Read the famous ",(0,o.jsx)(t.a,{href:"http://www.doc-developpement-durable.org/file/Projets-informatiques/cours-&-manuels-informatiques/Linux/Linux%20Kernel%20Development,%203rd%20Edition.pdf",children:"Robert Love's book"}),", saw a lot of videos, and of course, tried to read the codebase."]}),"\n",(0,o.jsxs)(t.p,{children:["It was overwhelming, and it was stressful, because... I mean, just look at Linux's codebase ",(0,o.jsx)(t.strong,{children:"and"})," its history. I was also interested in embedded systems, but I was trying to do one thing at a time. While I was going through the codebase, I was hooked on to the history of file systems in the codebase. You could see new file systems appear and some old ones disappear every few versions. Over that, I had heard file systems are the lowest in the whole tree, and are kind of only dependent on the Virtual File System and whatever the storage driver is, and that too that file system developers do not need to worry too much about the storage device (as long as it's of the same technology, but I didn't know this then), or the internals of the OS."]}),"\n",(0,o.jsx)(t.p,{children:"So, I felt file systems would be a great starting point. Started reading the codebases of the various file systems. After 3-4 file systems, all of them seem to swim in front of my eyes, and feel the same, and concepts from one FS seemed to merge with concepts from another FS \uD83E\uDEE0. Still, carried on, as I knew if I try to read it repeatedly, it will start making sense someday. Every line of C makes sense, as mostly nothing is really hidden away, and more so in the case of OS codebases. If it were a higher level language, I would have just probably given up, idk."}),"\n",(0,o.jsx)(t.p,{children:"I wanted to apply for GSoC once again for 2024, and this time, for a large project (I had done a medium project in 2023). Around this time, I thought of looking into any OS related projects that are available, as those align with my interests. Found Apache NuttX. What does NuttX and the project I found have in common with my interests? Everything! File System + Operating System + Embedded Systems. All my boxes ticked, and a match made in heaven, at least from my side \uD83D\uDE09."}),"\n",(0,o.jsx)(t.h3,{id:"first-pr",children:"First PR"}),"\n",(0,o.jsxs)(t.p,{children:["So, I decided to look into Apache NuttX, and try to understand it. I tried looking into good first issues, but honestly, I was just too optimistic at that point and even the scant few first issues were very advanced for the past me. I could succesfully set up NuttX, and build the simulator configuration (I did not have ",(0,o.jsx)(t.strong,{children:"any"})," embedded boards, but more on that later)."]}),"\n",(0,o.jsxs)(t.p,{children:["I did not wish for hand holding, as it's often detrimental to the learning process, but I did wish for a nudge in the right direction. And so I contacted ",(0,o.jsx)(t.a,{href:"https://github.com/acassis",children:"Alan"})," who was listed as a mentor to the project on any kind of resources I could gather. He very generously provided some resources, and suggested I should look into existing FS codebases (like I had done in Linux)."]}),"\n",(0,o.jsx)(t.p,{children:"The difference between Linux and NuttX codebases? NuttX codebase looks beautiful. Sure, Linux might look beautiful to the experts, but NuttX looks good even to the newbies like me. A lot of the code is properly documented...each function, what it does, and even sometimes, why it exists."}),"\n",(0,o.jsxs)(t.p,{children:["I looked at the ",(0,o.jsx)(t.a,{href:"https://github.com/apache/nuttx/tree/master/fs/fat",children:"FAT file system code"}),". In and of itself, the code isn't too complicated. But NuttX contribution style made a lot of things clear to a someone like me who was mostly stumbling around in the dark, trying to make sense of my surroundings. Finally, while reading the codebase, I came ",(0,o.jsx)(t.a,{href:"https://github.com/apache/nuttx/pull/11647",children:"across a bug"})," that initially I thought was something that I couldn't understand the meaning of. After asking around on the mailing list, I found out that this bug went unnoticed because the particular way the macro was used in the codebase till then made the expansion correct, even if the macro itself was incorrect, and might cause problems if the usage of the macro was modified. So, I patched it, and made my first ",(0,o.jsx)(t.a,{href:"https://github.com/apache/nuttx/pull/11647",children:"Apache NuttX PR"}),"!"]}),"\n",(0,o.jsx)(t.h3,{id:"more-contributions",children:"More contributions"}),"\n",(0,o.jsxs)(t.p,{children:["Alan had mentioned that the FAT file system documentation was a bit lacking and so since I was already looking at the file system, writing it down somewhere would be a good idea, and why not the official documentation :D. So, I researched into FAT FS (or, rather VFAT), and alongside reading the code, I wrote down whatever I learnt, and finally updated the documentation in my ",(0,o.jsx)(t.a,{href:"https://github.com/apache/nuttx/pull/11656",children:"second PR"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Now I wanted to move higher in the OS tree. So, I thought about learning about the VFS. Since this VFS shares a lot with Linux's structure, I could apply the VFS resources for Linux here. Along with this, I looked into the codebase, and learnt more about the VFS. Of course, not all of it, but a lot of it. I updated the documentation for the VFS as my ",(0,o.jsx)(t.a,{href:"https://github.com/apache/nuttx/pull/11730",children:"third PR"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"nand-flashes",children:"NAND Flashes"}),"\n",(0,o.jsx)(t.p,{children:"Around this time, I had received an ordered STM32F401 board. I had ordered this before my interactions with NuttX community and Alan, and it was just a buy-whatever-feels-popular-and-cheap, and I received it late due to my campus's remote location. Suprise! It doesn't have the JTAG programmer, and I need to buy one. Another infinite waiting period for that to get delivered."}),"\n",(0,o.jsxs)(t.p,{children:['I was sick of this wait, and wanted to learn about NAND flashes, and thus, about drivers in NuttX. So my thought process went like this: "I am already using the simulator. Why not simulate NAND Flash in it? I have already seen QEMU simulate chips. If CPUs, why not peripherals." And so, after some headache-filled days, I made my fourth set of PRs (',(0,o.jsx)(t.a,{href:"https://github.com/apache/nuttx/pull/11806",children:"this"})," and ",(0,o.jsx)(t.a,{href:"https://github.com/apache/nuttx-apps/pull/2319",children:"this"}),") to add a NAND Flash virtual device as an app in the simulator."]}),"\n",(0,o.jsx)(t.p,{children:"This made me learn about both NAND Flashes, as well a lot of insight into drivers work in NuttX. Both are very critical for my understanding, if I am to develop a file system for NuttX."}),"\n",(0,o.jsx)(t.h3,{id:"tinkering-with-my-board",children:"Tinkering with my board"}),"\n",(0,o.jsx)(t.h3,{id:"mnemofs",children:"mnemofs"}),"\n",(0,o.jsx)(t.h2,{id:"gsoc-community-bonding-period",children:"GSoC Community Bonding Period"}),"\n",(0,o.jsx)(t.h2,{id:"till-mid-term-evaluation",children:"Till Mid Term Evaluation"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(d.oy,{children:[(0,o.jsx)(d.Zb,{icon:"❰ ",title:"Mnemofs Master Node",href:h}),(0,o.jsx)(d.Zb,{icon:"❱ ",title:"GSoC '24 @ Apache NuttX, End Evaluation Blog",href:m})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(d.Zb,{icon:"⌂ ",title:"Home",href:l})]})}let f={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/mnemofs/mideval.mdx",route:"/mnemofs/mideval",timestamp:1720606711e3,pageMap:[{kind:"MdxPage",name:"coming_soon",route:"/coming_soon"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"mnemofs",route:"/mnemofs",children:[{kind:"MdxPage",name:"ba",route:"/mnemofs/ba"},{kind:"MdxPage",name:"intro_p1",route:"/mnemofs/intro_p1"},{kind:"MdxPage",name:"intro_p2",route:"/mnemofs/intro_p2"},{kind:"MdxPage",name:"intro_p3",route:"/mnemofs/intro_p3"},{kind:"MdxPage",name:"journal",route:"/mnemofs/journal"},{kind:"MdxPage",name:"lru",route:"/mnemofs/lru"},{kind:"MdxPage",name:"mideval",route:"/mnemofs/mideval"},{kind:"MdxPage",name:"mn",route:"/mnemofs/mn"},{kind:"MdxPage",name:"mnemofs",route:"/mnemofs/mnemofs"},{kind:"Meta",data:{ba:"Ba",intro_p1:"Intro P1",intro_p2:"Intro P2",intro_p3:"Intro P3",journal:"Journal",lru:"Lru",mideval:"Mideval",mn:"Mn",mnemofs:"Mnemofs"}}]},{kind:"Meta",data:{coming_soon:"Coming Soon",index:"Index"}}],flexsearch:{codeblocks:!0},title:"Google Summer of Code '24 @ Apache NuttX, Mid Term Evaluation Blog",headings:u},pageNextRoute:"/mnemofs/mideval",nextraLayout:i.ZP,themeConfig:s.Z};t.default=(0,a.j)(f)},5904:function(e,t,n){"use strict";var o=n(2676);t.Z={footer:(0,o.jsx)("p",{children:"MIT 2024 \xa9 resyfer."}),head:e=>{let{title:t,meta:n}=e;return(0,o.jsxs)(o.Fragment,{children:[n.description&&(0,o.jsx)("meta",{name:"description",content:n.description}),n.tag&&(0,o.jsx)("meta",{name:"keywords",content:n.tag}),n.author&&(0,o.jsx)("meta",{name:"author",content:n.author}),(0,o.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-HFNGDFK1PN"}),(0,o.jsx)("script",{children:"\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', 'G-HFNGDFK1PN');\n        "})]})},postFooter:!1}}},function(e){e.O(0,[253,888,774,179],function(){return e(e.s=4385)}),_N_E=e.O()}]);