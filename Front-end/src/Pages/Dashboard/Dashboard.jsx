import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import BottomTabs from "../../components/Layout/BottomTabs";
import Navbar from "../../components/UI/Navigation/Navbar/Navbar";
import Layout from "../../components/Layout/Layout";
import authService from "../../ApiServices/auth.service";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Overview",
    },
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const labels = ["Overview"];



const pieOptions = {
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const Dashboard = () => {
  const [coursesWatched, setcoursesWatched] = useState(0);
  useEffect(() => {
    const user = localStorage.getItem("userId");
    authService.GetCourseCount(user).then((response) => {
      setcoursesWatched(response.data.count);
      console.log(response.data.count)
    });
  }, []);

   let data = {
    labels,
    datasets: [
      {
        label: "Modules com.",
        data: coursesWatched,
        backgroundColor: "purple",
      },
      {
        label: "Villages Vis.",
        data: labels.map(() => 20),
        backgroundColor: "blue",
      },
      {
        label: "Surverys Cond.",
        data: labels.map(() => 5),
        backgroundColor: "violet",
      },
      {
        label: "Influencers data",
        data: labels.map(() => 100),
        backgroundColor: "pink",
      },
    ],
  };
  const pieData = {
    labels: ["Influencer", "Participants", "SWOT", "Modules"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, coursesWatched],
        backgroundColor: ["purple", "blue", "violet", "pink"],
        borderColor: ["white", "white", "white", "white"],
        borderWidth: 2,
      },
    ],
  };
  return (
    <Layout>
      <Bar height="250px" options={options} data={data} />
      {/* modulres written data */}
      <div className="my-4 pb-5">
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1"
              style={{ backgroundColor: "purple" }}
            ></div>
            <div>Modules Completed</div>
          </div>
          <div>{coursesWatched}</div>
        </div>
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1 bg-"
              style={{ backgroundColor: "blue" }}
            ></div>
            <div>Village Visited</div>
          </div>
          <div>6</div>
        </div>
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1 "
              style={{ backgroundColor: "violet" }}
            ></div>
            <div>Surveys Conducted</div>
          </div>
          <div>6</div>
        </div>
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div className="p-2 m-1" style={{ backgroundColor: "pink" }}></div>
            <div>Influencer Data</div>
          </div>
          <div>6</div>
        </div>
      </div>
      {/* pie chart */}
      <div className="mt-5 pt-5">
        <Pie options={pieOptions} data={pieData} />
      </div>
      {/* pie detailed data */}
      <div className="my-3 pb-5">
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1"
              style={{ backgroundColor: "purple" }}
            ></div>
            <div>Influencers</div>
          </div>
          <div>{coursesWatched}</div>
        </div>
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1 bg-"
              style={{ backgroundColor: "blue" }}
            ></div>
            <div>Participants</div>
          </div>
          <div>6</div>
        </div>
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1 "
              style={{ backgroundColor: "violet" }}
            ></div>
            <div>Swots</div>
          </div>
          <div>6</div>
        </div>
        <div className="d-flex justify-content-between px-3 my-2 mb-5">
          <div className="d-flex justify-content-start align-items-center">
            <div className="p-2 m-1" style={{ backgroundColor: "pink" }}></div>
            <div>Modules</div>
          </div>
          <div>{coursesWatched}</div>
        </div>
      </div>
      <BottomTabs />
    </Layout>
  );
};

export default Dashboard;
