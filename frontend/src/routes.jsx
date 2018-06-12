import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import Todo from './todo/todo'
import About from './about/about'

//import Menu from './template/menu'


export default props=>(
    <Router>
        <div>
        <nav className='navbar navbar-inverse bg-inverse'>
            <div className="container">
                <div className="brand">
                    <Link to="/todos" className="navbar-brand" >  <span className="glyphicon glyphicon-calendar"></span> Todo App</Link>
                </div> 

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li> <Link to="/todos">Tarefas</Link></li>
                        <li> <Link to="/about">Sobre</Link> </li>
                    </ul>
                </div>
            </div>
         
        </nav>

           <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Route exact path="/" component={Todo}/>
        </div>
    </Router>
)