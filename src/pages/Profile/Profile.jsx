import React from 'react';
import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/ui/Navbar/Navbar';
import Topbar from '../../components/ui/Topbar/Topbar';
import { UserContext } from '../../context/UserContext';
import { configureUserName, useUser } from '../../hooks/useUser';
import styles from "./Profile.module.css"

const Profile = () => {

    const [show, setShow] = React.useState(false)
    const {logout} = React.useContext(UserContext)
    const user = useUser()

    return (
        <Loader>
            <div className={styles.page}>
                <div className={styles.pageInner}>
                    <Topbar />
                    <div className="app-layout">
                        <h1 className={styles.title}>Профиль</h1>
                        <div className={styles.inner}>
                            <div className={styles.info}>
                                <div className={styles.box}>
                                    <div className={styles.boxInner}>
                                        <p className={styles.value}>Имя:</p>
                                        <p className={styles.key}>{configureUserName()}</p>
                                    </div>
                                </div>
                                
                                <div className={styles.box}>
                                    <div className={styles.boxInner}>
                                        <p className={styles.value}>Телефон:</p>
                                        <p className={styles.key}>{user.user.phone}</p>
                                    </div>
                                </div>
                                <div className={styles.box}>
                                    <div className={styles.boxInner}>
                                        <p className={styles.value}>Пароль:</p>
                                        <p className={styles.key}>
                                            {show ? (
                                                <>
                                                    <span>{user.user.password}</span>
                                                    <i
                                                        className="fa-light fa-eye-slash text-primary"
                                                        id={styles.show}
                                                        onClick={() => setShow(false)}
                                                    ></i>
                                                </>
                                            ) : (
                                                <>
                                                    <span className={styles.passwordHide}>*******</span>
                                                    <i
                                                        className="fa-light fa-eye text-primary"
                                                        id={styles.show}
                                                        onClick={() => setShow(true)}
                                                    ></i>
                                                </>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.actions}>
                                    <div className={styles.actionsInner}>
                                        {/* <button className="btn btn-warning btn-sm">Сменить пароль</button> */}
                                        <button className="btn btn-danger btn-sm" onClick={() => logout()}>Выйти из аккаунта</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Navbar />
                </div>
            </div>
        </Loader>
    );
}

export default Profile;
