// Home.js

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Photo from "../components/photo/photo";
import BookButton from "../components/bookButton/bookButton";
import BoatCard from "../components/boatCard/boatCard";
import boats from "../data/boats";

const perks = [
  {
    title: "No hidden fees or taxes",
    text: "The price you see is the price you pay.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l3 3 5-6" />
      </>
    ),
  },
  {
    title: "Safety boat on standby",
    text: "Help is a short ride away, all day.",
    icon: <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" />,
  },
  {
    title: "Family owned and operated",
    text: "Run by locals who love this lake.",
    icon: (
      <>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
  },
  {
    title: "7th day free",
    text: "Book a week, get a day on us.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    title: "Delivery available",
    text: "On multi-day rentals.",
    icon: (
      <>
        <path d="M2 6h11v10H2z" />
        <path d="M13 9h4l4 4v3h-8z" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </>
    ),
  },
];

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" id="top">
        <Photo
          name="hero"
          small
          eager
          className="cover-img"
          alt="Aerial view of three BoatTorch tritoons on the turquoise water of Torch Lake"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--gold hero-eyebrow">Torch Lake · Northern Michigan</p>
            <h1 className="display display--xl">
              Torch Lake,
              <br />
              your way.
            </h1>
            <p className="hero-sub">Premium tritoon rentals on beautiful Torch Lake.</p>
            <div className="hero-actions">
              <BookButton size="lg">Book your day</BookButton>
              <Link className="pill pill--outline pill--lg" to="/#fleet">
                See the fleet
              </Link>
            </div>
          </div>
          <div className="hero-price">
            <span className="hero-price-label">Starting at</span>
            <span className="hero-price-value">
              $300<span> / day</span>
            </span>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="perks" aria-label="Why BoatTorch">
        <div className="container-wide perks-grid">
          {perks.map((perk) => (
            <div className="perk" key={perk.title}>
              <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {perk.icon}
              </svg>
              <div>
                <p className="perk-title">{perk.title}</p>
                <p className="perk-text">{perk.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLEET */}
      <section className="section" id="fleet">
        <div className="container-wide fleet">
          <div className="section-head">
            <div className="section-head-title">
              <p className="eyebrow">The fleet</p>
              <h2 className="display display--lg">Pick your boat.</h2>
            </div>
            <p className="section-head-text">
              Three Avalon and Tahoe tritoons, kept clean and ready for groups of 12 to 17.
            </p>
          </div>
          <div className="fleet-grid">
            {boats.map((boat) => (
              <BoatCard boat={boat} key={boat.name} />
            ))}
          </div>
        </div>
      </section>

      {/* SANDBAR */}
      <section className="sandbar" id="sandbar">
        <div className="sandbar-photo">
          <Photo
            name="sandbar"
            small
            className="cover-img"
            alt="Three tritoons anchored in shallow, crystal-clear water on the Torch Lake sandbar"
          />
        </div>
        <div className="sandbar-copy">
          <p className="eyebrow eyebrow--gold">The sandbar</p>
          <h2 className="display display--lg">
            The Caribbean
            <br />
            of the North.
          </h2>
          <p>
            Take the boat out to the Torch Lake sandbar, drop anchor in clear turquoise water,
            and spend the day floating, swimming and hanging out.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section" id="story">
        <div className="container-wide story">
          <div className="story-copy">
            <p className="eyebrow">Our story</p>
            <h2 className="display display--lg">Torch Lake is home.</h2>
            <p className="story-lead">
              We're a family owned business, and we live on the lake year round. Busy July
              weekends, quiet fall mornings, the first warm day in spring: we see it all, and
              there's nowhere we'd rather be.
            </p>
            <p>
              That's why we care so much about keeping it beautiful. We look after our boats,
              share what we know about enjoying the lake the right way, and ask every guest to
              leave the water as clear and clean as they found it. Our hope is simple: that you
              fall for this place the way we did, and help us protect it for the next generation.
            </p>
            <div className="story-sign">
              <span aria-hidden="true" />
              The BoatTorch family
            </div>
          </div>
          <div className="story-photo">
            <Photo name="shore" alt="Two tritoons resting in clear green water near the Torch Lake shore" />
            <div className="story-badge">Family owned</div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" aria-label="On the water">
        <div className="container-wide gallery-grid">
          <Photo name="sandbar-1200" alt="Tritoons anchored together in shallow turquoise water" />
          <Photo name="hero-1200" alt="Three boats from above on turquoise water" />
          <Photo name="sunset-1200" alt="Fiery orange sunset over Torch Lake" />
        </div>
      </section>

      {/* BOOK */}
      <section className="book" id="book">
        <Photo name="sunset" small className="cover-img" alt="" />
        <div className="book-shade" aria-hidden="true" />
        <div className="book-content">
          <h2 className="display display--xl">Make lasting memories with us.</h2>
          <p>
            Days start at $300. Book a week and the 7th day is free.
            <br />
            Delivery is available on multi-day rentals.
          </p>
          <BookButton size="lg">Book your adventure</BookButton>
        </div>
      </section>
    </main>
  );
}

export default Home;
