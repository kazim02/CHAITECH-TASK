import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { loginSchema, LoginSchema } from "../utils/validationSchema";

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    if (user?.email === data.email && user?.password === data.password) {
      toast.success("Logen successful");
      navigate("/account");
    } else {
      toast.error("Invalid credentials. Please try agein.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Email"
          type="email"
          register={register("email")}
          error={errors.email?.message}
        />
        <InputField
          label="Password"
          type="password"
          register={register("password")}
          error={errors.password?.message}
        />
        <button type="submit" className="btn w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
