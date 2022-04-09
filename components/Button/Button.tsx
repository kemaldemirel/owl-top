import { IButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import Arrow from './arrow.svg';

export const Button = ({
  children,
  arrow = 'none',
  variant,
  className,
  ...props
}: IButtonProps) => {
  const variantBtn = cn({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.ghost]: variant === 'ghost',
  });

  return (
    <button className={`${variantBtn} ${className}`} {...props}>
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}>
          <Arrow />
        </span>
      )}
    </button>
  );
};
