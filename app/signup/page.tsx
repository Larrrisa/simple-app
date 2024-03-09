"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function signup() {
  const [valid, setValid] = useState("");
  const [error, setError] = useState(true);

  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      setValid("Заполните оба поля");
      return;
    } else if (password.length < 5) {
      setValid("Пароль должен содержать больше 5 символов");
      return;
    }

    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      setValid("");
      setError(false);
      router.push("/");
    } else {
      setError(true);
      setValid("Что-то пошло не так");
    }
  }

  return (
    <div className="signup">
      <h1>Sign up</h1>
      <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Email" name="email"></input>
        <input type="text" placeholder="Password" name="password"></input>
        <button className="" type="submit">
          Sign Up
        </button>
      </form>
      <p className="error">{valid || !error ? valid : ""}</p>
    </div>
  );
}
