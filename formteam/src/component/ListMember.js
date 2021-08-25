import React from 'react'

const ListMember = (props) => {
    const {data} = props

    return(
        <div>
            {data.map((member) => (
                <div>
                    <h1>Name : {member.name}</h1>
                    <p> <b>Email</b> : {member.email}</p>
                    <p><b>Role</b> : {member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default ListMember;