import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import Star from './star.svg';
import { useEffect, useState } from 'react';

export const Rating = ({
  rating,
  setRating,
  isEditable = false,
  ...props
}: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const ratingCurrent = ratingArray.map((r, i) => {
      return (
        <span key={i} onMouseEnter={() => handleHover(i + 1)} onMouseLeave={handleLive}>
          <Star
            className={cn(styles.rating, {
              [styles.filled]: i < currentRating,
            })}
          />
        </span>
      );
    });
    setRatingArray(ratingCurrent);
  };

  const handleHover = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const handleLive = () => {
    constructRating(rating);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
