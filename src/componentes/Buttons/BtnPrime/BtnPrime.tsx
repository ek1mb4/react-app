import styles from "./BtnPrime.module.css";
export function BtnPrime({children, disabled}) {
    return (
        <>
        <button disabled={disabled} className={styles.btnPrime}>
            {children}
        </button></>
    );
}
