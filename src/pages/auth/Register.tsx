
import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <AuthLayout
      title="Create an account"
      description="Register to get started"
      backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
