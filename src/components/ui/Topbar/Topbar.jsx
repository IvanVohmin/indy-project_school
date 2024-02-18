import React from 'react';
import styles from "./Topbar.module.css"
import { appConfig } from '../../../config/config';
import { UserContext } from '../../../context/UserContext';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
import RightPanel from '../RightPanel/RightPanel';
import Cart from '../Cart/Cart';

const Topbar = () => {

    const bal = 1205;

    const { authUser } = React.useContext(UserContext)

    const [cartOpened, setCartOpened] = React.useState(false)

    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.topbarInner}>
                    <p className={styles.topbarLogo}>
                        {authUser.loaded ?
                            (
                                authUser.isAuth ? "Вохмин Иван" : (
                                    <p>Не авторизаван</p>
                                )
                            ) : (
                                <SkeletonLoader width={150} />
                            )
                        }
                    </p>
                    <div className={styles.topbarContentBox}>
                        <p className={styles.topbarBalance}>
                            {authUser.isAuth ? `${bal.toLocaleString()} руб.` : ""}
                        </p>
                        <div className={styles.topbarCart} onClick={() => setCartOpened(true)}>
                            <i className="fa-light fa-shopping-cart"></i>
                        </div>
                    </div>
                </div>
            </div>
            <RightPanel
                active={cartOpened}
                content={<Cart />}
                mobileTransform={767}
                onClose={() => setCartOpened(false)}
            />
        </>
    );
}

export default Topbar;
