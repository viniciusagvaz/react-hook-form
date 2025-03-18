import React from "react";
import "./Result.css";

interface ResultProps {
  formData: {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    country: string;
    password: string;
  };
}

export const Result: React.FC<ResultProps> = ({ formData }) => {
  return (
    <div className="result-container">
      <div className="form-preview">
        <h2>Form Preview</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};
