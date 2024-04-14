import React, { ReactNode } from 'react';
import NavigationButton from './NavigationButton';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <NavigationButton />
            {children}
        </div>
    );
};

export default Layout;
