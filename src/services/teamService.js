export const fetchTeams = async () => {
    const response = await fetch(`http://www.ies-azarquiel.es/paco/apikl/team`);
    if (!response.ok) throw new Error('Error al obtener los equipos');
    const data = await response.json();
    return data.teams;
};