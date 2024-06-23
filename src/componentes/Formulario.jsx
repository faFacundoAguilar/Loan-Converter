import React, { useState } from 'react';
import { calcularTotal } from '../helpers';

const Formulario = ({ cantidad, setCantidad, plazo, setPlazo, setTotal }) => {
    const [error, setError] = useState(false);

    const calcularPrestamo = e => {
        e.preventDefault();
        if (cantidad === 0 || plazo === "") {
            setError(true);
            return;
        }
        setError(false);

        const total = calcularTotal(cantidad, plazo);
        setTotal(total);
    }

    return (
        <div className="flex justify-center items-center min-h-screen mt-1">  {/* Ajuste aquí */}
            <form onSubmit={calcularPrestamo} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <div className="flex flex-wrap gap-6">
                    <div className="w-full">
                        <label className="block mb-2 text-gray-700">Loan amount</label>
                        <input
                            type="number"
                            placeholder="Ej: 3000"
                            onChange={(e) => setCantidad(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-gray-700">Repayment term</label>
                        <select
                            onChange={(e) => setPlazo(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select</option>
                            <option value="3">3 months</option>
                            <option value="6">6 months</option>
                            <option value="12">12 months</option>
                            <option value="24">24 months</option>
                        </select>
                    </div>
                </div>
                <div className="mt-4">
                    <input
                        type="submit"
                        value="Calculate"
                        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
                    />
                </div>
            </form>
            {error && <p className="mt-4 text-center text-red-500">All fields are required...</p>}
        </div>
    );
}

export default Formulario;
