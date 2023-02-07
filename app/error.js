'use client';
export default function Error({ error, reset }) {
  return (
    <div>
      {' '}
      Oops! Something went wrong.
      <p> {error.message} </p>
      <button onClick={() => reset()}> Reset error boundary</button>
    </div>
  );
}
