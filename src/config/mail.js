const mailConfig = {
    host: process.env.EMAIL_HOST || "smtp.hostinger.com",
    port: process.env.EMAIL_PORT || "465",
    secure: process.env.EMAIL_STARTTLS || true,
    user: process.env.EMAIL_USER || "contato@fatorpolitico.com.br",
    pass: process.env.EMAIL_PASSWORD || "$AdminJPA123",
    baseUrl: process.env.BASE_URL || "http://localhost:3002",
    apiUrl: process.env.API_URL || "http://localhost:3500",
};

module.exports = mailConfig;