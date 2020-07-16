import React from "react";
import { Link } from "gatsby";

import { loremIpsum } from "lorem-ipsum";

import { IconContext } from "react-icons";
import {
  FaCalendarAlt,
  FaAward,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

import Layout from "../components/layout";
import Image from "../components/profile-image";
import SEO from "../components/seo";

const socials = [
  {
    Icon: FaGithub,
    title: "GitHub",
    link: "https://github.com/AndrewTBurks",
  },
  {
    Icon: FaTwitter,
    title: "Twitter",
    link: "https://twitter.com/AndrewTBurks",
  },
  {
    Icon: FaLinkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/andrew-burks/",
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      // className="panel"
      style={{
        maxWidth: `100%`,
        marginBottom: `1.45rem`,
        display: "flex",
        alignItems: `flex-start`,
        flexFlow: `row wrap`,
        boxSizing: "border-box",
        color: "var(--text-sec)",
      }}
    >
      <div
        style={{
          padding: `20px`,
          flex: `1 0 400px`,
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontWeight: "bold", color: "var(--accent)" }}>
          Hi, I'm Andrew!
        </h1>
        <p>
          I am a Ph.D. Candidate in the Computer Science department at the
          University of Illinois at Chicago. I am currently a Research Assistant
          at the Electronic Visualization Laboratory at UIC. I have experience
          working on research projects related to data visualization and the
          development of collaborative software for large/tiled displays.
        </p>

        <p>
          Through my work, I have gained hands-on experience in two main areas:{" "}
          <strong>
            Data Visualization and Visual Analytics, and Human Computer
            Interaction
          </strong>
          . Broadly, I am interested in the role of visualization and
          "human-data" interfaces in analytical processes and workflows.
        </p>
      </div>
      <div
        style={{
          flex: `1 0 400px`,
          maxWidth: "100%",
          margin: 20,
        }}
      >
        <div
          style={{
            borderRadius: "100%",
            overflow: "hidden",
            boxShadow:
              "0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)",
          }}
        >
          <Image />
        </div>
        <div
          className="socials"
          style={{
            width: "100%",
            height: 60,
            background: "var(--content)",
            margin: "10px 0",
            display: "flex",
            padding: 10,
            placeItems: "center",
            borderRadius: 10,
            boxShadow:
              "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          {socials.map(({ Icon, title, link }) => (
            <a
              href={link}
              target="__blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "auto",
              }}
            >
              {title} <Icon fontSize={28} style={{ marginLeft: 4 }} />
            </a>
          ))}
        </div>
      </div>

      <div style={{ padding: 20 }} id="my-work">
        <h2>My Work</h2>

        <p>
          In the data visualization research in which I participated, I applied
          domain-agnostic design to visualization projects across{" "}
          <strong>domain science</strong>, <strong>social good</strong>,{" "}
          <strong>operational workflow support</strong>. My science-supporting
          visualization research was carried out across a broad range of
          scientific domains from computational fluid dynamics (CFD), to biology
          and precision medicine, to high-capacity networking instrumentation.
        </p>

        <p>
          Additionally, I work on the SAGE2 collaborative system. SAGE2™ -
          Scalable Amplified Group Environment is an NSF $5M project to build a
          web-based system for tiled display walls to enhance data intensive
          co-located and remote collaboration. My research in SAGE2 focuses on
          providing expressive support to collaborative data exploration
          workflows. My first two projects were an application for visualizing
          arbitrary Comma-Separated Value (CSV) formatted data, and a layout
          system which supports the application of geometric layout constraints
          to digital content in the freeform collaborative workspace. My current
          research focuses on supporting data exploration within the SAGE2
          workspace. To this end, I have created a JupyterLab extension allowing
          users to display notebooks and reactive notebook cells in SAGE2. To
          build native support into SAGE2 for the exploratory analysis seen in
          Jupyter Notebooks, I designed and implemented the "VisSnippets" system
          in SAGE2. Supporting impromptu collaborative data exploration,
          VisSnippets allows users to write and compose modular analysis blocks
          for data retrieval, transformation/analysis, and visualization into
          branching data pipelines.
        </p>

        <strong>
          To learn more, see my <Link to="/projects">Projects</Link> and{" "}
          <Link to="/publications">Publications</Link>
        </strong>
      </div>

      <div style={{ padding: 20, marginTop: 10 }}>
        <h2>Awards</h2>
        <table>
          <thead>
            <IconContext.Provider
              value={{
                size: "1.5em",
                color: "var(--accent)",
              }}
            >
              <tr>
                <th style={{ textAlign: "center" }}>
                  <FaCalendarAlt />
                </th>
                <th style={{ textAlign: "center" }}>
                  <FaAward />
                </th>
                <th style={{ textAlign: "center" }}></th>
              </tr>
            </IconContext.Provider>
          </thead>
          <tbody>
            <tr>
              <td>2020</td>
              <td style={{ fontWeight: "bold", color: "var(--accent)" }}>
                Honorable Mention
              </td>
              <td>
                PEARC'20: Application Software, Suppport, and Outcomes Track
                (Student Papers)
              </td>
            </tr>
            <tr>
              <td>2019</td>
              <td style={{ fontWeight: "bold", color: "var(--accent)" }}>
                Honorable Mention
              </td>
              <td>NSF Graduate Research Fellowship Program (GRFP)</td>
            </tr>
            <tr>
              <td rowSpan={2}>2017</td>
              <td style={{ fontWeight: "bold", color: "var(--accent)" }}>
                Honorable Mention - Clarity in Visual Communication
              </td>
              <td>IEEE VIS 2017 VAST Challenge: Mini-Challenge 2</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", color: "var(--accent)" }}>
                Honorable Mention - Good Interactive Image Explorer
              </td>
              <td>IEEE VIS 2017 VAST Challenge: Mini-Challenge 3</td>
            </tr>
            <tr>
              <td rowSpan={2}>2016</td>
              <td style={{ fontWeight: "bold", color: "var(--accent)" }}>
                Honorable Mention
              </td>
              <td>IEEE VIS Conference: VGTC VPG Data Visualization Contest</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", color: "var(--accent)" }}>
                Certificate of Merit
              </td>
              <td>IEEE VIS Conference: SciVis Contest</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
