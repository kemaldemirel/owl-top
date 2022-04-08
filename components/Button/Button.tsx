import { IButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ children, variant, className, ...props }: IButtonProps) => {
  const variantBtn = cn({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.ghost]: variant === 'ghost',
  });

  return (
    <button className={`${variantBtn} ${className}`} {...props}>
      {children}
    </button>
  );
};
