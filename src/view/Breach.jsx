import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import media from "styled-media-query";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import BreachDeatles from "./BreachDeatles";
import LazyLoad from "react-lazyload";

const Breach = ({ breach, indx }) => {
  const { Title, BreachDate, Domain, LogoPath } = breach;
  const [expanded, setExpanded] = useState("");

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      if (JSON.parse(localStorage.getItem("panel" + indx))) {
        setExpanded("panel" + indx);
      }
    }
  }, []);

  const handleChange = (panel) => (event, newExpanded) => {
    if (newExpanded) {
      setExpanded(panel);
      localStorage.setItem(panel, true);
    } else {
      localStorage.removeItem(panel);
      setExpanded(false);
    }
  };

  return (
    <Container className={breach}>
      <Accordion
        expanded={expanded === "panel" + indx}
        onChange={handleChange("panel" + indx)}
      >
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <div className="breach-details title">{Title}</div>
          <div className="breach-details">{BreachDate}</div>
          <div className="breach-details domain">{Domain}</div>
          <div className="breach-details">
            <div className="img">
              <LazyLoad height={200}>
                <img src={LogoPath} alt={Title} />
              </LazyLoad>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <BreachDeatles breach={breach} />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Breach;

const Container = styled.div`
  display: flex;
  padding: 5px;

  ${media.lessThan("small")`
    margin: 2px;
    padding: 0px;
   
  `}
`;
