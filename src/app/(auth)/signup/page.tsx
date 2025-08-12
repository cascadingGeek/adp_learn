import { AuthCard } from "@/components/auth/AuthCard";
import { SignUpForm } from "@/components/auth/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
      <AuthCard
        title="Welcome to ADPLearn"
        subtitle="Create an account to get started"
      >
        <SignUpForm />
      </AuthCard>
    </div>
  );
};

export default SignUpPage;
