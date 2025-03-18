import { useForm, SubmitHandler } from "react-hook-form";
import logo from "./assets/react.svg";

export type Inputs = {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  password: string;
};

interface FormProps {
  onFormSubmit: (data: Inputs) => void;
}

export const Form: React.FC<FormProps> = ({ onFormSubmit }) => {
  const countries = [
    {
      id: 1,
      country: "Brasil",
      flag: "🇧🇷",
    },
    {
      id: 2,
      country: "Estados Unidos",
      flag: "🇺🇸",
    },
    {
      id: 3,
      country: "França",
      flag: "🇫🇷",
    },
    {
      id: 4,
      country: "Alemanha",
      flag: "🇩🇪",
    },
    {
      id: 5,
      country: "Itália",
      flag: "🇮🇹",
    },
    {
      id: 6,
      country: "Japão",
      flag: "🇯🇵",
    },
    {
      id: 7,
      country: "China",
      flag: "🇨🇳",
    },
    {
      id: 8,
      country: "Índia",
      flag: "🇮🇳",
    },
    {
      id: 9,
      country: "Espanha",
      flag: "🇪🇸",
    },
    {
      id: 10,
      country: "Rússia",
      flag: "🇷🇺",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onFormSubmit(data);
  };

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <img src={logo} alt="React" className="logo" />
            <h1>React-Hook-Form</h1>
          </div>

          <div className="flex">
            <div>
              <input
                className="fullname"
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                type="text"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
              <input
                className="fullname"
                {...register("lastName", { required: "Last Name is required" })}
                placeholder="Your Last Name"
                type="text"
              />
              {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>
          </div>

          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Email is not valid" },
            })}
            placeholder="Your Email"
          />
          {errors.email && <span>{errors.email.message}</span>}

          <select {...register("country", { required: "Country is required" })}>
            {countries.map((country) => (
              <option key={country.id} value={country.country}>
                {country.flag} | {country.country}
              </option>
            ))}
          </select>
          {errors.country && <span>{errors.country.message}</span>}

          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
          />
          {errors.password && <span>{errors.password.message}</span>}

          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
};
