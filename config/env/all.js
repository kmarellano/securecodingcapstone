// default app configuration
const port = process.env.PORT || 4000;
let db = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

module.exports = {
	port,
	db,
	cookieSecret: "session_cookie_secret_key_here",
	cryptoKey: "a_secure_key_for_crypto_here",
	cryptoAlgo: "aes256",
	hostName: "localhost",
	environmentalScripts: [],
};
