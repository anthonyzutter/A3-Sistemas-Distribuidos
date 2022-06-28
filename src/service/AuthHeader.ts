export default function AuthHeader() {
  const user = JSON.parse(localStorage.getItem('user')!);

  if (user && user.accessToken) {
    return { 'authorization': `Bearer ${user.accessToken}` };
  } else {
    return {};
  }
}     