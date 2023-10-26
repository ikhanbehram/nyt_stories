import { useLocation, Link } from "react-router-dom";
import NytContainer from "../../layouts/nytContainer";
import useStoriesApi from "../../hooks/useStoriesApi";
import Card from "../../components/shared/Card";

function NytStoriesPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const { isLoading, data, error } = useStoriesApi(query.get("tab"));
  return (
    <div className="bg-nyt-darkest h-full py-2">
      {query.get("tab") ? (
        <NytContainer>
          <div className="flex flex-col gap-3">
            <div className="flex">
              <h1 className="text-nyt-primary font-extrabold font-sans text-4xl">
                New York Times {query.get("tab").toUpperCase()} Stories
              </h1>
            </div>
          </div>
          {!error && !isLoading && data && (
            <div className="flex gap-3 flex-wrap py-4">
              {data.map((result) => {
                return (
                  <Card
                    title={result.title}
                    description={result.abstract}
                    image={result.multimedia[0].url}
                    link={result.url}
                  />
                );
              })}
            </div>
          )}
          {isLoading && (
            <div className="h-[90vh] w-full flex justify-center items-center">
              <div className="spinner"></div>
            </div>
          )}

          {error && (
            <div className="text-red-500 h-[100vh]">
              Something Went Wrong ....
            </div>
          )}
        </NytContainer>
      ) : (
        <div className="h-[100vh] flex justify-center items-center">
          <Link to="/" className=" underline text-nyt-primary">
            Go back home and choose stories
          </Link>
        </div>
      )}
    </div>
  );
}
export default NytStoriesPage;
