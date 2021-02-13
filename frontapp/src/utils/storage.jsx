export function setUserStorage(data) {
    localStorage.setItem('User', data);
};

export function getUserStorage() {
    return localStorage.getItem('User');
};

export function removeUserStorage() {
    localStorage.removeItem(`User`);
};

export function clearStorage() {
    localStorage.clear();
};
