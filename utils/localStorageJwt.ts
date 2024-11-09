// 存储jwt到本地存储
export function localStoragejwt (
    device: string, 
    loginType: string,
    ticket: string, 
    ticket_expires: number, 
    uid: string
) {
    localStorage.setItem('hl_device', device);
    localStorage.setItem('hl_login_type', loginType);
    localStorage.setItem('hl_ticket', ticket);
    localStorage.setItem('hl_ticket_expires', ticket_expires.toString());
    localStorage.setItem('hl_uid', uid);
};

// 移除本地存储的jwt
export function removeLocalStoragejwt () {
    localStorage.removeItem('hl_device');
    localStorage.removeItem('hl_login_type');
    localStorage.removeItem('hl_ticket');
    localStorage.removeItem('hl_ticket_expires');
    localStorage.removeItem('hl_uid');
}