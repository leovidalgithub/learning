

export const GuardarEnStorage = (clave, elemento) => {
 localStorage.setItem(clave, JSON.stringify(elemento));
}
