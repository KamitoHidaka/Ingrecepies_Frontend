import "./RecepieItem.css";
import { useEffect, useState } from "react";
import { ItemLabel } from "../itemLabel/itemLabel";
import { Link } from "react-router-dom";

interface ItemProps {
  Title: string;
  Category: string;
  Thumbnail: string;
  To: string | undefined;
}

export const RecepieItem = ({ Title, Category, Thumbnail, To }: ItemProps) => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    if (Thumbnail) {
      const isBase64 = Thumbnail.startsWith("data:image");
      setBackgroundImage(isBase64 ? Thumbnail : Thumbnail);
    }
  }, [Thumbnail]);

  return (
    <Link 
      to={`/recipe/${To}`}
      className="recepie-container"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <div className="content">
        <h2>{Title}</h2>
        <ItemLabel Text={Category} />
      </div>
    </Link>
  );
};
