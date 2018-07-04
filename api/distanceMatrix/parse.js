const handleOKElement = element => {
    const { duration, distance } = element;
    return {
        duration: duration.text,
        distance: distance.text
    };
}

const handleOK = json => {
    const { origin_addresses, destination_addresses, rows } = json;
    const results = [];
    rows.forEach((row, i) => {
        const origin = origin_addresses[i];
        const { elements } = row;
        elements.forEach((element, j) => {
            const { status } = element;
            const destination = destination_addresses[j];
            const result = {
                origin,
                destination
            };
            switch (status) {
                case 'OK':
                    results.push(Object.assign(result, handleOKElement(element)));
                    break;
                case 'NOT_FOUND':
                case 'ZERO_RESULTS':
                case 'MAX_ROUTE_LENGTH_EXCEEDED':
                    results.push(Object.assign(result, { error: true }));
                    break;
            }
        });
    });
    return {
        success: true,
        results
    };
}

const handleError = json => {
    const { status } = json;
    return {
        success: false,
        status
    };
}

const parse = json => {
    const { status } = json;
    let result;
    switch (status) {
        case 'OK':
            result = handleOK(json);
            break;
        case 'INVALID_REQUEST':
        case 'MAX_ELEMENTS_EXCEEDED':
        case 'OVER_DAILY_LIMIT':
        case 'OVER_QUERY_LIMIT':
        case 'REQUEST_DENIED':
        case 'UNKNOWN_ERROR':
            result = handleError(json);
            break;
    }
    return result;
}

module.exports = parse;
