import { keycloak } from '../Keycloak/keycloak';

const getUserRoles = (): string[] => {
  const roles = keycloak?.tokenParsed?.resource_access?.account?.roles || [];
  return roles;
};

export const hasPermission = (role: string | string[]) => {
  const roles = getUserRoles();
  const compareArrays = (roles: string[], role: string[]) =>
    role?.some((r) => roles.includes(r));
  if (Array.isArray(role)) {
    return compareArrays(roles, role);
  } else {
    return roles?.includes(role);
  }
};
