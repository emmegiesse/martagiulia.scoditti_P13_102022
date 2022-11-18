//_______________________________________________________
export const selectUserLogin = (state) => 
    state.user.connected
//_______________________________________________________
export const selectJWT = (state) => 
    state.user.JWTtoken
//_______________________________________________________
export const selectUserData = (state) => 
    state.user.userData
//_______________________________________________________
export const selectFirstName = (state) => 
    state.user.userData.firstName
//_______________________________________________________
export const selectLastName = (state) => 
    state.user.userData.lastName
