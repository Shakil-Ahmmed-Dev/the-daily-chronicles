import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { getContext } from "./lib/tanstack-query";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";

export function getRouter() {
  const rqContext = getContext();
  const router = createTanStackRouter({
    routeTree,
    context: rqContext,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });

  setupRouterSsrQueryIntegration({
    router,
    queryClient: rqContext.queryClient,
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
