import React from 'react';




import { useForm } from 'react-hook-form'; // 3rd party library



function MyForm() {
  // 1. Initialize useForm with optional configuration
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    }
  });

  // 2. Define a function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // Access form data when the form is submitted
  };

  return (
    <div>
      <h1>React useForm Example</h1>
      {/* 3. Create the form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 4. Add form fields */}
        <div>
          <label htmlFor="firstName">First Name</label>
          {/* 5. Register form inputs with the useForm hook */}
          <input
            type="text"
            id="firstName"
            {...register('firstName', { required: 'First Name is required' })} // Validation rules
          />
          {/* 6. Display validation errors */}
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register('lastName', { required: 'Last Name is required' })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        {/* 7. Add a submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;