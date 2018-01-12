const getters = {
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    role: state => state.user.role,
    phone: state => state.user.phone,
    gender: state => state.user.gender
}
export default getters
