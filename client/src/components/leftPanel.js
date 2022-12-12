import React from "react";
import styles from '../assets/css/style.css'

const LeftPanel = () =>{
    //console.log(styles)
    return(
        <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="index.html"><i className="menu-icon fa fa-laptop"></i>На главную </a>
                    </li>
                    <li className="menu-title">Разделы:</li>
                    <li >
                        <a href="ui-buttons.html"> <i className="menu-icon fa fa-puzzle-piece"></i>Buttons</a>
                    </li>
                    <li >
                        <a href="index.html"><i className="menu-icon fa fa-cogs"></i>Components </a>
                    </li>
                    <li >
                        <a href="index.html"><i className="menu-icon fa fa-table"></i>Basic Table</a>
                    </li>
                    <li >
                        <a href="index.html"><i className="menu-icon fa fa-th"></i>Basic Form</a>
                    </li>
            
                    <li className="menu-title">Операции:</li>
                    <li >
                        <a href="index.html"><i className="menu-icon fa  fa-fort-awesome"></i>Font Awesome</a>
                    </li>
                    <li >
                        <a href="index.html"><i className="menu-icon fa fa-th"></i>Basic Form</a>
                    </li>
                    <li>
                        <a href="widgets.html"> <i className="menu-icon ti-email"></i>Widgets </a>
                    </li>
                    <li>
                        <a href="widgets.html"> <i className="menu-icon fa fa-line-chart"></i>Chart JS</a>
                    </li>
                    <li>
                        <a href="widgets.html"> <i className="menu-icon fa fa-map-o"></i>Maps</a>
                    </li>
                    <li>
                        <a href="widgets.html"> <i className="menu-icon fa fa-area-chart"></i>Icons</a>
                    </li>
                    <li className="menu-title">Авторизация:</li>
                    <li>
                        <a href="widgets.html"> <i className="menu-icon fa fa-sign-in"></i>Вход</a>
                    </li>
                  
                </ul>
            </div>
        </nav>
    </aside>

    )
}

export default LeftPanel;