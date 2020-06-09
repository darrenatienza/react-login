export const initialState = {
    userName: '',
    password: '',
    isRemember: false
};
export const setUserLogin = user => (userName,password)  => {
    user.setState({
        userName: userName,
        password: password

    });
};
export const _setUserName = user => value  => {
    user.setState({
        userName: value
    });
};
export const setPassword = user => value  => {
    user.setState({
        password: value
    });
};
export const _setRemember = user => value  => {
    if(value){
       value = false; 
    }else{
        value = true;
    }
    user.setState({
        isRemember: value
    });
};
export const _setRemember1 = user => value  => {
    
    user.setState({
        isRemember: false
    });
    user.setState({
        isRemember: false
    });
};