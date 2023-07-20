import Image from "next/image";
import { motion } from "framer-motion";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import ProfessionalLayout from "@/components/layout/professional/layout";
import Visual from "@/components/layout/professional/visual";
import Container from "@/components/layout/professional/container";
import { useState, useEffect, Key } from "react";
import { getNotionData } from "@/utils/functions";
import { projectId } from "@/utils/variable";

const DummyCard = ({ index }: { index: Key }) => {
    return (
        <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            key={index}
            className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
            <div className="p-2 rounded shadow-md border border-gray-100">
                <div className="h-40 rounded animate-pulse bg-gray-200"></div>
                <div className="p-2 pb-0 font-mt">
                    <div className="h-6 mb-1 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </div>
        </motion.li>
    );
};

const ProjectDetail = ({ selectedProject }: { selectedProject: any }) => {
    const [loading, setLoading] = useState(true);
    const [notionBlock, setNotionBlock] = useState({});

    useEffect(() => {
        fetch(
            `https://notion-api.splitbee.io/v1/page/${selectedProject.id}`
        ).then((res) => {
            res.json().then((data) => {
                setNotionBlock(data);
                setLoading(false);
            });
        });
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <NotionRenderer blockMap={notionBlock} fullPage={true} />
            )}
        </>
    );
};

const ProjectList = ({
    projectList,
    setProjectList,
    setSelectedProject,
    loading,
    setLoading,
}: {
    projectList: any;
    setProjectList: any;
    setSelectedProject: any;
    loading: any;
    setLoading: any;
}) => {
    useEffect(() => {
        getNotionData(projectId).then((data) => {
            setProjectList(data);
            setLoading(false);
        });
    }, []);
    return (
        <ul className="grid grid-cols-3 gap-4">
            {loading
                ? [1, 2, 3].map((index) => {
                      return <DummyCard index={index} />;
                  })
                : projectList.map((project: any) => {
                      const src = project.properties.Image.files[0].file.url;
                      const name =
                          project.properties.Name.title[0].text.content;
                      const type = project.properties.Type.select.name;

                      return (
                          <motion.li
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                  duration: 0.6,
                                  delay: 0,
                              }}
                              key={project.id as Key}
                              onClick={() => setSelectedProject(project)}
                              className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                          >
                              <div className="p-2 rounded shadow-md border border-gray-100">
                                  {/* 임시 이미지 */}
                                  <div className="relative rounded overflow-hidden">
                                      <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
                                      <Image
                                          className="relative z-10 w-full object-cover"
                                          src={src}
                                          alt={name}
                                          width="160"
                                          height="90"
                                      ></Image>
                                  </div>
                                  <div className="p-2 pb-0 font-mt">
                                      <h3 className="mb-1 text-gray-900 font-extrabold">
                                          {name}
                                      </h3>
                                      <span className="text-gray-500">
                                          {type}
                                      </span>
                                  </div>
                              </div>
                          </motion.li>
                      );
                  })}
        </ul>
    );
};

export default () => {
    const [projectList, setProjectList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState({ id: "" });

    return (
        <ProfessionalLayout>
            <>
                <Visual>
                    <div className="flex mb-8 pt-12 font-mt">
                        <motion.div
                            className="w-1/2"
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <h2 className="mb-6 pt-16 text-5xl font-extrabold text-gray-800">
                                PORTFOLIO
                            </h2>
                            <strong className="block mb-6 text-2xl text-gray-400">
                                This is my proud portfolio. <br />
                                Work with me if you like this
                            </strong>
                            <p className="text-base text-gray-500">
                                Most of my portfolio is web publishing, but I
                                can also do front-end development and planning.
                                And if you would like to entrust me with other
                                tasks, welcome. I can do anything.
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex justify-center w-1/2"
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                            }}
                        >
                            <Image
                                src="/images/profile_01.png"
                                alt="프로필 사진"
                                width="400"
                                height="400"
                            />
                        </motion.div>
                    </div>
                </Visual>
                <Container>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        {selectedProject.id ? (
                            <ProjectDetail selectedProject={selectedProject} />
                        ) : (
                            <ProjectList
                                projectList={projectList}
                                setProjectList={setProjectList}
                                loading={loading}
                                setLoading={setLoading}
                                setSelectedProject={setSelectedProject}
                            />
                        )}
                    </motion.div>
                </Container>
            </>
        </ProfessionalLayout>
    );
};
