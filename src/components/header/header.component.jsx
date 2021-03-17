import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/081 crown.svg';
import {auth} from '../../firebase/firebase.utils';
import { connect} from 'react-redux'


var Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link to='shop' className='option'>
                SHOP
            </Link>

            <Link to='contact' className='option'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to='signin' className='option'>
                        SIGN IN
                    </Link>
            }

        </div>
    </div>
);
const mapStateToProps = (state) =>({
    currentUser: state.user.currentUser
})

Header = connect(mapStateToProps)(Header)
export { Header };