import { cloneElement, ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface ActiveLinkProps {
  children: ReactElement;
  to: string;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  let isActive = true;

  // If the children is a Link, then it is active
  if (children.type === Link) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  );
}
