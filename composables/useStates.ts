//是否登录
export const useIsLogin = () => useState<boolean>('isLogin', () => {
  const cookiesToken = useCookie('hl_ticket');
  if (cookiesToken.value !== null && cookiesToken.value !== undefined) {
    return true;
  } else {
    return false;
  }
});