import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export interface Itag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 's' | 'l';
  color?: 'ghost' | 'grey' | 'green' | 'red';
  href?: string;
}
