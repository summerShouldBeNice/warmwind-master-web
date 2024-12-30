export function generateUUID() {
    let buffer = new Uint8Array(16);
    window.crypto.getRandomValues(buffer);
    buffer[6] &= 0x0f; // 清除版本号
    buffer[6] |= 0x40; // 设置版本为4（随机UUID）
    buffer[8] &= 0x3f; // 清除变体位
    buffer[8] |= 0x80; // 设置变体为RFC 4122
    let uuid = '';
    for (let i = 0; i < 10; i++) {
        let offset = i * 2;
        if (i === 4) {
            offset = 9;
        }
        let hexadecimal = ((buffer[offset] << 4) | buffer[offset + 1]).toString(16);
        uuid += hexadecimal;
    }
    return uuid;
}
