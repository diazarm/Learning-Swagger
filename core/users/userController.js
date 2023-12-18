
const getAllUserController = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`Error al obtener usuarios. Código de estado: ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error(`Error en getAllUserController: ${error.message}`);
    }
};



module.exports = getAllUserController;