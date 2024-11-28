import { UserRow } from "./UserRow"

export const UsersList = ({ handlerRemoveUser, users = [] }) => {

    

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>edad</th>
                    <th>correo</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({id, username, age, email}) => (
                        <UserRow 
                                    key={id}
                                    id={id}
                                    username={username}
                                    age={age}
                                    email={email}
                        />
                    ))
                }
            </tbody>
        
        </table>
    )

    
}