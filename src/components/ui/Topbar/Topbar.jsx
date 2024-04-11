import React from 'react';
import styles from "./Topbar.module.css"
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
import RightPanel from '../RightPanel/RightPanel';
import Cart from '../Cart/Cart';
import {useUser, configureUserName} from '../../../hooks/useUser';

const Topbar = () => {

    const user = useUser()

    const [cartOpened, setCartOpened] = React.useState(false)

    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.topbarInner}>
                    <div className={styles.topbarLogo}>
                        {user.loaded ?
                            (
                                user.isAuth ? configureUserName() : (
                                    <p>Не авторизаван</p>
                                )
                            ) : (
                                <SkeletonLoader width={150} />
                            )
                        }
                    </div>
                    <div className={styles.topbarContentBox}>
                        <p className={styles.topbarBalance}>
                            {user.isAuth ? `${user.user.balance.toLocaleString()} руб.` : ""}
                        </p>
                        {user.isAuth && (<div className={styles.topbarCart} onClick={() => setCartOpened(true)}>
                            <i className="fa-light fa-shopping-cart"></i>
                        </div>)}
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
