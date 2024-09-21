import React from 'react'

export const Criteria = () => {
  const criteria = [
    { title: "Quality of content", detail: "HD" },
    { title: "Video Production", detail: "Premium" },
    { title: "Sound Quality", detail: "Good" },
    { title: "Social Media Upload", detail: "3+ Platform" }
  ];

  return (
    <>
      <div style={{backgroundColor: "#040615", padding: "30px"}}>
        <div style={{color: "white", fontSize: "30px", paddingInline:"100px"}}>Judging Criteria</div>

        <div style={{display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", marginTop: "25px"}}>
          {criteria.map((item, index) => (
            <div key={index} className='card' style={{padding: "15px", paddingInline: "50px"}}>
              <p style={{color: "white", fontSize: "20px"}}>{item.title}</p>
              <p style={{color: "white", fontSize: "25px", marginTop: "10px"}}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
