import React from 'react';
import { hasPermission } from './roles';

interface IProps {
  children: React.ReactNode;
  roles: string | string[] | any;
  key?: number;
}

export const ProtectedRoutes = ({ roles, children }: IProps) => {
  return hasPermission(roles) ? children : null;
};
