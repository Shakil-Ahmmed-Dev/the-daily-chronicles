import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getContext } from "@/lib/tanstack-query";
import { QueryClientProvider } from "@tanstack/react-query";

export function RootProvider({ children }: { children: React.ReactNode }) {
  const { queryClient } = getContext();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children}
        <Toaster richColors closeButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
