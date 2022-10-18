import { useAppContext } from 'context/AppContext';
import { Modals } from 'components';
import Image from 'next/image';

const AboutMobile = () => {
  const { closeModal } = useAppContext();
  return (
    <>
      <Modals id="modal" className="modal" section="div">
        <div className="modal__about__overlay" onClick={closeModal} />
        <div className="modal__about">
          <div className="modal__about__wrapper">
            <div className="modal__about__body">
              <div className="modal__about--avatar">
                <Image
                  src={'/assets/riwandi.jpg'}
                  layout="fill"
                  alt="Picture of the author"
                  className="modal__avatar"
                  objectFit="cover"
                />
              </div>
              <div className="modal__about__proffesion">
                <h3 className="modal__about__name">Riwandi</h3>
                <h4 className="modal__about__job">Software Developer</h4>
              </div>
              <div>
                <div>
                  <h2>About Me</h2>
                </div>
                <article>
                  <p>wkwkwkwkwkkw</p>
                  <p>wkwkwkwkwkkw</p>
                  <p>wkwkwkwkwkkw</p>
                  <p>wkwkwkwkwkkw</p>
                  <p>wkwkwkwkwkkw</p>
                  <p>wkwkwkwkwkkw</p>
                  <p>wkwkwkwkwkkw</p>
                  <p>wkwkwkwkwkkw</p>
                  <p>wkwkwkwkwkkw</p>
                  <p>wkwkwkwkwkkw</p>
                  <p>wkwkwkwkwkkw</p>
                  <p>wkwkwkwkwkkw</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </Modals>
    </>
  );
};

export default AboutMobile;
