import "./App.css";
import ImageCardComponent from "./components/ImageCardComponent/ImageCardComponent";

function App() {
  const mineImage = {
    title: "MineCraft Lake",
    url: "https://acc-bucket-test.s3.us-west-1.amazonaws.com/maincra-lake.jpg",
  };

  const terraImage = {
    title: "Terraria Overworld",
    url: "https://acc-bucket-test.s3.us-west-1.amazonaws.com/terra-overworld.jpg",
  };

  return (
    <div className="card-list">
      <ImageCardComponent title={mineImage.title} url={mineImage.url} />
      <ImageCardComponent title={terraImage.title} url={terraImage.url} />
      <ImageCardComponent title={mineImage.title} url={mineImage.url} />
      <ImageCardComponent title={terraImage.title} url={terraImage.url} />
    </div>
  );
}

export default App;
