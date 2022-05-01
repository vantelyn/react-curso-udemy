const { OAuth2Client } = require('google-auth-library');

async function verifyGoogleToken( token = '' ) {
  const client = new OAuth2Client( process.env.GOOGLE_CLIENT_ID );
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const { name, email, picture, email_verified } = ticket.getPayload()
  return {
    name,
    email,
    email_verified,
    picture,
  };
}

module.exports = verifyGoogleToken;