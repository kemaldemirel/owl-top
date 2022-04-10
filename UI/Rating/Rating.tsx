import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import Star from './star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({
  rating,
  setRating,
  isEditable = false,
  ...props
}: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const ratingCurrent = ratingArray.map((r, i) => {
      return (
        <span
          className={cn(styles.rating, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          key={i}
          onMouseEnter={() => handleChangeDisplay(i + 1)}
          onMouseLeave={() => handleChangeDisplay(rating)}
          onClick={() => onclickHandler(i + 1)}
        >
          <Star
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(ratingCurrent);
  };

  const handleChangeDisplay = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  const onclickHandler = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== 'Space' || !setRating) return;
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
