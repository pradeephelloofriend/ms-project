import React,{lazy,Suspense} from 'react'
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
//import MarketingApp from './components/MarketingApp' 
//import AuthApp from './components/AuthApp'
import Header from './components/Header'
import Progress from './components/Progress';
const MarketingLazy=lazy(()=>import('./components/MarketingApp'));
const AuthLazy=lazy(()=>import('./components/AuthApp'));
const generateClassName=createGenerateClassName({
    productionPrefix:'co'
});
export default()=>{
    const[isSignedIn,setIsSignedIn]=React.useState(false)
    return(
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
            <div>

                <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/>
                <Suspense fallback={<Progress/>}>
                    <Switch>
                        <Route path="/auth" component={AuthLazy}>
                            <AuthLazy onSignIn={()=>setIsSignedIn(true)}/>
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
                
                {/*<MarketingApp/>*/}
            </div>
            </StylesProvider>
        </BrowserRouter>
    )
}