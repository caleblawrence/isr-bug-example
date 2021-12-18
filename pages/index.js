import React from "react";

const ISRTest = ({ time }) => {
 
  return (
      <div style={{margin: 50}}>
            <p style={{fontSize: 30}}>{time}</p>
      </div>
  );
};

export async function getStaticProps() {
  const currentTime = new Date()
  currentTime.toLocaleString('en-US', { timeZone: 'America/New_York' })

  console.log("currentTime", currentTime);
  return {
    props: {
      time: currentTime.toLocaleTimeString(),
    },
    revalidate: 60,
  };
}

export default ISRTest;