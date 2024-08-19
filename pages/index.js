import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillGithub
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import my_image from "../public/my-image.jpg";
import apache_spark from "../public/apache-spark.svg";
import c from "../public/c-plusplus.svg";
import css3 from "../public/css-3.svg";
import flask from "../public/flask.svg";
import git from "../public/git-icon.svg";
import html5 from "../public/html-5.svg";
import javascript from "../public/javascript.svg";
import mongodb from "../public/mongodb-icon.svg";
import powerbi from "../public/microsoft-power-bi.svg";
import mysql from "../public/mysql.svg";
import node from "../public/nodejs-icon.svg";
import opencv from "../public/opencv.svg";
import pandas from "../public/pandas-icon.svg";
import pytorch from "../public/pytorch-icon.svg";
import react from "../public/react.svg";
import seaborn from "../public/seaborn-icon.svg";
import selenium from "../public/selenium.svg";
import tensorflow from "../public/tensorflow.svg";
import python from "../public/python.svg";
import Amplify from "../public/Amplify.svg";
import API_Gateway from "../public/API Gateway.svg";
import DynamoDB from "../public/DynamoDB.svg";
import EC2 from "../public/EC2.svg";
import EventBridge from "../public/EventBridge.svg";
import Lambda from "../public/Lambda.svg";
import SNS from "../public/Simple Notification Service.svg";
import Image from "next/image";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/Shreyas_Shende_Resume_2024_New.pdf"
                  download="Shreyas_Shende_Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Shreyas Shende
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Backend Developer and Data Science Enthusiast 
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Enthusiastic Computer Science Master's student with a strong focus on Backend Development and Data Science/ML, leveraging hands-on experience in cloud technologies and real-world projects to deliver innovative solutions.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/shreyas-shende-2a547a1b0/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/ShreyasShende3" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="mailto:shreyasshende222@gmail.com">
              <AiFillMail />
            </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={my_image} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Skills</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-2 rounded-xl my-10  dark:bg-white flex-1">
              <h3 className="text-lg font-large pt-8 pb-10  ">
                Programming Languages and Web Dev
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                <div>
                  <Image src={python} width={100} height={100} className="m-2" />
                  <p className="mt-2 text-center dark:text-black">Python</p>
                </div>
                <div>
                  <Image src={c} width={100} height={100} className="m-2" />
                  <p className="mt-2 text-center dark:text-black">C++</p>
                </div>
                <div>
                  <Image src={javascript} width={100} height={100} className="m-2" />
                  <p className="mt-2 text-center dark:text-black">JavaScript</p>
                </div>
                <div>
                  <Image src={html5} width={100} height={100} className="m-2" />
                  <p className="mt-2 text-center dark:text-black">HTML5</p>
                </div>
                <div>
                  <Image src={css3} width={100} height={100} className="m-2" />
                  <p className="mt-2 text-center dark:text-black">CSS3</p>
                </div>
                <div>
                  <Image src={node} width={100} height={100} className="m-2" />
                  <p className="mt-2 text-center dark:text-black">NodeJS</p>
                </div>
                <div>
                  <Image src={react} width={100} height={100} className="m-2" />
                  <p className="mt-2 text-center dark:text-black">ReactJS</p>
                </div>
              </div>
            </div>
            <div className="text-center shadow-lg p-2 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-large pt-8 pb-10 ">
                Tools and AWS Services 
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
              <div>
                <Image src={flask} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">Flask</p>
              </div>
              <div>
                <Image src={git} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">Git</p>
              </div>
              <div>
                <Image src={selenium} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">Selenium</p>
              </div>
              <div>
                <Image src={powerbi} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">Power BI</p>
              </div>
              <div>
                <Image src={Amplify} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">AWS Amplify</p>
              </div>
              <div>
                <Image src={API_Gateway} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">API Gateway</p>
              </div>
              <div>
                <Image src={DynamoDB} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">
                <span className="block">Dynamo</span>
                <span className="block">DB</span>
                </p>
              </div>
              <div>
                <Image src={EC2} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">EC2</p>
              </div>
              <div>
                <Image src={EventBridge} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">
                <span className="block">Event</span>
                <span className="block">Bridge</span>
                </p>
              </div>
              <div>
                <Image src={Lambda} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">Lambda</p>
              </div>
              <div>
                <Image src={SNS} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">SNS</p>
              </div>
              </div>
            </div>
            <div className="text-center shadow-lg p-2 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-large pt-8 pb-10 ">Data and Machine Learning</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <div>
                <Image src={pandas} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">Pandas</p>
              </div>
              <div>
                <Image src={tensorflow} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">TensorFlow</p>
              </div>
              <div>
                <Image src={pytorch} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">PyTorch</p>
              </div>
              <div>
                <Image src={opencv} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">OpenCV</p>
              </div>
              <div>
                <Image src={seaborn} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">Seaborn</p>
              </div>
              <div>
                <Image src={mongodb} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">MongoDB</p>
              </div>
              <div>
                <Image src={mysql} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">MySQL</p>
              </div>
              <div>
                <Image src={apache_spark} width={100} height={100} className="m-2" />
                <p className="mt-2 text-center dark:text-black">Apache Spark</p>
              </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
          </div>
          <div className="space-y-10 mt-6">
            {/* Project Card */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-xl font-medium dark:text-white">Stock Watch: Real-Time Stock Tracker</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Developed a stock monitoring tool using various AWS services and Finnhub API that offers real-time tracking, preference management, and user notifications for a seamless experience.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">AWS Lambda</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">AWS DynamoDB</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">AWS SNS</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">AWS EventBridge</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">ReactJS</span>
                </div>
              </div>
              <div className="ml-4">
                <a href="https://test.d37u5nlthhg7ro.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-md">Live Demo</button>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-xl font-medium dark:text-white">NFL Management System</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Developed a full-stack project using ReactJS for the frontend and ExpressJS for the backend. Implemented web scraping with BeautifulSoup4 in Python to gather comprehensive NFL data for three seasons (2021-2023), including players, coaches, teams, finances, and stats.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">BeautifulSoup4</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">ReactJS</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">ExpressJS</span>
                </div>
              </div>
              <div className="ml-4">
                <a href="https://github.com/ShreyasShende3/NFL_Management_System" target="_blank" rel="noopener noreferrer">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-md">GitHub</button>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-xl font-medium dark:text-white">Impact of Global Economy Indicators on the GDP</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Performed data analysis on global economic indicators and their impact on the GDP of various countries, utilizing Python and various data visualization libraries.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Time-Series Analysis</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Random Forests</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Pandas</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Plotly</span>
                </div>
              </div>
              <div className="ml-4">
                <a href="https://github.com/ShreyasShende3/Impact-of-Global-Economy-Indicators-on-the-GDP" target="_blank" rel="noopener noreferrer">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-md">GitHub</button>
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-xl font-medium dark:text-white">Classroom Attendance System with Face Recognition</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                Developed a Face Detection Application for automating classroom attendance management during COVID-19. The system identifies students and records attendance in an Excel sheet based on input photos.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">OpenCV</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Numpy</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Harrcascade-Classifier</span>
                </div>
              </div>
              <div className="ml-4">
                <a href="https://github.com/ShreyasShende3/Face-Recognition" target="_blank" rel="noopener noreferrer">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-md">GitHub</button>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
