import React from 'react';
import { Route } from 'react-router';
import { RoutesString } from 'Components/Modules/RoutesString';
import pages from './Pages';
const Routes = () => {
    return (
        <>
            <Route path="/"/>
            {pages.map((item) =>{
                return <Route path={`${item.path}/*`} element={item.element}/>
            })}
        </>
    );
};

export default Routes;