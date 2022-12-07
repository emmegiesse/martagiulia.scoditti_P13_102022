// import REACT
import React from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// import REDUX 
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/reducers';
import { selectJWT, selectUserLogin } from '../redux/selectors';

// import API
import ApiCalls from '../service/APIcall';

// import DATA
import { transactionData } from '../data/transactionData';

// import COMPOSANTS
import UserpageNav from '../components/userpage/UserpageNav';
import TransactionCard from '../components/userpage/TransactionCard';
import UserProfile from '../components/userpage/UserProfile';

// import STYLE 
import '../style/userpageStyle.css'

/**
 * User page
 * @name UserPage
 * @returns {JSX} 
 * @component
*/

// JSX__________________

function UserPage() {
    let dispatch = useDispatch()
    let JWT = useSelector(selectJWT)
    //console.log("JWT",JWT)
    const connected = useSelector(selectUserLogin)
    //console.log("status",connected)

    useEffect(() => {
        async function getUserProfile() {
            const response = await new ApiCalls().getUserProfileData(JWT)
            dispatch(setUserData(response.data.body))
            //console.log("response",response)
            return response
        }
        getUserProfile()
    }, [JWT, dispatch])

    if(connected === false || connected === undefined || connected === null) {
        return <Navigate to='/sign-in'/>
    }

    return (
        <div>
            <UserpageNav />
            <div className="bg"></div>
            <main className="account-main">
                <UserProfile />
                <h2 className="sr-only">Accounts</h2>
                {transactionData.map(({ id, title, amount, description }) => {
                    return (
                        <TransactionCard 
                            key={id} 
                            title={title} 
                            amount={amount} 
                            description={description}
                        />
                    );
                })}
            </main>
        </div>
    )
}
export default UserPage
