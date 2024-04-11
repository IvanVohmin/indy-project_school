import React from 'react';
import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import {Link} from 'react-router-dom'
import Categories from './components/ui/Categories/Categories';
import CategoriesRender from './components/ui/CategoriesRender/CategoriesRender';
import useAuth from './hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const App = () => {

    const auth = useAuth()

    const [currentCategory, setCurrentCategory] = React.useState("Напитки")

    return (
        <>
            <Loader>
                <div className="app">
                    <div className="app-wrapper">
                        <Layout>
                            {auth ? (
                                <>
                                    {/* auth app */}
                                    <Categories changeCategory={(arg) => setCurrentCategory(arg)} />
                                    <CategoriesRender current={currentCategory} />
                                </>
                            ) : (
                                <>
                                    <div className="text-center">
                                        <i className="fa-light fa-user mb-3" style={{ fontSize: "36px" }}></i>
                                        <p>Войдите в аккаунт, чтобы пользоваться приложением.</p>
                                    </div>
                                </>
                            )}
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </Layout>
                    </div>
                </div>
            </Loader>
        </>
    );
}

export default App;
