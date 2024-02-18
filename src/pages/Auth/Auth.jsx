import axios from 'axios';
import React from 'react';
import AnimateBlock from '../../animations/AnimateBlock';
import { apiRoute } from '../../api/api';
import styles from "./Auth.module.css"

const Auth = () => {

    const [login, setLogin] = React.useState("")
    const [pwd, setPwd] = React.useState("")

    const [errors, setErr] = React.useState("")

    const handleClick = async (e) => {
        e.preventDefault()

        if (login === "" && pwd === "") {
            return setErr("Заполните поля")
        }

        const {data} = await axios.post(apiRoute("/users"))

        if (!data) {
            return setErr("Возникли ошибки, попробуйте еще раз")
        }

        console.log(data)
        
    }

    return (
        <>
            <div className={styles.authPage}>
                <div className={styles.authWrapper}>
                    <AnimateBlock>
                        <form className={styles.authForm}>
                            <h4>Авторизация</h4>
                            <div className={styles.authFormInner}>
                                <input 
                                    placeholder='Логин' 
                                    type="text" 
                                    className="form-control mb-2" 
                                    value={login}
                                    onChange={e => setLogin(e.target.value)}
                                />
                                <input 
                                    placeholder='Пароль' 
                                    type="password" 
                                    className="form-control mb-2" 
                                    value={pwd}
                                    onChange={e => setPwd(e.target.value)}
                                />
                                <div className="errors mb-3 mt-3 text-danger text-center">
                                    {errors}
                                </div>
                                <button onClick={e => handleClick(e)} className="btn btn-block btn-primary">Продолжить</button>
                            </div>
                        </form>
                    </AnimateBlock>
                </div>
            </div>
        </>
    );
}

export default Auth;
