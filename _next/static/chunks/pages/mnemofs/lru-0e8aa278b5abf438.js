(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{4778:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mnemofs/lru",function(){return n(8086)}])},8086:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return u},home:function(){return h},next:function(){return c},prev:function(){return d}});var s=n(2676),i=n(109),o=n(9394),a=n(5904);n(1705);var r=n(9100),l=n(353);let d="/mnemofs/mnemofs",h="/",c="/mnemofs/journal",u=[{depth:2,value:"Kernel Linked Lists",id:"kernel-linked-lists"},{depth:2,value:"LRU structure",id:"lru-structure"},{depth:2,value:"Applying updates",id:"applying-updates"}];function m(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",em:"em",img:"img",code:"code",strong:"strong",hr:"hr"},(0,r.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"Mnemofs Least Recently Used (LRU) Cache"}),"\n",(0,s.jsx)(t.p,{children:"Before diving into the LRU Cache, called LRU for short, we need to look into a data structure that every one seems to know, but with a slightly different flavor."}),"\n",(0,s.jsx)(t.h2,{id:"kernel-linked-lists",children:"Kernel Linked Lists"}),"\n",(0,s.jsxs)(t.p,{children:["Linux, and NuttX (among others) have this very special flavor of linked lists that seem to make it ",(0,s.jsx)(t.em,{children:"just right"}),", called a kernel linked list, or simply, a kernel list. This is a circular doubly linked list which can be used to store ",(0,s.jsx)(t.em,{children:"any"})," data type."]}),"\n",(0,s.jsx)(t.p,{children:"Below is a traditional circular doubly linked list."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://res.cloudinary.com/dbzi2yvvc/image/upload/v1720435118/mnemofs/Screenshot_20240708_160735_ivk5au.png",alt:"dll"})}),"\n",(0,s.jsx)(t.p,{children:"And the below is a kernel list."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://res.cloudinary.com/dbzi2yvvc/image/upload/v1720435871/mnemofs/Screenshot_20240708_162053_rjxu4o.png",alt:"kl"})}),"\n",(0,s.jsxs)(t.p,{children:["The type ",(0,s.jsx)(t.code,{children:"struct list_head"})," contains only pointers to other ",(0,s.jsx)(t.code,{children:"struct list_head"}),". It doesn't care about the structure it is part of. This can allow traversal, and conversion of any kind of structure we want into a list. The question is, if we have a pointer, how do we get the original structure back?"]}),"\n",(0,s.jsxs)(t.p,{children:["The answer to that is pretty simple and brilliant. Pointer offsets. If your struct ",(0,s.jsx)(t.code,{children:"struct my_struct"})," contains a member ",(0,s.jsx)(t.code,{children:"struct list_head list"}),", then, let's say, the offset of ",(0,s.jsx)(t.code,{children:"list"})," from the start of the struct is ",(0,s.jsx)(t.code,{children:"off"}),", then if we have an address ",(0,s.jsx)(t.code,{children:"x"})," pointing to ",(0,s.jsx)(t.code,{children:"list"}),", we can get its parent by just doing ",(0,s.jsx)(t.code,{children:"x - off"}),". ",(0,s.jsx)(t.code,{children:"off"})," will always remain constant for a given struct, and there are utilities provided to calculate them. In fact, the list utilities don't require you to even have to think too much about how this works."]}),"\n",(0,s.jsx)(t.h2,{id:"lru-structure",children:"LRU structure"}),"\n",(0,s.jsx)(t.p,{children:"Back to the LRU. The LRU is in-memory, and its main purpose is to reduce the wear of your storage device. The way it does is by bunching some changes to the same file, and then writing them all in one go. LRU bases itself off of the structure of a traditional LRU design, and so, like any good LRU, it needs a doubly linked list implementation. We'll go a bit further than that and use kernel lists."}),"\n",(0,s.jsxs)(t.p,{children:["The LRU in mnemofs is a kernel list of nodes. Each node represents a file or a directory. Each node contains deltas, which are basically the updates a user wants. The deltas are arranged in a kernel list for code reduction, however, they may use something as simple as a singly linked list. Deltas are of two types: either put ",(0,s.jsx)(t.code,{children:"x"})," bytes at an offset ",(0,s.jsx)(t.code,{children:"off"})," by replacing at maximum ",(0,s.jsx)(t.code,{children:"x"})," bytes (less than ",(0,s.jsx)(t.code,{children:"x"})," bytes at the end of a file), or delete ",(0,s.jsx)(t.code,{children:"x"})," bytes from offset ",(0,s.jsx)(t.code,{children:"off"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"When a new node is to be inserted, and if the LRU is full, the last node (tail of the list) is popped off, and all the deltas in it are written to the flash. This is called the flush operation. A flush operation may happen implicitly as explained, or explicitly in cases like where a file is closed."}),"\n",(0,s.jsx)(t.p,{children:"When the deltas are written to the flash in an Copy-On-Write (CoW) manner, the new location and size is changed and the journal comes into play here. This need to be updated in the parent as well. Thus the parent goes through this same procedure for updates as well."}),"\n",(0,s.jsx)(t.p,{children:"CoW file systems face a very common problem of cascading or bubbling up of updates. If a file is updated, its location changes. Thus the parent needs to be updated, and its location is changed as well, and so on this rises up the file system till the root is updated. However, unlike most CoW systems, the LRU does not let the updates bubble up into the file system immediately."}),"\n",(0,s.jsxs)(t.p,{children:["The LRU isn't a ",(0,s.jsx)(t.em,{children:"cache"}),' in a strict sense, as the original data still needs to be read from the flash before applying the changes to the LRU, and thus, does not "save" time like usual caches. However, the main purpose it has is to batch updates together to reduce the number of times the file is updated in the flash. The size of the LRU is configurable during compile time, thus giving control over the RAM vs wear tradeoff. Also, if someone wants to apply the updates to the flash as soon as possible, then the LRU size should be kept to a minimum.']}),"\n",(0,s.jsx)(t.p,{children:"Unlike traditional caches, we're quite happy to use the fact that while using caches, the original store is not up to date with the in-memory store as this stops (or rather, staggers) the upward propagation of the updates to the root. My apologies to all those great people who have worked to solve this issue in other areas of computing."}),"\n",(0,s.jsxs)(l.UW,{type:"info",emoji:"ℹ️",children:[(0,s.jsx)(t.p,{children:"Power loss will cause all changes in the LRU to be lost. In fact, it's the only bunch of updates that will be lost. The updates in the journal will remain, and the file system will be in a recoverable state at all times."}),(0,s.jsx)(t.p,{children:"The smaller the LRU is configured, the lesser you will lose after a power loss."})]}),"\n",(0,s.jsx)(t.h2,{id:"applying-updates",children:"Applying updates"}),"\n",(0,s.jsxs)(t.p,{children:["When it's time to update convert the deltas into actual data on the flash, it's pretty complicated. The first task is to determine what ",(0,s.jsx)(t.em,{children:"doesn't"})," need to change. If a file takes up blocks ",(0,s.jsx)(t.code,{children:"a, b, c, d"})," and if the block c has some deltas, then the new blocks have to be like ",(0,s.jsx)(t.code,{children:"a, b, x, y"}),' due to CoW. Thus, the "prefix" needs to be determined, which, in this case, is ',(0,s.jsx)(t.code,{children:"a, b"})," blocks."]}),"\n",(0,s.jsxs)(t.p,{children:["Now, we need to apply all updates contained in the deltas over such a file. Due to the limitation of the types of deltas, this gets much simplified into a two pointer method, where the upper limiter of the window shifts inwards by ",(0,s.jsx)(t.code,{children:"x"})," bytes for every deletion that shifts ",(0,s.jsx)(t.code,{children:"x"})," bytes ",(0,s.jsx)(t.strong,{children:"inside"})," the window. It might shift ",(0,s.jsx)(t.code,{children:"x + y"})," bytes in total, where ",(0,s.jsx)(t.code,{children:"y"})," bytes fall outside the window. The way this two pointer window algorithm works, ",(0,s.jsx)(t.code,{children:"y"})," will not be lower than the minimum limiter of the window, but rather, can only be higher that the upper limiter. We do not care about this, as the next iteration will take care of it. Also, we increment a deleted bytes counter...say ",(0,s.jsx)(t.code,{children:"del"}),"...by ",(0,s.jsx)(t.code,{children:"x"})," to denote how many bytes have been deleted ",(0,s.jsx)(t.strong,{children:"before"})," the start of the window. So, then, if we are considering a window ",(0,s.jsx)(t.code,{children:"x, x + m"})," in the new file, then we need to copy the bytes ",(0,s.jsx)(t.code,{children:"x + del, x + m + del"})," from the old file. This way ",(0,s.jsx)(t.code,{children:"del"}),' marks the amount of "compensation" we need to provide.']}),"\n",(0,s.jsx)(t.p,{children:"After the window reaches the end of updates, it's time to save this new                                         location in our journal."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(l.oy,{children:[(0,s.jsx)(l.Zb,{icon:"❰ ",title:"Mnemofs",href:d}),(0,s.jsx)(l.Zb,{icon:"❱ ",title:"Mnemofs Journal",href:c})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(l.Zb,{icon:"⌂ ",title:"Home",href:h})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)},pageOpts:{filePath:"pages/mnemofs/lru.mdx",route:"/mnemofs/lru",timestamp:1720606711e3,pageMap:[{kind:"MdxPage",name:"coming_soon",route:"/coming_soon"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"mnemofs",route:"/mnemofs",children:[{kind:"MdxPage",name:"ba",route:"/mnemofs/ba"},{kind:"MdxPage",name:"intro_p1",route:"/mnemofs/intro_p1"},{kind:"MdxPage",name:"intro_p2",route:"/mnemofs/intro_p2"},{kind:"MdxPage",name:"intro_p3",route:"/mnemofs/intro_p3"},{kind:"MdxPage",name:"journal",route:"/mnemofs/journal"},{kind:"MdxPage",name:"lru",route:"/mnemofs/lru"},{kind:"MdxPage",name:"mideval",route:"/mnemofs/mideval"},{kind:"MdxPage",name:"mn",route:"/mnemofs/mn"},{kind:"MdxPage",name:"mnemofs",route:"/mnemofs/mnemofs"},{kind:"Meta",data:{ba:"Ba",intro_p1:"Intro P1",intro_p2:"Intro P2",intro_p3:"Intro P3",journal:"Journal",lru:"Lru",mideval:"Mideval",mn:"Mn",mnemofs:"Mnemofs"}}]},{kind:"Meta",data:{coming_soon:"Coming Soon",index:"Index"}}],flexsearch:{codeblocks:!0},title:"Mnemofs Least Recently Used (LRU) Cache",headings:u},pageNextRoute:"/mnemofs/lru",nextraLayout:o.ZP,themeConfig:a.Z};t.default=(0,i.j)(p)},5904:function(e,t,n){"use strict";var s=n(2676);t.Z={footer:(0,s.jsx)("p",{children:"MIT 2024 \xa9 resyfer."}),head:e=>{let{title:t,meta:n}=e;return(0,s.jsxs)(s.Fragment,{children:[n.description&&(0,s.jsx)("meta",{name:"description",content:n.description}),n.tag&&(0,s.jsx)("meta",{name:"keywords",content:n.tag}),n.author&&(0,s.jsx)("meta",{name:"author",content:n.author}),(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-HFNGDFK1PN"}),(0,s.jsx)("script",{children:"\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', 'G-HFNGDFK1PN');\n        "})]})},postFooter:!1}}},function(e){e.O(0,[253,888,774,179],function(){return e(e.s=4778)}),_N_E=e.O()}]);