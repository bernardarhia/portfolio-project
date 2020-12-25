import  localForage from 'localforage';

const Portfolio = localForage.createInstance({
    name        : 'Portfolio',
    storeName   : 'users',
    description : 'This is the default offline database for the users'
});

export {Portfolio}