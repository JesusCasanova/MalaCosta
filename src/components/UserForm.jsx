//import { useState } from "react";

// const initialUserForm = {
// username:'',
// password:'',
//  email:'',
// }
// export const UserForm = ({handlerAddUser}) => {

//     const [userForm, setUserForm] = useState(initialUserForm);
//     const {username, password, email} = UserForm;
//     const onInputChange = ({target}) => {
//         //console.log(target.value);
//         const {name, value} = target;
//         setUserForm ({
//             ...userForm,
//             [name]: value,
//         })
//     }
    
//     const onSubmit = (event) => {
//     event.preventDefault();
//     if(!username || !password  || !email) {
//         console.log('eoeooo');
//         alert('debes rellenar todos los campos del formulario');
        
//     }
//         alert('por aqui no pasa');
//         // console.log(userForm);
//         handlerAddUser(userForm);
//         setUserForm(initialUserForm);
// }
    
//     return (
//         <form onSubmit={onSubmit}>
//             <input 
//                 type="text"
//                 className="form-control my-3 w-75"
//                 placeholder="UserName"
//                 name="username"
//                 value={username}
//                 onChange={onInputChange} />
//             <input 
//                 type="password"
//                 className="form-control my-3 w-75"
//                 placeholder="Password"
//                 name="password"
//                 value={password}
//                 onChange={onInputChange} />
//             <input 
//                 type="text"
//                 className="form-control my-3 w-75"
//                 placeholder="email"
//                 name="email"
//                 value={email}
//                 onChange={onInputChange} />
//             <button
//                 className="btn btn-primary"
//                 type="submit">
//                     CREAR
//             </button>
//         </form>
//     )

    
// }

import { useState } from "react"

//definir valores iniciales//
const initialUserForm = {
    username: '',
    password: '',
    email: '',
}
export const UserForm = () => {
    const [userForm, setUserForm] = useState (initialUserForm);

    const {username,password,email} = userForm; //Mapeo a los campos, asignamos a cada campo//
    const onInputChange = ({ target}) =>{
       // console.log (target.value)   
        const { name, value} = target;
        setUserForm ({ 
            ...userForm,
            [name]: value,


        })

    }
    const onSubmit = (event) => {
        event.preventDefault(); // prevenir el refresh

        if(!username || !password ||!email){
            alert ('completar los campos faltantes')
            return;
        }
        console.log (userForm); // PERMITE VER SI SE ESTAN POBLANDO LOS DATOS
 // guardar el user form en el listado de usuarios

        setUserForm (initialUserForm); // borrar los datos de los campos
}
    return(

        //Crear los campos//
            <form onSubmit = { onSubmit }>
                <input
                    //type="text"
                    className="form-control my-3 w-75"
                    placeholder="UserName"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />
                <input 
                    type="password"
                    className="form-control my-3 w-75"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onInputChange} 
                />
                <input 
//                 type="text"
                    className="form-control my-3 w-75"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={onInputChange} 
                />
                <button
                    className="btn btn-primary"
                    type="submit">
                    CREAR
                </button>

            </form>




    )




}