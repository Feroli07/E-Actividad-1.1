import { aerolineas } from "../database/db.js"
import { v4 as uuidv4 } from 'uuid'

class AerolineaControllers {
    listarTodos(){
        return {
            status: aerolineas.length === 0 ? 404 : 200, 
            data: aerolineas.length === 0 ? null : aerolineas,
            message: aerolineas.length === 0 ? "No hay aerolineas registradas" : "aerolineas mostrados exitosamente"
        }     
    }
    listarUno(idAero){
    const aerolineaSeleccionada = aerolineas.filter(aerolinea => aerolinea.id === idAero)
            return({
                data: aerolineas.length === 0 ? null : aerolineaSeleccionada,
                message: aerolineas.length === 0 ? "No se encontró la Aerolinea" : "Aerolinea mostrada con éxito"
            })
   
    }
    agregar(nuevaAero){
            if(!nuevaAero.nombre || !nuevaAero.dueño || !nuevaAero.ubicacion || !nuevaAero.calificación){
                return({
                    data: null,
                    message: "Faltan datos indispensables"
                })
            }
            const agregarAero = {
                id: uuidv4(),
                nombre: nuevaAero.nombre,
                dueño: nuevaAero.dueño,
                ubicacion: nuevaAero.ubicacion,
                calificación: nuevaAero.calificación,
            }
            aerolineas.push(agregarAero)
                return({
                    data:{
                        nuevaAero, 
                        aerolineas
                    },
                    message: "Aerolinea agregada exitosamente"
                })
    }
}

const aerolineaControllers = new AerolineaControllers
export default aerolineaControllers