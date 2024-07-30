export default function Dashboard() {
  const randomNumber = Math.floor(Math.random() * 100);

  return (
    <div>
      <p>Your lucky number is {randomNumber}</p>
    </div>
  );
}
