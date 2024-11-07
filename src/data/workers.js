// Datos de los trabajadores, utilizados para generar dinámicamente las tarjetas en HomeScreen.
const workers = [
    {
      id: '1', // Identificador único
      name: 'Tu padre', // Nombre del trabajador
      phone: '3511935104', // Número de teléfono (para realizar llamadas)
      location: 'Por donde no pasó DIOS Mich.', // Ubicación o procedencia
      about: 'EL CHINO', // Descripción breve o información adicional
      profilePhoto: null, // Almacena la foto seleccionada por el usuario
    },
    {
      id: '2',
      name: 'JUZZO',
      phone: '3511622766',
      location: 'El Colesio Mich.',
      about: 'Capitán culo rico🥵🎱.', // Descripción humorística
      image: require('../../assets/Juzzo.jpg'),
      profilePhoto: null,
    },
    {
      id: '3',
      name: 'MANY',
      phone: '3513068889',
      location: 'Zamora de Hidalgo Mich.',
      about: 'PURO PINCHE PREENTRENO.', // Descripción humorística/motivacional
      image: require('../../assets/MANY.jpeg'),
      profilePhoto: null,
    },
  ];
  
  export default workers; // Exporta los datos para su uso en otras pantallas, como HomeScreen.
  