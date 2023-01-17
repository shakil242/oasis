import CashBack from './CashBack/CashBack';
import Header from './components/Header';
import SideBar from './components/SideBar';

export default function Dashboard(props) {
    const userInfo = props.auth.user
    return (
        <>
            <Header 
                userInfo={userInfo}
            />

            <SideBar />

            {
                props.component === 'CashBack' ? <CashBack /> : null
            }

            
        </>
    );
}
