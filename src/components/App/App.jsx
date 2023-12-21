import {Route, Routes} from 'react-router-dom';

import AccountPage from '../../pages/AccountPage/AccountPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainPage from '../../pages/MainPage/MainPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import RegisterStep1Page from '../../pages/RegisterStep1Page/RegisterStep1Page';
import RegisterStep2Page from '../../pages/RegisterStep2Page/RegisterStep2Page';
import RegisterStep3Page from '../../pages/RegisterStep3Page/RegisterStep3Page';
import AboutProjectPage from '../../pages/AboutProjectPage/AboutProjectPage';
import AboutHelpPage from '../../pages/AboutHelpPage/AboutHelpPage';
import HowItWorksPage from '../../pages/HowItWorksPage/HowItWorksPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Principles from '../Principles/Principles';
import Chats from '../Chats/Chats';
import AccountChatPage from "../../pages/AccountChatPage/AccountChatPage";
import AccountPrinciples from "../../pages/AccountPrinciples/AccountPrinciples";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route element={<MainPage/>} path="/"/>
                <Route element={<AboutProjectPage/>} path="about"/>
                <Route element={<AboutHelpPage/>} path="about-help"/>
                <Route element={<HowItWorksPage/>} path="how-it-works"/>
                <Route element={<AccountPage/>} path="account"/>
                <Route element={<AccountChatPage/>} path="account-chat"/>
                <Route element={<AccountPrinciples/>} path="account-principles"/>
                <Route element={<LoginPage/>} path="signin"/>
                <Route element={<RegisterPage/>} path="signup"/>
                <Route element={<Principles/>} path="principles"/>
                <Route element={<Chats/>} path="chats"/>
                <Route path="signup/">
                    <Route element={<RegisterPage />} index />
                    <Route element={<RegisterStep1Page />} path="step_1" />
                    <Route element={<RegisterStep2Page />} path="step_2" />
                    <Route element={<RegisterStep3Page />} path="step_3" />
                </Route>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;
