import React from 'react';
import style from './EmployeesList.module.css'
import {employeesType} from "../Employees/Employees";

type EmployeesListType = {
    employees: Array<employeesType> | undefined
}

export function EmployeesList(props:EmployeesListType) {
  return <div className={style.container}>
            <div>{props.employees?.map(m=> <div>
                {m.first_name} {m.last_name}

            </div>)}</div>
  </div>
};
