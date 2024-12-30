import request from '@/config/axios-config.js';

export async function login(form) {
    const res = await request.post("/sys/auth/login", form);
    if (res.data.code === 200) {
        return res.data.data;
    }
    return Promise.reject(new Error(res.data.message));
}
