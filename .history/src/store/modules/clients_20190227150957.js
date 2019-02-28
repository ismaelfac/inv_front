let clients = [
    {
        id: '1',
        type_client: 'admin',
        alert_client: 'alert-info',
        img_post: '/src/assets/website/images/blog/blog.jpeg',
        message: 'Confirmar Correo Electronico',
        recommended: '2',
        requirements: '1',
        my_ads: '3',
        my_properties: '4',
        my_messages: {
            no_read: '6',

        },
        inbox: [
            {
                message: 'Registrate con nosotros'
            },
            {
                message: 'Crear un Clasificado'
            }
        ]
    },
    {
        id: '2',
        type_client: 'asesor',
        alert_client: 'alert-success',
        img_post: '/src/assets/website/images/blog/blog.jpeg',
        message: 'Correo Electronico Confirmado',
        recommended: '3',
        requirements: '5',
        my_ads: '1',
        my_properties: '8',
        my_messages: {
            no_read: '6',

        },
        inbox: [
            {
                message: 'Registrate con nosotros'
            },
            {
                message: 'Crear un Clasificado'
            }
        ]
    }
];
clients.forEach((client, index) => {
	client.id = index + 1;
});
export default clients;