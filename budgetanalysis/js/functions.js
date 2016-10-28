var localStorage = window.localStorage;

function signUp(fname,lname,email,password){

    if(!localStorage.getItem('userdata')){
      var userData = {}
      userData[email] = [fname,lname,password];
      localStorage.setItem('userdata',JSON.stringify(userData) )
      localStorage.setItem('currentUser', email);
      //var userId = {userData[email][2]:'1'}
      //localStorage.setItem('userId',JSON.stringify(userId) )
      console.log(userData)
      
    }
    else{
      var userData = JSON.parse(localStorage.getItem('userdata'))
      console.log(userData);


      //Input logic for checking existing email and denying access
      if(userData[email] === undefined){
      
        //var size = Object.keys(userData).length;
        userData[email] = [fname,lname,password];
        localStorage.setItem('userdata', JSON.stringify(userData));
        //userId = {userData[size+1][2]:size+1}
        //localStorage.setItem('userId',JSON.stringify(userId) )
        localStorage.setItem('currentUser', email);
        //console.log(userId)
        localStorage.setItem('loggedIn', 'true')
      }
      else{
        alert("User already registered");
      }
    }

}



function login(username, password){
  var userData = JSON.parse(localStorage.getItem('userdata'));
  var currentUser = localStorage.getItem('currentUser');
  //var size = Object.keys(userData).length;
  var success = false;

    if (userData[username][2] === password){
      localStorage.setItem('loggedIn', 'true')
       return true;

    }
    else{
      localStorage.setItem('loggedIn', 'false')
      alert("Username / Password error. Please try again")
      return false;
 }
}



 function createBudgetEntry(entrytype, category, entryname, entryvalue){
        var userData = JSON.parse(localStorage.getItem('userdata'))
        var currentUser = localStorage.getItem('currentUser');
        console.log(userData);
        console.log(currentUser);

        if(!localStorage.getItem('budgetEntries')){
          

          var budgetEntries = {}
          budgetEntries[currentUser] = [[entrytype,category,entryname,entryvalue]];
          localStorage.setItem('budgetEntries', JSON.stringify(budgetEntries));

        } 
        else {
          var budgetEntries = JSON.parse(localStorage.getItem('budgetEntries'));

          if(budgetEntries[currentUser] === undefined){
          budgetEntries[currentUser] = [[entrytype,category,entryname,entryvalue]];
          localStorage.setItem('budgetEntries', JSON.stringify(budgetEntries));
          

          }
          else{
          
          budgetEntries[currentUser].push([entrytype,category,entryname,entryvalue])
          localStorage.setItem('budgetEntries', JSON.stringify(budgetEntries));
          }
        }

}

function createBudgetProjection(entrytype, category, entryvalue){
        var userData = JSON.parse(localStorage.getItem('userdata'))
        var currentUser = localStorage.getItem('currentUser');
        console.log(userData);
        console.log(currentUser);

        if(!localStorage.getItem('budgetProjections')){
          

          var budgetProjections = {}
          budgetProjections[currentUser] = [[entrytype,category,entryvalue]];
          localStorage.setItem('budgetProjections', JSON.stringify(budgetProjections));

        } 
        else {
          var budgetProjections = JSON.parse(localStorage.getItem('budgetProjections'));

          if(budgetProjections[currentUser] === undefined){
          budgetProjections[currentUser] = [[entrytype,category,entryvalue]];
          localStorage.setItem('budgetProjections', JSON.stringify(budgetProjections));
          

          }
          else{
            var pushReq = false;
            var holder = budgetProjections[currentUser]
            for(var k= 0; k < holder.length; k++){
              if(holder[k][1] === category){
                budgetProjections[currentUser][k][2] = parseInt(budgetProjections[currentUser][k][2],10) + parseInt(entryvalue);
                pushReq = false;
                break;
              }
              else{
                pushReq = true;
                continue;
              }
              
            }
            if(pushReq){
                  budgetProjections[currentUser].push([entrytype,category,entryvalue])
                }
            
            localStorage.setItem('budgetProjections', JSON.stringify(budgetProjections));
          
           }
          }
 }

 function monthlyAnalyse(entries, projections){


 }