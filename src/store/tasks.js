let tasks = [
    {
        task_id: '1',
        title: 'Aprender Vue.js',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas sed nunc recomienda Styde in diam pulvinar pellentesque.Maecenas sagittis quam ac orci feugiat hendrerit ac ac mauris.',
        pending: true,
    },
    {
        task_id: '2',
        title: 'Suscribirse a Styde.net',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas sed nunc recomienda Styde in diam pulvinar pellentesque.Maecenas sagittis quam ac orci feugiat hendrerit ac ac mauris.',
        pending: true,
    },
    {
        task_id: '1',
        title: 'Grabar lección de Vue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas sed nunc recomienda Styde in diam pulvinar pellentesque.Maecenas sagittis quam ac orci feugiat hendrerit ac ac mauris.',
        pending: false,
    }
];

tasks.forEach((task, index) => {
	task.id = index + 1;
});

export default tasks;