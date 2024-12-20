import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "../utils/validationSchema";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import InputField from "../components/InputField";

const Account = () => {
  const { user, updateUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    defaultValues: user || {},
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    updateUser(data);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField label="First Name" type="text" register={register("firstName")} error={errors.firstName?.message} />
        <InputField label="Last Name" type="text" register={register("lastName")} error={errors.lastName?.message} />
        <InputField label="Email" type="email" register={register("email")} error={errors.email?.message} />
        <InputField label="Phone" type="text" register={register("phone")} error={errors.phone?.message} />
        <button type="submit" className="btn w-full">Save</button>
      </form>
    </div>
  );
};

export default Account;
