
import './App.css'
import Grandpa from './componants/Grandpa/Grandpa'
// import ReUsableForm from './componants/ReUsableForm/ReUsableForm'
// import HookForm from './componants/HookForm/HookForm'
// import RefForm from './componants/RefForm/RefForm'
// import SimpleForm from './componants/SimpleForm/SimpleForm'
// import StatefullForm from './componants/StatefullForm.jsx/StatefullForm'

function App() {

//   const handleSignUpSubmit = data => {
//     console.log("sign up data", data);
// }

//   const handleUpdateProfile = data =>{
//     console.log("update profile",data);
//   }

  return (
    <>
    <h1>Form Master</h1>
    <Grandpa></Grandpa>
  {/* //  <SimpleForm></SimpleForm> */}
  {/* <StatefullForm></StatefullForm> */}
  {/* <RefForm></RefForm> */}
  {/* <HookForm></HookForm> */}

  {/* <ReUsableForm 
  formTitle={"Sign Up"} 
  handleSubmit={handleSignUpSubmit}>
    <div>
      <h2>Sign up</h2>
      <p>please sing up right now</p>
    </div>
  </ReUsableForm>

  <ReUsableForm 
  formTitle={"Profile Update"} 
  handleSubmit={handleUpdateProfile} 
  submitBtnText='Update'>
    <div>
      <h2>Update Profile</h2>
      <p>Always Kep Your Profile Update</p>
    </div>
  </ReUsableForm> */}
    
    </>
  )
}

export default App
