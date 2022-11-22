import { useAppContext } from 'context/AppContext';
import { Modals } from 'components';
import Image from 'next/image';
import Link from 'next/link'

type Icons = {
  id: number;
  source_url: string;
  name_icons: string;
};

type Portfolios = {
  id: number;
  source_url_img: string
  name_project: string
  source_url: string
}

const AboutMobile = () => {
  const { closeModal, isModalMobileOpen } = useAppContext();

  const icons: Icons[] = [
    {
      id: 1,
      source_url:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg',
      name_icons: 'graphql',
    },
    {
      id: 2,
      source_url:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      name_icons: 'HTML5',
    },
    {
      id: 3,
      source_url:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      name_icons: 'javaScript',
    },
    {
      id: 4,
      source_url:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      name_icons: 'nextjs',
    },
    {
      id: 5,
      source_url:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      name_icons: 'react',
    },
    {
      id: 6,
      source_url:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      name_icons: 'redux',
    },
    {
      id: 7,
      source_url:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      name_icons: 'css',
    },
    {
      id: 8,
      source_url:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      name_icons: 'ionic',
    },
    {
      id: 9,
      source_url:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      name_icons: 'sass',
    },
    {
      id: 10,
      source_url:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      name_icons: 'tailwind',
    },
    {
      id: 11,
      source_url:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      name_icons: 'typescript',
    },
  ];


  const myPortfolios: Portfolios[] = [
    {
      id: 1,
      source_url_img: '/assets/aroma-medan.png',
      name_project: 'Aromamedan',
      source_url: 'https://aromamedan.com'
    },
    {
      id: 2,
      source_url_img: '/assets/coco-story.png',
      name_project: 'Coco Story',
      source_url: 'https://cocostory.co.id/'
    },
    {
      id: 3,
      source_url_img: '/assets/pondok-selera.png',
      name_project: 'Pondok Selera Sunda',
      source_url: 'https://pondokselerasunda.com/'
    },
    {
      id: 4,
      source_url_img: '/assets/deliveries.png',
      name_project: 'Deliveries',
      source_url: 'https://deliveries-app.scapespec.co.nz'
    },
    {
      id: 5,
      source_url_img: '/assets/m-page.png',
      name_project: 'Mypage',
      source_url: 'https://app.getmypage.com/riwandi'
    },
  ]
  return (
    <>
      <Modals id="modal" className="modal" section="div">
        <div className="modal__about__overlay" onClick={closeModal} />
        <div
          className="modal__about"
          style={
            !isModalMobileOpen ? { animation: 'moveFromBottom 2s ease 0s' } : {}
          }
        >
          <div className="modal__about__wrapper">
            <div className="modal__about__body">
              <div className="modal__about--avatar">
                <Image
                  src={'/assets/riwandi.jpg'}
                  layout="fill"
                  alt="Picture of the author"
                  className="modal__avatar"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="modal__about__proffesion">
                <h3 className="modal__about__name">Riwandi</h3>
                <h4 className="modal__about__job">Software Engineer</h4>
              </div>
              <div className="modal__about__profile">
                <div className="modal__about__profile--wrapper">
                  <h2 className="modal__about__title">About Me</h2>
                </div>
                <section className="modal__about--section">
                  <p>{`Hello, my name is Riwandi. but, you can call me wandi. i'm a software Engineer focuses on frontend with Next JS and React Native. i've been worked a lot projects, like e-commerce web, landing page, and mobile apps. and also have experienced more than 1 years`}</p>
                </section>

                <section className="modal__about__tech">
                  <h2 className="modal__about__title">Specialties</h2>
                  <div className="modal__about__tech--wrapper">
                    {icons.map(icon => (
                      <div className="modal__about--icons" key={icon.id}>
                        <Image
                          src={icon.source_url}
                          alt={icon.name_icons}
                          width={40}
                          height={40}
                          priority
                        />
                        <p>{icon.name_icons}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="modal__about__lang">
                  <h2 className="modal__about__title">Language</h2>

                  <ul className="modal__about__lang--list">
                    <li>Indonesian</li>
                    <li>English</li>
                  </ul>
                </section>

                
              <section className='modal__about__portfolios'>
                  <h2 className="modal__about__title">Portfolios</h2>
                  <ul className='modal__about--porto-list' >
                {
                  myPortfolios.map( portfolio => (                  
                  
                    <li key={portfolio.id}>
                      <Link href={portfolio.source_url} >
                          <a target={'_blank'}>{portfolio.name_project}</a>
                      </Link>
                    </li>
               
                
                  ))
                }
                   </ul>
                
              </section>
              </div>

            </div>
          </div>
        </div>
      </Modals>
    </>
  );
};

export default AboutMobile;
