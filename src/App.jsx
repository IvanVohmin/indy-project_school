import React from 'react';
import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import Categories from './components/ui/Categories/Categories';
import CategoriesRender from './components/ui/CategoriesRender/CategoriesRender';
import SkeletonLoader from './components/ui/SkeletonLoader/SkeletonLoader';
import RenderContexts from './context/RenderContexts';
import useAuth from './hooks/useAuth';


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
                                        <i className="fa-light fa-user mb-3" style={{fontSize: "36px"}}></i>
                                        <p>Войдите в аккаунт, чтобы пользоваться приложением.</p>
                                    </div>
                                </>
                            )}
                        </Layout>
                    </div>
                </div>
            </Loader>
        </>
    );
}

export default App;
