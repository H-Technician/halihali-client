import Http from '@/composables/useRequest'
import type { Auth } from '@/types/auth'

// 获取创作者声明列表接口
export async function getAuthApi() {
    return await Http.get<Auth[]>('/auth/list/get');
}