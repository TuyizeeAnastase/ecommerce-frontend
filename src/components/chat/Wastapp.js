import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Whatsapp = () => {
  return (
    <WhatsAppWidget
      phoneNo="250787499115"
      position="right"
      widgetWidth="260px"
      widgetWidthMobile="260px"
      autoOpen={true}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt="Hi Team, is there any related service available ?"
      iconSize="80"
      iconColor="white"
      iconBgColor="#00A884"
      headerIcon="https://res.cloudinary.com/depljf8uc/image/upload/v1664959769/cld-sample.jpg"
      headerIconColor="#00A884"
      headerTxtColor="white"
      headerBgColor="#00A884"
      headerTitle="SBS"
      headerCaption="Online"
      bodyBgColor="#EFEAE2"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor="white"
      btnBgColor="#00A884"
      btnTxtColor="white"
      btnTxt="Start Chat"
    />
  );
};

export default Whatsapp;
