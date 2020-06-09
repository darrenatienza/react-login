import axios from 'axios'
export const initialState = {
    users: [],
    length: 0
}

export const _setUsers = list =>  () => {

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            list.setState({
                users: res.data
            });
        }
        );
   

}