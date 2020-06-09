import React, {useEffect, useCallback,} from 'react';
import { useUser,useList } from '../entities';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Login.css';
import axios from 'axios';
import {PasswordInput} from './inputs/PasswordInput'
import { CheckBoxInput } from './inputs/CheckBoxInput';
import { UserNameInput } from './inputs/UserNameInput';

export  const Login = () => {
    const [user, {_setUserName,setPassword,_setRemember}] = useUser();
    const [list, {_setUsers}] = useList();
   
    useEffect(() => {
        _setUsers();
       
    }, [_setUsers,list.users.length]);

      const toggleChange = () =>{
        _setRemember(user.isRemember);
      }
      const handleUserNameChange =(val) => {
          _setUserName(val);
      }
      const handlePasswordChange = (val) => {
          setPassword(val);
      }
      const handleSubmit = ()=>{
          console.log('submitted');
      }
    return (

        <div className="bg">

            <div className="d-flex flex-row justify-content-center align-items-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><FontAwesomeIcon icon={['fab','google-plus-square']} /></span>
                            <span><FontAwesomeIcon icon={['fab','facebook-square']} /></span>
                            <span><FontAwesomeIcon icon={['fab','twitter-square']} /></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <UserNameInput text = {user.userName} action = {handleUserNameChange}/>
                            <PasswordInput text = {user.password} action = {handlePasswordChange} />
                            <CheckBoxInput checked = {user.isRemember} action = {toggleChange}/>

                             {/* Submit*/}
                            <div className="form-group">
                                <button type="submit" className="btn float-right login_btn">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account?<a href="#">Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    )
}
