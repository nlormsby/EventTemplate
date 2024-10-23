import { About } from "../components/about";
import { Sponser } from "../components/sponsers";
import { FAQ } from "../components/faq";
import { Contact } from "../components/contact";
import { NavBar } from "../components/navBar";
import { Home } from "../components/home";

export const MainPage = () => {
    return (
        <div className="container">
            <NavBar />
            <Home />
            <About />
            <Sponser />
            <FAQ />
            <Contact />
        </div>
    );
};