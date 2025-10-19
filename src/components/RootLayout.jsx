import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';


const RootLayout = () => (
    <div className="App">
            <Nav />
            <Outlet />
            <Footer />
    </div>
);
export default RootLayout;