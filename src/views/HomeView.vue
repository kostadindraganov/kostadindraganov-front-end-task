<template>
  <main class="container mb-10 px-4">
   <img src="jiminny-calendar-example.png " alt="task" srcset="">

   <section>
    <p>
      Jiminny Calendar is a web app designed to display calendar events for a specific day (from 7AM to 9PM). Each event has startTime and endTime attributes and they represent the time in minutes from the start of the day. For instance { startTime: 60, endTime: 150 } represents an event which start at 08:00AM and ends at 09:30AM. In the events.json file you'll find an exemplary dataset of events. The events MUST not visually overlap. If two or more events collide, they MUST have the same width.
    </p> 

    <h2>Design</h2>
    <p>The events' container should be 720px wide and 840px long.</p>
    <p>The styling of the events should match the one from the screenshot.</p>
    <p>
      The labels on the time axis should have dotted grid lines. These are lines extending the ticks across the plot area.
    </p>
    <h2>Events Data</h2>
    <p>
      You will fetch events data from a REST service. To start the service run npm start after installing npm dependencies. When it starts it outputs the resource URI (e.g. http://localhost:3000/events)
    </p>
   </section>

  </main>
</template>
