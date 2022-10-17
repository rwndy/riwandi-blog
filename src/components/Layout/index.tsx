import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
