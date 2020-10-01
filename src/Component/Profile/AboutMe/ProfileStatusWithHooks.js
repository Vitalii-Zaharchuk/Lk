import React, { useEffect } from 'react'
import { useState } from "react"

const ProfileStatusWithHooks = (props) =>{
    let[status,setStatus] = useState(props.status)
    let [editMode,setEditMode] = useState(false)
    const activateEditMode = () =>{
        setEditMode(true)
    }
    const deactivateEditMode = () =>{
        setEditMode(false)
        props.updateStatusThunk(status)
    }
    const  onStatusChange = (e) =>{
        setStatus = (e.currentTarget.value)
    }
    useEffect(() =>{
        setStatus(props.status);
    },[props.status])
    return(
        <div>
                {! editMode &&
                    <div>
                        <span onDuubleClick={activateEditMode}>{props.status || '---'}</span>
                     </div>   
                }
                {editMode &&
                        <div>
                            <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                        </div>

                }
        </div>
    )
}
export default ProfileStatusWithHooks