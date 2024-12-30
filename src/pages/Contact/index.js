
import Header from "../../sections/header.js";
import ContactUs from "../../sections/contact.js";
import Footer from "../../sections/footer.js";

export default function Contact() {
  return (
    <div style={{ flexDirection:'column',height:'100%',justifyContent:'space-between' }}>
      <Header />
      <div
        style={{
          backgroundColor: "#fff",
          borderTop: '1px solid #E5E5E5',
          borderBottom: '1px solid #E5E5E5'

     
        }}
      >
        <ContactUs />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
