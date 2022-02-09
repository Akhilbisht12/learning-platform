import React, { useEffect, useState } from "react";
import authService from "../../ApiServices/auth.service";
import Layout from "../../components/Layout/Layout";
import processString from "react-process-string";
import moment from "moment";

const Meetings = () => {
  const [user, setUser] = useState({ meetings: [] });
  let config = [
    {
      regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
      fn: (key, result) => (
        <span key={key}>
          <a
            target="_blank"
            href={`${result[1]}://${result[2]}.${result[3]}${result[4]}`}
          >
            {result[2]}.{result[3]}
            {result[4]}
          </a>
          {result[5]}
        </span>
      ),
    },
    {
      regex: /(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
      fn: (key, result) => (
        <span key={key}>
          <a
            target="_blank"
            href={`http://${result[1]}.${result[2]}${result[3]}`}
          >
            {result[1]}.{result[2]}
            {result[3]}
          </a>
          {result[4]}
        </span>
      ),
    },
  ];
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const getUser = async () => {
      await authService.GetUser(userId).then((response) => {
        setUser(response.data.user);
      });
    };
    getUser();
  }, []);
  return (
    <Layout>
      <div className="my-3 mx-2">
        {user.meetings.length === 0 ? (
          <p className="fw-bold">No upcoming meetings</p>
        ) : (
          user.meetings.map((item) => {
            return (
              <div className="card my-2">
                <div className="card-body">
                  <div>Date: {moment(item.date).format("DD-MMM-YY")}</div>
                  <div>Agenda: {item.agenda}</div>
                  <div>Meeting Link: {processString(config)(item.link)}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
};

export default Meetings;
