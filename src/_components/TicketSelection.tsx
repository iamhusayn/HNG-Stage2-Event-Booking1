import React from "react";

const Events = () => {
  return (
    <div className="events-container">
      <div className="events-header">
        <div className="events-header-title">
          <div className="container-head">
            <h2 className="ticket-selection">Ticket Selection</h2>
            <p className="tab-count">Step 1/3</p>
          </div>

          <hr className="m-8" />

          <div className="events-header-content">
            <div className="event-content ">
              <div className="content-header">
                <h3 className="event-theme">Techember Fest {'"'}25</h3>
                <p className="event-motto">
                  Join us for an unforgettable experience at <br /> [Event
                  Name]! Secure your spot now.
                </p>
              </div>
              <p className="event-location">
                📍 [Event Location] || March 15, 2025 | 7:00 PM
              </p>
            </div>

            <hr className="m-8" />

            <p className="ticket-type-header ">Select Ticket Type:</p>

            <div className="tickets">
              <div className="ticket ticket1">
                <h3>Free</h3>
                <p>
                  REGULAR ACCESS <br /> 20/52
                </p>
              </div>
              <div className="ticket ticket2">
                <h3>$150</h3>
                <p>
                  VIP ACCESS <br />
                  20/52
                </p>
              </div>
              <div className="ticket ticket3">
                <h3>$150</h3>
                <p>
                  VVIP ACCESS <br />
                  20/52
                </p>
              </div>
            </div>

            <form action="" method="POST" className="">
              <label className="number-of-tickets">Number of tickets</label>
              <select className="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
