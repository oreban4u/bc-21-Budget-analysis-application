//console.log('hello people');
// alert('hellopeople');
var localStorage = window.localStorage;
// var fname='Ore';
// var lname='Banwo';
// var email='ore@gmail.com';
// var password='test';

// var userData = {1:[fname,lname,email,password]};
//   localStorage.setItem('userdata',JSON.stringify(userData) )

// var b = localStorage.getItem('userdata');

// console.log(typeof(JSON.parse(b)));
// console.log(JSON.parse(b));
// // localStorage.setItem('users','username password email')
// // arr = localStorage.getItem('users');
// // a = arr.split(' ')
// // //var a = (new Function("return [" + arr+ "];")());
// // //JSON.parse('['+ a +']')
// // a.push(4,5,6);
// // console.log(a);
// // alert(a);



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
       return true;

    }
    else{
      alert("Username / Password error. Please try again")
      return false;
 }
}



 function createBudgetEntry(entrytype, category, entryname, entryvalue){
        var userData = JSON.parse(localStorage.getItem('userdata'))
        var currentUser = localStorage.getItem('currentUser');

        if(!localStorage.getItem('budgetEntries')){
          

          var budgetEntries = {}
          budgetEntries[currentUser] = [[entrytype,category,entryname,entryvalue]];
          localStorage.setItem('budgetEntries', JSON.stringify(budgetEntries));

          }
          else{
            var budgetEntries = JSON.parse(localStorage.getItem('budgetEntries'));
            budgetEntries[currentUser].push([entrytype,category,entryname,entryvalue])}
            localStorage.setItem('budgetEntries', JSON.stringify(budgetEntries));
        


          
          

          



        }
            




        //   localStorage.setItem('userdata',JSON.stringify(userData) )
        //   var userId = {userData[1][2]:1}
        //   localStorage.setItem('userId',JSON.stringify(userId) )
        //   console.log(userId)

        // database.ref('users/Oreoluwa_Banwo/budget_entries/'+ newEntryKey).update({
        //   'entrytype': entrytype,
        //   'category': category,
        //   'entryname': entryname,
        //   'entryvalue': parseInt(entryvalue,10)
         // })
      //     }

      //     $(document).ready(function() {
      //       $('#income_entry').hide();
      //       $('#expense_entry').hide();

      //     $('input[type="radio"]').click(function() {
      //       if($(this).attr('id') == 'income_btn') {
      //             $('#income_entry').show();
      //             $('#expense_entry').hide();           
      //         }

      //        else {
      //             $('#income_entry').hide();
      //             $('#expense_entry').show();   
      //        }
      //    });
      // });


