import React from 'react';

import Typography from '../components/Typography';

export default function About() {
  return <>
      <div className="panel">
        <div className="panel-section text">
          <Typography type="heading special">About Me</Typography>

          <Typography type="subheading">My Work</Typography>

          <Typography type="default">
            Through my work, I have gained hands-on experience in two main areas:
            <strong>
              {" "}
              Data Visualization and Visual Analytics, and Human Computer
              Interaction
            </strong>. Broadly, I am interested in the role of visualization and "human-data" interfaces in analytical processes and workflows.
          </Typography>
          <Typography type="default"/>
          <Typography type="default">
            In the data visualization research in which I participated, I
            applied domain-agnostic design to visualization projects across
            domain science, social good, and operational workflow support. My
            science-supporting visualization research was carried out across a
            broad range of scientific domains from computational fluid
            dynamics (CFD), to biology and precision medicine, to
            high-capacity networking instrumentation.
          </Typography>
          <Typography type="default">
            <strong><span style={{color:"#0EB87A"}}>SAGE2™</span> - Scalable Amplified Group Environment</strong> is an
            NSF $5M project to build a web-based system for tiled display walls to
            enhance data intensive co-located and remote collaboration. My research
            in SAGE2 focuses on providing expressive support to collaborative data
            exploration workflows. My first two projects were an application for
            visualizing arbitrary Comma-Separated Value (CSV) formatted data, and
            a layout system which supports the application of geometric layout
            constraints to digital content in the freeform collaborative workspace.
            My current research focuses on supporting data exploration within the
            SAGE2 workspace. To this end, I have created a JupyterLab extension
            allowing users to display notebooks and reactive notebook cells in SAGE2.
            To build native support into SAGE2 for the exploratory analysis seen
            in Jupyter Notebooks, I designed and implemented the "VisSnippets"
            system in SAGE2. Supporting impromptu collaborative data exploration,
            VisSnippets allows users to write and compose modular analysis blocks
            for data retrieval, transformation/analysis, and visualization into
            branching data pipelines.
          </Typography>

          <Typography type="subheading">Honors and Awards</Typography>
          <Typography type="default" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "stretch" }}>
            <div style={{ flex: 0, padding: "5px 20px" }}>2017</div>

            <div style={{ flex: 1 }}>
              <div>
                <div type="default">
                  <strong>
                    Honorable Mention - Clarity in Visual Communication
                  </strong>, IEEE VIS 2017 VAST Challenge Mini-Challenge 2.
                </div>

                <Typography type="caption">Phoenix, AZ.</Typography>
              </div>
              <div>
                <div type="default">
                  <strong>
                    Honorable Mention - Good Interactive Image Explorer
                  </strong>, IEEE VIS 2017 VAST Challenge Mini-Challenge 3.
                </div>

                <Typography type="caption">Phoenix, AZ.</Typography>
              </div>
            </div>
          </Typography>
          <Typography type="default" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "stretch" }}>
            <div type="default" style={{ flex: 0, padding: "5px 20px" }}>
              2016
            </div>
            <div style={{ flex: 1 }}>
              <div>
                <div type="default">
                  <strong>Honorable Mention</strong>, IEEE VIS Conference: VGTC VPG Data Visualization Contest.
                </div>

                <Typography type="caption">Baltimore, MD.</Typography>
              </div>
            </div>
          </Typography>
        </div>
      </div>
    </>;
}