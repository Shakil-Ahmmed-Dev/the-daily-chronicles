import { createFormHookContexts, createFormHook } from "@tanstack/react-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { PasswordInput } from "../ui/password-input";

export const { fieldContext, formContext, useFieldContext } =
  createFormHookContexts();

export const CFInputTextField = ({
  label,
  type = "text",
}: {
  label?: string;
  type?: "text" | "email" | "password";
} & React.ComponentProps<typeof Input>) => {
  const field = useFieldContext<string>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>
        {label || `${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`}
      </FieldLabel>
      {type === "password" ? (
        <PasswordInput
          id={field.name}
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          aria-invalid={isInvalid}
        />
      ) : (
        <Input
          type={type}
          id={field.name}
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          aria-invalid={isInvalid}
        />
      )}
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
};

export const CFInputNumberField = ({
  label,
}: { label?: string } & React.ComponentProps<typeof Input>) => {
  const field = useFieldContext<number>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>
        {label || `${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`}
      </FieldLabel>
      <Input
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.valueAsNumber)}
        aria-invalid={isInvalid}
      />
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
};

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    CFInputTextField,
    CFInputNumberField,
  },
  formComponents: {},
});
