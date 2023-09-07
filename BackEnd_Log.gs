function Init(sheetName){ // runs all the Google Sheet Methods
  var app = SpreadsheetApp; //  this is to active app 
  var ss = app.getActiveSpreadsheet(); // this is to access the spreadsheet
  var scriptSheet = ss.getSheetByName(sheetName); //  this is to select cell
  return scriptSheet;
}

function NameInput() {

  //user database

  // var authUsers = {Edward_Ferreira: {password: "3dw@rd"},
  //                  Ruben_Fuentes: {password: "Rub3n"},
  //                   Juan_Guerra: {password: "J0ch3"},
  //                   Daniel_Escobar: {password: "D@n13l"}};

  var ui = SpreadsheetApp.getUi();

  var userName = ui.prompt("Please Enter Your Name: "); //later add passcodes to certain users;
  while (userName.getResponseText() == false){ // make an array with auth of certain users (DONE)
    ui.alert("Please Insert a Valid Name");
    console.log("Error");
    userName = ui.prompt("Please Enter Your Name: "); //later add passcodes to certain users;
  }
  console.log("Passed");
  return userName.getResponseText();
}


function CurrentLoging(){
  var sheet = Init("Inventory Current Test");
  var column = 13;

  var currentCell = sheet.getRange(4, 3).getValue(), row = 4, column = 13; // make condition to select the corresponding column for the month
  var today = new Date().toLocaleDateString();
  while (currentCell){

    if (today == currentCell){

      while (currentCell){ //transfer current to log
        sheet.getRange(row,column).setValue(currentCell);
        row++;
        if (row == 8){
          continue;
        }
        currentCell = sheet.getRange(row, 3).getValue();
      }
      
      row = 4;
    } 
  }

}


function UpdateInvetoryInput(skuID, amountNum, warnLogIn){
  var scriptCur = Init("Inventory Current Test");
  var currentRow = 4, currentColumn = 2;
  var currentCell = scriptCur.getRange(currentRow, currentColumn).getValue();

  while (currentCell){
    if (currentCell == skuID){
      if (newAmount < 0){
        return warnLogIn.push("- Item: " + skuID + " does not have enough in stock\n");
      }
      else{
        var amountTargetCell  = scriptCur.getRange(currentRow, 3).getValue();
        console.log(amountTargetCell);
        var newAmount =  amountTargetCell + amountNum;
        scriptCur.getRange(currentRow, 3).setValue(newAmount);

        return warnLogIn.push("- Item: " + skuID + " new amount of " + newAmount + "\n");
      }
    }
    currentRow++;
    currentCell = scriptCur.getRange(currentRow, currentColumn).getValue();

  }
  

}

function UpdateInvetoryOutput(skuID, amountNum, warnLogIn){
  var scriptCur = Init("Inventory Current Test");
  var currentRow = 4, currentColumn = 2;
  var currentCell = scriptCur.getRange(currentRow, currentColumn).getValue();

  while (currentCell){
    if (currentCell == skuID){
      if (newAmount < 0){
        return warnLogIn.push("- Item: " + skuID + " does not have enough in stock\n");
      }
      else{
        var amountTargetCell  = scriptCur.getRange(currentRow, 3).getValue();
        console.log(amountTargetCell);
        var newAmount =  amountTargetCell - amountNum;
        if (newAmount < 0){

          return warnLogIn.push("- Item: " + skuID + " can't update, not enough in stock.\n");
        }
        else{

          scriptCur.getRange(currentRow, 3).setValue(newAmount);
          return warnLogIn.push("- Item: " + skuID + " new amount of " + newAmount + "\n");
        }
      }
    }
    currentRow++;
    currentCell = scriptCur.getRange(currentRow, currentColumn).getValue();

    }
  

  }



