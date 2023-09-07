{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red246\green246\blue246;\red11\green13\blue25;\red158\green158\blue158;
\red249\green217\blue36;\red54\green192\blue160;\red212\green212\blue212;\red83\green200\blue46;\red167\green197\blue152;
}
{\*\expandedcolortbl;;\cssrgb\c97255\c97255\c97255;\cssrgb\c4706\c6275\c12941;\cssrgb\c68235\c68235\c68235;
\cssrgb\c98431\c87059\c17647;\cssrgb\c23922\c78824\c69020;\cssrgb\c86275\c86275\c86275;\cssrgb\c38039\c80784\c23529;\cssrgb\c70980\c80784\c65882;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2   \cf4 \strokec4 // This section will manage the input of the user to the inventory\cf2 \cb1 \strokec2 \
\
\
\cf5 \cb3 \strokec5 function\cf2 \strokec2  \cf6 \strokec6 UserInputOutcome\cf7 \strokec7 ()\cf2 \strokec2  \cf7 \strokec7 \{\cf2 \strokec2  \cf4 \strokec4 // After prompting it collects and sends to Inventory Log and substract from current inventory\cf2 \cb1 \strokec2 \
\
\cb3   \cf5 \strokec5 var\cf2 \strokec2  scriptInput \cf7 \strokec7 =\cf2 \strokec2  \cf6 \strokec6 Init\cf7 \strokec7 (\cf8 \strokec8 "Input Inventory"\cf7 \strokec7 );\cf2 \strokec2  \cb1 \
\cb3   \cf5 \strokec5 var\cf2 \strokec2  scriptLog \cf7 \strokec7 =\cf2 \strokec2  \cf6 \strokec6 Init\cf7 \strokec7 (\cf8 \strokec8 "Inventory Log"\cf7 \strokec7 );\cf2 \cb1 \strokec2 \
\cb3   \cf5 \strokec5 var\cf2 \strokec2  scriptCur \cf7 \strokec7 =\cf2 \strokec2  \cf6 \strokec6 Init\cf7 \strokec7 (\cf8 \strokec8 "Current Inventory Test"\cf7 \strokec7 );\cf2 \cb1 \strokec2 \
\cb3   \cf5 \strokec5 var\cf2 \strokec2  warnLog \cf7 \strokec7 =\cf2 \strokec2  \cf7 \strokec7 [\cf8 \strokec8 "Results\\n"\cf7 \strokec7 ];\cf2 \strokec2  \cf4 \strokec4 // acumulate warning for final message\cf2 \cb1 \strokec2 \
\cb3   \cf5 \strokec5 var\cf2 \strokec2  ui \cf7 \strokec7 =\cf2 \strokec2  \cf6 \strokec6 SpreadsheetApp\cf7 \strokec7 .\cf2 \strokec2 getUi\cf7 \strokec7 ();\cf2 \cb1 \strokec2 \
\cb3   \cb1 \
\cb3   \cf5 \strokec5 var\cf2 \strokec2  logInfo \cf7 \strokec7 =\cf2 \strokec2  \cf7 \strokec7 \{\};\cf2 \cb1 \strokec2 \
\cb3   \cf5 \strokec5 var\cf2 \strokec2  curDate \cf7 \strokec7 =\cf2 \strokec2  \cf6 \strokec6 Utilities\cf7 \strokec7 .\cf2 \strokec2 formatDate\cf7 \strokec7 (\cf5 \strokec5 new\cf2 \strokec2  \cf6 \strokec6 Date\cf7 \strokec7 (),\cf2 \strokec2  \cf8 \strokec8 "GMT+1"\cf7 \strokec7 ,\cf2 \strokec2  \cf8 \strokec8 "MM/dd/yyyy"\cf7 \strokec7 );\cf2 \strokec2  \cf4 \strokec4 //this set the current date;\cf2 \cb1 \strokec2 \
\cb3   logInfo\cf7 \strokec7 .\cf2 \strokec2 name \cf7 \strokec7 =\cf2 \strokec2  \cf6 \strokec6 NameInput\cf7 \strokec7 ();\cf2 \cb1 \strokec2 \
\cb3   logInfo\cf7 \strokec7 .\cf2 \strokec2 date \cf7 \strokec7 =\cf2 \strokec2  curDate\cf7 \strokec7 ;\cf2 \cb1 \strokec2 \
\
\cb3   \cf5 \strokec5 for\cf2 \strokec2  \cf7 \strokec7 (\cf5 \strokec5 let\cf2 \strokec2  i \cf7 \strokec7 =\cf2 \strokec2  \cf9 \strokec9 0\cf7 \strokec7 ;\cf2 \strokec2  i \cf7 \strokec7 <=\cf2 \strokec2  \cf9 \strokec9 16\cf7 \strokec7 ;\cf2 \strokec2  i\cf7 \strokec7 ++)\{\cf2 \strokec2  \cf4 \strokec4 // analyzing the input of the user\cf2 \cb1 \strokec2 \
\
\cb3     \cf5 \strokec5 var\cf2 \strokec2  currentSKU \cf7 \strokec7 =\cf2 \strokec2  scriptInput\cf7 \strokec7 .\cf2 \strokec2 getRange\cf7 \strokec7 (\cf2 \strokec2 i \cf7 \strokec7 +\cf2 \strokec2  \cf9 \strokec9 6\cf7 \strokec7 ,\cf2 \strokec2  \cf9 \strokec9 2\cf7 \strokec7 ).\cf2 \strokec2 getValue\cf7 \strokec7 (),\cf2 \strokec2  \cb1 \
\cb3     currentVal \cf7 \strokec7 =\cf2 \strokec2  scriptInput\cf7 \strokec7 .\cf2 \strokec2 getRange\cf7 \strokec7 (\cf2 \strokec2 i \cf7 \strokec7 +\cf2 \strokec2  \cf9 \strokec9 6\cf7 \strokec7 ,\cf2 \strokec2  \cf9 \strokec9 3\cf7 \strokec7 ).\cf2 \strokec2 getValue\cf7 \strokec7 ();\cf2 \cb1 \strokec2 \
\cb3     \cf5 \strokec5 if\cf2 \strokec2  \cf7 \strokec7 (\cf2 \strokec2 currentSKU \cf7 \strokec7 &&\cf2 \strokec2  currentVal\cf7 \strokec7 )\{\cf2 \cb1 \strokec2 \
\
\cb3       logInfo\cf7 \strokec7 .\cf2 \strokec2 sku \cf7 \strokec7 =\cf2 \strokec2  currentSKU\cf7 \strokec7 ;\cf2 \cb1 \strokec2 \
\cb3       logInfo\cf7 \strokec7 .\cf2 \strokec2 amount \cf7 \strokec7 =\cf2 \strokec2  currentVal\cf7 \strokec7 ;\cf2 \cb1 \strokec2 \
\cb3       \cb1 \
\cb3       console\cf7 \strokec7 .\cf2 \strokec2 log\cf7 \strokec7 (\cf2 \strokec2 logInfo\cf7 \strokec7 );\cf2 \strokec2  \cb1 \
\
\cb3       \cf4 \strokec4 //set values in the inventory Log (DONE)\cf2 \cb1 \strokec2 \
\cb3       \cb1 \
\cb3       \cf5 \strokec5 var\cf2 \strokec2  row \cf7 \strokec7 =\cf2 \strokec2  \cf9 \strokec9 2\cf7 \strokec7 ,\cf2 \strokec2  curCellLog \cf7 \strokec7 =\cf2 \strokec2  scriptLog\cf7 \strokec7 .\cf2 \strokec2 getRange\cf7 \strokec7 (\cf2 \strokec2 row\cf7 \strokec7 ,\cf2 \strokec2  \cf9 \strokec9 4\cf7 \strokec7 ).\cf2 \strokec2 getValue\cf7 \strokec7 ();\cf2 \cb1 \strokec2 \
\
\cb3       \cf5 \strokec5 while\cf2 \strokec2  \cf7 \strokec7 (\cf2 \strokec2 curCellLog\cf7 \strokec7 )\{\cf2 \strokec2  \cb1 \
\cb3           row\cf7 \strokec7 ++;\cf2 \cb1 \strokec2 \
\cb3           curCellLog \cf7 \strokec7 =\cf2 \strokec2  scriptLog\cf7 \strokec7 .\cf2 \strokec2 getRange\cf7 \strokec7 (\cf2 \strokec2 row\cf7 \strokec7 ,\cf2 \strokec2  \cf9 \strokec9 4\cf7 \strokec7 ).\cf2 \strokec2 getValue\cf7 \strokec7 ();\cf2 \cb1 \strokec2 \
\cb3  \cb1 \
\cb3       \cf7 \strokec7 \}\cf2 \strokec2  \cb1 \
\
\
\cb3       \cf5 \strokec5 if\cf2 \strokec2  \cf7 \strokec7 (!\cf2 \strokec2 curCellLog\cf7 \strokec7 )\{\cf2 \cb1 \strokec2 \
\cb3         scriptLog\cf7 \strokec7 .\cf2 \strokec2 getRange\cf7 \strokec7 (\cf2 \strokec2 row\cf7 \strokec7 ,\cf2 \strokec2  \cf9 \strokec9 4\cf7 \strokec7 ).\cf2 \strokec2 setValue\cf7 \strokec7 (\cf2 \strokec2 logInfo\cf7 \strokec7 .\cf2 \strokec2 date\cf7 \strokec7 );\cf2 \cb1 \strokec2 \
\cb3         scriptLog\cf7 \strokec7 .\cf2 \strokec2 getRange\cf7 \strokec7 (\cf2 \strokec2 row\cf7 \strokec7 ,\cf2 \strokec2  \cf9 \strokec9 5\cf7 \strokec7 ).\cf2 \strokec2 setValue\cf7 \strokec7 (\cf2 \strokec2 logInfo\cf7 \strokec7 .\cf2 \strokec2 sku\cf7 \strokec7 );\cf2 \cb1 \strokec2 \
\cb3         scriptLog\cf7 \strokec7 .\cf2 \strokec2 getRange\cf7 \strokec7 (\cf2 \strokec2 row\cf7 \strokec7 ,\cf2 \strokec2  \cf9 \strokec9 6\cf7 \strokec7 ).\cf2 \strokec2 setValue\cf7 \strokec7 (\cf2 \strokec2 logInfo\cf7 \strokec7 .\cf2 \strokec2 amount\cf7 \strokec7 );\cf2 \cb1 \strokec2 \
\cb3         scriptLog\cf7 \strokec7 .\cf2 \strokec2 getRange\cf7 \strokec7 (\cf2 \strokec2 row\cf7 \strokec7 ,\cf2 \strokec2  \cf9 \strokec9 8\cf7 \strokec7 ).\cf2 \strokec2 setValue\cf7 \strokec7 (\cf2 \strokec2 logInfo\cf7 \strokec7 .\cf2 \strokec2 name\cf7 \strokec7 );\cf2 \cb1 \strokec2 \
\cb3         scriptLog\cf7 \strokec7 .\cf2 \strokec2 getRange\cf7 \strokec7 (\cf2 \strokec2 row\cf7 \strokec7 ,\cf2 \strokec2  \cf9 \strokec9 9\cf7 \strokec7 ).\cf2 \strokec2 setValue\cf7 \strokec7 (\cf8 \strokec8 "Out"\cf7 \strokec7 );\cf2 \cb1 \strokec2 \
\
\
\cb3         \cf6 \strokec6 UpdateInvetoryOutput\cf7 \strokec7 (\cf2 \strokec2 logInfo\cf7 \strokec7 .\cf2 \strokec2 sku\cf7 \strokec7 ,\cf2 \strokec2  logInfo\cf7 \strokec7 .\cf2 \strokec2 amount\cf7 \strokec7 ,\cf2 \strokec2  warnLog\cf7 \strokec7 );\cf2 \strokec2  \cf4 \strokec4 // updates the inventory in the current sheet\cf2 \cb1 \strokec2 \
\cb3         \cb1 \
\
\
\cb3         \cb1 \
\cb3       \cf7 \strokec7 \}\cf2 \cb1 \strokec2 \
\cb3     \cf7 \strokec7 \}\cf2 \strokec2  \cb1 \
\cb3   \cf7 \strokec7 \}\cf2 \cb1 \strokec2 \
\
\cb3   ui\cf7 \strokec7 .\cf2 \strokec2 alert\cf7 \strokec7 (\cf2 \strokec2 warnLog\cf7 \strokec7 );\cf2 \cb1 \strokec2 \
\
\cf7 \cb3 \strokec7 \}\cf2 \cb1 \strokec2 \
\
\cf4 \cb3 \strokec4 // function UpdateInvetoryOutput(skuID, amountNum, warnLogIn)\{\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //   var scriptCur = Init("Inventory Current Test");\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //   var currentRow = 4, currentColumn = 2;\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //   var currentCell = scriptCur.getRange(currentRow, currentColumn).getValue();\cf2 \cb1 \strokec2 \
\
\cf4 \cb3 \strokec4 //   while (currentCell)\{\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //     if (currentCell == skuID)\{\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //       if (newAmount < 0)\{\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //         return warnLogIn.push("- Item: " + skuID + " does not have enough in stock\\n");\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //       \}\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //       else\{\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //         var amountTargetCell  = scriptCur.getRange(currentRow, 3).getValue();\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //         console.log(amountTargetCell);\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //         var newAmount =  amountTargetCell - amountNum;\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //         scriptCur.getRange(currentRow, 3).setValue(newAmount);\cf2 \cb1 \strokec2 \
\
\cf4 \cb3 \strokec4 //         return warnLogIn.push("- Item: " + skuID + " new amount of " + newAmount + "\\n");\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //       \}\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //     \}\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //     currentRow++;\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4 //     currentCell = scriptCur.getRange(currentRow, currentColumn).getValue();\cf2 \cb1 \strokec2 \
\
\cf4 \cb3 \strokec4 //     \}\cf2 \cb1 \strokec2 \
\cb3   \cb1 \
\
\cf4 \cb3 \strokec4 //   \}\cf2 \cb1 \strokec2 \
\
\
}