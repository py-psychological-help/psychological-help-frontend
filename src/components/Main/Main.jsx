import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Main.module.scss';
import Button from '../buttonHeader/Button';

function Main() {
    return (
        <section className={styles.main}>
            <div className={styles.infoBlock}>
                <h1 className={styles.mainHeader}>Project title</h1>
                <p className={styles.mainText}>
                    Project info
                </p>
                <NavLink to="/profile">
                    <Button
                        additionalStyles={styles.mainBtn}
                        buttonText="Help me!"/>
                </NavLink>
            </div>
        </section>
    );
}

export default Main;
