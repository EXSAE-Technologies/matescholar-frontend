import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="navbar bg-primary">
                <nav className="navbar-nav">
                    <ul className="nav">
                        <li className="nav-item">Home</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;