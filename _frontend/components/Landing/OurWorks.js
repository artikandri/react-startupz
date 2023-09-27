import React, { useEffect } from "react";
import PropTypes from "prop-types";
import pc1 from "@/assets/images/pc1.png";
import pc2 from "@/assets/images/pc2.png";
import pc3 from "@/assets/images/pc3.png";
import pc4 from "@/assets/images/pc4.png";
import Button from "@/components/Button";

const workData = [
  {
    title: "Tolq",
    description:
      "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
    image: pc1,
    color: "text-darkseagreen",
  },
  {
    title: "Feedback Labs",
    description:
      "Feedback Labs turns feedback into actionable insights for your team.",
    image: pc2,
    color: "text-lightsteelblue",
  },
  {
    title: "Codekeeper",
    description:
      "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
    image: pc3,
    color: "text-darkcyan",
  },
  {
    title: "LegalSite",
    description:
      "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
    image: pc4,
    color: "text-mediumpurple",
  },
];

const WorkItem = ({ work }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-10 shadow-lg rounded-4xl">
      <h5 className={`${work.color} text-3xl`}>{work.title}</h5>
      <p className="text-center md:w-3/4">
        <i>{work.description}</i>
      </p>
      <img
        className="w-full md:w-96"
        src={work.image}
        alt={`Image for ${work.title}`}
      />
      <Button
        type={"button"}
        size={"sm"}
        state={"secondary"}
        name={"More"}
        className={"mt-4 "}
        aria-expanded="false"
      >
        More
      </Button>
    </div>
  );
};
WorkItem.propTypes = {
  work: PropTypes.object.isRequired,
};

export default function OurWorks() {
  return (
    <main
      className="container py-24 md:py-44 xl:px-[8rem] px-6 overflow-hidden"
      id="OurWorks"
    >
      <h4 className="text-4xl text-center md:text-5xl">Our works</h4>
      <div className="grid gap-6 pt-16 lg:grid-cols-2">
        {workData.map((work, index) => (
          <WorkItem key={index} work={work} />
        ))}
      </div>
    </main>
  );
}
