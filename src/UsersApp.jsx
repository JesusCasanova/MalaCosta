import { useReducer } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
//import { usersReducer } from "./reducers/usersReducers";

const initialUsers = [
    {
        id: 1,
        username: '',
        password: '',
        email: ''
    },
];
export const UsersApp = () => {
    
    const handlerAddUser = (user) => {
    //console.log(user);
    }
    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm 
                    handlerAddUser={handlerAddUser}/>
                </div>
                <div className="col">
                    <UsersList 
                    //users={users}
                    />
                </div> 
            </div>
        </div>
        
    );
}