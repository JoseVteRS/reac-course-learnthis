

import React from 'react'
import UserRole from './UserRole'
import UserStatus from './UserStatus'
import style from './UserRow.module.css'
import UserDisplay from './UserDisplay'

const UserRow = ({ username, name, active, role }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.name}>
                <UserDisplay name={name} username={username} />
            </div>
            <div className={style.status}>
                <UserStatus active={active} />
            </div>
            <div className={style.role}>
                <UserRole role={role} />
            </div>
            <div className={style.action}></div>
        </div>
    )
}

export default UserRow