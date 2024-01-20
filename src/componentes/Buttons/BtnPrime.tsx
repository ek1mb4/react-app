import styles from "./BtnPrime.module.css";
export function BtnPrime({children}) {
    return (
        <>
        <button className={styles.btnPrime}>
            {children}
        </button></>
    );
}
