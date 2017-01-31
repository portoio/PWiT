var ProfilePreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var body = this.props.widgetFor('body');
    var image = entry.getIn(['data', 'image']);
    var profileImage = this.props.getAsset(image);

    return h(
      "div",
      { "className": "cms-profile-preview" },
      h(
        "svg",
        { "className": "svg-default" },
        h(
          "defs",
          null,
          h(
            "symbol",
            { id: "logo-main", viewbox: "0 0 250 89.1" },
            h("path", { d: "M5.8,48.8c3.4,0,5.4,1.7,5.4,4.6c0,3.1-2,4.9-5.4,4.9H3.4v3.7H0V48.8H5.8z M3.4,55.7h2.2c1.5,0,2.3-0.7,2.3-2.1      c0-1.4-0.9-2.1-2.3-2.1H3.4V55.7z M29.2,55.4c0,3.9-3.1,6.8-7.2,6.8c-4.1,0-7.2-2.9-7.2-6.8c0-3.9,3.1-6.7,7.2-6.7 C26.1,48.7,29.2,51.6,29.2,55.4z M18.3,55.5c0,2.2,1.7,4,3.8,4c2.1,0,3.7-1.7,3.7-4s-1.6-3.9-3.7-3.9C20,51.5,18.3,53.2,18.3,55.5z      M39,58.4L39,58.4h-2.7v3.7h-3.4V48.8h5.9c3.5,0,5.5,1.7,5.5,4.6c0,2-0.9,3.5-2.4,4.3l2.8,4.4h-3.8L39,58.4z M38.9,55.7      c1.5,0,2.3-0.7,2.3-2.1c0-1.4-0.9-2.1-2.3-2.1h-2.6v4.2H38.9z M55.5,51.5v10.6h-3.4V51.5h-4v-2.7h11.3v2.7H55.5z M75.4,56.5      c0,3.5-2.3,5.7-6.1,5.7c-3.7,0-6.1-2.2-6.1-5.7v-7.7h3.4v7.7c0,1.8,1.2,2.9,2.8,2.9c1.6,0,2.7-1.1,2.7-2.9v-7.7h3.4V56.5z      M91.7,55.3v5.2c-1.4,1-3.7,1.7-5.5,1.7c-4,0-7.1-2.9-7.1-6.8c0-3.9,3.1-6.8,7.3-6.8c2,0,4.1,0.8,5.4,2L90,53      c-1-0.9-2.3-1.4-3.5-1.4c-2.2,0-3.9,1.7-3.9,3.9c0,2.3,1.7,4,3.9,4c0.7,0,1.6-0.2,2.4-0.6v-3.4H91.7z M107.8,56.5      c0,3.5-2.3,5.7-6.1,5.7c-3.7,0-6.1-2.2-6.1-5.7v-7.7H99v7.7c0,1.8,1.2,2.9,2.8,2.9c1.6,0,2.7-1.1,2.7-2.9v-7.7h3.4V56.5z      M114.9,51.5v2.6h6.3v2.7h-6.3v2.7h7.2v2.7h-10.6V48.8h10.4v2.7H114.9z M137.2,50.1l-1.3,2.6c-1.4-0.8-3.2-1.4-4.3-1.4      c-0.9,0-1.5,0.3-1.5,1c0,2.3,7,1,7,5.8c0,2.7-2.4,4.1-5.3,4.1c-2.2,0-4.5-0.8-6.1-2.1l1.3-2.6c1.4,1.2,3.4,2,4.8,2      c1.1,0,1.7-0.4,1.7-1.2c0-2.4-7-0.9-7-5.7c0-2.4,2.1-4,5.3-4C133.8,48.7,135.8,49.3,137.2,50.1z M144.3,51.5v2.6h6.3v2.7h-6.3v2.7      h7.2v2.7h-10.6V48.8h10.4v2.7H144.3z M175.5,62.1l-2.5-9.2l-2.5,9.2H167l-4.3-13.3h3.6l2.6,9.8l2.5-9.8h3.3l2.6,9.8l2.6-9.8h3.5 L179,62.1H175.5z M201.4,55.4c0,3.9-3.1,6.8-7.2,6.8c-4.1,0-7.2-2.9-7.2-6.8c0-3.9,3.1-6.7,7.2-6.7 C198.4,48.7,201.4,51.6,201.4,55.4z M190.5,55.5c0,2.2,1.7,4,3.8,4c2.1,0,3.7-1.7,3.7-4s-1.6-3.9-3.7-3.9 C192.2,51.5,190.5,53.2,190.5,55.5z M216.7,62.1l0-8.6l-3.2,7.3h-2.2l-3.2-7.3v8.6h-3V48.8h3.7l3.6,7.9l3.6-7.9h3.7v13.3H216.7z      M226.8,51.5v2.6h6.3v2.7h-6.3v2.7h7.2v2.7h-10.6V48.8h10.4v2.7H226.8z M247,62.1l-6.1-8.2v8.2h-3.2V48.8h3l6.1,8.2v-8.2h3.2v13.3 H247z M77.6,78.8c0,1.2-0.4,1.8-1.3,2.1c1,0.2,1.3,0.8,1.3,2V86c0,0.9,0.5,1.3,1.8,1.3v1.7h-0.8c-2.1,0-3-0.7-3-2.4v-3.9      c0-0.7-0.2-1-0.8-1h-0.6V80h0.6c0.6,0,0.8-0.3,0.8-1V75c0-1.7,0.8-2.4,3-2.4h0.8v1.7c-1.3,0-1.8,0.4-1.8,1.3V78.8z M83.1,86.7V73.4 h2.2v13.3H83.1z M98.3,86.7l-7.1-9.5v9.5h-2.2V73.4h2.2l7.1,9.5v-9.5h2.2v13.3H98.3z M118.1,75.5v11.3h-2.2V75.5h-4.2v-2h10.6v2 H118.1z M128.2,75.5V79h6.5v2h-6.5v3.7h7.5v2H126V73.4h9.5v2H128.2z M151.5,75.4l-1.3,1.6c-1-1-2.4-1.7-3.7-1.7      c-2.7,0-4.7,2.1-4.7,4.7c0,2.6,2.1,4.7,4.7,4.7c1.3,0,2.7-0.6,3.7-1.6l1.3,1.5c-1.3,1.3-3.3,2.2-5.1,2.2c-3.9,0-6.9-2.9-6.9-6.8      c0-3.8,3.1-6.7,7-6.7C148.3,73.4,150.2,74.2,151.5,75.4z M164.5,86.7v-5.5h-7v5.5h-2.2V73.4h2.2v5.8h7v-5.8h2.2v13.3H164.5z      M175.8,81.8h-0.6c-0.6,0-0.8,0.3-0.8,1v3.9c0,1.8-0.8,2.4-3,2.4h-0.8v-1.7c1.3,0,1.8-0.4,1.8-1.3v-3.1c0-1.2,0.4-1.8,1.3-2.1      c-1-0.2-1.3-0.8-1.3-2v-3.1c0-0.9-0.5-1.3-1.8-1.3v-1.7h0.8c2.1,0,3,0.7,3,2.4V79c0,0.7,0.2,1,0.8,1h0.6V81.8z M125,38.3      c-9.4,0-16.8-7.2-16.8-16.5V0h33.7v21.8C141.9,31,134.5,38.3,125,38.3z M112.1,3.9v17.9c0,7.1,5.7,12.6,12.9,12.6      c7.2,0,12.9-5.5,12.9-12.6V3.9H112.1z M130,10.6l-0.6,9.1l-4.2-3l-4.4,2.6l-0.6-8.7h-3.9l1.1,15.3l7.6-4.6l7.8,5.5l1.1-16.2H130z      M104.3,30.5h-2.5c-1.3,0-2.3-1-2.3-2.3v-2.8c0-2.2-0.9-4.4-2.4-5.9l-0.3-0.3l0.3-0.3c1.6-1.6,2.5-3.7,2.5-5.9v-2.8      c0-1.3,1-2.3,2.3-2.3h2.5V3.9h-2.5c-3.4,0-6.2,2.8-6.2,6.2v2.8c0,1.2-0.5,2.3-1.3,3.1l-3.1,3.1l3.1,3.1c0.8,0.8,1.3,2,1.3,3.1v2.8      c0,3.4,2.8,6.2,6.2,6.2h2.5V30.5z M154.5,28.2v-2.8c0-1.2,0.5-2.3,1.3-3.1l3.1-3.1l-3.1-3.1c-0.8-0.8-1.3-2-1.3-3.1v-2.8      c0-3.4-2.8-6.2-6.2-6.2h-2.6v3.9h2.6c1.3,0,2.3,1,2.3,2.3v2.8c0,2.2,0.9,4.4,2.4,5.9l0.3,0.3l-0.3,0.3c-1.6,1.6-2.4,3.7-2.4,5.9v2.8      c0,1.3-1,2.3-2.3,2.3h-2.6v3.9h2.6C151.7,34.4,154.5,31.6,154.5,28.2z" })
          ),
          h(
            "symbol",
            { id: "logo-minified", viewbox: "0 0 50 28.3" },
            h("path", { d: "M25,28.3c-7,0-12.4-5.4-12.4-12.2V0h24.9v16.1C37.5,22.9,32,28.3,25,28.3z M15.5,2.9v13.2c0,5.2,4.2,9.3,9.6,9.3 s9.6-4.1,9.6-9.3V2.9H15.5z M28.7,7.8l-0.5,6.7l-3.1-2.2l-3.2,1.9l-0.5-6.4h-2.9l0.8,11.3l5.6-3.4l5.8,4.1l0.8-12H28.7z M9.7,22.5      H7.8c-0.9,0-1.7-0.8-1.7-1.7v-2.1c0-1.6-0.7-3.2-1.8-4.4l-0.2-0.2l0.2-0.2c1.2-1.1,1.8-2.7,1.8-4.4V7.5c0-0.9,0.8-1.7,1.7-1.7h1.9      V2.9H7.8C5.3,2.9,3.2,5,3.2,7.5v2.1c0,0.9-0.4,1.7-1,2.3L0,14.1l2.3,2.3c0.6,0.6,1,1.5,1,2.3v2.1c0,2.5,2.1,4.6,4.6,4.6h1.9V22.5z      M46.8,20.8v-2.1c0-0.9,0.3-1.7,1-2.3l2.3-2.3l-2.3-2.3c-0.6-0.6-1-1.5-1-2.3V7.5c0-2.5-2.1-4.6-4.6-4.6h-1.9v2.9h1.9      c0.9,0,1.7,0.8,1.7,1.7v2.1c0,1.6,0.7,3.2,1.8,4.4l0.2,0.2l-0.2,0.2c-1.1,1.1-1.8,2.7-1.8,4.4v2.1c0,0.9-0.8,1.7-1.7,1.7h-1.9v2.9      h1.9C44.7,25.4,46.8,23.3,46.8,20.8z" })
          ),
          h(
            "symbol",
            { id: "facebook-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M18.6,10.4h-2.3c-0.3,0-0.6,0.4-0.6,0.8v1.6      h2.8l-0.4,2.3h-2.4v7h-2.7v-7h-2.4v-2.3h2.4v-1.4c0-2,1.4-3.6,3.2-3.6h2.3V10.4z" })
          ),
          h(
            "symbol",
            { id: "twitter-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M21.1,12.3c0,0.1,0,0.3,0,0.4      c0,3.9-3,8.4-8.4,8.4c-1.7,0-3.2-0.5-4.5-1.3c0.2,0,0.5,0,0.7,0c1.4,0,2.7-0.5,3.7-1.3c-1.3,0-2.4-0.9-2.8-2c0.2,0,0.4,0.1,0.6,0.1      c0.3,0,0.5,0,0.8-0.1c-1.4-0.3-2.4-1.5-2.4-2.9v0c0.4,0.2,0.9,0.4,1.3,0.4c-0.8-0.5-1.3-1.4-1.3-2.5c0-0.5,0.1-1.1,0.4-1.5      c1.5,1.8,3.6,3,6.1,3.1c-0.1-0.2-0.1-0.4-0.1-0.7c0-1.6,1.3-3,3-3c0.8,0,1.6,0.4,2.2,0.9c0.7-0.1,1.3-0.4,1.9-0.7      c-0.2,0.7-0.7,1.3-1.3,1.6c0.6-0.1,1.2-0.2,1.7-0.5C22.2,11.3,21.7,11.9,21.1,12.3z" })
          ),
          h(
            "symbol",
            { id: "medium-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M30,15c0,8.3-6.7,15-15,15S0,23.3,0,15S6.7,0,15,0S30,6.7,30,15z M21.6,11.4C21.6,11.4,21.6,11.4,21.6,11.4      L21.6,11.4l-4-2c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-0.2,0-0.3,0.1-0.4,0.2l-2.3,3.8l2.9,4.7L21.6,11.4C21.6,11.5,21.6,11.4,21.6,11.4 zM13.4,12.5v4.3l3.8,1.9L13.4,12.5z M17.8,18.9l3.1,1.6c0.4,0.2,0.7,0.1,0.7-0.3v-7.5L17.8,18.9z M12.8,11.4l-3.9-2      c-0.1,0-0.1-0.1-0.2-0.1c-0.2,0-0.3,0.1-0.3,0.4v8.5c0,0.2,0.2,0.5,0.4,0.6l3.5,1.7c0.1,0,0.2,0.1,0.2,0.1c0.2,0,0.4-0.2,0.4-0.4      L12.8,11.4C12.8,11.5,12.8,11.4,12.8,11.4z" })
          ),
          h(
            "symbol",
            { id: "linkedin-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M11.3,21.2h-3v-9.8h3V21.2z M9.8,10.2      c-1,0-1.6-0.7-1.6-1.5c0-0.9,0.6-1.5,1.6-1.5s1.6,0.7,1.6,1.5C11.4,9.6,10.8,10.2,9.8,10.2z M22.4,21.2h-3v-5.4      c0-1.3-0.4-2.1-1.5-2.1c-0.8,0-1.3,0.6-1.6,1.1c-0.1,0.2-0.1,0.5-0.1,0.8v5.6h-3v-6.7c0-1.2,0-2.2-0.1-3.1h2.6l0.1,1.4h0.1      c0.4-0.6,1.4-1.6,3-1.6c2,0,3.5,1.3,3.5,4.2V21.2z" })
          ),
          h(
            "symbol",
            { id: "behance-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M13,12.7c0-1.1-0.6-1.1-0.6-1.1h-3v2.2H12C12.5,13.9,13,13.7,13,12.7z" }),
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M17.3,10.5h4.1v1.2h-4.1V10.5z M15.3,17c0,3.1-3.1,3-3.1,3 h-5V9.8h5c1.6,0,2.8,0.9,2.8,2.7c0,1.9-1.6,1.9-1.6,1.9C15.5,14.4,15.3,17,15.3,17z M22.8,16.9h-5c0,1.9,1.7,1.7,1.7,1.7 c1.6,0,1.6-1.1,1.6-1.1h1.7c0,3-3.3,2.7-3.3,2.7c-4.1,0-3.8-3.9-3.8-3.9s0-3.9,3.8-3.9C23.4,12.3,22.8,16.9,22.8,16.9z" }),
            h("path", { d: "M19.5,13.9c-1.6,0-1.7,1.6-1.7,1.6h3.1C20.9,15.5,20.9,13.9,19.5,13.9z" }),
            h("path", { d: "M12.2,15.5H9.4v2.7H12c0.5,0,1.1-0.2,1.1-1.2C13.3,15.5,12.2,15.5,12.2,15.5z" })
          ),
          h(
            "symbol",
            { id: "instagram-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M21.1,10.4c-0.3-0.7-0.8-1.2-1.5-1.5c-0.5-0.2-1-0.3-1.5-0.3c-0.8,0-1.1,0-3.2,0s-2.3,0-3.2,0c-0.5,0-1,0.1-1.5,0.3 c-0.7,0.3-1.2,0.8-1.5,1.5c-0.2,0.5-0.3,1-0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.3,0,3.2c0,0.5,0.1,1,0.3,1.5c0.3,0.7,0.8,1.2,1.5,1.5 c0.5,0.2,1,0.3,1.5,0.3c0.8,0,1.1,0,3.2,0s2.3,0,3.2,0c0.5,0,1-0.1,1.5-0.3c0.7-0.3,1.2-0.8,1.5-1.5c0.2-0.5,0.3-1,0.3-1.5 c0-0.8,0-1.1,0-3.2s0-2.3,0-3.2C21.4,11.3,21.3,10.9,21.1,10.4z M15,19c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S17.2,19,15,19z M19.2,11.8c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9C20.1,11.3,19.7,11.8,19.2,11.8z" }),
            h("circle", { cx: "15", cy: "15", r: "2.6" }),
            h("path", { d: "M15,0C15,0,15,0,15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15C30,6.7,23.3,0,15,0z M22.8,18.2c0,0.6-0.1,1.3-0.4,1.9 c-0.4,1-1.2,1.9-2.3,2.3c-0.6,0.2-1.2,0.4-1.9,0.4c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.6,0-1.3-0.1-1.9-0.4c-1-0.4-1.9-1.2-2.3-2.3 c-0.2-0.6-0.4-1.2-0.4-1.9c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.6,0.1-1.3,0.4-1.9C8,8.8,8.8,8,9.9,7.6c0.6-0.2,1.2-0.4,1.9-0.4 c0.8,0,1.1,0,3.2,0s2.4,0,3.2,0c0.6,0,1.3,0.1,1.9,0.4c1,0.4,1.9,1.2,2.3,2.3c0.2,0.6,0.4,1.2,0.4,1.9c0,0.8,0,1.1,0,3.2 S22.8,17.4,22.8,18.2z" })
          ),
          h(
            "symbol",
            { id: "dribble-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15.4,15c0.1,0,0.1,0,0.2,0c-0.1-0.3-0.3-0.6-0.4-0.9c-2.9,0.9-5.8,0.9-6.3,0.9c0,0,0,0.1,0,0.1c0,1.5,0.5,2.9,1.5,4 C10.7,18.5,12.4,15.9,15.4,15z M11.3,19.9c1.1,0.8,2.4,1.3,3.7,1.3c0.8,0,1.6-0.2,2.3-0.5c-0.1-0.6-0.5-2.4-1.3-4.6 C12.7,17.3,11.5,19.5,11.3,19.9z M19,10.4c-1.1-1-2.5-1.5-4-1.5c-0.4,0-0.9,0-1.3,0.1c0.3,0.4,1.3,1.8,2.2,3.5 C17.9,11.7,18.8,10.6,19,10.4z M14.5,12.9c-0.9-1.7-1.9-3.1-2.2-3.4c-1.7,0.8-2.9,2.4-3.3,4.2h0C9.7,13.6,11.9,13.6,14.5,12.9z M17.4,15.8c0.7,2,1.1,3.7,1.2,4.2c1.3-0.9,2.2-2.4,2.5-4c-0.3-0.1-1.3-0.3-2.5-0.3C18.1,15.7,17.7,15.7,17.4,15.8z M15,0 C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M15,22.3c-4.1,0-7.3-3.3-7.3-7.3c0-4,3.3-7.3,7.3-7.3 c4,0,7.3,3.3,7.3,7.3C22.3,19,19,22.3,15,22.3z M16.4,13.6c0.1,0.3,0.3,0.6,0.4,0.8c0,0.1,0.1,0.2,0.1,0.3c0.4-0.1,0.9-0.1,1.4-0.1 c1.3,0,2.4,0.2,2.8,0.3c0-1.3-0.5-2.6-1.3-3.7C19.5,11.5,18.5,12.7,16.4,13.6z" })
          ),
          h(
            "symbol",
            { id: "github-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,14.9C15,14.9,15,14.9,15,14.9L15,14.9c-1.9,0-3.5-0.5-4.5,0.4c-0.6,0.5-0.8,1.2-0.8,1.9c0,2.9,2.3,3.2,5.3,3.2h0 c3,0,5.3-0.4,5.3-3.2c0-0.7-0.2-1.3-0.8-1.9C18.5,14.4,16.9,14.9,15,14.9z M12.5,18.9c-0.6,0-1-0.6-1-1.4c0-0.8,0.5-1.4,1-1.4 s1,0.6,1,1.4C13.5,18.2,13.1,18.9,12.5,18.9z M17.5,18.9c-0.6,0-1-0.6-1-1.4c0-0.8,0.5-1.4,1-1.4c0.6,0,1,0.6,1,1.4 C18.5,18.2,18.1,18.9,17.5,18.9z M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M16.4,21.2c-0.3,0-0.8,0-1.4,0 c-0.6,0-1.1,0-1.4,0c-1.2,0-5.9-0.1-5.9-5.8c0-1.3,0.4-2.3,1.2-3.1C8.8,12,8.8,10.4,9.4,8.8c0,0,1.4,0.2,3.6,1.6 c0.5-0.1,1.2-0.2,2-0.2s1.5,0.1,2,0.2c2.2-1.5,3.6-1.6,3.6-1.6c0.6,1.6,0.6,3.2,0.5,3.5c0.7,0.8,1.2,1.8,1.2,3.1 C22.3,21.1,17.6,21.2,16.4,21.2z" })
          ),
          h(
            "symbol",
            { id: "pinterest-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M16,18.6c-1-0.1-1.4-0.5-2.1-1c-0.4,2.2-0.9,4.3-2.4,5.3 c-0.5-3.3,0.7-5.8,1.2-8.4c-0.9-1.5,0.1-4.6,2-3.8c2.3,0.9-2,5.7,0.9,6.3c3.1,0.6,4.3-5.3,2.4-7.3c-2.8-2.8-8-0.1-7.4,3.9 c0.2,1,1.2,1.3,0.4,2.6c-1.8-0.4-2.3-1.8-2.2-3.6c0.1-3,2.7-5.2,5.3-5.4c3.3-0.4,6.4,1.2,6.9,4.3C21.6,15,19.6,18.8,16,18.6z" })
          ),
          h(
            "symbol",
            { id: "flickr-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M11,18.1c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1S12.7,18.1,11,18.1z M19,18.1c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 S20.7,18.1,19,18.1z" })
          ),
          h(
            "symbol",
            { id: "youtube-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M17.5,14.7L14,13.1c-0.3-0.1-0.6,0-0.6,0.4v3.1c0,0.3,0.3,0.5,0.6,0.4l3.5-1.6C17.8,15.1,17.8,14.9,17.5,14.7z M15,0 C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M15,21.1c-7.7,0-7.8-0.7-7.8-6.1S7.3,8.9,15,8.9s7.8,0.7,7.8,6.1 S22.7,21.1,15,21.1z" })
          ),
          h(
            "symbol",
            { id: "vimeo-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M21.9,12.1c-0.8,4.6-5.2,8.4-6.6,9.3 c-1.3,0.9-2.6-0.4-3-1.3c-0.5-1.1-2-6.8-2.4-7.3c-0.4-0.5-1.6,0.5-1.6,0.5l-0.6-0.8c0,0,2.4-2.9,4.3-3.3c1.9-0.4,1.9,3,2.4,5 c0.5,1.8,0.8,2.9,1.2,2.9c0.4,0,1.2-1,2-2.6c0.8-1.6,0-3-1.7-2C16.5,8.5,22.7,7.6,21.9,12.1z" })
          ),
          h(
            "symbol",
            { id: "googleplus-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M14.1,21.4c-0.9,0.5-2,0.5-2.3,0.5c-0.1,0-0.1,0-0.1,0 s0,0-0.1,0c-0.6,0-3.7-0.1-3.7-2.9c0-2.7,3.3-2.9,4.3-2.9h0c-0.6-0.8-0.5-1.6-0.5-1.6c-0.1,0-0.1,0-0.2,0c-0.4,0-1.1-0.1-1.8-0.5 c-0.8-0.5-1.2-1.4-1.2-2.5c0-3.3,3.6-3.5,3.7-3.5H16v0.1c0,0.4-0.7,0.5-1.2,0.6c-0.2,0-0.5,0.1-0.6,0.1c0.9,0.5,1.1,1.3,1.1,2.4 c0,1.3-0.5,2-1.1,2.5c-0.3,0.3-0.6,0.5-0.6,0.9c0,0.3,0.4,0.6,0.8,1C15,16.2,16,17,16,18.4C16,19.8,15.4,20.8,14.1,21.4z M22,15 h-2.3v2.3h-1.6V15h-2.3v-1.6h2.3v-2.3h1.6v2.3H22V15z M12.2,16.8c-0.1,0-0.2,0-0.2,0c-0.7,0.1-1.3,0.3-1.8,0.7 C9.7,18,9.5,18.5,9.5,19c0.1,1.1,1.3,1.8,2.7,1.7c1.4-0.1,2.4-0.9,2.3-2C14.5,17.6,13.6,16.8,12.2,16.8z M13.6,10.8 c-0.4-1.3-1-1.7-1.9-1.7c-0.1,0-0.2,0-0.3,0c-0.4,0.1-0.7,0.5-0.9,1c-0.2,0.5-0.2,1.1,0,1.7c0.3,1.1,1.1,1.9,1.9,1.9 c0.1,0,0.2,0,0.3,0C13.4,13.3,13.9,12,13.6,10.8z" })
          ),
          h(
            "symbol",
            { id: "time-icon", viewbox: "0 0 20 20" },
            h("path", { d: "M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10c5.5,0,10-4.5,10-10S15.5,0,10,0z M10,18c-4.4,0-8-3.6-8-8s3.6-8,8-8 s8,3.6,8,8S14.4,18,10,18z M10.5,10.2l4.5,2.7l-0.8,1.2L9,11V5h1.5V10.2z" })
          ),
          h(
            "symbol",
            { id: "role-icon", viewbox: "0 0 20 20" },
            h("path", { d: "M18,4.5h-4V2.7c0-1.2-1-2.2-2.2-2.2H8.2C7,0.5,6,1.5,6,2.7v1.8H2c-1.1,0-2,0.9-2,2v2v2v7c0,1.1,0.9,2,2,2h16  c1.1,0,2-0.9,2-2v-7v-2v-2C20,5.4,19.1,4.5,18,4.5z M8,2.7c0-0.1,0.1-0.2,0.2-0.2h3.6c0.1,0,0.2,0.1,0.2,0.2v1.8H8V2.7z M18,17.5H2 v-7h16V17.5z M2,8.5v-2h4h8h4v2H2z" })
          ),
          h(
            "symbol",
            { id: "origin-icon", viewbox: "0 0 20 20" },
            h("path", { d: "M10,0C6.1,0,3,3.1,3,7c0,5.2,7,13,7,13s7-7.8,7-13C17,3.1,13.9,0,10,0z M10,9.5C8.6,9.5,7.5,8.4,7.5,7  S8.6,4.5,10,4.5s2.5,1.1,2.5,2.5S11.4,9.5,10,9.5z" })
          )
        )
      ),
      h(
        "div",
        { "className": "profile-alt" },
        h(
          "div",
          { "className": "profile-alt__content" },
          h(
            "div",
            { "className": "profile-alt__content-header" },
            h(
              "div",
              { "className": "profile-alt__content-image__container" },
              h(
                "div",
                { "className": "profile-alt__content-image" },
                h("img", { src: profileImage.toString(), alt: entry.getIn(['data', 'title']), title: entry.getIn(['data', 'title']) })
              )
            ),
            h(
              "div",
              { "className": "profile-alt__content-resume__container" },
              h(
                "div",
                { "className": "profile-alt__content-resume" },
                h(
                  "div",
                  { "className": "profile-alt__content-resume__name" },
                  h(
                    "h2",
                    null,
                    entry.getIn(['data', 'title'])
                  )
                ),
                h(
                  "h5",
                  { "className": "profile-alt__content-resume__title" },
                  "Profile"
                ),
                h(
                  "div",
                  { "className": "profile-alt__content-resume__item" },
                  h(
                    "svg",
                    { "className": "profile-alt__content-resume__item-time" },
                    h("use", { href: "#time-icon" })
                  ),
                  h(
                    "span",
                    null,
                    "Time in tech "
                  ),
                  entry.getIn(['data', 'timeInTech'])
                ),
                h(
                  "div",
                  { "className": "profile-alt__content-resume__item" },
                  h(
                    "svg",
                    { "className": "profile-alt__content-resume__item-role" },
                    h("use", { href: "#role-icon" })
                  ),
                  h(
                    "span",
                    null,
                    "Current role "
                  ),
                  entry.getIn(['data', 'description'])
                ),
                h(
                  "div",
                  { "className": "profile-alt__content-resume__item" },
                  h(
                    "svg",
                    { "className": "profile-alt__content-resume__item-origin" },
                    h("use", { href: "#origin-icon" })
                  ),
                  h(
                    "span",
                    null,
                    "Place of origin "
                  ),
                  entry.getIn(['data', 'placeOfOrigin'])
                ),
                h(
                  "div",
                  { "className": "profile-alt__content-resume__item-social" },
                  null
                )
              )
            )
          ),
          h(
            "div",
            { "className": "profile-alt__content-interview" },
            h(
              "h6",
              { "className": "profile-alt__content-interview__title" },
              "Tell us more about you:"
            ),
            body
          ),
          h(
            "div",
            { "className": "profile-alt__content-tags" },
            null
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("profile", ProfilePreview);
CMS.registerPreviewStyle("/css/app.css");
CMS.registerPreviewStyle("https://fonts.googleapis.com/css?family=Lato:300,400,700");