
import { pictures } from "../../data/pictures";
const seasons = ["spring", "summer", "autumn", "winter"];
const styles = ["classic", "modern", "sports"];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const season = searchParams.get("season")?.toLowerCase();
  const style = searchParams.get("style")?.toLowerCase();
console.log(season);
console.log(style);
  if (season && !seasons.includes(season)) {
    return Response.json(
      { error: "Invalid season" },
      { status: 400 }
    );
  }

  if (style && !styles.includes(style)) {
    return Response.json(
      { error: "Invalid style" },
      { status: 400 }
    );
  }

  const results = pictures.filter((picture) => {
    return (
      (!season || picture.season === season) &&
      (!style || picture.style === style)
    );
  });

  return Response.json({
    count: results.length,
    pictures: results,
  });
}


