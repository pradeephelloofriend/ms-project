import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory,createBrowserHistory} from 'history'
import App from './App';

//mount funtion to start up the app
const mount=(el,{onNavigate,defaultHistory,initialPath})=>{
    const history= defaultHistory|| createMemoryHistory({
        initialEntries: [initialPath],
    });
    if(onNavigate){
        history.listen(onNavigate);
    }
    
    ReactDOM.render(<App history={history} />,el);
    return{
        onParentNavigate({pathname:nextPath}){
         const{pathname}=history.location; 
         if(pathname!==nextPath){
             history.push(nextPath)
             console.log('heloo contaner=',location) 
         }  
           
        }
    }
};

//if we are in development and in issolation,
//call mount immidietly
if(process.env.NODE_ENV==='development'){
    const devRoot=document.querySelector('#_marketing_dev_root');
    if(devRoot){
        mount(devRoot,{defaultHistory:createBrowserHistory()});
    }
}


//we are running through the conatiner
//and we should exports the mount function
export {mount};