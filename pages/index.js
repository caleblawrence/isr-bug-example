import Link from "next/link";
import React from "react";

const ISRTest = ({ time }) => {
  return (
    <div style={{ margin: 50 }}>
      <p style={{ fontSize: 30 }}>{time}</p>
      <Link href="example-static-page">Link to static page</Link>
    </div>
  );
};

export async function getStaticProps() {
  let currentTime = new Date();
  currentTime.toLocaleString("en-US", { timeZone: "America/Chicago" });

  console.log("currentTime", currentTime);
  return {
    props: {
      time: currentTime.toLocaleTimeString(),
    },
    revalidate: 60,
  };
}

export default ISRTest;
