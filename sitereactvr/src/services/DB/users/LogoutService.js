
const useLogout = ( ) => {

    const logout = async (e) => {
      e.preventDefault();
        sessionStorage.removeItem('refreshToken');
        sessionStorage.removeItem('accessToken');
        window.location.href('/');
    };

    return { logout };
};

export default useLogout;