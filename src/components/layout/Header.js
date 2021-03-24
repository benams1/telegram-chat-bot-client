import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Chat Monitor</h1>
        </header>
    );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
};
const linkStyle = {
    color: '#fff',
    textDecoration:'none',
    margin: '0 10px'
}

export default Header;