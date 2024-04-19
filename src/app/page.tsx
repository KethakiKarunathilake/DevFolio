import Image from 'next/image';

export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image
              src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/433880495_1631931444301031_8837518557356348561_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGwp8I-XXGsDA3tv4CoYsu2Ar1v7Yobo9gCvW_tihuj2Ko4zaVJMEyvYm1grI2f2rb0jzr3zJlroWwBOfNOww2e&_nc_ohc=e7VXnzdzIyQAb64oDJL&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&cb_e2o_trans=q&oh=00_AfCLbcBUMCw9_0Xka2aFtWOPyGy-q65icS8oIeLrOTCFpA&oe=66279C52"
              alt="Kethu image"
              className="shadow-dark"
              width={960}
              height={960}
            /> 
            <h1>Kethaki Karunathilake</h1>
            <p>Undergraduate- BSc.(Hons.) in Information Technology</p>
            <div className="social-links">
              
              <a href="https://web.facebook.com/gayathri.nirodha/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/kethakikarunathilake/" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/kethakikarunathilake?igsh=MTFmNG12ZHU2azhqeQ==" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/kethaki-karunathilake/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
