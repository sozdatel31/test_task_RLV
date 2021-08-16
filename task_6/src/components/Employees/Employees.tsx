import React, {useEffect, useState} from 'react';
import {appAPI} from "../../app-api/app-api";
import {EmployeesList} from "../EmployeesListt/EmployeesList";
import style from './Employees.module.css'


export type employeesType = {
    avatar: string
    email: string
    first_name: string
    id: number
    last_name: string
}

export function Employees() {
    const [employees, setEmployees] = useState<Array<employeesType>>()
    const [error, setError] = useState<string | null>()



    useEffect(() => {
        // setIsFetching(true);
        appAPI.getPicture()
            .then((res) => {
                setError(null);
                // setIsFetching(false);
                setEmployees(res.data.data);
            })
            .catch(() => {
                setError("ошибка");
                // setIsFetching(false);
            });
    }, [appAPI]);
    return (
        <div className={style.container}>
            <h1>Сотрудники</h1>
            {/*{employees?.map(m=> <div key={m.id}> {m.first_name}</div>)}*/}
           <EmployeesList
                employees={employees}
           />
        </div>
    );
};
