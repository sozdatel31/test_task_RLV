import React from 'react';
import style from './EmployeesList.module.css'
import {employeesType} from "../Employees/Employees";

type EmployeesListType = {
    employees: Array<employeesType> | undefined
    removeEmployee: (id: number) => void
}

export function EmployeesList(props: EmployeesListType) {
    return <div className={style.container}>
        <div>{props.employees?.map(m => <div key={m.id} className={style.box}>
            <div> {m.first_name} {m.last_name}</div>
                <button onClick={() => props.removeEmployee(m.id)}>удалить</button>
        </div>)}
        </div>
    </div>
}
