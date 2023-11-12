import Link from "next/link"

const Navigation = () => {
  const listNavs = [
    {
      id: 1,
      route: '/',
      title: 'Home'
    },
    {
      id: 2,
      route: '/about',
      title: 'About'
    },
    {
      id: 3,
      route: '/portfolio',
      title: 'Portfolio'
    },
    {
      id: 4,
      route: '/contact',
      title: 'Contact'
    }
  ]
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {
          listNavs.map((list) => (
            <li key={list.id} className="navigation__item">
              <Link href={list.route} className="navigation__link">
                { list.title }
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navigation