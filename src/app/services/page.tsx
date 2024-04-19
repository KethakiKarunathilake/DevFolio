import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>My talents</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-music" /></div>
          <h4>Singing & Playing musical instruments</h4>
          <p>I have done diploma in Bhatkhande for singing.As well as I can play many musical instruments 
            like violin, guitar, sitar, tabla, trombone.</p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Web Design</h4>
          <p>I am not an expert in web development, but I am trying to improve that skill and learn for it
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: WordPress */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-pencil" /></div>
          <h4>Creative writing</h4>
          <p>I have the ability to compose Sinhala songs and poems creatively. I have won many competitions for that</p>
        </div>
      </div>
      {/* Service Item 3 End */}
      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-users" /></div>
          <h4>Leadership</h4>
          <p>I can lead a team and help them to achieve their goals.I have a lot of experience holding leadership responsibilities in many societies and companies</p>
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 5: Video Editing */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-bullhorn" /></div>
          <h4>Announcing</h4>
          <p>The announcing field is one of my favorite fields. I hope to further develop my announcing skills.</p>
        </div>
      </div>
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-paint-brush" /></div>
          <h4>Graphic Designing</h4>
          <p>I create graphics using graphic software like Photoshop, Canva
          </p>
        </div>
      </div>
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
