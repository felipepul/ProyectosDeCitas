// import {useEffect} from 'react'
import PropTypes from 'prop-types';
import Paciente from "./Paciente";

// Paciente;
const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h1 className="font-black text-3xl text-center">ListadoPacientes</h1>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente} 
              eliminarPaciente={eliminarPaciente}/>

          ))}
        </>
      ) : (<>

        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Comienza agregando Pacientes  {""}
          <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
        </p>
      </>)}
    </div>
  );
};
ListadoPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func,
};

export default ListadoPacientes;

