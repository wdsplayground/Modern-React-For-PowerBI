import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config Azure AD app setting to be passed to Msal on creation
const TenantId = "0864897c-9929-43a9-a145-1c1bdcc482cb";
const ClientId = "9d95cc52-8b1f-405e-8192-813c7c2b8250";

export const msalConfig: Configuration = {
    auth: {
        clientId: ClientId,
        authority: "https://login.microsoftonline.com/" + TenantId,
        redirectUri: "/",
        postLogoutRedirectUri: "/"        
    }
};

export const PowerBiPermissionScopes: string[] = [
    "https://analysis.windows.net/powerbi/api/Dashboard.Read.All",
    "https://analysis.windows.net/powerbi/api/Dataset.Read.All",
    "https://analysis.windows.net/powerbi/api/Report.ReadWrite.All",
    "https://analysis.windows.net/powerbi/api/Group.Read.All",
    "https://analysis.windows.net/powerbi/api/Workspace.ReadWrite.All",
    "https://analysis.windows.net/powerbi/api/Content.Create"
  ]

export const PowerBiLoginRequest: PopupRequest = {
    scopes: PowerBiPermissionScopes
};