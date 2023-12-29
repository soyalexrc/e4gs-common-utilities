export function getString(key: string, defaultValue = null): string {
    const value = localStorage.getItem(key);
    if (value === null) {
        return defaultValue!;
    } else {
        return value;
    }
}

export function setString(key: string, value: string) {
    localStorage.setItem(key, value);
}

export function getBoolean(key: string, defaultValue = false): boolean {
    const value = localStorage.getItem(key);
    if (value == null) {
        return defaultValue;
    } else {
        return JSON.parse(value);
    }
}

export function setBoolean(key: string, value: boolean) {
    return localStorage.setItem(key, String(value));
}

export function getNumber(key: string, defaultValue = null): number {
    const value = localStorage.getItem(key);
    if (value == null) {
        return defaultValue!;
    } else {
        return Number(value);
    }
}

export function setNumber(key: string, value: number) {
    return localStorage.setItem(key, String(value));
}

export function removeItem(key: string) {
    return localStorage.removeItem(key);
}

export function getObject(key: string, defaultValue = null): any {
    const value = localStorage.getItem(key);
    if (value == null) {
        return defaultValue;
    } else {
        return JSON.parse(value);
    }
}

export function setObject(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}
