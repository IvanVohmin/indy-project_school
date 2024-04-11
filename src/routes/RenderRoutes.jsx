import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appRoutes } from './appRoutes';
import { ProtectedRoute } from './ProtectedRoute';

const RenderRoutes = ({children}) => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {appRoutes.map(i => (
                        (i.isPrivate ? 
                            <Route path={i.path} element={
                                <ProtectedRoute>
                                    {i.el}
                                </ProtectedRoute>
                            } key={i.name} />
                        :
                            <Route path={i.path} element={i.el} key={i.name} />
                        )
                    ))}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RenderRoutes;
