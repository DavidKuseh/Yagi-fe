import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getUserProfile } from "../redux-store/actions/profile";

const ShowProfile = (props) => {
    const { getUserProfile, profileInfo } = props;

    useEffect(() => {
        getUserProfile()
    }, [getUserProfile])

    return (
        <div>
            <h2>My Profile</h2>
            <p>first name here: {profileInfo.firstName}</p>
            <p>email here: {profileInfo.email}</p>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return { ...state.profile}
}


export default connect(mapStateToProps, { getUserProfile })(ShowProfile);