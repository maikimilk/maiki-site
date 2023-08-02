import React from 'react';
import NavigationButton from './NavigationButton';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <NavigationButton />
            {children}
        </div>
    );
};

export default Layout;
