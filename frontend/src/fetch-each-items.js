import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const MiComponente = ({ datos }) => {
  // Variable local donde almacenaremos los datos mapeados
  const [datosMapeados, setDatosMapeados] = useState([]);

  useEffect(() => {
    // Mapeamos los datos recibidos y los almacenamos en la variable local
    const datosMapeadosLocal = datos.map((dato) => {
      // Realiza cualquier procesamiento adicional que necesites aquí
      return dato; // Por ejemplo, puedes modificar los datos antes de almacenarlos
    });

    // Actualizamos la variable local con los datos mapeados
    setDatosMapeados(datosMapeadosLocal);
  }, [datos]); // Dependencia para volver a ejecutar el efecto cuando cambien los datos

  // Ahora puedes usar datosMapeados en tu componente
  return (
    <div>
      {/* Por ejemplo, puedes mostrar los datos en una lista */}
      <ul>
        {datosMapeados.map((dato, index) => (
          <li key={index}>{dato}</li>
        ))}
      </ul>
    </div>
  );
};

MiComponente.propTypes = {
  datos: PropTypes.object.isRequired
}

export default MiComponente;
