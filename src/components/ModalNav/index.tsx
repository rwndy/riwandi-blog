/* eslint-disable @next/next/no-img-element */
import { ModalOverlay, Modals } from "@/components";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const ModalNav = () => {

  const { closeModal } = useAppContext()

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
    <>
      <ModalOverlay
        className="modal__overlay"
        onClick={closeModal}
      />
      <Modals id="modal" section="div" className="modal__nav">
        <div className="modal__close" onClick={closeModal}>
          <img src="/assets/icons/icon-close.svg" alt="icon-close"/>
        </div>
        <div className="modal__content">
          <ul className="modal__nav--list">
            {listNavs.map((list) => (
              <li key={list.id} className="modal__nav--item" onClick={() => closeModal()}>
                <Link href={list.route} className="modal__nav--link">
                  {list.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Modals>
    </>
  );
};

export default ModalNav;
