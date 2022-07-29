import React from "react";
import { FiChevronsRight } from "react-icons/fi";

function CardInfo(props) {
  const { id, job, company, start, end, duties } = props.info;

  return (
    <div>
      <h3>{job}</h3>
        <h4 className="card-company">{company}</h4>
      <p className="card-date">
        {start} - {end}
      </p>
      <div className="card-duties">
        {duties.map((duty, index) => {
          return (
            <div key={index} className="card-duty">
              <div className="right-icon">
                <FiChevronsRight />
              </div>
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardInfo;
