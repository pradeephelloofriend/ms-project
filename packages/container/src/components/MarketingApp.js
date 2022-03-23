import {mount }from 'marketing/MarketingApp' //comes from marketing projects
import React from 'react'
import { useHistory } from 'react-router-dom';
const MarketingApp = () => {
    const ref=React.useRef(null);
    const history=useHistory();
    React.useEffect(()=>{
        const{ onParentNavigate }= mount(ref.current,{
          initialPath: history.location.pathname,
          onNavigate:({pathname:nextPath})=>{
            const {pathname}=history.location;
            if(pathname!==nextPath){
              history.push(nextPath);
            }
            console.log('navigation markiting= ',nextPath);
            
          }
        });
      history.listen(onParentNavigate)  
    },[]);
  return (
    <div ref={ref} />
  )
}

export default MarketingApp