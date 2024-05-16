import bcrypt from 'bcrypt';

async function passwordHashing(password) {
    const salt = await bcrypt.gensalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    return hashedpassword;
}
export { passwordHashing };

async function passwordComparing(password, hashedpassword) {
    const result = await bcrypt.compare(password, hashedpassword);
    return result;
}
export { passwordComparing };