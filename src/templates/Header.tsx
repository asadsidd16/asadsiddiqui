import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLink = ({ title }: any) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 hover:text-p1 max-lg:h5 cursor-pointer uppercase transition-colors duration-500 max-lg:my-4"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        'fixed left-0 top-0 z-50 w-full py-6 transition-all duration-500 max-lg:py-4',
        hasScrolled && 'bg-gray-200 py-2 backdrop-blur-[8px]',
      )}
    >
      <div className="flex h-12 w-full items-center justify-between px-5">
        {/* Logo always on the left */}
        <a className="z-20 cursor-pointer">
          <Image
            src="/lion.webp"
            alt="logo"
            width={75}
            height={75}
            sizes="75px"
          />
        </a>

        {/* Desktop Nav (right aligned) */}
        <nav className="text-p4 hidden gap-8 font-semibold uppercase lg:flex">
          <NavLink title="services" />
          <NavLink title="about" />
          <NavLink title="works" />
        </nav>

        {/* Mobile menu toggle (on right) */}
        <button
          className="z-20 flex size-10 items-center justify-center rounded-full lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <img
            src={`/${isOpen ? 'close' : 'magic'}.svg`}
            alt="menu"
            className="size-1/2 object-contain"
          />
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={clsx(
          'bg-s2 fixed left-0 top-0 w-full bg-white transition-opacity duration-300 lg:hidden',
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <div className="relative flex min-h-screen flex-col p-6">
          <nav className="my-auto">
            <ul className="space-y-6 text-center">
              <li>
                <NavLink title="services" />
              </li>
              <li>
                <NavLink title="about" />
              </li>
              <li>
                <NavLink title="works" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Header };
