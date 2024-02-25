export const b2cPolicies = {
    names: {
        signUpSignIn: "b2c_1_susi_reset_v2",
        editProfile: "b2c_1_edit_profile_v2"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://taigamackgmail.b2clogin.com/taigamackgmail.onmicrosoft.com/b2c_1_susi_reset_v2",
        },
        editProfile: {
            authority: "https://taigamackgmail.b2clogin.com/taigamackgmail.onmicrosoft.com/b2c_1_edit_profile_v2"
        }
    },
    authorityDomain: "taigamackgmail.b2clogin.com"
};


export const msalConfig = {
    auth: {
        clientId: '7c58702c-1594-4436-9292-8e793c2a110c',
        authority: 'https://login.microsoftonline.com/taigamackgmail.onmicrosoft.com', // Defaults to "https://login.microsoftonline.com/common"
        knownAuthorities: [b2cPolicies.authorityDomain],
        redirectUri: '/',
        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
   // More configuration here
}

export const protectedResources = {
 todoListApi: {
   endpoint: "http://localhost:3000/",
   scopes: ["https://taigamackgmail.onmicrosoft.com/tasks-api/tasks.read"],
 },
}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [],
};

export const passportConfig = {
    credentials: {
        tenantName: 'taigamackgmail.onmicrosoft.com',
        clientID: '7eff76a0-4520-4687-9853-226a6565ebdf',
    },
    policies: {
        policyName: 'B2C_1_susi_v2',
    },
    metadata: {
        b2cDomain: 'taigamackgmail.b2clogin.com',
        authority: 'login.microsoftonline.com',
        discovery: '.well-known/openid-configuration',
        version: 'v2.0',
    },
    settings: {
        isB2C: true,
        validateIssuer: false,
        passReqToCallback: true,
        loggingLevel: 'info',
        loggingNoPII: false,
    },
    protectedRoutes: {
        todolist: {
            endpoint: '/hello',
            delegatedPermissions: {
                read: ['ToDoList.Read', 'ToDoList.ReadWrite'],
                write: ['ToDoList.ReadWrite'],
            },
        },
    },
};
