import { useState } from "react";
import { Result } from "../../components/common/Result";
import { Form, Inputs } from "../../Form";
import "./Main.css";

export const Main = () => {
  const [formData, setFormData] = useState<Inputs>({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    password: "",
  });

  const handleFormSubmit = (data: Inputs) => {
    setFormData(data);
  };

  return (
    <main>
      <Form onFormSubmit={handleFormSubmit} />
      <Result formData={formData} />
    </main>
  );
};
