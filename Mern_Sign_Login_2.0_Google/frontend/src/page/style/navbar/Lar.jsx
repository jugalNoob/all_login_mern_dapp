import React from 'react';



const NavId=()=>{
  const usersDataToken = localStorage.getItem("usersdatatoken");
  return usersDataToken ? `/dash/${usersDataToken}` : "/login";


}


NavId()


const ForId=()=>{
  const usersDataToken = localStorage.getItem("usersdatatoken");
  return usersDataToken ? `/forget/${usersDataToken}` : "/login";


}


ForId()


const AdminId=()=>{
  const usersDataToken = localStorage.getItem("usersdatatoken");
  return usersDataToken ? `/admin/${usersDataToken}` : "/login";


}


AdminId()




const GoogleId=()=>{
  const usersDataToken = localStorage.getItem("usersdatatoken");
  return usersDataToken ? `/google/${usersDataToken}` : "/login";


}


GoogleId()

  //pass id in Routing In Ract  how to het id fro, url ion react.js

function Lar() {
  return (
    <div>
      
    </div>
  )
}

export { AdminId, ForId, GoogleId, Lar, NavId };







// // nav id start row class line  Important 


// const NavId=()=>{
//   const usersDataToken = localStorage.getItem("usersdatatoken");
//   return usersDataToken ? `/dash/${usersDataToken}` : "/login";


// }


// NavId()


// const ForId=()=>{
//   const usersDataToken = localStorage.getItem("usersdatatoken");
//   return usersDataToken ? `/forget/${usersDataToken}` : "/login";


// }


// ForId()


// const AdminId=()=>{
//   const usersDataToken = localStorage.getItem("usersdatatoken");
//   return usersDataToken ? `/admin/${usersDataToken}` : "/login";


// }


// AdminId()




// const GoogleId=()=>{
//   const usersDataToken = localStorage.getItem("usersdatatoken");
//   return usersDataToken ? `/google/${usersDataToken}` : "/login";


// }


// GoogleId()

//   //pass id in Routing In Ract  how to het id fro, url ion react.js
