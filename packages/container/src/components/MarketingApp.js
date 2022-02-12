import {mount }from 'marketing/MarketingApp' //comes from marketing projects
import React from 'react'

const MarketingApp = () => {
    const ref=React.useRef(null);
    React.useEffect(()=>{
        mount(ref.current);
    });
  return (
    <div ref={ref} />
  )
}

export default MarketingApp