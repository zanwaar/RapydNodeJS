const config = {
  accessKey: process.env.RAPYD_ACCESS_KEY || 'rak_4DAD96FF868C35A41A1B',
  secretKey: process.env.RAPYD_SECRET_KEY || 'rsk_22ec372cd8db0b5b137c72d94774279fad91487cf5780bde5834ffb935984aab7e8d46f2b78283e8',
  baseRapydApiUrl: process.env.BASERAPYDAPIURL || 'https://sandboxapi.rapyd.net',
  port: parseInt(process.env.PORT) || 5000,
};

export default config;
