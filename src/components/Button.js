import styles from "./Button.module.scss"

export default function Button(props) {
  const { type, children, disabled = false } = props
  return (
    <button
      {...props}
      className={styles.formButton}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
