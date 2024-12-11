import React, { createContext, useState } from 'react';

export const CarDetailsContext = createContext();

export const CarDetailsProvider = ({ children }) => {
    const [carDetails, setCarDetails] = useState({
        carName: '',
        brand: '',
        type: '',
        vin: '',
        regNumber: '',
        engineNumber: '',
        color: '',
        carImage: '',
    });

    const updateCarDetails = (name, value) => {
        setCarDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    return (
        <CarDetailsContext.Provider value={{ carDetails, updateCarDetails }}>
            {children}
        </CarDetailsContext.Provider>
    );
};
