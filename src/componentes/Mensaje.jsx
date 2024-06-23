import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Mensaje = () => {
    return ( 
        <div className="mensaje bg-white py-4 px-6 rounded-b-lg text-black text-center font-semibold">
            <div className="flex justify-center mt-4">
                <a href="https://www.linkedin.com/in/facundo-aguilar-014265261/" className="text-blue-500 mr-4">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/faFacundoAguilar" className="text-gray-500">
                    <FaGithub size={30} />
                </a>
            </div>
        </div>
    );
}
 
export default Mensaje;
