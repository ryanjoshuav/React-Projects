import { useEffect, useState } from "react";
import { createClient } from "contentful";
import projectsList from "./data.js";

// const client = createClient({
//   space: "qz00uzgg3leh",
//   environment: "master", // defaults to 'master' if not set
//   accessToken: import.meta.env.VITE_API_KEY,
// });

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  //*using contentful
  // const getData = async () => {
  //   try {
  //     const response = await client.getEntries({
  //       content_type: "projects",
  //     });
  //     const projects = response.items.map((item) => {
  //       const { title, url, image } = item.fields;
  //       const id = item.sys.id;
  //       const img = image?.fields?.file?.url;
  //       return { title, url, id, img };
  //     });
  //     setLoading(false);
  //     setProjects(projects);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    // getData();
    setLoading(true);
    setProjects(projectsList);
    setLoading(false);
  }, []);

  return { loading, projects };
};

export default useFetchProjects;
