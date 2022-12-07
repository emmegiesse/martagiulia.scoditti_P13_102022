// import REACT
import { useState } from 'react';

// import REDUX
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../redux/reducers';
import { selectFirstName, selectLastName, selectJWT } from '../../redux/selectors';

// import API
import APICalls from '../../service/APIcall';

// import ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// JSX___________________________________________
const UserProfile = () => {
    let dispatch = useDispatch()
    let [editInfo, setEditInfo] = useState(false)
    let [editedFirstName, setEditedFirstName] = useState('')
    let [editedLastName, setEditedLastName] = useState('')

    let firstName = useSelector(selectFirstName)
    let lastName= useSelector(selectLastName)
    let JWTtoken = useSelector(selectJWT)
    console.log("firstname",firstName)
    console.log("lastname",lastName)
    console.log("token",JWTtoken)

    async function handleChangeUserInfo(editedFirstName, editedLastName, JWTtoken) {
        // set response via APICall
        const response = await new APICalls().updateUserProfileData(editedFirstName, editedLastName, JWTtoken)
        console.log("firstname",editedFirstName)
        console.log("lastname",editedLastName)
        console.log("token",JWTtoken)
        dispatch(updateUserData(response.data.body))
        setEditInfo(false) 
    }

    return (
        <div className="header">
        {!editInfo ? (
            <div className="header-user">
                <h1>Welcome back<br/>{firstName} {lastName} !</h1>
            </div>) : (
            <div className="header-user">
                <h1>Welcome back</h1>

                <div className="edit-container">
                    <input 
                        className="change-zone" 
                        type="text" placeholder={firstName} 
                        onChange={(e) => setEditedFirstName(e.target.value)}
                    />
                    <input 
                        className="change-zone change-lastname" 
                        type="text" placeholder={lastName} 
                        onChange={(e) => setEditedLastName(e.target.value)}
                    />
                    <button 
                        className="edit-button" 
                        onClick={() => handleChangeUserInfo(editedFirstName, editedLastName, JWTtoken)}>Validate
                    </button>
                </div>

            </div>
        )}
            
        {editInfo? (
            <button className="edit-button" onClick={() => setEditInfo(!editInfo)}>
                Close edit
                <FontAwesomeIcon icon={ faXmark } className="close"/>
            </button>) : (
            <button className="edit-button" onClick={() => setEditInfo(!editInfo)}>
                Edit name
            </button>)
        } 
    </div>
)
}
export default UserProfile