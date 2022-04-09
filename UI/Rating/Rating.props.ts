import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface IRatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
  setRating?: (rating: number) => void;
  isEditable?: boolean;
}
