import { useForm, SubmitHandler } from "react-hook-form";
import logo from "./assets/react.svg";

type Inputs = {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  birth: string;
  password: string;
  confirmPassword: string;
};

export const Form = () => {
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
    console.log(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <img src={logo} alt="React" className="logo" />
          <h1>React-Hook-Form</h1>
        </div>

        <div className="flex">
          <input
            className="fullname"
            {...register("name")}
            placeholder="Your Name"
            type="text"
            required={true}
          />
          <input
            className="fullname"
            {...register("lastName")}
            placeholder="Your Last Name"
            type="text"
            required
          />
          {errors.name && <span>This field is required</span>}
        </div>

        <input {...register("email")} placeholder="Your Email" />

        <label>Country</label>
        <select {...register("country")}>
          {countries.map((country) => (
            <option key={country.id} value={country.country}>
              {country.flag} | {country.country}
            </option>
          ))}
        </select>

        <label>Birth</label>
        <input {...register("birth")} type="date" />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          required
        />
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};
