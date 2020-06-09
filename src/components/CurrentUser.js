import React, {useCallback} from 'react';
import { useUser } from '../entities';

export default  function CurrentUser() {
const [user, {setUserLogin}] = useUser();

const setPassword = useCallback(
  (password) => {
    setUserLogin(user.userName,password)
  },
  [setUserLogin],
);
  return (
    <>
      <div className="counter">
        {user.userName}
      </div>
      <input value = {user.password} onChange={(e) => setPassword(e.target.value)} />
    </>
  );
}
