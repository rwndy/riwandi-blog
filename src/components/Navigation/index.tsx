/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const Navigation = () => {

  const { openModal } = useAppContext()

  const listNavs = [
    {
      id: 1,
      route: "/",
      title: "Home",
    },
    {
      id: 2,
      route: "/about",
      title: "About",
    },
    {
      id: 3,
      route: "/portfolio",
      title: "Portfolio",
    },
    {
      id: 4,
      route: "/contact",
      title: "Contact",
    },
  ];
  return (
    <nav className="navigation">
      <span className="navigation__button" onClick={openModal}>
        <img src="/assets/icons/menu-burger.svg" alt="icon-burger" />
      </span>

      <ul className="navigation__list">
        {listNavs.map((list) => (
          <li key={list.id} className="navigation__item">
            <Link href={list.route} className="navigation__link">
              {list.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
