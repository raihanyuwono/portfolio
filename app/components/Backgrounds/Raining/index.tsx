import "./style.css";

function rainRandom(n: number): number[] {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 100));
}

function randomDelay(): string {
  return `${Math.random()}s`;
}

const rainFrontrow = rainRandom(20);
const rainBackrow = rainRandom(13);

function Raining() {
  return (
    <div className="rain-wrapper">
      <div className="rain">
        {rainFrontrow.map((space, idx) => (
          <div
            className={`front-row drop`}
            key={idx}
            style={{ animationDelay: randomDelay(), left: `${space}%` }}
          />
        ))}
        {rainBackrow.map((space, idx) => (
          <div
            className={`back-row drop`}
            key={idx}
            style={{ animationDelay: randomDelay(), left: `${space}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default Raining;
