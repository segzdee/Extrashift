import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Button } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Seo from '@/shared/layout-components/seo/seo';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';

const FullCalenderComponent = () => {

  let eventGuid = 0;
  let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "Meeting",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T16:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }
  const initialstate1 = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "1001",
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "1002",
      },
    ],

    events: [
      {
        title: "Calendar Events ",
        id: "1",
        bg: "bg-primary",
        border: "border-primary",
      },
      {
        title: "Birthday Events",
        id: "2",
        bg: " bg-secondary",
        border: "border-secondary",
      },
      {
        title: "Holiday Calendar",
        id: "3",
        bg: "bg-success",
        border: "border-success",
      },
      { title: "Office Events", id: "4", bg: "bg-info", border: "border-info" },
      {
        title: "Other Events",
        id: "5",
        bg: "bg-warning",
        border: "border-warning",
      },
      {
        title: "Festival Events",
        id: "6",
        bg: "bg-danger",
        border: "border-danger",
      },
      {
        title: "Timeline Events",
        id: "7",
        bg: "bg-success",
        border: "border-success",
      },
    ],
  };
  const [state] = useState(initialstate1);

  useEffect(() => {
    let draggableEl: any = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        let classValue = eventEl.getAttribute("class");
        return {
          title: title,
          id: id,
          className: classValue,
        };
      },
    });
  }, []);

  function renderEventContent(eventInfo: any) {

    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  const handleEventClick = (clickInfo: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };
  const handleEvents = (_events: any) => { };

  const handleDateSelect = (selectInfo: any) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  return (
    <div>
      <Seo title={"Full Calendar"} />
      <Pageheader title="Full Calendar" heading="Apps" active="Full Calendar" />
      <Row>
        <Col xl={3}>
          <Card className="custom-card">
            <div className="card-header d-grid">
              <Button variant='' className="btn btn-primary-light btn-wave"><i className="ri-add-line align-middle me-1 fw-semibold d-inline-block"></i>Create New Event</Button>
            </div>
            <div className="card-body p-0">
              <div id="external-events" className="border-bottom p-3">
                {state.events.map((event) => (
                  <div
                    className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} border ${event.border}`}
                    title={event.title}
                    key={event.id}>
                    <div className="fc-event-main">{event.title}</div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-bottom">
                <div className="d-flex align-items-center mb-4 justify-content-between">
                  <h6 className="fw-semibold">
                    Activity :
                  </h6>
                  <Button variant='' className="btn btn-primary-light btn-sm btn-wave">View All</Button>
                </div>
                <ul className="list-unstyled mb-0 fullcalendar-events-activity" id="full-calendar-activity">
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-semibold">
                        Monday, Jan 1,2023
                      </p>
                      <span className="badge bg-light text-default mb-1">12:00PM - 1:00PM</span>
                    </div>
                    <p className="mb-0 text-muted fs-12">
                      Meeting with a client about new project requirement.
                    </p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-semibold">
                        Thursday, Dec 29,2022
                      </p>
                      <span className="badge bg-success mb-1">Completed</span>
                    </div>
                    <p className="mb-0 text-muted fs-12">
                      Birthday party of niha suka
                    </p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-semibold">
                        Wednesday, Jan 3,2023
                      </p>
                      <span className="badge bg-warning-transparent mb-1">Reminder</span>
                    </div>
                    <p className="mb-0 text-muted fs-12">
                      WOrk taget for new project is completing
                    </p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-semibold">
                        Friday, Jan 20,2023
                      </p>
                      <span className="badge bg-light text-default mb-1">06:00PM - 09:00PM</span>
                    </div>
                    <p className="mb-0 text-muted fs-12">
                      Watch new movie with family
                    </p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-semibold">
                        Saturday, Jan 07,2023
                      </p>
                      <span className="badge bg-danger-transparent mb-1">Due Date</span>
                    </div>
                    <p className="mb-0 text-muted fs-12">
                      Last day to pay the electricity bill and water bill.need to check the bank details.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </Col>
        <div className="col-xl-9">
          <Card className="custom-card overflow-hidden">
            <Card.Header>
              <Card.Title>Full Calendar</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id='calendar2'>
                <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay", }}
                  initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true}
                  initialEvents={INITIAL_EVENTS} select={handleDateSelect} eventContent={renderEventContent} eventClick={handleEventClick}
                  eventsSet={handleEvents}
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </div>
  );
}

FullCalenderComponent.layout = "Contentlayout";

export default FullCalenderComponent;

