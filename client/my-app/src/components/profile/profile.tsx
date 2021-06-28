import React from 'react';
import {useDispatch} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../services/user";

const Profile = () => {

    const dispatch = useDispatch()

    function changeHandler(e: any) {
       const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }

    return (
        <div>
            <button
            onClick={() => dispatch(deleteAvatar())}
                type="button" className="btn btn-dark" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" >Delete
            </button>
            <input accept="image/*" type="file" placeholder="Loading Avatar" onChange={(e) => changeHandler(e)}/>
            
        </div>
    );
};

export default Profile;
