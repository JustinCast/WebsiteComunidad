import { Member } from "./Member";

/**
 * Esta interfaz difiera de 'Member.interface.ts' en lo siguiente:
 * - Esta interfaz posee exactamente la misma forma de la respuesta por parte del backend
 * - La interfaz 'Member.interface.ts' es parte de esta interfaz
 */
export interface MemberResponse {
    nombre: string,
    apellidos: string,
    especialidad: string,
    github_user: string
}