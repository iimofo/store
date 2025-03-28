import "./Header.css";

function Header() {
  return (
    <div className="cont-header">
      <div className="first-cont">
        <div className="parg-iphone-header">
          <p>Pro.Beyond.</p>
          <h1 style={{ fontSize: "70px", fontWeight: "10" }}>
            IPhone 14 <span style={{ fontWeight: "800" }}>Pro</span>
          </h1>
          <p>Created to change everything for the better. For everyone</p>
          <button className="btn-iphone-header">Shop Now</button>
        </div>
        <div className="image-iphone-header">
          <img src="https://i.postimg.cc/HkLjSn68/Iphone-Image.png" />
        </div>
      </div>
      <div className="sec-cont">
        <div className="sec-first">
          <div className="sec-first-first">
            <div className="div-image-playstation">
              <img
                className="img-playstation"
                src="https://i.postimg.cc/DwqFPTT4/Play-Station.png"
                alt=""
              />
            </div>
            <div className="parg-playstation">
              <h1 style={{ fontSize: "30px", fontWeight: "700" }}>
                Playstation 5
              </h1>
              <p style={{ color: "#909090" }}>
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="sec-first-sec">
            <div className="airpods">
              <div className="div-img-airpods">
                <img
                  className="img-airpods"
                  src="https://i.postimg.cc/pXLqBYMf/airpods.png"
                  alt=""
                />
              </div>
              <div className="parg-airpods">
                <h1>
                  Apple
                  <br />
                  AirPods <span style={{ fontWeight: "700" }}>Max</span>
                </h1>
                <p style={{ color: "#909090" }}>
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div className="Vision-Pro">
              <div className="div-img-airpods">
                <img
                  className="img-airpods"
                  src="https://i.postimg.cc/TPdwywD3/Vision.png"
                  alt=""
                />
              </div>
              <div className="parg-airpods">
                <h1>
                  Apple
                  <br />
                  AirPods <span style={{ fontWeight: "700" }}>Max</span>
                </h1>
                <p style={{ color: "#909090" }}>
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-sec">
          <div>
            <div className="parg-macbook-header">
              <h1 style={{ fontSize: "70px", fontWeight: "10" }}>
                Macbook <span style={{ fontWeight: "500" }}>Air</span>
              </h1>
              <p style={{ color: "#909090" }}>
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </p>
              <button className="btn-macbook-header">Shop Now</button>
            </div>
          </div>
          <div className="div-image-macbook-header">
            <img
              className="image-macbook-header"
              src="https://i.postimg.cc/dVGNxQDv/Mac-Book-Pro-14.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
