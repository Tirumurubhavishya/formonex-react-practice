import {useState} from 'react'
import './App.css'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App(){

  const[email, setEmail] = useState(" ");
  const[password, setPassword] = useState(" ");

  const correctEmail = "abc@gmail.com";
  const correctPassword = "password";

  const handelSubmit = async (e) => {
    e.preventDefault();
    if(email === correctEmail && password === correctPassword){
      toast.success("Login successful...!!!");
    }

     else{
    toast.error("Enter correct Email and Password");
  }
}


  return(

  <>

    <div className = 'min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4'>

      <div className = 'max-w-md w-full bg-white rounded-lg shadow-lg p-8'>

            <div className = 'text-center mb-8'>
              <h1 className = 'text-gray-600 mt-2'>Login Page</h1>
            </div>

              <form onSubmit = {handelSubmit} className = 'space-y-6'>

                <div>
                      <label htmlFor = "email" className = 'block text-sm  font-medium text-grey-700 mb-2'>Email :</label>

                      <input type = 'email' value = {email} className= 'w-full px-4 py-3 border-gray-300 rounded-lg focus: ring-blue-500' placeholder = "Enter your Email" required onChange = {(e) => setEmail(e.target.value)} />
                      <label htmlFor = "password" className = 'block text-sm  font-medium text-grey-700 mb-2'>Password :</label>
                      <input type = 'password' value = {password} className= 'w-full px-4 py-3 border-gray-300 rounded-lg focus: ring-blue-500' placeholder = "Enter your Password" required onChange = {(e) => setPassword(e.target.value)} />


                </div>

                <button type = 'Submit' className = 'w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200'>Login</button>

              </form>
            
            </div>
      
      </div>

    <ToastContainer position = 'top-right' autoClose = {3000} />
  </>
  );
}
export default App;