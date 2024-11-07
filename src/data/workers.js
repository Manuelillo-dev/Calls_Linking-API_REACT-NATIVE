// Datos de los trabajadores, utilizados para generar dinámicamente las tarjetas en HomeScreen.
const workers = [
    {
      id: '1', // Identificador único
      name: 'Tu padre', // Nombre del trabajador
      phone: '3511935104', // Número de teléfono (para realizar llamadas)
      location: 'Por donde no pasó DIOS Mich.', // Ubicación o procedencia
      about: 'EL CHINO', // Descripción breve o información adicional
      image: require('../../assets/logo.jpg'), // Imagen de perfil (ruta en la carpeta assets)
    },
    {
      id: '2',
      name: 'JUZZO',
      phone: '3511622766',
      location: 'El Colesio Mich.',
      about: 'Capitán culo rico🥵🎱.', // Descripción humorística
      image: require('../../assets/Juzzo.jpg'),
    },
    {
      id: '3',
      name: 'MANY',
      phone: '3513068889',
      location: 'Zamora de Hidalgo Mich.',
      about: 'PURO PINCHE PREENTRENO.', // Descripción humorística/motivacional
      image: require('../../assets/MANY.jpeg'),
    },
  ];
  
  export default workers; // Exporta los datos para su uso en otras pantallas, como HomeScreen.
  