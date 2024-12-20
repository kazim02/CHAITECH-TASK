import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../utils/validationSchema";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import ProfileField from "../pages/Profile";

const AccountPage = () => {
  const { user, updateUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user || {},
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: any) => {
    updateUser(data);
    toast.success("Profile Updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <ProfileField
          label="First Name"
          value={user?.firstName || ""}
          register={register}
          fieldName="firstName"
          error={errors.firstName?.message}
        />

        <ProfileField
          label="Last Name"
          value={user?.lastName || ""}
          register={register}
          fieldName="lastName"
          error={errors.lastName?.message}
        />

        <ProfileField
          label="Phone"
          value={user?.phone || ""}
          register={register}
          fieldName="phone"
          error={errors.phone?.message}
        />

        <ProfileField
          label="Email"
          value={user?.email || ""}
          register={register}
          fieldName="email"
          error={errors.email?.message}
        />

        <button type="submit" className="btn w-full">
          Save
        </button>
      </form>
    </div>
  );
};

export default AccountPage;
