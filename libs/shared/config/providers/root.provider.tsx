import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useHref, useNavigate } from 'react-router-dom';

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
        refetchOnWindowFocus: false,
        retryOnMount: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={navigate} useHref={useHref}>
        {children}
      </NextUIProvider>
    </QueryClientProvider>
  );
};
