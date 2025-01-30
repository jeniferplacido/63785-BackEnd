const generateUserErrorInfo = (user) => {

    return `Uma ou mais informações estão incorretas. Verifique os campos:
    name: ${user.name}
    lastName: ${user.lastName}
    email: ${user.email}`

}

module.exports = generateUserErrorInfo;