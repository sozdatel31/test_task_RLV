import React, {ChangeEvent, useEffect, useState} from 'react';
import {appAPI} from "../../app-api/app-api";
import {EmployeesList} from "../EmployeesListt/EmployeesList";
import style from './Employees.module.css'
import {Preloader} from "../Preloader/Preloader";

export type employeesType = {
    avatar?: string
    email?: string
    first_name: string
    id: number
    last_name?: string
}

export function Employees() {
    const [employees, setEmployees] = useState<Array<employeesType>>([])
    const [error, setError] = useState<string | null>()
    const [value, setValue] = useState<string>("")
    const [isFetching, setIsFetching] = useState<boolean>(false)

    const AddEmployee = () => {
        const Employee = {
            first_name: value,
            id: +(new Date()),
        };

        if (value?.trim() !== "") {
            setEmployees([Employee, ...employees]);
            setValue("");
        } else {
            setError("ошибка");
        }
    };

    const removeEmployee = (id: number) => {
        setEmployees(employees.filter((emp) => emp.id !== id));
    };

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        setError(null);
    };

    useEffect(() => {
        setIsFetching(true);
        appAPI.getPicture()
            .then((res) => {
                setError(null);
                setIsFetching(false);
                setEmployees(res.data.data);
            })
            .catch(() => {
                setError("ошибка");
                setIsFetching(false);
            });
    }, [appAPI]);

    return (
        <div className={style.container}>
            <h1>Сотрудники</h1>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={onChangeValue}
                />
                <button onClick={AddEmployee}>Добавить</button>
                <div>{error}</div>
            </div>
            {isFetching ? <Preloader/> : <EmployeesList
                employees={employees}
                removeEmployee={removeEmployee}
            />}

        </div>
    );
}