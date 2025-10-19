export const fetchPlayersByTeam = async (teamId) => {
    const response = await fetch(`http://www.ies-azarquiel.es/paco/apikl/team/${teamId}/player`);
    if (!response.ok) throw new Error('Error al obtener info del equipo');
    const data = await response.json();
    return data.players;
};

export const fetchTeamInfo = async (teamId) => {
    const response = await fetch(`http://www.ies-azarquiel.es/paco/apikl/team/${teamId}`);
    if (!response.ok) throw new Error('Error al obtener info del equipo');
    const data = await response.json();
    return data.team;
};