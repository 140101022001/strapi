function objectsAreEmpty(obj1: any) {
    const keys = Object.keys(obj1);
    for (let i = 0; i < keys.length; i++) {
        if(!obj1[keys[i]]) {
            return true;
        } else {
            return false;
        }
    }
}

export { objectsAreEmpty }