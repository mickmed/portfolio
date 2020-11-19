const _modules = {
     
  About: () => import('../Components/About/About.js'),
  Projects: () => import('../Components/Projects/Projects.js'),
  MakeForm: (params) => import('../Components/Projects/EditProject.js'),
  Contact: ()=>import('../Components/Resume/Resume.js'),

  Resume: () => import('../Components/Resume/ResumePdf.js'),
  Signup:()=>import ('../Components/Login/SignUp.js'),
};
 
export default class Router {
  
  static get modules() {
    return _modules;
  }
}