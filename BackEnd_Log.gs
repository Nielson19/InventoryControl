function Init(sheetName){ // runs all the Google Sheet Methods
  var app = SpreadsheetApp; //  this is to active app 
  var ss = app.getActiveSpreadsheet(); // this is to access the spreadsheet
  var scriptSheet = ss.getSheetByName(sheetName); //  this is to select cell
  return scriptSheet;
}

function NameInput() {

  var authUsers = ["3dw@rd","Rub3n","J0ch3","D@n13l"];

  var ui = SpreadsheetApp.getUi();
  var isUser = false;

  var userPass = ui.prompt("Please Enter Your User Passcode: ").getResponseText(); //later add passcodes to certain users;

  for (var i = 0; i <= authUsers.length; i++){

    var element = authUsers[i]; //test variable 


    if (authUsers[i] == userPass){
      isUser = true;
      break;
    }

  }

    while (isUser == false){ // is not working figure out the reason is not detecting the element
      ui.alert("Please Insert a Valid Name");
      console.log("Error");
      return NameInput();
    }

    
  console.log("Passed is " + userPass);

  return userPass;
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

  function ClearEnd(){
    var sheet = Init("Input Inventory");

    for (let i = 0; i <= 17;i++){
      var currentCell = sheet.getRange(6 + i, 2);
      var amountCell = sheet.getRange(6 + i, 3);
      if (currentCell.getValue() != ""){
        currentCell.clearContent();
        amountCell.clearContent();
      }

    }

     
  }
    
  



