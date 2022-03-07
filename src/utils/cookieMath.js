export function getCookie(cookieName) {
    const name = cookieName + "=";
    if (typeof window !== "undefined") {
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1);
            if (c.indexOf(name) === 0)
                return c.substring(name.length, c.length);
        }
    }
    return null;
}

export function setCookie(name, value, expire_in) {
    document.cookie = `${name}=${value};path=/;max-age=${expire_in};`;
    return;
}
