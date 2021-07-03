import Navbar from '../compinents/Navbar';

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
