
import useUserStore from '../store/useUserStore'

const ProfilePage = () => {
    const currentUser = useUserStore((state) => (state.user));
    console.log("pp",currentUser);
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Username: {currentUser}</p>
        </div>
    )
}

export default ProfilePage;