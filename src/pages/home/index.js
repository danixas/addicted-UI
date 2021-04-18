import { React } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Banner from "./components/banner";
import BetsTable from "./components/betsTable";
import FuturedBet from "./components/futuredBet";
import "./styles.scss";

const Home = () => {
    return (
        <>
            <Container>
                <Navbar />
                <div className="home__page">
                    <FuturedBet title="Vacius neateis į paskaitą" />
                    <Banner
                        title="Win over 1000 Makackas coin by betting today!"
                        description="Predict the future! Bet starting today and become rich by winning both Makackas and Vacius coins."
                        className="banner"
                    />
                    <h1>aasd</h1>
                    <BetsTable />
                </div>
                <h1>HOME PAGE</h1>
            </Container>
        </>
    );
};

export default Home;