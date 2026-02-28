{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cspthree\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardirnatural\partightenfactor0

\f0\fs20 \cf2 self.addEventListener("install", function(event) \{\
event.waitUntil(\
caches.open("menu-cache").then(function(cache) \{\
return cache.addAll([\
"index.html",\
"logo.png"\
]);\
\})\
);\
\});\
self.addEventListener("fetch", function(event) \{\
event.respondWith(\
caches.match(event.request).then(function(response) \{\
return response || fetch(event.request);\
\})\
);\
\});}