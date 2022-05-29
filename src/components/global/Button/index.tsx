import styles from './button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'icon';
  colorScheme?: 'blue' | 'red';
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
}

function Button({
  variant = 'solid',
  colorScheme = 'blue',
  leftIcon,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${styles['button']} ${rest.className} ${
        styles['button--' + variant]
      } ${styles['button--' + colorScheme]}`}
      {...rest}
    >
      {leftIcon ? (
        <span className={styles['button__left-icon']}>{leftIcon}</span>
      ) : null}

      <>{children}</>
    </button>
  );
}

export default Button;
