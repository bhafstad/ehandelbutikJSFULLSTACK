import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css' 
import { ProfileDropdown } from './profiledropdown/ProfileDropdown'

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return (
        <div className='profileWrapper'>
            <img className='profileImg' src={'https://thispersondoesnotexist.com/image'} alt={'error..'} />
            <span>{authenticatedUser}</span>   
            <ProfileDropdown /> 
        </div>
    )
}
