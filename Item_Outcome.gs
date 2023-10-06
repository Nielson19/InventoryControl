  //Out Item


function UserInputOutcome() { // After prompting it collects and sends to Inventory Log and substract from current inventory

  var scriptInput = Init("Input Inventory"); 
  var scriptLog = Init("Inventory Log");
  var scriptCur = Init("Current Inventory Test");
  var warnLog = ["Results\n"]; // acumulate warning for final message
  var ui = SpreadsheetApp.getUi();
  
  var logInfo = {};
  var curDate = Utilities.formatDate(new Date(), "GMT+1", "MM/dd/yyyy"); //this set the current date;
  logInfo.name = NameInput();
  logInfo.date = curDate;

  for (let i = 0; i <= 16; i++){ // analyzing the input of the user

    var currentSKU = scriptInput.getRange(i + 6, 2).getValue(), 
    currentVal = scriptInput.getRange(i + 6, 3).getValue();
    if (currentSKU && currentVal){

      logInfo.sku = currentSKU;
      logInfo.amount = currentVal;
      
      console.log(logInfo); 

      //set values in the inventory Log (DONE)
      
      var row = 2, curCellLog = scriptLog.getRange(row, 4).getValue();

      while (curCellLog){ 
          row++;
          curCellLog = scriptLog.getRange(row, 4).getValue();
 
      } 


      if (!curCellLog){
        scriptLog.getRange(row, 4).setValue(logInfo.date);
        scriptLog.getRange(row, 5).setValue(logInfo.sku);
        scriptLog.getRange(row, 6).setValue(logInfo.amount);
        scriptLog.getRange(row, 8).setValue(logInfo.name);
        scriptLog.getRange(row, 9).setValue("Out");


        UpdateInvetoryOutput(logInfo.sku, logInfo.amount, warnLog); // updates the inventory in the current sheet
        


        
      }
    } 
  }

  ui.alert(warnLog);
  ClearEnd();

}



