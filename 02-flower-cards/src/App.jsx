import "./index.css";

const flowersData = [
  {
    name: "Lilium",
    story:
      "Lilies have been admired for their beauty and elegance, symbolizing purity, love, and new beginnings. In many cultures, they represent hope and growth, and are cherished in various ceremonies and celebrations.",
    photoUrl: "../public/flowers/lilium.jpg",
    bestUses: [
      { use: "Wedding bouquets", color: "#FFFFFF" },
      { use: "Sympathy arrangements", color: "#D3D3D3" },
      { use: "Elegant home decor", color: "#FAD0C4" },
    ],
  },
  {
    name: "Orchid",
    story:
      "Orchids are admired for their delicate and exotic beauty, symbolizing luxury, elegance, and strength. Often associated with love and refinement, they are cherished in various cultures and widely used in both personal and formal celebrations.",
    photoUrl: "../public/flowers/orchid.jpg",
    bestUses: [
      { use: "Wedding bouquets", color: "#FFFFFF" },
      { use: "Luxury gifts", color: "#A8D0E6" },
      { use: "Elegant home decor", color: "#FAD0C4" },
    ],
  },
  {
    name: "Protea",
    story:
      "Proteas are known for their unique, bold appearance and symbolize change, transformation, and diversity. Revered for their resilience, they represent strength and courage, often featured in celebrations and special occasions.",
    photoUrl: "../public/flowers/protea.jpg",
    bestUses: [
      { use: "Wedding bouquets", color: "#FFFFFF" },
      { use: "Corporate gifts", color: "#F8C8D1" },
      { use: "Elegant home decor", color: "#FAD0C4" },
    ],
  },
];

function App() {
  return (
    <div className="container">
      <Cards />
    </div>
  );
}

const Cards = function () {
  return (
    <>
      {flowersData.map((flower) => (
        <Card flowerObj={flower} />
      ))}
    </>
  );
};

const Card = ({ flowerObj }) => {
  return (
    <div className="card">
      <img src={flowerObj.photoUrl} />
      <div className="cardDes">
        <h2>{flowerObj.name}</h2>
        <p>{flowerObj.story}</p>
        <ul>
          {flowerObj.bestUses.map((bestUse) => (
            <BestUse bestUseObj={bestUse} key={bestUse.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

function BestUse({ bestUseObj }) {
  return (
    <li style={{ backgroundColor: bestUseObj.color }}>
      {bestUseObj.use}
      {bestUseObj.use === "Wedding bouquets" && " 💍"}
      {bestUseObj.use === "Sympathy arrangements" && " 🕊️"}
      {bestUseObj.use === "Elegant home decor" && " 🏡"}
      {bestUseObj.use === "Luxury gifts" && " 🎁"}
      {bestUseObj.use === "Corporate gifts" && " 🎁"}
    </li>
  );
}
export default App;
