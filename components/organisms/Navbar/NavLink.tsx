// Core nextjs modules
import Link from 'next/link';

// Third party modules
import cx from 'classnames';

interface NavLinkProps {
  title: string;
  href: string;
  isActive?: boolean;
}

export default function NavLink(props: NavLinkProps) {
  const { title, isActive, href = '/' } = props;

  // State is sctive
  const classLink = cx({
    'nav-link': true,
    active: isActive,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classLink} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
