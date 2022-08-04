const petition = async (url) => {
  try {
    const peticion = await fetch(url)
    const respuesta = await peticion.json()
    return respuesta
  } catch (err) {
    return err
  }
}

export default petition
