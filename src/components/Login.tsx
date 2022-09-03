import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginAction } from "./store/actions/Login.action";

type FormValues = {
  email: string;
  password: number;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.login);
  console.log(state);

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    dispatch(loginAction(data));
    navigate("/");
  };
  return (
    <div className="m-auto bg-gray-800 w-80 border border-gray-700 bg-gray-200 rounded-lg border-4 border-l-blue-900 border-r-yellow-900 border-t-green-900 border-b-rose-900">
      <h3 className="text-center mt-5 border rounded-2xl border-b-rose-600 border-t-rose-600 bg-indigo-200 w-40 m-auto border-2 ">
        Login Your Account
      </h3>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col"
      >
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          type="text"
          placeholder="email"
          className={`m-5 border border-black rounded-lg indent-2.5 py-1 hover:bg-sky-200 hover:border-l-blue-900 hover:border-r-yellow-900 hover:border-t-green-900 hover:border-b-rose-900 ${
            errors.password?.type && `border-2 border-rose-600`
          }`}
        />

        <p className="h-5 text-center text-red-600">
          {errors.email?.type === "required" && "Password is required"}
          {errors.email?.type === "pattern" && errors.email.message}
        </p>

        <input
          {...register("password", {
            required: true,
            pattern: {
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
              message: "Number Only",
            },
          })}
          type="password"
          placeholder="password"
          className={`m-5 border border-black rounded-lg indent-2.5 py-1 hover:bg-sky-200 ${
            errors.password?.type && `border-2 border-rose-600`
          }`}
        />
        <p className="h-5 text-center text-red-600">
          {errors.password?.type === "required" && "Password is required"}
          {errors.password?.type === "pattern" && errors.password.message}
        </p>
        <input
          type="submit"
          className="m-auto hover:bg-sky-900 hover:text-white my-5 border rounded-lg bg-red-400 py-1 flex m-auto justify-center w-48 border-2 border-l-blue-900 border-r-yellow-900 border-t-green-900 border-b-rose-900"
        />
      </form>
    </div>
  );
};
export default Login;
