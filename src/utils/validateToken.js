import  localForage from 'localforage';

const Portfolio = localForage.createInstance({
    name        : 'Portfolio',
    storeName   : 'users',
    description : 'This is the default offline database for the users'
});

const verifyToken = async ()=>{
    return await Portfolio.getItem('token') || await Portfolio.setItem('token','jkgnejenjnikjn44545')
}
export { verifyToken, Portfolio}