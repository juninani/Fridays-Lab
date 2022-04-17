import React from 'react';
import { Route, Routes } from 'react-router-dom';
import pages from './Pages';
// const lukeSkywalker = "Luke Skywalker";
// const obj = {
//     lukeSkywalker: lukeSkywalker,
//   };

const RoutesWrapper = () => {
    return (
        <Routes>
            {pages.map(item => {
                return <Route path={`${item.path}`} element={<item.element />} />;
            })}
        </Routes>
    );
};

export default RoutesWrapper;
