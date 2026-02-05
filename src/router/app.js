import Chartapex from '../views/apexchart/allapexchartExampel.vue';

export default[
    {
        path: '/testone',
        name: 'testone',
        components: {
            default: Chartapex,
            fullPage: Chartapex
        }, meta: {
            subject: 'ACL',
            action: 'read'
        }
    },
]