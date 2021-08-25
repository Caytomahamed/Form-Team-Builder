import React from 'react'
import '../App.css'
const ListMember = (props) => {
    const {data} = props

    return(
        <div className='row'>
            {data.map((member) => (
                <div className='col-1-of-4 shadow' >
                    <h1 className='title'>Name : {member.name}</h1>
                    <p className='para'> <b>Email</b> : {member.email}</p>
                    <p className='para'><b>Role</b> : {member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default ListMember;