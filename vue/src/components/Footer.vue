<template>
  <!-- Footer -->
  <div>
    <div class="section" style="background-color: #3b377a">
      <div id="footer_section" class="page-container">
        <div id="footer-container">
          <!-- Info -->
          <div>
            <div id="footer-header">
              <img style="width: 100px" src="@/assets/main/Group 293.png" />
              <div>
                <h4 id="contactthai" style="margin-bottom: 0px">ติดต่อ</h4>
                <h4 id="contacttext" style="margin-bottom: 0px">CONTACT</h4>
              </div>
            </div>

            <div id="contact-section">
              <div class="contact-container">
                <!-- Contact -->
                <div style="margin-top: 30px">
                  <h4
                    style="
                      font-family: 'CloudBold';
                      color: #ffffff;
                      font-size: 2em;
                      margin: 0px;
                    "
                  >
                    {{$t('footer.pkatname')}} CPE31
                  </h4>
                  <div class="footer-info">
                    <img
                      style="width: 25px"
                      src="@/assets/main/Icon_FB_Contact.png"
                    />
                    <p
                      style="
                        letter-spacing: 2.2px;
                        font-family: 'CloudLight';
                        color: #ffffff;
                        font-size: 2em;
                        margin-bottom: 0px;
                        margin-top: 5px;
                      "
                    >
                      Kat Wee
                    </p>
                  </div>
                  <div class="footer-info">
                    <img
                      style="width: 23px"
                      src="@/assets/main/Icon_Phone_Contact.png"
                    />
                    <p class="footer-number">080-916-3459</p>
                  </div>
                </div>
                <!-- Contact -->
              </div>

              <div class="contact-container">
                <!-- Contact -->
                <div style="margin-top: 30px">
                  <h4
                    style="
                      font-family: 'CloudBold';
                      color: #ffffff;
                      font-size: 2em;
                      margin: 0px;
                    "
                  >
                    {{$t('footer.ppname')}} CPE31
                  </h4>
                  <div class="footer-info">
                    <img
                      style="width: 25px"
                      src="@/assets/main/Icon_FB_Contact.png"
                    />
                    <p
                      style="
                        letter-spacing: 2.2px;
                        font-family: 'CloudLight';
                        color: #ffffff;
                        font-size: 2em;
                        margin-bottom: 0px;
                        margin-top: 5px;
                      "
                    >
                      Natkanok Poksappaiboon
                    </p>
                  </div>
                  <div class="footer-info">
                    <img
                      style="width: 23px"
                      src="@/assets/main/Icon_Phone_Contact.png"
                    />
                    <p class="footer-number">098-331-1641</p>
                  </div>
                </div>
                <!-- Contact -->
              </div>
            </div>
          </div>
          <!-- Info -->

          <!-- FB -->
          <div id="facebook-container">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcpenight&tabs=timeline%2Cmessages&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              style="
                border: none;
                overflow: hidden;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              "
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <!-- Cpe Logo -->
          <div id="cpe-section">
            <div style="display: flex; justify-content: center">
              <img @click="clickCPE()" style="cursor:pointer;" id="cpelogo" src="@/assets/main/CPE_Logo.png" />
            </div>
            <div
              
            >
              <p class="cpe-content">
                {{$t('footer.description')}}
              </p>
            </div>
          </div>
          <!-- Cpe Logo -->
        </div>
        <div id="cpe-tablet">
          <div id="tablet-container">
            <div id="cpe-logo-mobile">
              <img style="width: 200px" src="@/assets/main/CPE_Logo.png" />
            </div>

            <p class="cpe-content">
              {{$t('footer.description')}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="pinkfooter"></div>
  </div>
  <!-- Footer -->
</template>

<script>
export default {
  methods: {
    clickCPE(){
      window.open('https://www.cpe.kmutt.ac.th/th/index','_blank' );    
    }
  },
};
</script>

<style scoped>
* {
  z-index: 2;
}
.footer-number {
  letter-spacing: 2.2px;
  font-family: "CloudLight";
  color: #ffffff;
  font-size: 2em;
  margin-bottom: 0px;
  margin-top: 2px;
}
.footer-info > p {
  padding-left: 15px;
}
.footer-info {
  margin-top: 10px;
  align-items: center;
  width: 100%;
  display: flex;
}
.cpe-content {
  padding-left: 30px;
  /* border-left: 1px #ffffff solid; */
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: "CloudLight";
  color: #ffffff;
  font-size: 1.75em;
  letter-spacing: 2.2px;
  line-height: 1.5em;
  width: 100%;
}
#pinkfooter {
  background-color: #f17f92;
  padding-top: 58px;
}
#tablet-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
#cpe-section {
  padding-left: 20px;
  padding-right:20px ;
}
#footer-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#cpe-tablet {
  display: none;
}

#facebook-container {
  height: 100%;
  width: 100%;
  border-right: 2px solid #ffffff;
}
#cpelogo {
  width: 200px;
}
#footer-container {
  display: grid;
  width: 100%;
  grid-template-columns: 30% 40% 30%;
  justify-content: center;
  align-items: center;
}
#footer_section {
  padding-top: 90px;
  padding-bottom: 80px;
}

#contacttext {
  font-family: "CloudBold";
  color: #ffffff;
  font-size: 4em;
  letter-spacing: 5.4px;
  text-align: right;
  margin-top: -10px;
}
#contactthai {
  font-family: "CloudLight";
  color: #ffffff;
  font-size: 3em;
  letter-spacing: 4px;
  text-align: right;
  margin: 0px;
}

@media screen and (max-width: 768px) {
  #footer-container {
    display: grid;
    width: 100%;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;
  }

  #cpe-tablet {
    display: block;
    padding-top: 30px;
  }

  #footer_section {
    padding-top: 50px;
    padding-bottom: 30px;
  }

  #facebook-container {
    height: 100%;
    padding-left: 19px;
    width: 100%;
  }

  #cpe-section {
    display: none;
  }
}
@media screen and (max-width: 414px) {
  .footer-info {
    justify-content: center;
  }
  #cpe-logo-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #cpe-tablet {
    padding-top: 0px;
  }
  #cpe-content {
    padding-left: 0;
    border-left: none;
    text-align: center;
  }
  #tablet-container {
    display: block;
  }
  #footer-header {
    width: 100%;
    padding-bottom: 10px;
  }
  #footer-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact-container > div > h4 {
    letter-spacing: 1.2px;
    text-align: center;
  }
  #footer-container {
    display: block;
  }

  #pinkfooter {
    padding-top: 45px;
  }
  #facebook-container {
    height: 340px;
    padding-left: 19px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  #cpelogo {
    width: 165px;
    height: 100%;
  }
}

@media screen and (max-width: 375px) {
  #facebook-container {
    padding-left: 7px;
  }
  #tablet-container {
    display: block;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  #cpe-tablet {
    padding: 0;
  }
}
@media screen and (max-width: 375px) {
  #facebook-container {
    padding-left: 0px;
  }
}
</style>
