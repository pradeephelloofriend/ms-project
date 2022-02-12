import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//mount funtion to start up the app
const mount=(el)=>{
    ReactDOM.render(<App/>,el);
};

//if we are in development and in issolation,
//call mount immidietly
if(process.env.NODE_ENV==='development'){
    const devRoot=document.querySelector('#_marketing_dev_root');
    if(devRoot){
        mount(devRoot);
    }
}


//we are running through the conatiner
//and we should exports the mount function
export {mount};