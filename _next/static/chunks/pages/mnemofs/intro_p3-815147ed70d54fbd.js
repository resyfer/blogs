(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{9924:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mnemofs/intro_p3",function(){return s(3502)}])},3502:function(e,t,s){"use strict";s.r(t),s.d(t,{__toc:function(){return u},home:function(){return d},next:function(){return c},prev:function(){return h}});var i=s(2676),o=s(109),n=s(9394),a=s(5904);s(1705);var r=s(9100),l=s(353);let h="/mnemofs/intro_p2",d="/",c="/mnemofs/lru",u=[{depth:2,value:"Types of File Systems",id:"types-of-file-systems"},{depth:3,value:"Block Based File Systems",id:"block-based-file-systems"},{depth:3,value:"Log Based File Systems / Log Structured File Systems",id:"log-based-file-systems--log-structured-file-systems"},{depth:3,value:"Journalling File Systems",id:"journalling-file-systems"},{depth:3,value:"Copy On Write File Systems",id:"copy-on-write-file-systems"},{depth:2,value:"Conclusion",id:"conclusion"}];function m(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",code:"code",strong:"strong",em:"em",del:"del",hr:"hr"},(0,r.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{children:"Introduction Part III | mnemofs"}),"\n",(0,i.jsx)(t.p,{children:"File systems have existed for almost as long as storage mediums have, which is to say, decades. File systems started out very simple. As the needs of users increased, as operating systems evolved, and as the quirks of storage mediums increased in exchange for providing maximum efficiency under very specific conditions, file systems had to adapt, and they generally became more complex but more specific."}),"\n",(0,i.jsxs)(t.p,{children:["The rest of this blog takes heavy inspiration from ",(0,i.jsx)(t.a,{href:"https://github.com/littlefs-project/littlefs/blob/master/DESIGN.md",children:"littlefs's design document"}),", which is a file sytem that deserves to be put in an art gallery."]}),"\n",(0,i.jsx)(t.h2,{id:"types-of-file-systems",children:"Types of File Systems"}),"\n",(0,i.jsx)(t.p,{children:"There have been various file systems with their various quirks, but they can be generally divided into four types."}),"\n",(0,i.jsx)(t.h3,{id:"block-based-file-systems",children:"Block Based File Systems"}),"\n",(0,i.jsx)(t.p,{children:"These are file systems that represent the used storage space in the form of a tree. They are also the oldest types of file systems out there."}),"\n",(0,i.jsxs)(t.p,{children:["They divide the storage into various blocks in which files are stored. Any updates to the files are done in place. Let's say block ",(0,i.jsx)(t.code,{children:"x"})," contains my file, and if I want to update the file, the same block is rewritten with the new updated file's content."]}),"\n",(0,i.jsxs)(t.p,{children:["Can you see the problem? Suppose my block is 256 B in size, and that contains a file of size 256 B as well. Say some random bytes, say ",(0,i.jsx)(t.code,{children:"13"}),"th, ",(0,i.jsx)(t.code,{children:"19"}),"th, ",(0,i.jsx)(t.code,{children:"100"}),"th, and ",(0,i.jsx)(t.code,{children:"105"}),"th bytes, are to be updated to new values by your computer. Let's say the writes can be done at a maximum rate of 1 B at a time. And to add to this, let's say our luck is very bad, and after it has updated the ",(0,i.jsx)(t.code,{children:"19"}),"th block, there is a power failure, and the write operation stops, and so does your computer. Now there is no information on what changes are remaining, or what has already been written."]}),"\n",(0,i.jsx)(t.p,{children:"You get a situation where some of the file is updated while the rest isn't."}),"\n",(0,i.jsx)(t.p,{children:"Nightmare."}),"\n",(0,i.jsx)(t.p,{children:"This is called non-atomicity, or non-resiliency. They are not resilient to power losses as they are not atomic. If an operation is atomic, it means that if it is interrupted in between executions, any changes it makes will be reverted back to the pre-execution state."}),"\n",(0,i.jsxs)(t.p,{children:["Some examples of this type of file system are ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/File_Allocation_Table",children:"FAT"})," and ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Ext2",children:"ext2"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Without modifications (as seen later), these file systems do not stand up to modern needs for atomicity. You need your file to be updated, but even the previous state is better than a possibly garbled mess."}),"\n",(0,i.jsx)(t.p,{children:"While this might not seem to be much of an issue for text files, for files encoded using encoding algorithms, this is quite a hell. Depending on the encoding algorithm, it has a very likely outcome of the entire file being corrupted because the decoder can no longer decode the file and hence will give that error."}),"\n",(0,i.jsx)(t.p,{children:"Another disadvantage of such file systems can be that if there is a file that is updated very often compared to others, the location on the storage device, where the file is located, will be used much more than other areas of the device, leading to uneven wear distribution. This may end up causing that particular area of storage device to die before the others."}),"\n",(0,i.jsx)(t.p,{children:"An advantage of such file systems is speed. Due to their simple design, they are very fast."}),"\n",(0,i.jsx)(t.h3,{id:"log-based-file-systems--log-structured-file-systems",children:"Log Based File Systems / Log Structured File Systems"}),"\n",(0,i.jsxs)(t.p,{children:["On the other extreme, there are log based file systems that take atomicity ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"very"})})," seriously. Instead of treating the entire storage as an array, they treat it similar to a queue."]}),"\n",(0,i.jsx)(t.p,{children:"Any change has a corresponding entry, which is stored in the storage device in a first-in, first-out (FIFO) manner, i.e. each new entry is stored after the end of the last stored entry. To recreate a file, all that is needed is to iterate over all of the entries in a queue. Usually each entry has a checksum of the entry suffixed to it."}),"\n",(0,i.jsx)(t.p,{children:"The checksum is usually a value obtained by hashing an entire log. While reading an entry or log, if the stored checksum does not match the calculated checksum of the log, the log is discarded, as it means that the log was not written properly. If you assume your file system is bug-free, this usually narrows the culprits to power loss."}),"\n",(0,i.jsxs)(t.p,{children:["It might seem really great initially, but see the problem? It is ",(0,i.jsx)(t.strong,{children:"very"})," slow. Suppose each read (one bytes) from the device is one instruction (that's quite generous as it's 100x slower than reading a value from RAM! ), and you have a 4 GiB device. This means 4294967296 B, so that many instructions are needed to traverse the entire storage. Ignore any calculations we do with the data; this would take about 1.38 seconds if an Intel i5 10th generation was running on its base frequency of 2.9 GHz (assuming no optimisations). As mentioned, calling it one instruction per read is being generous. This means that every time you open a file, you need to wait 1.38 seconds at the very least. And moreover, the processor used for this calculation is quite a beast in itself."]}),"\n",(0,i.jsx)(t.p,{children:"CPUs in embedded systems are slower. STM32F401CCU6 has a CPU with 84 MHz frequency. So, the same operation under the same assumptions would take it 48 seconds. Do remember, this is just 4 GB of storage capacity."}),"\n",(0,i.jsx)(t.p,{children:"Nightmare, but in another direction."}),"\n",(0,i.jsxs)(t.p,{children:["An advantage of such file systems is of course, absolute atomicity. But another advantage is wear leveling. Since entries are added in a FIFO manner, it will ensure that any pair of blocks has a maximum wear level difference of 1. The wear levels of the blocks of storage would always look like ",(0,i.jsx)(t.code,{children:"[x+1, x+1,..., x+1, x+1, x, x, x,..., x, x]"}),", where the last ",(0,i.jsx)(t.code,{children:"x+1"})," wear is the location of the last entry."]}),"\n",(0,i.jsx)(t.p,{children:"A disadvantage, apart from being slow, is what happens if the storage becomes full? Changes might be infinite depending on the user, and so will the entries that represent these changes. However, space is not infinite or file system development would not have been so difficult."}),"\n",(0,i.jsxs)(t.p,{children:["File systems of this type include ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/JFFS",children:"JFFS"}),"/",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/JFFS2",children:"JFFS2"}),", ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/YAFFS",children:"YAFFS"}),", or ",(0,i.jsx)(t.a,{href:"https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-reference/storage/spiffs.html",children:"SPIFFS"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"journalling-file-systems",children:"Journalling File Systems"}),"\n",(0,i.jsx)(t.p,{children:"The very weird thing is that both of the above types of file systems have mutually exclusive advantages and disadvantages. So naturally, a middle ground approach would either benefit from both, or none."}),"\n",(0,i.jsx)(t.p,{children:'We create a block-based file system, but we also reserve a certain place on the device for the FIFO queue to store logs. We call this FIFO queue the journal or bounded log. Best of both worlds. The block file system contains a sort of "base" state, and further changes to it are stored as entries or logs in the journal.'}),"\n",(0,i.jsx)(t.p,{children:'To get the updated version of the file, all the FS has to do is take the "base" state and iterate over the journal, applying changes to it.'}),"\n",(0,i.jsx)(t.p,{children:"Independent of implementation, there is a very strong relationship between storage location and data due to the presence of the journal. This can cause an abnormal increase in the wear of the journal along with the disadvantage of increased wear for a frequently updated file in block based file systems. Another problem is that there are essentially two file systems running in parallel, and both code complexity and execution may increase."}),"\n",(0,i.jsxs)(t.p,{children:["Depending on the implementation, this may have some additional problems. The file system may decide to ",(0,i.jsx)(t.em,{children:"commit"}),' logs to the file system when the journal is full. This means that the "base" state needs to be updated, and thus, the journal is emptied. The changes may be committed one by one, but power loss during committing the journal may cause garbled data as well.']}),"\n",(0,i.jsxs)(t.p,{children:["This is the most popular category of file systems, and this category includes Linux's most popular file system ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Ext4",children:"ext4"}),", and Window's ",(0,i.jsx)(t.del,{children:"most popular"})," (actually you don't have a choice, as far as daily files go) file system ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/NTFS",children:"NTFS"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"copy-on-write-file-systems",children:"Copy On Write File Systems"}),"\n",(0,i.jsx)(t.p,{children:"A file system category based on an entirely new way of dealing with this problem is Copy-On-Write (CoW) file systems."}),"\n",(0,i.jsx)(t.p,{children:"What does CoW mean? You want to update a value? Copy the entire thing and write on that copy. It's similar to how some developers program before learning about the existence of version control."}),"\n",(0,i.jsxs)(t.p,{children:["Suppose a block (I'll give it a name ",(0,i.jsx)(t.code,{children:"x"}),") is at a location ",(0,i.jsx)(t.code,{children:"p"}),". If you want to update it, you will read the entire block in memory, update the necessary parts in memory, and write the updated block to a new location ",(0,i.jsx)(t.code,{children:"q"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This sounds simple, but it's a bit more complicated than that when you dive into the nuances of it."}),"\n",(0,i.jsx)(t.p,{children:"So, files and directories exist in all these types of file systems, which include CoW file systems. This means that there is a hierarchical ordering of files and directories. A directory is a collection of files, so under working CoW file system implementations, a directory has some information about the location of a file."}),"\n",(0,i.jsxs)(t.p,{children:["Let's update our file! Let's assume our file is just one block in size for simplicity. So our file got updated, and its location shifted from ",(0,i.jsx)(t.code,{children:"p"})," to ",(0,i.jsx)(t.code,{children:"q"}),". But the directory that contains our file still points to ",(0,i.jsx)(t.code,{children:"p"}),"!!! So, we need to update our directory! But now, the parent directory of this directory faces a similar problem. This continues to propagate upward until it reaches the root of the entire file system's tree. The root has no parent, so updating it updates the tree. BUT, unless your root is confined to some specific places in the device, you would need to store where the root is located as well, and this update problem again continues until it finally reaches something that either has a single fixed location (in which case it doesn't follow CoW as it would need to be updated without changing location) or it has multiple fixed locations, in which case the file system has to figure out which one of the locations contains the most recent update."]}),"\n",(0,i.jsx)(t.p,{children:"Yep...A lot of problems, and a lot of headache."}),"\n",(0,i.jsx)(t.p,{children:"An advantage of CoW file systems is that there are two copies of the block. Old and updated. If the update was not successful, the old version would be used."}),"\n",(0,i.jsxs)(t.p,{children:["The wear leveling here depends on the block allocator, which is responsible for providing the location where an update should be stored. Thus, a good algorithm for the block allocator will give good and even wear (copium \uD83E\uDD1E, but it's ",(0,i.jsx)(t.em,{children:"possible"})," to do this, unlike other challenges that arise due to the nature of the file system)."]}),"\n",(0,i.jsx)(t.p,{children:"A disadvantage of CoW file systems is pretty obvious, as shown above. A simple update takes too many copies and writes due to updating all the FS objects in the file's path."}),"\n",(0,i.jsx)(t.p,{children:"Another disadvantage is that it takes up quite a lot of space to keep copies. If you don't have enough space to update a file (which includes not just the file but ancestors as well), a CoW file system is a bad choice."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.em,{children:"Another"})})," disadvantage can be that CoW file systems require a garbage collector. So, additional memory usage, and processing time. The garbage collector needs to figure out which blocks (old copies) it can safely erase, and which are required in case there is a power failure in the near future. This is not a computationally cheap thing to do."]}),"\n",(0,i.jsx)(t.p,{children:"The amount of extra space used by old copies is determined by the aggressiveness of the garbage collector, but no garbage collector should erase copies of the FS objects in the path of a file until it is sure the entire file has been updated."}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"There are too many types of file systems, and there are too many problems. They try to solve some problem but end up creating another or solving it partially. Mnemofs is heavily inspired by littlefs, which itself tries to take the best of both CoW and journaling file systems and combine them with some ingenious problem solving."}),"\n",(0,i.jsx)(t.p,{children:"We'll look into mnemofs, and specifically, its LRU in the next part."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(l.oy,{children:[(0,i.jsx)(l.Zb,{icon:"❰ ",title:"Part II",href:h}),(0,i.jsx)(l.Zb,{icon:"❱ ",title:"Mnemofs LRU",href:c})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(l.Zb,{icon:"⌂ ",title:"Home",href:d})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)},pageOpts:{filePath:"pages/mnemofs/intro_p3.mdx",route:"/mnemofs/intro_p3",timestamp:1720606711e3,pageMap:[{kind:"MdxPage",name:"coming_soon",route:"/coming_soon"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"mnemofs",route:"/mnemofs",children:[{kind:"MdxPage",name:"ba",route:"/mnemofs/ba"},{kind:"MdxPage",name:"intro_p1",route:"/mnemofs/intro_p1"},{kind:"MdxPage",name:"intro_p2",route:"/mnemofs/intro_p2"},{kind:"MdxPage",name:"intro_p3",route:"/mnemofs/intro_p3"},{kind:"MdxPage",name:"journal",route:"/mnemofs/journal"},{kind:"MdxPage",name:"lru",route:"/mnemofs/lru"},{kind:"MdxPage",name:"mideval",route:"/mnemofs/mideval"},{kind:"MdxPage",name:"mn",route:"/mnemofs/mn"},{kind:"MdxPage",name:"mnemofs",route:"/mnemofs/mnemofs"},{kind:"Meta",data:{ba:"Ba",intro_p1:"Intro P1",intro_p2:"Intro P2",intro_p3:"Intro P3",journal:"Journal",lru:"Lru",mideval:"Mideval",mn:"Mn",mnemofs:"Mnemofs"}}]},{kind:"Meta",data:{coming_soon:"Coming Soon",index:"Index"}}],flexsearch:{codeblocks:!0},title:"Introduction Part III | mnemofs",headings:u},pageNextRoute:"/mnemofs/intro_p3",nextraLayout:n.ZP,themeConfig:a.Z};t.default=(0,o.j)(p)},5904:function(e,t,s){"use strict";var i=s(2676);t.Z={footer:(0,i.jsx)("p",{children:"MIT 2024 \xa9 resyfer."}),head:e=>{let{title:t,meta:s}=e;return(0,i.jsxs)(i.Fragment,{children:[s.description&&(0,i.jsx)("meta",{name:"description",content:s.description}),s.tag&&(0,i.jsx)("meta",{name:"keywords",content:s.tag}),s.author&&(0,i.jsx)("meta",{name:"author",content:s.author}),(0,i.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-HFNGDFK1PN"}),(0,i.jsx)("script",{children:"\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', 'G-HFNGDFK1PN');\n        "})]})},postFooter:!1}}},function(e){e.O(0,[253,888,774,179],function(){return e(e.s=9924)}),_N_E=e.O()}]);