export function removeAll() {
    return sessionStorage.clear();
}

export function getString(key: string, defaultValue = null): string {
    const value = sessionStorage.getItem(key);
    if (value == null) {
        return defaultValue!;
    } else {
        return sessionStorage.getItem(key)!;
    }
}

export function setString(key: string, value: string) {
    sessionStorage.setItem(key, value);
}

export function getValue(key: string) {
    return sessionStorage.getItem(key);
}

export function getBoolean(key: string, defaultValue = false): boolean {
    const value = sessionStorage.getItem(key);
    if (value == null) {
        return defaultValue;
    } else {
        return Boolean(value);
    }
}

export function setBoolean(key: string, value: boolean) {
    return sessionStorage.setItem(key, String(value));
}

export function getNumber(key: string, defaultValue = null): number {
    const value = sessionStorage.getItem(key);
    if (value == null) {
        return defaultValue!;
    } else {
        return Number(value);
    }
}

export function setNumber(key: string, value: number) {
    return sessionStorage.setItem(key, String(value));
}

export function removeItem(key: string) {
    return sessionStorage.removeItem(key);
}

export function getObject(key: string, defaultValue = null): any {
    const value = sessionStorage.getItem(key);
    if (value == null) {
        return defaultValue;
    } else {
        return JSON.parse(value);
    }
}

export function setObject(key: string, value: object) {
    sessionStorage.setItem(key, JSON.stringify(value));
}
