import axios from 'axios';
import React from 'react';
import AnimateBlock from '../../animations/AnimateBlock';
import { apiRoute } from '../../api/api';
import styles from "./Auth.module.css"
import { users } from '../../fakedata/users';
import { UserContext } from '../../context/UserContext';

const Auth = () => {

    const {login} = React.useContext(UserContext)

    const [phone, setPhone] = React.useState("")
    const [pwd, setPwd] = React.useState("")

    const [errors, setErr] = React.useState("")

    const handleClick = async (e) => {
        e.preventDefault()

        if (phone === "" && pwd === "") {
            return setErr("Заполните поля")
        }

        // const {data} = await axios.post(apiRoute("/users"))

        // if (!data) {
        //     return setErr("Возникли ошибки, попробуйте еще раз")
        // }

        // console.log(data)

        const user = users.find(i => i.phone == phone && i.password == pwd)
        
        if (user) {
            setErr("")
            console.log(user)
            login(user)
            window.location.href = "/"
        } else {
            setErr("Неправильный логин/пароль")
        }
        
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
                                    placeholder='Телефон' 
                                    type="text" 
                                    className="form-control mb-2" 
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
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
