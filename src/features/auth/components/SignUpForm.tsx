import { useAppForm } from "@/components/custom/custom-tanstack-form";
import { signUpEmailServerSchema, type SignUpEmailServerType } from "../types";
import { useSignUpEmailClient } from "../actions/client";
import { FieldGroup } from "@/components/ui/field";
import { ActionButton } from "@/components/ui/action-button";

export default function SignUpForm() {
  const signUpEmailClient = useSignUpEmailClient();
  const signUpFormDefaultValues: SignUpEmailServerType = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const signUpForm = useAppForm({
    defaultValues: signUpFormDefaultValues,
    validators: {
      onSubmit: signUpEmailServerSchema,
    },
    onSubmit: async ({ value }) => {
      await signUpEmailClient.mutateAsync(value);
    },
  });
  return (
    <form
      id="sign-up-form"
      onSubmit={async (e) => {
        e.preventDefault();
        await signUpForm.handleSubmit();
      }}
    >
      <FieldGroup>
        <signUpForm.AppField name="name">
          {(nameField) => (
            <nameField.CFInputTextField placeholder="Abdur Rahman" />
          )}
        </signUpForm.AppField>
        <signUpForm.AppField name="email">
          {(emailField) => (
            <emailField.CFInputTextField
              type="email"
              placeholder="mail@example.com"
            />
          )}
        </signUpForm.AppField>
        <signUpForm.AppField name="password">
          {(passwordField) => (
            <passwordField.CFInputTextField
              type="password"
              placeholder="Enter a password"
            />
          )}
        </signUpForm.AppField>
        <signUpForm.AppField name="confirmPassword">
          {(confirmPasswordField) => (
            <confirmPasswordField.CFInputTextField
              type="password"
              label="Confirm Password"
              placeholder="Confirm your password"
            />
          )}
        </signUpForm.AppField>

        <ActionButton action={signUpForm.handleSubmit}>Sign Up</ActionButton>
      </FieldGroup>
    </form>
  );
}
