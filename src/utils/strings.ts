export function capitalize(string: string) {
    return string[0].toUpperCase() + string.slice(1);
}

export function removeRoutePrefix(string: string) {
    if (string == "/") {
        return "home";
    }

    if (string[0] == "/") {
        return string.slice(1);
    } else {
        throw new Error("Input is not a route string.");
    }
}
