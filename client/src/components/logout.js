// import { GoogleLogout } from 'react-google-login';
const clientId = "782310377329-ugn3ktt22vo08rd1jtpn60v5q6rdd927.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        console.log("Logout successful"); 
    };

    return(
        <div id = "signOutButton">
            {/* <GoogleLogout
              clientId = {clientId}
              buttonText ="Logout"
              onLogoutSuccess={onSuccess}
              /> */}
        </div>
    )
}
export default Logout;
