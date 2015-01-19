function filterSpam(filterArray)
{
  var threads = GmailApp.getInboxThreads(0, 50);
  var filterArray = ["carwale.com","rmail3.iaires.com","subdued.info"];
  for (var i = 0; i < threads.length; i++) {
    var messages=threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      var message=messages[j];
      var body=message.getRawContent();
      for(var k=0; k<filterArray.length;k++){
       if(body.indexOf(filterArray[k])>-1){
        GmailApp.moveThreadToSpam(threads[i]);
      }
      }
      Utilities.sleep(1000);
    }

  }
