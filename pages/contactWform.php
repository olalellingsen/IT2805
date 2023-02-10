<!DOCTYPE html>
<html lang="no" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Det Nye Norske Storband &mdash; Kontakt oss</title>

    <!-- Google Fonts & main.css -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="./styles/main.css" />
    <link rel="stylesheet" type="text/css" href="./styles/contact.css" />

    <script src="./scripts/components/modularity.js"></script>
    <script src="./scripts/components/nav.js"></script>
    <script src="./scripts/components/footer.js"></script>
  </head>
  <body>
    <div class="app-nav"></div>
    <main class="main-content">
      <div class="contact-header">
        <h1>Kontakt oss</h1>
        <p>Ønsker du å samarbeide med oss?</p>
        <p>
          Ta kontakt med en av våre medarbeidere eller bruk kontaktskjema under
        </p>
      </div>

      <!-- Styremedlemer -->
      <div id="contact_main-content">
        <div class="contact-container">
          <div id="contact1" class="contacts">
            <img
              src="./images/contact-images/contact1.jpg"
              alt="Henrik Smelhus Sjøeng"
              width="100"
              height="150"
            />
            <div class="contact_info">
              <p>Daglig leder</p>
              <p>Henrik Smelhus Sjøeng</p>
              <p>henriksjoeng@gmail.com</p>
              <p>+47 97 67 27 64</p>
            </div>
          </div>

          <div id="contact4" class="contacts">
            <img
              src="./images/contact-images/contact6.jpg"
              alt="Philip Granly"
              width="100"
              height="150"
            />
            <div class="contact_info">
              <p>Kunstnerisk leder</p>
              <p>Philip Granly</p>
              <p>philipgranly@gmail.com</p>
              <p>+47 47 29 21 31</p>
            </div>
          </div>

          <div id="contact2" class="contacts">
            <img
              src="./images/contact-images/contact2.jpg"
              alt="Jørgen Bjelkerud"
              width="100"
              height="150"
            />
            <div class="contact_info">
              <p>Booking</p>
              <p>Jørgen Bjelkerud</p>
              <p>jorgen@bjelkerud.no</p>
              <p>+47 41 24 94 03</p>
            </div>
          </div>

          <div id="contact5" class="contacts">
            <img
              src="./images/contact-images/contact3.jpg"
              alt="Erik Egge Jordheim"
              width="100"
              height="150"
            />
            <div class="contact_info">
              <p>Teknisk produsent</p>
              <p>Erik Egge Jordheim</p>
              <p>erik.eej@gmail.com</p>
              <p>+47 41 49 94 60</p>
            </div>
          </div>

          <div id="contact6" class="contacts">
            <img
              src="./images/contact-images/contact5.jpg"
              alt="Ola Lømo Ellingsen"
              width="100"
              height="150"
            />
            <div class="contact_info">
              <p>Økonomi</p>
              <p>Ola Lømo Ellingsen</p>
              <p>ola.l.ellingsen@gmail.com</p>
              <p>+47 90 19 73 81</p>
            </div>
          </div>
        </div>

        <!-- Legge til nytt styremedlem -->

        <!-- <div id="contact3" class="contacts">
          <img
            src="./images/contact-images/contact4.jpg"
            alt="Andreas Sikkerbøl"
            width="100"
            height="150"
          />
          <div class="contact_info">
            <p>Økonomi</p>
            <p></p>
            <p>oko@detnyensb.no</p>
            <p>+47 98 43 27 66</p>
          </div>
        </div> -->

        <!-- Contact form -->
        <div class="form">
          <form
            id="contact-form"
            action="mailto:ola.l.ellingsen@gmail.com"
            method="post"
            name="emailForm"
          >
            <label>
              <input type="text" id="topic" placeholder="Emne" required />
            </label>
            <label>
              <input type="email" id="email" placeholder="Din epost" required />
            </label>
            <label>
              <textarea
                name="message"
                id="message"
                placeholder="Skriv noe..."
                required
              ></textarea>
            </label>
            <input id="submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </main>
    <div class="app-footer"></div>
    <script src="./scripts/contact-form.js"></script>
  </body>
</html>
