import request from '@/config/axios-config.js';

export async function getPublicCaptcha() {
    const res = await request.get("/sys/public/captcha/123");
    if (res.data.code === 200) {
        return res.data.data;
    }
    return Promise.reject(new Error(res.data.message));
}
