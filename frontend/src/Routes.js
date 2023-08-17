import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './core/Home'
import Search from './core/Search'
import Signup from './core/Signup'
import Signin from './core/Signin'
import AddVideogame from './core/AddVideogame'
import AddCategory from './core/AddCategory'



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}></Route>
                <Route path="/videogameById" component={Search}></Route>
                <Route path="/signin" component={Signin}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/addcategory" exact component={AddCategory}></Route>
                <Route path="/addvideogame" exact component={AddVideogame}></Route>
            </Switch>
        </BrowserRouter>
    )
}



export default Routes