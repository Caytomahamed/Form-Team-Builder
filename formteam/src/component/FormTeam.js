import React,{useState} from 'react'

const FormTeam = (props) => {
    // Create state for the form
    const [member,setMember] = useState({
        id:Date.now(),
        name:'',
        email:'',
        role:''
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
        <div>
            <fieldset>
            <legend>Jion Our Member</legend>
           <form onSubmit={handleSubmit}>
               <label htmlFor='title'>User Name</label>
               <input 
               type='text'
               placeholder='enter your Name'
               name='name'
               value={member.name}
               onChange={handleChange}
               
               /> <br/>

               <label htmlFor='title'>email</label>
               <input 
               type='text'
               placeholder='enter your email address'
               name='email'
               value={member.email}
               onChange={handleChange}

               /><br/>

            <label htmlFor='title'>Role</label>
      
            <select id="cars" 
            name='role'  
            onChange={handleChange}>

                <option value="backend engineer">software engineer</option>
                <option value="backend engineer">backend engineer</option>
                <option value="frontend enginee">frontend enginee</option>
                <option value="frontend enginee">full stack developer</option>
                <option value="designer">designer</option>
            </select> <br/>

            <button type='submit'>submit</button>
           </form>
           </fieldset>
        </div>
    )
}

export default FormTeam;


// waa inay isku midnoqdaan name='role' iyo state object={role:''} casesensative 