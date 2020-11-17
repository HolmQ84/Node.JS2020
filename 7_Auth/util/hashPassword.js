// Create a script that hashes passwords.

const bcrypt = require('bcrypt')

password = process.argv[2];
salt = 10;


bcrypt.hash(password, 10, (error, hash) => {
    console.log(hash)
})

(async () => {
    try {
        const hashedPassword = await bcrypt.hash('flotfyr36', 10);
        console.log(hashedPassword);
    } catch (error) {
        console.log(error);
    }
})();