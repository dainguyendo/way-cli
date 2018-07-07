module.exports = (origin, destination, mode) => {
    const base = 'https://www.google.com/maps/dir/?api=1'
    const parameters = `&origin=${origin}&destination=${destination}&travelmode=${mode}`;
    return `${base}${parameters}`;
}