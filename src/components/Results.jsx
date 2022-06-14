import React, { useEffect } from "react";
import { useResultsContext } from "../context/ResultsContextProvider";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
import ReactPlayer from "react-player";


const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultsContext();
  const location = useLocation();

  useEffect(() => {
    if(searchTerm) {
      if(location.pathname == "/search") {
        getResults(`/search/q=${searchTerm}&lr=lang_en&hl=en&cr=US'`)
      } else if (location.pathname == "/videos"){
        getResults(`/video/q=${searchTerm} videos`)
      } else if (location.pathname == "/images") {
        getResults(`/image/q=${searchTerm}$`)
      } else if (location.pathname == "/news") {
        getResults(`/news/q=${searchTerm}`)
      }
    }
  }, [searchTerm, location.pathname]);

  if (!searchTerm) return <div className="text-center text-lg">Please enter your search term!</div>
  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="md:w-2/3 md:ml-12 lg:w-1/2 lg:ml-16">
          {results?.results?.map(({ link, title, description }, index) => (
            <div key={index} className="mb-4">
              <a
                href={link}
                target="_blank"
                className="text-blue-600 dark:text-blue-300 text-xl hover:underline"
              >
                {title}
              </a>
              <p className="text-sm text-green-700 dark:text-green-400 break-words">
                {link}
              </p>
              {description && <p className="text-sm break-words leading-6 mt-1">{description}</p>}
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center">
          {results?.image_results?.map(({image, link: {href, title}}, index) => (
            <div className="m-2 w-40">
              <img src={image?.src} alt={title} loading="lazy" className="w-full"/>
              <a
                className="break-words text-xs mt-2"
                href={href} key={index} target="_blank" rel="noreferrer"
              >
                {title}
              </a>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap justify-center">
          {results?.results?.map((video, index) => (
            <div key={index} className="m-2">
              { video.additional_links?.[0].href &&
                <ReactPlayer url={video.additional_links?.[0].href} controls width="320px" height="200px" />
              }
            </div>
          ))}
        </div>
      )
    case "/news":
      return (
        <div className="md:w-2/3 md:ml-12 lg:w-1/2 lg:ml-16">
          {results["entries"]?.map(({ id, links, source, title }) => (
            <div key={id} className="mb-6">
              <a href={links?.[0].href} target="_blank" rel="noreferrer " className="hover:underline">
                <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
              </a>
              <div className="">
                <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline text-green-700 dark:text-green-400"> {source?.href}</a>
              </div>
            </div>
          ))}
        </div>
      );
    default:
      return <div className="text-center text-lg">ERROR! This page not found</div>;
  }
};

export default Results;
