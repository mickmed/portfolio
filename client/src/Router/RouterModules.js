const _modules = {
     
  About: () => import('../Components/About/About.js'),
  Projects: () => import('../Components/Projects/Projects.js'),
  MakeForm: (params) => import('../Components/Projects/EditProject.js'),
  Contact: ()=>import('../Components/Contact/Contact.js'),

  Resume: () => import('../Components/Resume/Resume.js'),
  Lessons: ()=> import('../Components/Lessons/Lessons.js'),

  Technologies: ()=> import('../Components/Technologies/Technologies.js'),
  Reviews: ()=> import('../Components/Reviews/Reviews.js'),
  Signup:()=>import ('../Components/Login/SignUp.js'),
};
 
export default class Router {
  
  static get modules() {
    return _modules;
  }
}