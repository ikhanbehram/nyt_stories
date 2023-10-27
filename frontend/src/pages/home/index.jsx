import { Link } from "react-router-dom";
import Tab from "../../components/shared/Tab";
import NytContainer from "../../layouts/nytContainer";

const Tabs = [
  {
    id: "general",
    key: "General",
    value: "home",
  },
  {
    id: "arts",
    key: "Arts",
    value: "arts",
  },
  {
    id: "us",
    key: "US",
    value: "us",
  },
  {
    id: "world",
    key: "World",
    value: "world",
  },
];

function HomePage() {   
  return (
    <div className="bg-nyt-darkest h-[100vh] pt-2">
      <NytContainer>
       <div className="flex flex-col gap-3 h-[75vh] items-center justify-center">
       <div className="flex justify-center">
          <h1 className="text-nyt-primary font-extrabold font-sans text-4xl">
            New York Times Top Stories
          </h1>
        </div>
        <div className="flex gap-2 justify-center">
          {Tabs.map((tab) => {
            return (
              <Link to={`/stories?tab=${tab.value}`}>
                <Tab title={tab.key} key={tab.id} />
              </Link>
            );
          })}
        </div>
       </div>
      </NytContainer>
    </div>
  );
}

export default HomePage;
