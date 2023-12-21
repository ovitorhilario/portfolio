import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {

	return (
    <div className='px-5 pb-10 lg:max-w-6xl mx-auto flex flex-col gap-10 bg-[#292831]'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

export default Root;