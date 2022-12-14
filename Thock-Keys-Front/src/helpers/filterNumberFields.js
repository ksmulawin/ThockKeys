export const numberInputs = (e) => {
    let kc, num, rt = false;
    kc = e.keyCode;
    if(kc == 8 || ((kc > 47 && kc < 58) || (kc > 95 && kc < 106))) {
        return true;
    } else {
        e.preventDefault();
    }
}