const configuration = {
    client_id: '1066073673387-undfdseanu1soilcdprq1p4m8gq8a1iu.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:3000/',
    response_type: 'id_token',
    post_logout_redirect_uri: 'http://localhost:3000/',
    scope: 'openid',
    authority: 'https://accounts.google.com',
    silent_redirect_uri: 'http://localhost:3000/',
    automaticSilentRenew: true,
    loadUserInfo: true,
};

export default configuration;