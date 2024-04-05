import axios from 'axios';


const api = axios.create({ 
    baseURL: 'https://660d7f6f6ddfa2943b3490bb.mockapi.io/v1/profesores/id/disponibilidad/Disponibilidad',
    
    });
    export const getEvents = () => {
        return api.get('/')
            .then(response => response.data)
            .catch(error => {
                console.error('Hubo un error!', error);
            });
    };