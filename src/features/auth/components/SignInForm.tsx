import { useAppForm } from "@/components/custom/custom-tanstack-form";
import { signInEmailServerSchema, type SignInEmailServerType } from "../types";
import { useSignInEmailClient } from "../actions/client";
import { FieldGroup } from "@/components/ui/field";
import { ActionButton } from "@/components/ui/action-button";

export default function SignInForm() {
  const signInEmailClient = useSignInEmailClient();
  const signInFormDefaultValues: SignInEmailServerType = {
    email: "",
    password: "",
  };
  const signInForm = useAppForm({
    defaultValues: signInFormDefaultValues,
    validators: {
      onSubmit: signInEmailServerSchema,
    },
    onSubmit: async ({ value }) => {
      await signInEmailClient.mutateAsync(value);
    },
  });
  return (
    <form
      id="sign-in-form"
      onSubmit={(e) => {
        e.preventDefault();
        signInForm.handleSubmit();
      }}
    >
      <FieldGroup>
        <signInForm.AppField name="email">
          {(emailField) => (
            <emailField.CFInputTextField
              type="email"
              placeholder="mail@example.com"
            />
          )}
        </signInForm.AppField>
        <signInForm.AppField name="password">
          {(passwordField) => (
            <passwordField.CFInputTextField
              type="password"
              placeholder="Enter your password"
            />
          )}
        </signInForm.AppField>

        <ActionButton action={signInForm.handleSubmit}>Sign In</ActionButton>
      </FieldGroup>
    </form>
  );
}
