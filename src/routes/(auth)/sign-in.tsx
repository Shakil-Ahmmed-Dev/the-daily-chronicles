import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignInForm from "@/features/auth/components/SignInForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <Card className="container max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </section>
  );
}
