import Image from "next/image";
import { motion } from "framer-motion";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";
import Container from "@/components/layout/container";
import { useState, useEffect, Key } from "react";
import { getNotionData } from "@/utils/functions";
import { projectId } from "@/utils/variable";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import { NotionPortfolioProps } from "@/types/notion";
import { getPortfolioData } from "@/function/notion";

export const PortfolioUl = ({
    children,
    className,
}: {
    children: React.ReactElement;
    className?: string;
}) => {
    return (
        <ul
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
        >
            {children}
        </ul>
    );
};

const ProjectDetail = ({
    selectedProject,
    setSelectedProject,
}: {
    selectedProject: any;
    setSelectedProject: any;
}) => {
    const [loading, setLoading] = useState(true);
    const [notionBlock, setNotionBlock] = useState({});
    const router = useRouter();
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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="animate-spin mx-auto w-10 h-10 text-indigo-600"
                    fill="currentColor"
                >
                    <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
                </svg>
            ) : (
                <div className="flex flex-col justify-center">
                    <NotionRenderer blockMap={notionBlock} fullPage={true} />
                    <div className="mt-10">
                        <button
                            className="flex items-center mx-auto px-4 py-0.5 bg-gray-900 text-white text-base rounded font-mt hover:bg-gray-500 active:bg-gray-700"
                            onClick={() => {
                                setSelectedProject({});
                                window.history.pushState("", "", "/portfolio");
                                router.push("/portfolio");
                                router.query.id = "";
                            }}
                        >
                            목록으로 돌아가기
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 448 512"
                                fill="currentColor"
                                className="ml-2"
                            >
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </button>
                    </div>
                </div>
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
    const router = useRouter();
    useEffect(() => {
        getNotionData(projectId).then((data) => {
            setProjectList(data);
            setLoading(false);
            if (router.query.id) {
                console.log(router.query.id);
                const selectedProject = data.find(
                    (project: any) => project.id === router.query.id
                );
                setSelectedProject(selectedProject);
            }
        });
    }, []);
    return (
        <PortfolioUl>
            {loading
                ? [1, 2, 3].map((index) => {
                      return (
                          <li key={index}>
                              <Card />
                          </li>
                      );
                  })
                : projectList.map((project: NotionPortfolioProps) => {
                      const { title, type, src } = getPortfolioData(project);
                      return (
                          <li
                              key={project.id}
                              onClick={() => setSelectedProject(project)}
                              className="cursor-pointer"
                              tabIndex={0}
                          >
                              <Card title={title} subText={type} src={src} />
                          </li>
                      );
                  })}
        </PortfolioUl>
    );
};

export default () => {
    const [projectList, setProjectList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState({ id: "" });

    return (
        <Layout>
            <>
                <Visual>
                    <div className="flex mb-8 pb-12 pt-12 font-mt sm:pb-0">
                        <motion.div
                            className="flex flex-col justify-center w-full sm:w-1/2"
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <strong className="block text-4xl text-center text-gray-900 sm:mb-6 sm:text-left">
                                Portfolio
                            </strong>
                            <p className="hidden text-base text-gray-600 sm:block">
                                제가 그동안 작업한 프로젝트들을 소개합니다.
                                <br />
                                회사에서 진행한 프로젝트, 개인적으로 진행한
                                프로젝트 등을 기록해놓았습니다.
                            </p>
                        </motion.div>
                        <motion.div
                            className="hidden w-1/2 sm:flex"
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                            }}
                        >
                            <Image
                                className="mx-auto mt-10"
                                src="/images/portfolio.png"
                                alt="웹사이트 이미지"
                                width="350"
                                height="200"
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
                            <ProjectDetail
                                selectedProject={selectedProject}
                                setSelectedProject={setSelectedProject}
                            />
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
        </Layout>
    );
};
