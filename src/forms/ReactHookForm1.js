import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm1() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      <input {...register("lastName", { required: true, minLength: 4, maxLength: 19 })} />
      <select {...register("role")}>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="admin">Admin</option>
        <option value="other">Other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default ReactHookForm1;
