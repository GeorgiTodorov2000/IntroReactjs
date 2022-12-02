import { Route, Routes } from "react-router-dom";
import { UserForm } from "../users/user-form/UserForm";
import { User } from "../users/user/User";
import { UsersList } from "../users/users-list/UsersList";

import { CarForm } from '../cars/car-form/CarForm';
import { Car } from '../cars/car/Car';
import { CarsList } from '../cars/cars-list/CarsList';

export function Main() {
    return (
        <div className="main-content">
            <Routes>
                <Route exact path="/users-list" element={<UsersList />}/>
                <Route exact path="/user/:id" element={<User />} />
                <Route path="/user/create" element={<UserForm />} />
                <Route path="/user/edit/:id" element={<UserForm />} />
                <Route path="/cars-list" element={<CarsList />} />
                <Route path="/car/:id" element={<Car />} />
                <Route path="/car/create" element={<CarForm />} />
                <Route path="/car/edit/:id" element={<CarForm />} />
            </Routes>
        </div>
        )
}