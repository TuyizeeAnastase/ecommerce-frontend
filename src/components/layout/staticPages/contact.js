import "./css/contact.css";
import { Map } from "./Map";

const location = {
  address: "Silver Back Mall, Kicukiro,Kigali",
  lat: -1.9686183468638783,
  lng: 30.102624199638363,
};

export const Contact = () => {
  return (
    <section class="contact" id="contact">
      <div class="max-width">
        <h2 class="title">Contact us</h2>
        <div class="contact-content">
          <div class="column left">
            <Map location={location} zoomLevel={17} />
          </div>
          <div class="column right">
            <div class="text">Message me</div>
            <form action="#">
              <div class="fields">
                <div class="field name">
                  <input type="text" placeholder="Name" required />
                </div>
                <div class="field email">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div class="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message ..."
                  required
                ></textarea>
              </div>
              <div class="button">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
