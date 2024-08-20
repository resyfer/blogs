(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[428],{6459:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mnemofs/journal",function(){return n(9419)}])},9419:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return u},home:function(){return c},next:function(){return h},prev:function(){return d}});var o=n(2676),i=n(109),s=n(9394),r=n(5904);n(1705);var a=n(9100),l=n(353);let d="/mnemofs/lru",c="/",h="/mnemofs/mn",u=[{depth:2,value:"Count Trailing Zero (CTZ)",id:"count-trailing-zero-ctz"},{depth:3,value:"CTZ Skip List",id:"ctz-skip-list"},{depth:3,value:"Travel and Offset",id:"travel-and-offset"},{depth:2,value:"Journal Logs",id:"journal-logs"},{depth:3,value:"Structure",id:"structure"},{depth:2,value:"Conclusion",id:"conclusion"}];function m(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",strong:"strong",a:"a",em:"em",hr:"hr"},(0,a.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{textAlign:"justify"},children:[(0,o.jsx)(t.h1,{children:"Mnemofs's Journal"}),(0,o.jsx)(t.p,{children:"Continuing a reoccurring theme, to understand this, we need to understand something else. Since the journal stores updated information about a file or a directory, first we need to look into how mnemofs stores a file or a directory."}),(0,o.jsx)(t.h2,{id:"count-trailing-zero-ctz",children:"Count Trailing Zero (CTZ)"}),(0,o.jsx)(t.p,{children:"On a seemingly unrelated note, have you heard of the CTZ operation? It, as its name suggests, counts the number of trailing zeros in the binary representation of a number."}),(0,o.jsxs)(t.p,{children:["e.g., 1860 is ",(0,o.jsx)(t.code,{children:"11101000100"})," in binary, and there are ",(0,o.jsx)(t.code,{children:"2"})," trailing zeroes in it. Thus, ",(0,o.jsx)(t.code,{children:"ctz(1860) == 2"}),"."]}),(0,o.jsxs)(t.p,{children:["GNU compilers provide a ",(0,o.jsx)(t.code,{children:"__builtin_ctz(x)"})," for this, and in C 23, it's become a part of the official standard. Most CPU architectures support this instruction."]}),(0,o.jsx)(t.h3,{id:"ctz-skip-list",children:"CTZ Skip List"}),(0,o.jsxs)(t.p,{children:["A skip list is a modified singly linked list that, instead of containing one pointer per node to point to the next node, contains more pointers in ",(0,o.jsx)(t.strong,{children:"addition"})," to the original pointer. Also, as shown by ",(0,o.jsx)(t.a,{href:"https://github.com/littlefs-project/littlefs/blob/master/DESIGN.md#ctz-skip-lists",children:"littlefs (who pioneered the CTZ skip list data structure)"}),", Copy-On-Write benefits more from a backward linked list (or a backward skip list) than a forward skip list."]}),(0,o.jsx)(t.p,{children:'Skip lists prefer to keep the number of pointers per node at random to lower the cost of insertion and deletion. However, a Copy-On-Write file system has no need for "insertion" and "deletion." All of the operations are in the form of "appending" and all modifications requested are done in memory. We\'ll discuss how a CTZ skip list works in mnemofs, but first we need to know what the structure of a CTZ skip list is.'}),(0,o.jsxs)(t.p,{children:["In CTZ skip lists, each CTZ skip list block at index ",(0,o.jsx)(t.code,{children:"x"})," has ",(0,o.jsx)(t.code,{children:"ctz(x) + 1"})," number of pointers (0 for the 0th CTZ skip list block). Each CTZ skip list block has pointer to the ",(0,o.jsx)(t.code,{children:"(x - 2^i)"}),"th CTZ skip list block for every ",(0,o.jsx)(t.code,{children:"i"})," such that ",(0,o.jsx)(t.code,{children:"x"})," is divisible by ",(0,o.jsx)(t.code,{children:"2^i"}),". For example, a CTZ skip list block with index ",(0,o.jsx)(t.code,{children:"6"})," will have pointers to ",(0,o.jsx)(t.code,{children:"5"}),"th and ",(0,o.jsx)(t.code,{children:"4"}),"th CTZ skip list blocks, while a CTZ skip list block with index ",(0,o.jsx)(t.code,{children:"8"})," will have pointers to ",(0,o.jsx)(t.code,{children:"7"}),"th, ",(0,o.jsx)(t.code,{children:"6"}),"th, ",(0,o.jsx)(t.code,{children:"4"}),"th, and ",(0,o.jsx)(t.code,{children:"0"}),"th CTZ skip list blocks."]}),(0,o.jsx)(t.p,{children:"In mnemofs, each CTZ skip list block takes exactly one page of space."}),(0,o.jsxs)(t.p,{children:["Since it's possible to iterate over a CTZ skip list to reach any CTZ skip list block from the very last CTZ skip list block, only the page number and index of the last CTZ skip list block are stored, along with the size of the file. Mnemofs uses CTZ skip lists like its creator, littefs, does. However, mnemofs uses it to represent files ",(0,o.jsx)(t.strong,{children:"and"})," directories."]}),(0,o.jsx)(t.h3,{id:"travel-and-offset",children:"Travel and Offset"}),(0,o.jsx)(t.p,{children:'We\'ll use the word "offset" to refer to "data offset," which is the offset into the actual data contained in the CTZ skip list, which doesn\'t include the pointers.'}),(0,o.jsxs)(t.p,{children:["Conversion of the offset into its CTZ skip list block index and page offset can be done through the derivations done by ",(0,o.jsx)(t.a,{href:"https://github.com/littlefs-project/littlefs/blob/master/DESIGN.md#ctz-skip-lists",children:"littlefs"}),"."]}),(0,o.jsxs)(t.p,{children:["Travel from one CTZ skip list block to the other can be done using a greedy approach that utilizes the fact that the powers of 2 that change from one CTZ skip list block to the other while traveling first monotonically increase and then monotonically decrease. The graph ",(0,o.jsx)(t.em,{children:"might"})," be discontinuous, but that's not an issue. It's actually easier to understand by reading the code in this case."]}),(0,o.jsx)(t.h2,{id:"journal-logs",children:"Journal Logs"}),(0,o.jsx)(t.p,{children:"Back to the journal. Now, once the updated information on the CTZ skip list is received, it is logged to the journal along with a CTZ skip list representation of the path of the FS object. This log is followed by a checksum to make sure that the entire log was written correctly to the flash."}),(0,o.jsx)(t.h3,{id:"structure",children:"Structure"}),(0,o.jsxs)(t.p,{children:["The journal consists of blocks from the NAND flash. The last two blocks allocated for the journal are reserved for the master node and are called master blocks (more on that later). The first block starts with an 8-byte magic sequence, followed by the number of blocks (all ",(0,o.jsx)(t.code,{children:"n + 2"})," blocks) allocated to the journal, and then an array that contains the block numbers of all the blocks allocated to the journal."]}),(0,o.jsx)(t.p,{children:"This is like a modified version of a singly linked list. A traditional singly linked list design was not used to allow the mount process to quickly find the master node once the journal was found (more on that later), and it reduces space, as a traditional design would require the last page of every block in the journal to be reserved specifically for storing the block number of the next block."}),(0,o.jsxs)(t.p,{children:["The first ",(0,o.jsx)(t.code,{children:"n"})," blocks (out of the ",(0,o.jsx)(t.code,{children:"n + 2"})," blocks) store the logs, and once full, the journal gets flushed, but more on that later."]}),(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),(0,o.jsx)(t.p,{children:'So, this is how the journal works, and the "more on that later" parts will be explained in the next section that discusses the master node of mnemofs.'})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(l.oy,{children:[(0,o.jsx)(l.Zb,{icon:"❰ ",title:"Mnemofs LRU Cache",href:d}),(0,o.jsx)(l.Zb,{icon:"❱ ",title:"Mnemofs Master Node",href:h})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(l.Zb,{icon:"⌂ ",title:"Home",href:c})]})}let f={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)},pageOpts:{filePath:"pages/mnemofs/journal.mdx",route:"/mnemofs/journal",timestamp:1724176531e3,pageMap:[{kind:"MdxPage",name:"coming_soon",route:"/coming_soon"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"mnemofs",route:"/mnemofs",children:[{kind:"MdxPage",name:"ba",route:"/mnemofs/ba"},{kind:"MdxPage",name:"endeval",route:"/mnemofs/endeval"},{kind:"MdxPage",name:"intro_p1",route:"/mnemofs/intro_p1"},{kind:"MdxPage",name:"intro_p2",route:"/mnemofs/intro_p2"},{kind:"MdxPage",name:"intro_p3",route:"/mnemofs/intro_p3"},{kind:"MdxPage",name:"journal",route:"/mnemofs/journal"},{kind:"MdxPage",name:"lru",route:"/mnemofs/lru"},{kind:"MdxPage",name:"mideval",route:"/mnemofs/mideval"},{kind:"MdxPage",name:"mn",route:"/mnemofs/mn"},{kind:"MdxPage",name:"mnemofs",route:"/mnemofs/mnemofs"},{kind:"Meta",data:{ba:"Ba",endeval:"Endeval",intro_p1:"Intro P1",intro_p2:"Intro P2",intro_p3:"Intro P3",journal:"Journal",lru:"Lru",mideval:"Mideval",mn:"Mn",mnemofs:"Mnemofs"}}]},{kind:"Meta",data:{coming_soon:"Coming Soon",index:"Index"}}],flexsearch:{codeblocks:!0},title:"Mnemofs's Journal",headings:u},pageNextRoute:"/mnemofs/journal",nextraLayout:s.ZP,themeConfig:r.Z};t.default=(0,i.j)(f)},5904:function(e,t,n){"use strict";var o=n(2676);t.Z={footer:(0,o.jsx)("p",{children:"MIT 2024 \xa9 resyfer."}),head:e=>{let{title:t,meta:n}=e;return(0,o.jsxs)(o.Fragment,{children:[n.description&&(0,o.jsx)("meta",{name:"description",content:n.description}),n.tag&&(0,o.jsx)("meta",{name:"keywords",content:n.tag}),n.author&&(0,o.jsx)("meta",{name:"author",content:n.author}),(0,o.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-HFNGDFK1PN"}),(0,o.jsx)("script",{children:"\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', 'G-HFNGDFK1PN');\n        "})]})},postFooter:!1}}},function(e){e.O(0,[253,888,774,179],function(){return e(e.s=6459)}),_N_E=e.O()}]);