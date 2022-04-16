import axios from "axios";
import * as https from "https";

export async function getHowPlayer(data: any): Promise<any> {
  console.log(data)
  const key =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "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\n" +
    "-----END RSA PRIVATE KEY-----";

  const cert =
    "-----BEGIN CERTIFICATE-----\n" +
    "MIIElDCCA3wCCQCJ0IZ7pWWuPzANBgkqhkiG9w0BAQsFADCBjTELMAkGA1UEBhMC\n" +
    "VEgxEjAQBgNVBAgMCXRlc3RzdGFnZTEMMAoGA1UEBwwDQktLMQ4wDAYDVQQKDAVP\n" +
    "dGVzdDEPMA0GA1UECwwGT1V0ZXN0MRcwFQYDVQQDDA5yb290LmxvY2FsaG9zdDEi\n" +
    "MCAGCSqGSIb3DQEJARYTcm9vdGxvY2FsQGxvY2FsaG9zdDAeFw0xODA2MjMxNDQ2\n" +
    "MTRaFw00NTExMDcxNDQ2MTRaMIGJMQswCQYDVQQGEwJUSDESMBAGA1UECAwJdGVz\n" +
    "dHN0YXRlMQwwCgYDVQQHDANia2sxDzANBgNVBAoMBm9udGVzdDEPMA0GA1UECwwG\n" +
    "b3V0ZXN0MRIwEAYDVQQDDAlsb2NhbGhvc3QxIjAgBgkqhkiG9w0BCQEWE2xvY2Fs\n" +
    "aG9zdEBsb2NhbGhvc3QwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDy\n" +
    "cEtZvhELt+kIRjnK7OvUqKHqWGZrDTKjZCBcNkCAVY5pEDPDfOdpd6N2ARoLdiv1\n" +
    "UwwW367ptjVG3HhpX4KXCO1NrjXB+4/9rEt9yphmdnALvwId0PYePyVnXtbz4QNW\n" +
    "goQ2P+qNGap1FHOtbkiLaihhCMyfKw48lub6q0qLnsi9qV7J/NCDcfiPLVFUQenS\n" +
    "u9IgBAe1EYN/4bO2rrM64PZavGualgDuT/IHpzUvkX9hR5jYkBjyLG6RLIGOF0KK\n" +
    "pDNxWv8WOqCAOBIFsdJKfkcP8COHtlr97js4qg54qW8UBR/+/H6IrhzxA2z2B4Gp\n" +
    "Zg/v2T7OeOeyXF9A1o9+Z4pGxAVMXx2nJsoVVFZnfDdI4KomTRXkGrzReYwUZ6h1\n" +
    "1YWYe2UE/YUVFYqeIzIWUBCn2IcWoVvn8/ga2glL7Fkyt5gYmRzBGB4SlDSYG5BM\n" +
    "22jPqRYj40pOi8YWetsSkFRhUeFKne7JGNXyiitlVT3ld4Gxn1h8orpRNl9Sic27\n" +
    "xvy+dLeQWVJZBGaOZ2cUFwRhUH+MyX765WdqACWmKwYXTmbp5SbEUgnhe8YhH3yp\n" +
    "y2O28aHsxWnqgeBkjBFJDh8MY0dcNNXC0GUOHu06j9YGU6wa+uzZJXu/51Lf02NZ\n" +
    "5B1MK7X/H+HdCDcTmbyf+4kOfRvTSkhUpdiLHrkBCwIDAQABMA0GCSqGSIb3DQEB\n" +
    "CwUAA4IBAQCsVfI+ob3FgL7wNuCBlZCfRNrLpUxni2cPafNcThUe/PQulpJTsTRM\n" +
    "7WXk1jPifIWYXzLfZTH32dAvNgEce8NfPMJtlbruWG7QVhL+YRtU8kz5limMt8hK\n" +
    "TnYh5yVKL7lIR1fHzQWvW1EblQHbXkXLmSl7vV2T61pIqx2bhDP8w69y/QNVS3H+\n" +
    "oNlmlmNUSksMUVe8ZhJEHA1NQQ8qkiyZ3ooc0d0mpcWDgM8ZPIRXIHrvm/hVOeBW\n" +
    "2YK/R/FuXXa3LGLSH5mKP/JUfiK3I80ecbYzx55Frho12pBOn/9TP/4EacAClvIQ\n" +
    "c3HfP4SRpoP/q0sZQT255kkc9jl1Gsx6\n" +
    "-----END CERTIFICATE-----";

  const ca =
    "-----BEGIN CERTIFICATE-----\n" +
    "MIID7zCCAtegAwIBAgIJAJLBdrrW0NvsMA0GCSqGSIb3DQEBCwUAMIGNMQswCQYD\n" +
    "VQQGEwJUSDESMBAGA1UECAwJdGVzdHN0YWdlMQwwCgYDVQQHDANCS0sxDjAMBgNV\n" +
    "BAoMBU90ZXN0MQ8wDQYDVQQLDAZPVXRlc3QxFzAVBgNVBAMMDnJvb3QubG9jYWxo\n" +
    "b3N0MSIwIAYJKoZIhvcNAQkBFhNyb290bG9jYWxAbG9jYWxob3N0MB4XDTE4MDYy\n" +
    "MzE0NDM1NFoXDTQ1MTEwNzE0NDM1NFowgY0xCzAJBgNVBAYTAlRIMRIwEAYDVQQI\n" +
    "DAl0ZXN0c3RhZ2UxDDAKBgNVBAcMA0JLSzEOMAwGA1UECgwFT3Rlc3QxDzANBgNV\n" +
    "BAsMBk9VdGVzdDEXMBUGA1UEAwwOcm9vdC5sb2NhbGhvc3QxIjAgBgkqhkiG9w0B\n" +
    "CQEWE3Jvb3Rsb2NhbEBsb2NhbGhvc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw\n" +
    "ggEKAoIBAQDE6XtV85KN12KSaxRiv9f4O9CawJQCwiEBTv7DImk6S3K4eUcuvLsn\n" +
    "p8cpf4Sl1M2r3HLzTuK2aJox+PXEwk5AQZfBqVJBioMmvQbut3Y1Swm7pd7VZCXk\n" +
    "pnDUg2q11EmB05nwuExtpa9knZEoEb/QjGHjDYTiE5Z6LhLFb5CwBoZYRR4STg84\n" +
    "Ebs4YUaUq1Ubvg4Hk9sVb6yMG3RKJIDC9FJmVQ5lpYqDh7ZDx0qLAztZnyuiW/nN\n" +
    "KLxwvs9JvusjfbB2XPnu5L1UQ9Q+2crahLfEfAf36VsbgYWGzNBnk9pJhLi3W4+M\n" +
    "vWrUPTx0+7yPRYaYSbBsvsZC63//voiJAgMBAAGjUDBOMB0GA1UdDgQWBBQcSj3p\n" +
    "fNEef5CGY/rGOC00uH6LKDAfBgNVHSMEGDAWgBQcSj3pfNEef5CGY/rGOC00uH6L\n" +
    "KDAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQBIP6YC+rFx+ETyfdrw\n" +
    "Kwn2mT3LF5TvuQLXKmgMl3YikFfpENfW50nwXfSIQC0i3looHPc/MTnbtJ3jmTKR\n" +
    "do2zATBTjT8p62TMRzSMTvsJGyrY2nFcOXRFp5ZbkiCTJzPBuVCz5S3lb+CwMcln\n" +
    "I8dOgRuR+xSjgn+3PCjLqTH7m7Z6OXgRQavHrMugsq/yTz/VOnSAQVf+ZSZyaLWX\n" +
    "NsrgewCCFjsq4h9JTd1EdGNkKxTANlyPXF+mkkcvyCJGQsZIuqUuODjX8OFxjkYd\n" +
    "7crnTWSHlDjGI67m0Y6/VFYXyQtHPu0mmX9sJbh3jOUOGQLI/OJtRDeMUJq/QuB9\n" +
    "lnjm\n" +
    "-----END CERTIFICATE-----";
  // Uint8Array
  // const httpsAgent = new https.Agent({
  //   key: fs.readFileSync('.Keys/server-key.pem'),
  //   cert: fs.readFileSync('.Keys/server-crt.pem'),
  //   ca: fs.readFileSync('.Keys/ca-crt.pem'),
  //   requestCert: true,
  //   rejectUnauthorized: true
  // });

const options = {
  key: key,
  cert: cert,
  ca: ca,
  host: "localhost",
  port: 9443,
  rejectUnauthorized: true,
  requestCert: true,
}

  // const httpsAgent = {
  //   _events: {
  //     free: function() {},
  //     newListener: function() : maybeEnableKeylog {}
  //   },
  //   _eventsCount: 2,
  //   _maxListeners: undefined,
  //   defaultPort: 443,
  //   protocol: "https:",
  //   options: {
  //     key: key,
  //     cert: cert,
  //     ca: ca,
  //     host: 'localhost',
  //     port: 9443,
  //     rejectUnauthorized: true,
  //     requestCert: true,
  //     path: null,
  //   },
  //   requests: {},
  //   sockets: {},
  //   freeSockets: {},
  //   keepAliveMsecs: 1000,
  //   keepAlive: false,
  //   maxSockets: Infinity,
  //   maxFreeSockets: 256,
  //   scheduling: "lifo",
  //   maxTotalSockets: Infinity,
  //   totalSocketCount: 0,
  //   maxCachedSessions: 100,
  //   _sessionCache: {
  //     map: {},
  //     list: {},
  //   },
  // };
  // // httpsAgent.options.key = key;
  // // httpsAgent.options.cert = cert;
  // // httpsAgent.options.ca = ca;
  
  console.log(options);
  const httpsAgent = new https.Agent(options);

  console.log(httpsAgent);

  try {
    const response = await axios
      .post("https://localhost:9443/flamengo", data, { httpsAgent })
      .then(console.log);

    return response;
  } catch (error) {
    console.log(error);
    console.log("DEU ERRO");
  }
}
