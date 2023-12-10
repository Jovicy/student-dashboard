import profileImage from "../../assets/image-chess.webp";
import ChartComponent from "../chart/Chart";
import { PlayIcon } from "@heroicons/react/24/solid";
// import SkillBar from "../bars/Bars";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Calendar from "../calendar/Calendar";
import { summaryReport, noticeBoard, courses } from "../../data/database";

const Content = () => {
  return (
    <div className="flex justify-between gap-2">
      <div className="bg-transparent w-3/4 h-full p-2 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="font-bold text-dark-teal text-lg">Summary report</h1>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 w-full">
          {summaryReport.map((report, index) => (
            <div key={index} className="bg-white border-primary-teal border rounded-md flex items-center p-4 gap-2">
              <div className="bg-icon-bg p-2 rounded-md w-10 h-10 flex justify-center items-center">
                <img src={report.avatar} alt="icon" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-grey font-semibold">{report.title}</p>
                <div className="flex justify-between items-center gap-5">
                  <div>
                    <h1 className="text-dark-teal font-bold text-3xl">{report.percentage}</h1>
                  </div>
                  <div>
                    <button className="bg-dark-teal-button text-white p-1 rounded-md font-normal">
                      {report.rating}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-md border-primary-teal border gap-5">
          <div className="border-b border-primary-teal w-full  p-4">
            <h1 className="font-bold text-dark-teal text-lg">Score Record</h1>
          </div>
          <div className="p-4">
            <ChartComponent />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-dark-teal text-lg">My courses</h1>
            </div>
            <div>
              <a href="#" className="font-bold text-dark-teal text-lg">
                More
              </a>
            </div>
          </div>
          <div className="flex flex-wrap w-full justify-between gap-5">
          {courses.map((courses, index) => (
            <div key={index} className="flex flex-col gap-3 w-80 bg-white rounded-md border-primary-teal border p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`rounded-full h-10 w-10 ${courses.boxColor}`}></div>
                  <div>
                    <h1 className="text-thick-grey font-bold">{courses.title}</h1>
                  </div>
                </div>
                <div>
                  <PlayIcon className="h-5 w-5 cursor-pointer text-dark-teal" />
                </div>
              </div>
              <div className="flex justify-between items-center gap-3">
                <div className="w-4/5">
                  {/* <SkillBar percentage={courses.percentage} /> */}
                </div>
                <div className="flex justify-end w-1/5">
                  <span className="text-thick-grey font-normal">{courses.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      <div className="bg-white w-1/4 h-full rounded-md p-4 flex flex-col gap-5">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="font-bold text-dark-teal text-lg">My profile</h1>
          </div>
          <div className="flex items-center gap-2 text-dark-teal font-normal">
            <p>Edit</p>
            <PencilSquareIcon className="h-5 w-5 text-dark-teal font-bold" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <div className="flex justify-center w-full">
            <img
              src={profileImage}
              alt="image"
              className="rounded-md w-3/4 h-full"
            />
          </div>
          <div className="flex flex-col text-center justify-center w-full">
            <h1 className="font-bold text-dark-teal text-lg">BamideleDml</h1>
            <p className="text-grey font-bold">Student ID: 155623002</p>
            <p className="text-grey text-sm font-normal">
              5th grade | 2nd semester
            </p>
          </div>
        </div>
        <div>
          <Calendar />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-bold text-dark-teal text-lg">Notice board</h1>
          </div>
          <div className="flex flex-col gap-4">
          {noticeBoard.map((notice, index) => (
            <div key={index} className="flex gap-2 items-center">
              <div>
                <img src={notice.img} alt="image" className="rounded-md" />
              </div>
              <div>
                <h3 className="text-xs font-bold">
                  {notice.title}
                </h3>
                <p className="text-xs font-normal text-grey">By: {notice.sentBy}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
