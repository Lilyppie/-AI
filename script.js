{\rtf1\ansi\ansicpg936\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Italic;\f1\fnil\fcharset0 Menlo-Regular;\f2\fnil\fcharset0 Menlo-Bold;
}
{\colortbl;\red255\green255\blue255;\red90\green90\blue90;\red19\green19\blue19;\red205\green204\blue213;
\red114\green201\blue195;\red233\green160\blue109;\red199\green199\blue199;\red218\green124\blue212;\red229\green189\blue123;
\red153\green132\blue242;\red115\green207\blue184;}
{\*\expandedcolortbl;;\cssrgb\c42745\c42745\c42745;\cssrgb\c9412\c9412\c9412;\cssrgb\c83922\c83922\c86667;
\cssrgb\c50980\c82353\c80784;\cssrgb\c93725\c69020\c50196;\cssrgb\c81961\c81961\c81961;\cssrgb\c89020\c58039\c86275;\cssrgb\c92157\c78431\c55294;
\cssrgb\c66667\c60784\c96078;\cssrgb\c51373\c83922\c77255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\i\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // AI\uc0\u25628 \u32034 \u21151 \u33021 
\f1\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f2\b \cf6 \strokec6 searchAI
\f1\b0 \cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf7 \strokec7 searchTerm\cf4 \strokec4  = document.\cf6 \strokec6 getElementById\cf4 \strokec4 (\cf8 \strokec8 'aiSearch'\cf4 \strokec4 ).value.\cf9 \strokec9 toLowerCase\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf7 \strokec7 aiItems\cf4 \strokec4  = document.\cf6 \strokec6 querySelectorAll\cf4 \strokec4 (\cf8 \strokec8 '.ai-item'\cf4 \strokec4 );\cb1 \
\cb3     \cb1 \
\cb3     \cf7 \strokec7 aiItems\cf4 \strokec4 .\cf6 \strokec6 forEach\cf4 \strokec4 (
\f0\i item
\f1\i0  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3         \cf5 \strokec5 const\cf4 \strokec4  \cf7 \strokec7 name\cf4 \strokec4  = 
\f0\i item
\f1\i0 .\cf6 \strokec6 querySelector\cf4 \strokec4 (\cf8 \strokec8 '.ai-name'\cf4 \strokec4 ).\cf10 \strokec10 textContent\cf4 \strokec4 .\cf6 \strokec6 toLowerCase\cf4 \strokec4 ();\cb1 \
\cb3         \cf11 \strokec11 if\cf4 \strokec4  (\cf7 \strokec7 name\cf4 \strokec4 .\cf6 \strokec6 includes\cf4 \strokec4 (\cf7 \strokec7 searchTerm\cf4 \strokec4 )) \{\cb1 \
\cb3             
\f0\i item
\f1\i0 .style.\cf10 \strokec10 display\cf4 \strokec4  = \cf8 \strokec8 'flex'\cf4 \strokec4 ;\cb1 \
\cb3         \} \cf11 \strokec11 else\cf4 \strokec4  \{\cb1 \
\cb3             
\f0\i item
\f1\i0 .style.\cf10 \strokec10 display\cf4 \strokec4  = \cf8 \strokec8 'none'\cf4 \strokec4 ;\cb1 \
\cb3         \}\cb1 \
\cb3     \});\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0

\f0\i \cf2 \cb3 \strokec2 // \uc0\u20998 \u31867 \u31579 \u36873 
\f1\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 document.\cf6 \strokec6 querySelectorAll\cf4 \strokec4 (\cf8 \strokec8 '.filter-btn'\cf4 \strokec4 ).\cf6 \strokec6 forEach\cf4 \strokec4 (
\f0\i btn
\f1\i0  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3     
\f0\i btn
\f1\i0 .\cf6 \strokec6 addEventListener\cf4 \strokec4 (\cf8 \strokec8 'click'\cf4 \strokec4 , () \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3         \cf5 \strokec5 const\cf4 \strokec4  \cf7 \strokec7 category\cf4 \strokec4  = 
\f0\i btn
\f1\i0 .dataset.\cf10 \strokec10 category\cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 const\cf4 \strokec4  \cf7 \strokec7 items\cf4 \strokec4  = document.\cf6 \strokec6 querySelectorAll\cf4 \strokec4 (\cf8 \strokec8 '.ai-item'\cf4 \strokec4 );\cb1 \
\cb3         \cb1 \
\cb3         \cf7 \strokec7 items\cf4 \strokec4 .\cf6 \strokec6 forEach\cf4 \strokec4 (
\f0\i item
\f1\i0  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3             \cf11 \strokec11 if\cf4 \strokec4  (\cf7 \strokec7 category\cf4 \strokec4  === \cf8 \strokec8 'all'\cf4 \strokec4  || 
\f0\i item
\f1\i0 .dataset.\cf10 \strokec10 type\cf4 \strokec4  === \cf7 \strokec7 category\cf4 \strokec4 ) \{\cb1 \
\cb3                 
\f0\i item
\f1\i0 .style.\cf10 \strokec10 display\cf4 \strokec4  = \cf8 \strokec8 'flex'\cf4 \strokec4 ;\cb1 \
\cb3             \} \cf11 \strokec11 else\cf4 \strokec4  \{\cb1 \
\cb3                 
\f0\i item
\f1\i0 .style.\cf10 \strokec10 display\cf4 \strokec4  = \cf8 \strokec8 'none'\cf4 \strokec4 ;\cb1 \
\cb3             \}\cb1 \
\cb3         \});\cb1 \
\cb3         \cb1 \
\cb3         
\f0\i \cf2 \strokec2 // \uc0\u26356 \u26032 \u25353 \u38062 \u29366 \u24577 
\f1\i0 \cf4 \cb1 \strokec4 \
\cb3         document.\cf6 \strokec6 querySelectorAll\cf4 \strokec4 (\cf8 \strokec8 '.filter-btn'\cf4 \strokec4 ).\cf6 \strokec6 forEach\cf4 \strokec4 (
\f0\i b
\f1\i0  \cf5 \strokec5 =>\cf4 \strokec4  
\f0\i b
\f1\i0 .\cf10 \strokec10 classList\cf4 \strokec4 .\cf6 \strokec6 remove\cf4 \strokec4 (\cf8 \strokec8 'active'\cf4 \strokec4 ));\cb1 \
\cb3         
\f0\i btn
\f1\i0 .\cf10 \strokec10 classList\cf4 \strokec4 .\cf6 \strokec6 add\cf4 \strokec4 (\cf8 \strokec8 'active'\cf4 \strokec4 );\cb1 \
\cb3     \});\cb1 \
\cb3 \}); \cb1 \
}