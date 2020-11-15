// import RouterModules from "./RouterModules.js"
// export const Router = (route) => {
//   console.log("router", route)
//   let Navigo = require("navigo")
//   let root = null
//   let useHash = false // Defaults to: false
//   let router = new Navigo(root)
//   router
//     .on({
   
//      '/': function () {
//         console.log("root route")
//         RouterModules.modules.About().then((module) => module.About())
//         // router.navigate("/about")
//       },
//     })
//     .resolve()
//   // if (route) {
//   //   console.log(route)
//   //   console.log(route)
//   //   router.navigate(route)
//   // }
//   router
//     .notFound(function () {
//       router.navigate(route)
//       console.log("here not found")
//     })
//     .resolve()
  
//   return router
// }
