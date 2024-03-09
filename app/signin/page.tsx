"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function signin() {
  const token = "secrettoken";

  const [error, setError] = useState(false);
  const [valid, setValid] = useState("");

  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("http://localhost:3000/users", {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      const user = data.find((user) => {
        if (user.email === email && user.password === password) {
          localStorage.setItem("token", token);
          setValid("Вы залогинены");
          router.push("/");
        } else {
          setValid("Неверный email или пароль");
        }
      });
    } else {
      setError(true);
      setValid("Ошибка при получении данных с сервера");
    }
  }

  return (
    <div className="signin">
      <h1>Sign in</h1>
      <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Email" name="email"></input>
        <input type="text" placeholder="Password" name="password"></input>
        <button className="" type="submit">
          Sign In
        </button>
      </form>
      <p className="error">{valid || error ? valid : ""}</p>
    </div>
  );
}
