import React from "react";
import stats from "../data/StatsContent.js";
import StatsCard from "../components/StatsCard";
import Container from "../components/Container.jsx";
const StatsSection = () => {
  return (
    <div className="wrapper">
      <Container>
        <div className="grid gap-8 items-stretch h-full justify-items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ key, src, description }) => (
            <div key={key}>
              <StatsCard src={src} description={description} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StatsSection;
