import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignUpForm from "@/features/auth/components/SignUpForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <Card className="container max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </section>
  );
}
