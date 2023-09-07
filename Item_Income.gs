{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red158\green158\blue158;\red11\green13\blue25;\red246\green246\blue246;
\red249\green217\blue36;\red54\green192\blue160;\red212\green212\blue212;\red83\green200\blue46;\red167\green197\blue152;
}
{\*\expandedcolortbl;;\cssrgb\c68235\c68235\c68235;\cssrgb\c4706\c6275\c12941;\cssrgb\c97255\c97255\c97255;
\cssrgb\c98431\c87059\c17647;\cssrgb\c23922\c78824\c69020;\cssrgb\c86275\c86275\c86275;\cssrgb\c38039\c80784\c23529;\cssrgb\c70980\c80784\c65882;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // This section will manage the input of the user to the inventory\cf4 \cb1 \strokec4 \
\
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 UserInputIncome\cf7 \strokec7 ()\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \strokec4  \cf2 \strokec2 // After prompting it collects and sends to Inventory Log and substract from current inventory\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  scriptInput \cf7 \strokec7 =\cf4 \strokec4  \cf6 \strokec6 Init\cf7 \strokec7 (\cf8 \strokec8 "Input Inventory"\cf7 \strokec7 );\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  scriptLog \cf7 \strokec7 =\cf4 \strokec4  \cf6 \strokec6 Init\cf7 \strokec7 (\cf8 \strokec8 "Inventory Log"\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  scriptCur \cf7 \strokec7 =\cf4 \strokec4  \cf6 \strokec6 Init\cf7 \strokec7 (\cf8 \strokec8 "Current Inventory Test"\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  warnLog \cf7 \strokec7 =\cf4 \strokec4  \cf7 \strokec7 [\cf8 \strokec8 "Results\\n"\cf7 \strokec7 ];\cf4 \strokec4  \cf2 \strokec2 // acumulate warning for final message\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  ui \cf7 \strokec7 =\cf4 \strokec4  \cf6 \strokec6 SpreadsheetApp\cf7 \strokec7 .\cf4 \strokec4 getUi\cf7 \strokec7 ();\cf4 \cb1 \strokec4 \
\cb3   \cb1 \
\cb3   \cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  logInfo \cf7 \strokec7 =\cf4 \strokec4  \cf7 \strokec7 \{\};\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  curDate \cf7 \strokec7 =\cf4 \strokec4  \cf6 \strokec6 Utilities\cf7 \strokec7 .\cf4 \strokec4 formatDate\cf7 \strokec7 (\cf5 \strokec5 new\cf4 \strokec4  \cf6 \strokec6 Date\cf7 \strokec7 (),\cf4 \strokec4  \cf8 \strokec8 "GMT+1"\cf7 \strokec7 ,\cf4 \strokec4  \cf8 \strokec8 "MM/dd/yyyy"\cf7 \strokec7 );\cf4 \strokec4  \cf2 \strokec2 //this set the current date;\cf4 \cb1 \strokec4 \
\cb3   logInfo\cf7 \strokec7 .\cf4 \strokec4 name \cf7 \strokec7 =\cf4 \strokec4  \cf6 \strokec6 NameInput\cf7 \strokec7 ();\cf4 \cb1 \strokec4 \
\cb3   logInfo\cf7 \strokec7 .\cf4 \strokec4 date \cf7 \strokec7 =\cf4 \strokec4  curDate\cf7 \strokec7 ;\cf4 \cb1 \strokec4 \
\
\cb3   \cf5 \strokec5 for\cf4 \strokec4  \cf7 \strokec7 (\cf5 \strokec5 let\cf4 \strokec4  i \cf7 \strokec7 =\cf4 \strokec4  \cf9 \strokec9 0\cf7 \strokec7 ;\cf4 \strokec4  i \cf7 \strokec7 <=\cf4 \strokec4  \cf9 \strokec9 16\cf7 \strokec7 ;\cf4 \strokec4  i\cf7 \strokec7 ++)\{\cf4 \strokec4  \cf2 \strokec2 // analyzing the input of the user\cf4 \cb1 \strokec4 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  currentSKU \cf7 \strokec7 =\cf4 \strokec4  scriptInput\cf7 \strokec7 .\cf4 \strokec4 getRange\cf7 \strokec7 (\cf4 \strokec4 i \cf7 \strokec7 +\cf4 \strokec4  \cf9 \strokec9 6\cf7 \strokec7 ,\cf4 \strokec4  \cf9 \strokec9 2\cf7 \strokec7 ).\cf4 \strokec4 getValue\cf7 \strokec7 (),\cf4 \strokec4  \cb1 \
\cb3     currentVal \cf7 \strokec7 =\cf4 \strokec4  scriptInput\cf7 \strokec7 .\cf4 \strokec4 getRange\cf7 \strokec7 (\cf4 \strokec4 i \cf7 \strokec7 +\cf4 \strokec4  \cf9 \strokec9 6\cf7 \strokec7 ,\cf4 \strokec4  \cf9 \strokec9 3\cf7 \strokec7 ).\cf4 \strokec4 getValue\cf7 \strokec7 ();\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  \cf7 \strokec7 (\cf4 \strokec4 currentSKU \cf7 \strokec7 &&\cf4 \strokec4  currentVal\cf7 \strokec7 )\{\cf4 \cb1 \strokec4 \
\
\cb3       logInfo\cf7 \strokec7 .\cf4 \strokec4 sku \cf7 \strokec7 =\cf4 \strokec4  currentSKU\cf7 \strokec7 ;\cf4 \cb1 \strokec4 \
\cb3       logInfo\cf7 \strokec7 .\cf4 \strokec4 amount \cf7 \strokec7 =\cf4 \strokec4  currentVal\cf7 \strokec7 ;\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       console\cf7 \strokec7 .\cf4 \strokec4 log\cf7 \strokec7 (\cf4 \strokec4 logInfo\cf7 \strokec7 );\cf4 \strokec4  \cb1 \
\
\cb3       \cf2 \strokec2 //set values in the inventory Log (DONE)\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  row \cf7 \strokec7 =\cf4 \strokec4  \cf9 \strokec9 2\cf7 \strokec7 ,\cf4 \strokec4  curCellLog \cf7 \strokec7 =\cf4 \strokec4  scriptLog\cf7 \strokec7 .\cf4 \strokec4 getRange\cf7 \strokec7 (\cf4 \strokec4 row\cf7 \strokec7 ,\cf4 \strokec4  \cf9 \strokec9 4\cf7 \strokec7 ).\cf4 \strokec4 getValue\cf7 \strokec7 ();\cf4 \cb1 \strokec4 \
\
\cb3       \cf5 \strokec5 while\cf4 \strokec4  \cf7 \strokec7 (\cf4 \strokec4 curCellLog\cf7 \strokec7 )\{\cf4 \strokec4  \cb1 \
\cb3           row\cf7 \strokec7 ++;\cf4 \cb1 \strokec4 \
\cb3           curCellLog \cf7 \strokec7 =\cf4 \strokec4  scriptLog\cf7 \strokec7 .\cf4 \strokec4 getRange\cf7 \strokec7 (\cf4 \strokec4 row\cf7 \strokec7 ,\cf4 \strokec4  \cf9 \strokec9 4\cf7 \strokec7 ).\cf4 \strokec4 getValue\cf7 \strokec7 ();\cf4 \cb1 \strokec4 \
\
\cb3  \cb1 \
\cb3       \cf7 \strokec7 \}\cf4 \strokec4  \cb1 \
\
\
\cb3       \cf5 \strokec5 if\cf4 \strokec4  \cf7 \strokec7 (!\cf4 \strokec4 curCellLog\cf7 \strokec7 )\{\cf4 \cb1 \strokec4 \
\cb3         scriptLog\cf7 \strokec7 .\cf4 \strokec4 getRange\cf7 \strokec7 (\cf4 \strokec4 row\cf7 \strokec7 ,\cf4 \strokec4  \cf9 \strokec9 4\cf7 \strokec7 ).\cf4 \strokec4 setValue\cf7 \strokec7 (\cf4 \strokec4 logInfo\cf7 \strokec7 .\cf4 \strokec4 date\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3         scriptLog\cf7 \strokec7 .\cf4 \strokec4 getRange\cf7 \strokec7 (\cf4 \strokec4 row\cf7 \strokec7 ,\cf4 \strokec4  \cf9 \strokec9 5\cf7 \strokec7 ).\cf4 \strokec4 setValue\cf7 \strokec7 (\cf4 \strokec4 logInfo\cf7 \strokec7 .\cf4 \strokec4 sku\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3         scriptLog\cf7 \strokec7 .\cf4 \strokec4 getRange\cf7 \strokec7 (\cf4 \strokec4 row\cf7 \strokec7 ,\cf4 \strokec4  \cf9 \strokec9 6\cf7 \strokec7 ).\cf4 \strokec4 setValue\cf7 \strokec7 (\cf4 \strokec4 logInfo\cf7 \strokec7 .\cf4 \strokec4 amount\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3         scriptLog\cf7 \strokec7 .\cf4 \strokec4 getRange\cf7 \strokec7 (\cf4 \strokec4 row\cf7 \strokec7 ,\cf4 \strokec4  \cf9 \strokec9 8\cf7 \strokec7 ).\cf4 \strokec4 setValue\cf7 \strokec7 (\cf4 \strokec4 logInfo\cf7 \strokec7 .\cf4 \strokec4 name\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3         scriptLog\cf7 \strokec7 .\cf4 \strokec4 getRange\cf7 \strokec7 (\cf4 \strokec4 row\cf7 \strokec7 ,\cf4 \strokec4  \cf9 \strokec9 9\cf7 \strokec7 ).\cf4 \strokec4 setValue\cf7 \strokec7 (\cf8 \strokec8 "In"\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\
\
\cb3         \cf6 \strokec6 UpdateInvetoryInput\cf7 \strokec7 (\cf4 \strokec4 logInfo\cf7 \strokec7 .\cf4 \strokec4 sku\cf7 \strokec7 ,\cf4 \strokec4  logInfo\cf7 \strokec7 .\cf4 \strokec4 amount\cf7 \strokec7 ,\cf4 \strokec4  warnLog\cf7 \strokec7 );\cf4 \strokec4  \cf2 \strokec2 // updates the inventory in the current sheet\cf4 \cb1 \strokec4 \
\cb3         \cb1 \
\cb3       \cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\
\cb3     \cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 // else\{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //   // Display a dialog box with a message and "Yes" and "No" buttons.\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //   // The user can also close the dialog by clicking the close button in its title bar.\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //   var ui = SpreadsheetApp.getUi();\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //   var response = ui.alert("Item " + currentSKU + " not found, Do you want to add it as a new Item?", ui.ButtonSet.YES_NO);\cf4 \cb1 \strokec4 \
\
\cb3       \cb1 \
\cb3     \cf2 \strokec2 //   if (response == ui.Button.YES) \{\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 //     var currentCell = scriptCur.getRange("C4").getValue(), row = 4;\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 //     while (currentCell)\{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //       row++;\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //       currentCell = scriptCur.getRange(row , 3).getValue();\cf4 \cb1 \strokec4 \
\cb3           \cb1 \
\cb3     \cf2 \strokec2 //     \}\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //     currentCell = scriptCur.getRange(row, 3).setValue(logInfo.amount);\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //     currentCell = scriptCur.getRange(row, 2).setValue(logInfo.sku);\cf4 \cb1 \strokec4 \
\
\cb3       \cb1 \
\cb3     \cf2 \strokec2 //   \} else \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //       Logger.log(\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //           'The user clicked "No" or the close button in the dialog\\'s title bar.'\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //       );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //   \}\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 //       \} \cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 //     \}\cf4 \cb1 \strokec4 \
\
\
\
\cb3   \cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\cb3   ui\cf7 \strokec7 .\cf4 \strokec4 alert\cf7 \strokec7 (\cf4 \strokec4 warnLog\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 \}\cf4 \cb1 \strokec4 \
\
\
}