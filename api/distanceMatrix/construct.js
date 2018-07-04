module.exports = (origins, destinations, mode, unit, avoid) => {
    let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
    url += `origins=${origins.join('|')}`;
    url += `&destinations=${destinations.join('|')}`;
    url += `&mode=${mode}`;
    url += `&unit=${unit}`;
    if (avoid && typeof avoid !== 'undefined') {
        url += `&avoid=${avoid}`;
    }
    url += `&key=${process.env.API_KEY}`;
    return url;
}