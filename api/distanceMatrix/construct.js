module.exports = (origins, destinations, mode, unit, avoid) => {
    let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
    url += `origins=${encodeURI(origins.join('|'))}`;
    url += `&destinations=${encodeURI(destinations.join('|'))}`;
    url += `&mode=${mode}`;
    url += `&unit=${unit}`;
    if (avoid && typeof avoid !== 'undefined') {
        url += `&avoid=${avoid}`;
    }
    url += `&key=${process.env.API_KEY}`;
    return url;
}