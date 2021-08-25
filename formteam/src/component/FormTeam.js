import React,{useState} from 'react'
import '../App.css'
const FormTeam = (props) => {
    // Create state for the form
    const [member,setMember] = useState({
        id:Date.now(),
        name:'',
        email:'',
        role:'',
        image:''
    })

  // create function keeps track of what you type and sends it to the state

    function handleChange(event){
       const newMember ={...member, [event.target.name]: event.target.value}

       setMember(newMember)
    }
console.log(member);
// Create a function that submits your form to "addnewMember" function

function handleSubmit(event){
    event.preventDefault()
    props.addnewMember(member)
}


    return(
        <div >
            <h1 className='secondary-header u-center'>Add New Member </h1>
            <fieldset>
            <legend className='para'>Jion Our Member</legend>
           <form onSubmit={handleSubmit} className=''>
               <label htmlFor='title' className='para'> <b>User Name</b></label>
               <input 
               type='text'
               placeholder='enter your Name'
               name='name'
               value={member.name}
               onChange={handleChange}
               required
               /> <br/>

               <label htmlFor='title' className='para'><b>Email</b></label>
               <input 
               type='text'
               placeholder='enter your email address'
               name='email'
               value={member.email}
               onChange={handleChange}
               required

               /><br/>

            <label htmlFor='title' className='para'><b>Role</b></label>
      
            <select
            name='role'  
            onChange={handleChange}
            className='para u-margin-left'
            required
            >
                <option value="backend engineer">select a role</option>
                <option value="backend engineer">software engineer</option>
                <option value="backend engineer">backend engineer</option>
                <option value="frontend enginee">frontend enginee</option>
                <option value="frontend enginee">full stack developer</option>
                <option value="designer">designer</option>
            </select> <br/>

            <div className='u-center'>
            <button type='submit' className='btn btn--white btn--animated'>submit</button>
            </div>
           
           </form>
           </fieldset>
        </div>
    )
}

export default FormTeam;


// waa inay isku midnoqdaan name='role' iyo state object={role:''} casesensative 