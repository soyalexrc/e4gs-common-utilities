export function serializeObject(obj: any): string {
    const str = [];
    for (const p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
    }
    return str.join('&');
}

export function objectToFormData(obj: any): FormData {
    const formData = new FormData();
    // tslint:disable-next-line:forin
    for (const objKey in obj) {
        formData.append(objKey, obj[objKey]);
    }
    return formData;
}

export function emailHidden(email: string): string {
    if (email) {
        const first2 = email.substring(0, 3);
        const emailCut = email.split('@');
        return first2 + '******@' + emailCut[1];
    }
    return '';
}
