{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red249\green217\blue36;\red11\green13\blue25;\red246\green246\blue246;
\red54\green192\blue160;\red212\green212\blue212;\red158\green158\blue158;\red83\green200\blue46;\red167\green197\blue152;
}
{\*\expandedcolortbl;;\cssrgb\c98431\c87059\c17647;\cssrgb\c4706\c6275\c12941;\cssrgb\c97255\c97255\c97255;
\cssrgb\c23922\c78824\c69020;\cssrgb\c86275\c86275\c86275;\cssrgb\c68235\c68235\c68235;\cssrgb\c38039\c80784\c23529;\cssrgb\c70980\c80784\c65882;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 Init\cf6 \strokec6 (\cf4 \strokec4 sheetName\cf6 \strokec6 )\{\cf4 \strokec4  \cf7 \strokec7 // runs all the Google Sheet Methods\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 var\cf4 \strokec4  app \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 SpreadsheetApp\cf6 \strokec6 ;\cf4 \strokec4  \cf7 \strokec7 //  this is to active app \cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  ss \cf6 \strokec6 =\cf4 \strokec4  app\cf6 \strokec6 .\cf4 \strokec4 getActiveSpreadsheet\cf6 \strokec6 ();\cf4 \strokec4  \cf7 \strokec7 // this is to access the spreadsheet\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  scriptSheet \cf6 \strokec6 =\cf4 \strokec4  ss\cf6 \strokec6 .\cf4 \strokec4 getSheetByName\cf6 \strokec6 (\cf4 \strokec4 sheetName\cf6 \strokec6 );\cf4 \strokec4  \cf7 \strokec7 //  this is to select cell\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 return\cf4 \strokec4  scriptSheet\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 NameInput\cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf7 \strokec7 //user database\cf4 \cb1 \strokec4 \
\
\cb3   \cf7 \strokec7 // var authUsers = \{Edward_Ferreira: \{password: "3dw@rd"\},\cf4 \cb1 \strokec4 \
\cb3   \cf7 \strokec7 //                  Ruben_Fuentes: \{password: "Rub3n"\},\cf4 \cb1 \strokec4 \
\cb3   \cf7 \strokec7 //                   Juan_Guerra: \{password: "J0ch3"\},\cf4 \cb1 \strokec4 \
\cb3   \cf7 \strokec7 //                   Daniel_Escobar: \{password: "D@n13l"\}\};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 var\cf4 \strokec4  ui \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 SpreadsheetApp\cf6 \strokec6 .\cf4 \strokec4 getUi\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 var\cf4 \strokec4  userName \cf6 \strokec6 =\cf4 \strokec4  ui\cf6 \strokec6 .\cf4 \strokec4 prompt\cf6 \strokec6 (\cf8 \strokec8 "Please Enter Your Name: "\cf6 \strokec6 );\cf4 \strokec4  \cf7 \strokec7 //later add passcodes to certain users;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 while\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 userName\cf6 \strokec6 .\cf4 \strokec4 getResponseText\cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 ==\cf4 \strokec4  \cf2 \strokec2 false\cf6 \strokec6 )\{\cf4 \strokec4  \cf7 \strokec7 // make an array with auth of certain users (DONE)\cf4 \cb1 \strokec4 \
\cb3     ui\cf6 \strokec6 .\cf4 \strokec4 alert\cf6 \strokec6 (\cf8 \strokec8 "Please Insert a Valid Name"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     console\cf6 \strokec6 .\cf4 \strokec4 log\cf6 \strokec6 (\cf8 \strokec8 "Error"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     userName \cf6 \strokec6 =\cf4 \strokec4  ui\cf6 \strokec6 .\cf4 \strokec4 prompt\cf6 \strokec6 (\cf8 \strokec8 "Please Enter Your Name: "\cf6 \strokec6 );\cf4 \strokec4  \cf7 \strokec7 //later add passcodes to certain users;\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   console\cf6 \strokec6 .\cf4 \strokec4 log\cf6 \strokec6 (\cf8 \strokec8 "Passed"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 return\cf4 \strokec4  userName\cf6 \strokec6 .\cf4 \strokec4 getResponseText\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 CurrentLoging\cf6 \strokec6 ()\{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 var\cf4 \strokec4  sheet \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 Init\cf6 \strokec6 (\cf8 \strokec8 "Inventory Current Test"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  column \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 13\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 var\cf4 \strokec4  currentCell \cf6 \strokec6 =\cf4 \strokec4  sheet\cf6 \strokec6 .\cf4 \strokec4 getRange\cf6 \strokec6 (\cf9 \strokec9 4\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ).\cf4 \strokec4 getValue\cf6 \strokec6 (),\cf4 \strokec4  row \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 4\cf6 \strokec6 ,\cf4 \strokec4  column \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 13\cf6 \strokec6 ;\cf4 \strokec4  \cf7 \strokec7 // make condition to select the corresponding column for the month\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  today \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 new\cf4 \strokec4  \cf5 \strokec5 Date\cf6 \strokec6 ().\cf4 \strokec4 toLocaleDateString\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 while\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 currentCell\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 today \cf6 \strokec6 ==\cf4 \strokec4  currentCell\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\
\cb3       \cf2 \strokec2 while\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 currentCell\cf6 \strokec6 )\{\cf4 \strokec4  \cf7 \strokec7 //transfer current to log\cf4 \cb1 \strokec4 \
\cb3         sheet\cf6 \strokec6 .\cf4 \strokec4 getRange\cf6 \strokec6 (\cf4 \strokec4 row\cf6 \strokec6 ,\cf4 \strokec4 column\cf6 \strokec6 ).\cf4 \strokec4 setValue\cf6 \strokec6 (\cf4 \strokec4 currentCell\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         row\cf6 \strokec6 ++;\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 row \cf6 \strokec6 ==\cf4 \strokec4  \cf9 \strokec9 8\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 continue\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         currentCell \cf6 \strokec6 =\cf4 \strokec4  sheet\cf6 \strokec6 .\cf4 \strokec4 getRange\cf6 \strokec6 (\cf4 \strokec4 row\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ).\cf4 \strokec4 getValue\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       row \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 4\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3   \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 UpdateInvetoryInput\cf6 \strokec6 (\cf4 \strokec4 skuID\cf6 \strokec6 ,\cf4 \strokec4  amountNum\cf6 \strokec6 ,\cf4 \strokec4  warnLogIn\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 var\cf4 \strokec4  scriptCur \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 Init\cf6 \strokec6 (\cf8 \strokec8 "Inventory Current Test"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  currentRow \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 4\cf6 \strokec6 ,\cf4 \strokec4  currentColumn \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  currentCell \cf6 \strokec6 =\cf4 \strokec4  scriptCur\cf6 \strokec6 .\cf4 \strokec4 getRange\cf6 \strokec6 (\cf4 \strokec4 currentRow\cf6 \strokec6 ,\cf4 \strokec4  currentColumn\cf6 \strokec6 ).\cf4 \strokec4 getValue\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 while\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 currentCell\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 currentCell \cf6 \strokec6 ==\cf4 \strokec4  skuID\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 newAmount \cf6 \strokec6 <\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 return\cf4 \strokec4  warnLogIn\cf6 \strokec6 .\cf4 \strokec4 push\cf6 \strokec6 (\cf8 \strokec8 "- Item: "\cf4 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  skuID \cf6 \strokec6 +\cf4 \strokec4  \cf8 \strokec8 " does not have enough in stock\\n"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 else\cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 var\cf4 \strokec4  amountTargetCell  \cf6 \strokec6 =\cf4 \strokec4  scriptCur\cf6 \strokec6 .\cf4 \strokec4 getRange\cf6 \strokec6 (\cf4 \strokec4 currentRow\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ).\cf4 \strokec4 getValue\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3         console\cf6 \strokec6 .\cf4 \strokec4 log\cf6 \strokec6 (\cf4 \strokec4 amountTargetCell\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 var\cf4 \strokec4  newAmount \cf6 \strokec6 =\cf4 \strokec4   amountTargetCell \cf6 \strokec6 +\cf4 \strokec4  amountNum\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         scriptCur\cf6 \strokec6 .\cf4 \strokec4 getRange\cf6 \strokec6 (\cf4 \strokec4 currentRow\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ).\cf4 \strokec4 setValue\cf6 \strokec6 (\cf4 \strokec4 newAmount\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3         \cf2 \strokec2 return\cf4 \strokec4  warnLogIn\cf6 \strokec6 .\cf4 \strokec4 push\cf6 \strokec6 (\cf8 \strokec8 "- Item: "\cf4 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  skuID \cf6 \strokec6 +\cf4 \strokec4  \cf8 \strokec8 " new amount of "\cf4 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  newAmount \cf6 \strokec6 +\cf4 \strokec4  \cf8 \strokec8 "\\n"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     currentRow\cf6 \strokec6 ++;\cf4 \cb1 \strokec4 \
\cb3     currentCell \cf6 \strokec6 =\cf4 \strokec4  scriptCur\cf6 \strokec6 .\cf4 \strokec4 getRange\cf6 \strokec6 (\cf4 \strokec4 currentRow\cf6 \strokec6 ,\cf4 \strokec4  currentColumn\cf6 \strokec6 ).\cf4 \strokec4 getValue\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\
\cb3   \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 UpdateInvetoryOutput\cf6 \strokec6 (\cf4 \strokec4 skuID\cf6 \strokec6 ,\cf4 \strokec4  amountNum\cf6 \strokec6 ,\cf4 \strokec4  warnLogIn\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 var\cf4 \strokec4  scriptCur \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 Init\cf6 \strokec6 (\cf8 \strokec8 "Inventory Current Test"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  currentRow \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 4\cf6 \strokec6 ,\cf4 \strokec4  currentColumn \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  currentCell \cf6 \strokec6 =\cf4 \strokec4  scriptCur\cf6 \strokec6 .\cf4 \strokec4 getRange\cf6 \strokec6 (\cf4 \strokec4 currentRow\cf6 \strokec6 ,\cf4 \strokec4  currentColumn\cf6 \strokec6 ).\cf4 \strokec4 getValue\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 while\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 currentCell\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 currentCell \cf6 \strokec6 ==\cf4 \strokec4  skuID\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 newAmount \cf6 \strokec6 <\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 return\cf4 \strokec4  warnLogIn\cf6 \strokec6 .\cf4 \strokec4 push\cf6 \strokec6 (\cf8 \strokec8 "- Item: "\cf4 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  skuID \cf6 \strokec6 +\cf4 \strokec4  \cf8 \strokec8 " does not have enough in stock\\n"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 else\cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 var\cf4 \strokec4  amountTargetCell  \cf6 \strokec6 =\cf4 \strokec4  scriptCur\cf6 \strokec6 .\cf4 \strokec4 getRange\cf6 \strokec6 (\cf4 \strokec4 currentRow\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ).\cf4 \strokec4 getValue\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3         console\cf6 \strokec6 .\cf4 \strokec4 log\cf6 \strokec6 (\cf4 \strokec4 amountTargetCell\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 var\cf4 \strokec4  newAmount \cf6 \strokec6 =\cf4 \strokec4   amountTargetCell \cf6 \strokec6 -\cf4 \strokec4  amountNum\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 newAmount \cf6 \strokec6 <\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\
\cb3           \cf2 \strokec2 return\cf4 \strokec4  warnLogIn\cf6 \strokec6 .\cf4 \strokec4 push\cf6 \strokec6 (\cf8 \strokec8 "- Item: "\cf4 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  skuID \cf6 \strokec6 +\cf4 \strokec4  \cf8 \strokec8 " can't update, not enough in stock.\\n"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 else\cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\
\cb3           scriptCur\cf6 \strokec6 .\cf4 \strokec4 getRange\cf6 \strokec6 (\cf4 \strokec4 currentRow\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ).\cf4 \strokec4 setValue\cf6 \strokec6 (\cf4 \strokec4 newAmount\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 return\cf4 \strokec4  warnLogIn\cf6 \strokec6 .\cf4 \strokec4 push\cf6 \strokec6 (\cf8 \strokec8 "- Item: "\cf4 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  skuID \cf6 \strokec6 +\cf4 \strokec4  \cf8 \strokec8 " new amount of "\cf4 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  newAmount \cf6 \strokec6 +\cf4 \strokec4  \cf8 \strokec8 "\\n"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     currentRow\cf6 \strokec6 ++;\cf4 \cb1 \strokec4 \
\cb3     currentCell \cf6 \strokec6 =\cf4 \strokec4  scriptCur\cf6 \strokec6 .\cf4 \strokec4 getRange\cf6 \strokec6 (\cf4 \strokec4 currentRow\cf6 \strokec6 ,\cf4 \strokec4  currentColumn\cf6 \strokec6 ).\cf4 \strokec4 getValue\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cb1 \
\
\cb3   \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\
\
\
}