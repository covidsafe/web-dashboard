import { apiBaseUrl } from "../config";

/*
params: {
    lat,
    lon,
    precision?,
    lastTimestamp?
}
*/
export function getAreaMatches(params) {
    if (!params.precision) {
        params.precision = 4;
    }

    if (!params.lastTimestamp) {
        params.lastTimestamp = 1592204400000;
    }

    params.lat = Math.floor(params.lat);
    params.lon = Math.floor(params.lon);

    let url = `${apiBaseUrl}/api/areaMatches?lat=${params.lat}&lon=${params.lon}&precision=${params.precision}&lastTimestamp=${params.lastTimestamp}`;
    return fetch(url)
            .then(res => res.json())
            .then(res => res);
}