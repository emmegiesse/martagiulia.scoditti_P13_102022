// import REACT
import React from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// import REDUX 
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/reducers';
import { selectJWT, selectUserLogin } from '../redux/selectors';

// import API
import APICalls from '../service/APIcall';

// import DATA
import { transactionData } from '../data/transactionData';

// import COMPOSANTS
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

// JSX_______________________
function UserPage() {
    let dispatch = useDispatch()
    let JWT = useSelector(selectJWT)
    console.log("JWT",JWT)
    const connected = useSelector(selectUserLogin)
    console.log("status",connected)

    // set response via APICall
    useEffect(() => {
        async function getUserProfile() {
            const response = await new APICalls().getUserProfileData(JWT)
            dispatch(setUserData(response.data.body))
            console.log("response",response)
            return response
        }
        getUserProfile()
    }, [JWT, dispatch])

    if(
        connected === false || 
        connected === undefined || 
        connected === null
    ) {
        return <Navigate to='/login'/>
    }

    return (
        <div>
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