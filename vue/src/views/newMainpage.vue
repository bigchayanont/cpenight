<template>
  <div id="mainpage">
    <Navbar></Navbar>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="3"
      :lineLinked="false"
      :moveSpeed="1.5"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <!-- First Section-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div id="firstsection" class="section">
      <div class="page-container">
        <img style="z-index: 1" src="@/assets/Navbar/Landing_Logo.png" />
        <h3 id="nighttomeet">Night to meet you<span id="year">2021</span></h3>
        <h3 id="first-welcome">ยินดีที่ได้กลับมาพบกัน...</h3>
        <div>
          <h3 id="first-date">20 MARCH 2021</h3>
          <p id="first-place">The Cavalry Club 19:00 - 23:00 น.</p>
          <div>
            <button id="nextButton">
              BUY TICKET NOW<i
                style="align: center; padding-left: 20px"
                class="fa fa-arrow-right"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- First Section-->

    <!-- Countdown Section -->
    <div id="countdown_section" class="section">
      <div class="page-container">
        <div>
          <h3
            style="
              font-size: 3.5em;
              margin-top: 0px;
              letter-spacing: 4.4px;
              color: #ffffff;
              font-family: 'CloudBold';
              display: flex;
              justify-content: center;
              align-items: center;
              padding-bottom: 30px;
            "
          >
          COUNTDOWN
          </h3>
          <div
            style="display: flex; justify-content: center; align-items: center"
          >
            <div class="frame">
              <h4
                class="countdown_number"
                style="
                  color: #ffffff;
                  letter-spacing: 2.66px;
                  font-family: 'CloudBold';
                  margin-top: 0px;
                  margin-bottom: 0px;
                "
              >
                {{ this.days }}
              </h4>
              <h4
                class="countdown_text"
                style="
                  font-family: 'CloudLight';
                  letter-spacing: 0.62px;
                  color: #ffffff;
                  backdrop-filter: blur(30px);
                  margin-top: 0px;
                  margin-bottom: 0px;
                  opacity: 0.5;
                "
              >
                DAYS
              </h4>
            </div>
            <h4 class="countdown_colon">:</h4>
            <div class="frame">
              <h4
                class="countdown_number"
                style="
                  color: #ffffff;
                  letter-spacing: 2.66px;
                  font-family: 'CloudBold';
                  margin-top: 0px;
                  margin-bottom: 0px;
                "
              >
                {{ this.hours }}
              </h4>
              <h4
                class="countdown_text"
                style="
                  font-family: 'CloudLight';
                  letter-spacing: 0.62px;
                  color: #ffffff;
                  backdrop-filter: blur(30px);
                  margin-top: 0px;
                  margin-bottom: 0px;
                  opacity: 0.5;
                "
              >
                HOURS
              </h4>
            </div>
            <h4 class="countdown_colon">:</h4>
            <div class="frame">
              <h4
                class="countdown_number"
                style="
                  color: #ffffff;
                  letter-spacing: 2.66px;
                  font-family: 'CloudBold';
                  margin-top: 0px;
                  margin-bottom: 0px;
                "
              >
                {{ this.minutes }}
              </h4>
              <h4
                class="countdown_text"
                style="
                  font-family: 'CloudLight';
                  letter-spacing: 0.62px;
                  color: #ffffff;
                  backdrop-filter: blur(30px);
                  margin-top: 0px;
                  margin-bottom: 0px;
                  opacity: 0.5;
                "
              >
                MINS
              </h4>
            </div>
            <h4 class="countdown_colon">:</h4>
            <div class="frame">
              <h4
                class="countdown_number"
                style="
                  color: #ffffff;
                  letter-spacing: 2.66px;
                  font-family: 'CloudBold';
                  margin-top: 0px;
                  margin-bottom: 0px;
                "
              >
                {{ this.seconds }}
              </h4>
              <h4
                class="countdown_text"
                style="
                  font-family: 'CloudLight';
                  letter-spacing: 0.62px;
                  color: #ffffff;
                  backdrop-filter: blur(30px);
                  margin-top: 0px;
                  margin-bottom: 0px;
                  opacity: 0.5;
                "
              >
                SECS
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Countdown Section -->

    <div id="secondsection" class="section">
      <!-- Second Section -->
      <div class="page-container">
        <!-- Video -->
        <div id="video" style="display: flex; width: 100%">
          <iframe
            class="video-wrapper"
            src="https://www.youtube.com/embed/DNzhGuFP2MQ?rel=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <img src="@/assets/main/floral-left.png" />
        <img src="@/assets/main/floral-right.png" />
      </div>
      <!-- Second Section -->
    </div>

    <!-- Third Section -->
    <div id="thirdsection">
      <div class="section">
        <div class="page-container">
          <div
            class="about"
            style="
              padding-bottom: 30px;
              display: flex;
              justify-content: flex-start;
            "
          >
            <img style="width: 100px" src="@/assets/main/Group 292.png" />
            <div style="padding-left: 20px">
              <h4 id="aboutthai" style="margin-bottom: 0px">เกี่ยวกับ</h4>
              <h4 id="abouttext" style="margin-bottom: 0px">ABOUT</h4>
            </div>
          </div>
          <p id="aboutdetail">
            CPE NIGHT 2021
            เป็นงานที่จัดขึ้นเพื่อให้นักศึกษาภาควิชาวิศวกรรมคอมพิวเตอร์ อาจารย์
            และบุคลากร ได้มาพบปะ สังสรรค์
            และสร้างปฏิสัมพันธ์อันดีภายในภาควิชาวิศวกรรมคอมพิวเตอร์
            นอกจากนี้ยังเป็นงานที่จะให้
            ทุกคนได้รำลึกถึงช่วงเวลาที่ได้อยู่ด้วยกัน และได้รู้จักกันที่ CPE
          </p>
          <p id="aboutdetail">
            โดยรูปแบบงานในปีนี้อาจจะไม่ได้หรูหราเหมือนปีที่ผ่าน ๆ มา
            เนื่องจากวัตถุประสงค์ของมุ่งเน้นไปที่อยากให้ทุกคนได้กลับมาเจอกันมากกว่า
            จึงไม่จำเป็นต้องกังวลเรื่องการแต่งตัว
          </p>
          <!-- Element -->
          <div id="date-section">
            <div>
              <div id="about-date">
                <h4
                  style="font-family:'CloudLight; color:#FFFFFF; margin:0px; letter-spacing: 2px; font-size:2em; "
                >
                  <img
                    id="img-date-calendar"
                    style="
                      padding-right: 20px;
                      position: relative;
                      top: 15px;
                      margin-right: 10px;
                      fill: #fff;
                    "
                    src="@/assets/main/icons8-calendar-80.png"
                  />20 MARCH 2021
                </h4>
              </div>
              <div id="about-place">
                <h4
                  style="font-family:'CloudLight; color:#FFFFFF; margin:0px; letter-spacing: 2px; font-size:2em; "
                >
                  <img
                    id="img-date-pin"
                    style="
                      padding-right: 20px;
                      position: relative;
                      top: 15px;
                      margin-right: 10px;
                      fill: #fff;
                    "
                    src="@/assets/main/Dark_floral_Night_party_2021-25.png"
                  />The Cavalry Club
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Element -->

      <!-- Third Section -->
      <!-- Schedule Section -->
      <div class="section">
        <div id="schedule_section" class="page-container">
          <div style="padding: 50px 40px 80px 40px">
            <h4 id="schedultitle">Schedule</h4>
            <div>
              <div class="schedule-table">
                <!-- Time -->

                <h3>19 : 00 - 19 : 30</h3>
                <div>
                  <img src="@/assets/main/main-23.png" />
                </div>
                <h4>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat
                </h4>

                <h3>19 : 00 - 19 : 30</h3>
                <h4>Lorem ipsum dolor sit</h4>

                <h3>19 : 00 - 19 : 30</h3>
                <h4>Lorem ipsum dolor sit</h4>
                <h3 style="grid-column: span 2">19 : 00 - 19 : 30</h3>
                <h4>Lorem ipsum dolor sit</h4>
                <!-- Element -->

                <!-- Content -->
              </div>
            </div>
            <div id="ggmaps">
              <iframe
                width="100%"
                height="400px"
                frameborder="0"
                style="
                  display: block;
                  margin-left: auto;
                  margin-right: auto;
                  border: 0;
                "
                src="https://www.google.com/maps/embed/v1/place?q=Calvary%20Club&key=AIzaSyB2Uyif86LQPyvZSLwvM3fzfWQSvH-bycg"
                allowfullscreen
              ></iframe>
              <img
                class="center"
                style="width: 100%"
                src="@/assets/main/maptext.jpg"
              />
            </div>
            <!-- BTS -->
            <div style="padding-bottom: 70px">
              <div
                style="
                  padding-bottom: 56px;
                  width: 100%;
                  display: flex;
                  align-items: center;
                "
              >
                <h4
                  style="
                    margin-top: 2px;
                    display: inline-block;
                    margin-right: 40px;
                  "
                  id="schedultitle"
                >
                  รถไฟฟ้า BTS
                </h4>
                <img id="bts-icon" src="@/assets/main/BTS-Logo.png" />
              </div>
              <img
                class="center"
                style="width: 100%"
                src="@/assets/main/main-20fix.png"
              />
            </div>
            <!-- Bus -->
            <div>
              <div
                style="
                  padding-bottom: 56px;
                  display: flex;
                  align-items: flex-end;
                  justify-content: space-between;
                  width: 100%;
                "
              >
                <h4
                  style="margin-top: 2px; display: inline-block"
                  id="schedultitle"
                >
                  รถประจำทาง Bus
                </h4>
                <div id="busroad" style="width: 700px">
                  <img style="width: 100%" src="@/assets/main/carroad.png" />
                </div>
              </div>

              <img
                class="center"
                style="width: 100%"
                src="@/assets/main/main-21.png"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Schedule Section -->
    </div>

    <!-- Ticket -->
    <div class="section" id="ticketsection">
      <div style="padding-bottom: 260px" class="page-container">
        <div id="ticket-container">
          <!-- Info -->
          <div id="ticket-info">
            <div
              class="about"
              style="display: flex; justify-content: flex-start"
            >
              <img style="width: 100px" src="@/assets/main/Group 292.png" />
              <div style="padding-left: 20px">
                <h4 id="aboutthai" style="margin-bottom: 0px">บัตรเข้างาน</h4>
                <h4 id="abouttext" style="margin-bottom: 0px">TICKET</h4>
              </div>
            </div>
            <p
              class="text-descript"
              style="
                width: 100%;
                letter-spacing: 2.4px;
                color: #ffffff;
                font-family: 'CloudLight';
                font-size: 2em;
                line-height: 1.5em;
                padding-top: 20px;
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pharetra vel turpis nunc eget lorem dolor sed viverra.
            </p>

            <!-- Ticket Types -->
            <div id="tickettype">
              <div
                class="ticket-list"
                style="
                  margin-top: 10px;

                  width: 85%;
                  display: grid;
                  grid-template-columns: 50% 50%;
                "
              >
                <h4 class="ticket-title">TICKET TYPE</h4>
                <h4 class="ticket-title" style="text-align: right">PRICE</h4>
              </div>
              <hr
                style="
                  margin: 0px;
                  opacity: 0.5;
                  width: 100%;
                  height: 3px;
                  border: none;
                  color: #ffffff;
                  background-color: #ffffff;
                "
              />
              <div
                class="ticket-list"
                style="
                  margin-top: 0px;

                  width: 85%;
                  display: grid;
                  grid-template-columns: 60% 40%;
                "
              >
                <div>
                  <h4
                    style="
                      margin-bottom: 10px;
                      font-family: 'CloudBold';
                      font-size: 2.25em;
                      letter-spacing: 2.4px;
                      color: #ffffff;
                    "
                  >
                    Lorem ipsum
                  </h4>
                  <h4
                    style="
                      margin-bottom: 20px;
                      margin-top: 0px;
                      font-family: 'CloudLight';
                      font-size: 2em;
                      opacity: 0.6px;
                      letter-spacing: 1.8px;
                      color: #ffffff;
                    "
                  >
                    Sed do eiusmod tempor incididunt
                  </h4>
                </div>
                <h4
                  style="
                    margin-bottom: 20px;
                    text-align: right;
                    font-family: 'CloudBold';
                    font-size: 2.25em;
                    letter-spacing: 3px;
                    color: #ffffff;
                  "
                >
                  ฿999
                </h4>
              </div>
              <hr
                class="ticket-list"
                style="
                  margin-bottom: 0px;
                  margin-top: 0px;
                  opacity: 0.5;
                  width: 90%;
                  height: 1px;
                  border: none;
                  color: #ffffff;
                  background-color: #ffffff;
                "
              />
              <div
                class="ticket-list"
                style="
                  margin-top: 0px;
                  padding-bottom: 10px;

                  width: 85%;
                  display: grid;
                  grid-template-columns: 60% 40%;
                "
              >
                <div>
                  <h4
                    style="
                      margin-bottom: 10px;
                      font-family: 'CloudBold';
                      font-size: 2.25em;
                      letter-spacing: 2.4px;
                      color: #ffffff;
                    "
                  >
                    Lorem ipsum
                  </h4>
                  <h4
                    style="
                      margin-bottom: 20px;
                      margin-top: 0px;
                      font-family: 'CloudLight';
                      font-size: 2em;
                      opacity: 0.6px;
                      letter-spacing: 1.8px;
                      color: #ffffff;
                    "
                  >
                    Sed do eiusmod tempor incididunt
                  </h4>
                </div>
                <h4
                  style="
                    margin-bottom: 20px;
                    text-align: right;
                    font-family: 'CloudBold';
                    font-size: 2.25em;
                    letter-spacing: 3px;
                    color: #ffffff;
                  "
                >
                  ฿888
                </h4>
              </div>
            </div>
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 40px;
              "
            >
              <button id="ticketButton">
                GET TICKET<i
                  style="align: center; padding-left: 20px"
                  class="fa fa-arrow-right"
                ></i>
              </button>
            </div>
          </div>

          <!-- Picture -->
          <div id="ticket-pic">
            <img
              id="ticket-card"
              style="margin-top: 30px"
              src="@/assets/main/Letter case.png"
            />
          </div>
        </div>
      </div>
      <img src="@/assets/main/ticket_floral_left.png" />
    </div>
    <!-- Ticket -->

    <!-- Souvenir Section -->
    <div class="section">
      <div
        id="souvenir_section"
        class="page-container"
        style="padding-bottom: 0px"
      >
        <div>
          <div class="about" style="display: flex; justify-content: flex-start">
            <img style="width: 100px" src="@/assets/main/Group 292.png" />
            <div style="padding-left: 20px">
              <h4 id="aboutthai" style="margin-bottom: 0px">ของที่ระลึก</h4>
              <h4 id="abouttext" style="margin-bottom: 0px">SOUVENIR</h4>
            </div>
          </div>
        </div>
        <img
          class="center"
          style="margin-top: 44px; width: 100%"
          src="@/assets/main/souvenir.jpg"
        />
        <div>
          <p
            class="text-descript"
            style="
              margin-top: 50px;
              line-height: 1.5em;
              letter-spacing: 2.4px;
              width: 100%;
              color: #ffffff;
              font-family: 'CloudLight';
              font-size: 2em;
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            vel turpis nunc eget lorem dolor sed viverra.
          </p>
          <div class="button_container">
            <button id="shopButton">
              GO TO SHOP<i
                style="align: center; padding-left: 20px"
                class="fa fa-arrow-right"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Souvenir Section -->

    <!-- FAQ -->
    <div id="faq" class="section">
      <div class="page-container">
        <div style="padding-top: 150px">
          <div class="about" style="display: flex; justify-content: flex-start">
            <img style="width: 100px" src="@/assets/main/Group 292.png" />
            <div style="padding-top: 20px">
              <h4 id="aboutthai" style="margin-bottom: 0px">คำถาม</h4>
              <h4 id="abouttext" style="margin-bottom: 0px">FAQs</h4>
            </div>
          </div>
        </div>
        <!-- Faq section -->
        <div>
          <div style="margin-top: 60px; padding-bottom: 30px">
            <!-- Box -->
            <!-- Question Box -->
            <div
              @click="Ans1 = !Ans1"
              class="about"
              style="
                margin-bottom: 35px;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                cursor: pointer;
              "
            >
              <img class="faqicon" src="@/assets/main/Question-1.png" />
              <div
                class="questionBox"
                style="
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  cursor: pointer;
                "
              >
                <i
                  style="font-size: 40px"
                  class="fa fa-angle-right"
                  :class="arrowLeft1"
                ></i>
                <h3 class="textQuestion" style="margin-left: 20px">
                  งานจัดที่ไหน ?
                </h3>
              </div>
            </div>
            <!-- Question Box -->

            <!-- Answer Box -->
            <transition name="slide">
              <div
                v-if="Ans1"
                class="about"
                style="
                  margin-bottom: 35px;
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  cursor: default;
                "
              >
                <div
                  class="answerBox"
                  style="width: 70%; display: flex; justify-content: center"
                >
                  <h3
                    class="textAnswer"
                    style="padding-left: 10px; margin-left: 10px"
                  >
                    ร้าน The Cavalry Club อยู่ซอยพหลโยธิน2 ซึ่งอยู่ระหว่าง
                    สถานนีรถไฟฟ้า BTSสนามเป้า และ BTSอารีย์
                  </h3>
                </div>
                <img
                  class="faqicon"
                  style="margin-left: 20px; margin-top: 40px"
                  src="@/assets/main/Question.png"
                />
              </div>
            </transition>
            <!-- Answer Box -->

            <!-- Question Box -->
            <div
              @click="Ans2 = !Ans2"
              class="about"
              style="
                margin-bottom: 35px;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                cursor: pointer;
              "
            >
              <img class="faqicon" src="@/assets/main/Question-1.png" />
              <div
                class="questionBox"
                style="
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  style="font-size: 40px"
                  class="fa fa-angle-right"
                  :class="arrowLeft2"
                ></i>
                <h3 class="textQuestion" style="margin-left: 20px">
                  งานจัดขึ้นวันไหน ?
                </h3>
              </div>
            </div>
            <!-- Question Box -->

            <!-- Answer Box -->
            <transition name="slide">
              <div
                v-if="Ans2"
                class="about"
                style="
                  margin-bottom: 35px;
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  cursor: default;
                "
              >
                <div
                  class="answerBox"
                  style="width: 70%; display: flex; justify-content: center"
                >
                  <h3
                    class="textAnswer"
                    style="padding-left: 10px; margin-left: 10px"
                  >
                    วันเสาร์ที่ 20 มีนาคม 2564
                    เราจัดงานวันเสาร์เพื่อเผื่อเวลาวันอาทิตย์ให้พี่ ๆ
                    ที่ต้องไปทำงานวันจันทร์ได้พักผ่อนกันให้เต็มที่
                  </h3>
                </div>
                <img
                  class="faqicon"
                  style="margin-left: 20px; margin-top: 40px"
                  src="@/assets/main/Question.png"
                />
              </div>
            </transition>
            <!-- Answer Box -->

            <!-- Question Box -->
            <div
              @click="Ans3 = !Ans3"
              class="about"
              style="
                margin-bottom: 35px;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                cursor: pointer;
              "
            >
              <img class="faqicon" src="@/assets/main/Question-1.png" />
              <div
                class="questionBox"
                style="
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  style="font-size: 40px"
                  class="fa fa-angle-right"
                  :class="arrowLeft3"
                ></i>
                <h3 class="textQuestion" style="margin-left: 20px">
                  ใครเข้าร่วมงานได้บ้าง ?
                </h3>
              </div>
            </div>
            <!-- Question Box -->

            <!-- Answer Box -->
            <transition name="slide">
              <div
                v-if="Ans3"
                class="about"
                style="
                  margin-bottom: 35px;
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  cursor: default;
                "
              >
                <div
                  class="answerBox"
                  style="width: 70%; display: flex; justify-content: center"
                >
                  <h3
                    class="textAnswer"
                    style="padding-left: 10px; margin-left: 10px"
                  >
                    นักศึกษาวิศวกรรมคอมพิวเตอร์ทุกคนตั้งแต่รุ่น 1 ถึงรุ่น 34
                    รวมถึงอาจารย์และบุคลากรของวิศวกรรมคอมพิวเตอร์ทุกท่าน
                  </h3>
                </div>
                <img
                  class="faqicon"
                  style="margin-left: 20px; margin-top: 40px"
                  src="@/assets/main/Question.png"
                />
              </div>
            </transition>
            <!-- Answer Box -->

            <!-- Question Box -->
            <div
              @click="Ans4 = !Ans4"
              class="about"
              style="
                margin-bottom: 35px;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                cursor: pointer;
              "
            >
              <img class="faqicon" src="@/assets/main/Question-1.png" />
              <div
                class="questionBox"
                style="
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  style="font-size: 40px"
                  class="fa fa-angle-right"
                  :class="arrowLeft4"
                ></i>
                <h3 class="textQuestion" style="margin-left: 20px">
                  ค่าใช้จ่ายเท่าไหร่ ?
                </h3>
              </div>
            </div>
            <!-- Question Box -->

            <!-- Answer Box -->
            <transition name="slide">
              <div
                v-if="Ans4"
                class="about"
                style="
                  margin-bottom: 35px;
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  cursor: default;
                "
              >
                <div
                  class="answerBox"
                  style="width: 70%; display: flex; justify-content: center"
                >
                  <h3
                    class="textAnswer"
                    style="padding-left: 10px; margin-left: 10px"
                  >
                    สามารถซื้อบัตรเข้าร่วมงานได้ที่….
                    และใครที่อยากสนับสนุนกิจกรรมนักศึกษาวิศวกรรมคอมพิเตอร์สามารถร่วมซื้อของที่ระลึกในงานได้ที่นี่…
                  </h3>
                </div>
                <img
                  class="faqicon"
                  style="margin-left: 20px; margin-top: 40px"
                  src="@/assets/main/Question.png"
                />
              </div>
            </transition>
            <!-- Answer Box -->

            <!-- Question Box -->
            <div
              @click="Ans6 = !Ans6"
              class="about"
              style="
                margin-bottom: 35px;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                cursor: pointer;
              "
            >
              <img class="faqicon" src="@/assets/main/Question-1.png" />
              <div
                class="questionBox"
                style="
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  style="font-size: 40px"
                  class="fa fa-angle-right"
                  :class="arrowLeft4"
                ></i>
                <h3 class="textQuestion" style="margin-left: 20px">
                  ในงานมีอะไรบ้าง ?
                </h3>
              </div>
            </div>
            <!-- Question Box -->

            <!-- Answer Box -->
            <transition name="slide">
              <div
                v-if="Ans6"
                class="about"
                style="
                  margin-bottom: 35px;
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  cursor: default;
                "
              >
                <div
                  class="answerBox"
                  style="width: 70%; display: flex; justify-content: center"
                >
                  <h3
                    class="textAnswer"
                    style="padding-left: 10px; margin-left: 10px"
                  >
                    ภายในงานมีอาหารบุฟเฟ่ต์ และกิจกรรมมากมาย
                    ทั้งการแสดงจากนักศึกษาปัจจุบัน อาจารย์และบุคลากร
                    และพื้นที่สำหรับแลกเปลี่ยนความคิดเห็นกับรุ่นพี่ศิษย์เก่า
                  </h3>
                </div>
                <img
                  class="faqicon"
                  style="margin-left: 20px; margin-top: 40px"
                  src="@/assets/main/Question.png"
                />
              </div>
            </transition>
            <!-- Answer Box -->

            <!-- Question Box -->
            <div
              @click="Ans5 = !Ans5"
              class="about"
              style="
                margin-bottom: 35px;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                cursor: pointer;
              "
            >
              <img class="faqicon" src="@/assets/main/Question-1.png" />
              <div
                class="questionBox"
                style="
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  style="font-size: 40px"
                  class="fa fa-angle-right"
                  :class="arrowLeft6"
                ></i>
                <h3 class="textQuestion" style="margin-left: 20px">
                  งานนี้จำเป็นต้องแต่งตัวสวยๆ ไปไหม ?
                </h3>
              </div>
            </div>
            <!-- Question Box -->

            <!-- Answer Box -->
            <transition name="slide">
              <div
                v-if="Ans5"
                class="about"
                style="
                  margin-bottom: 35px;
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  cursor: default;
                "
              >
                <div
                  class="answerBox"
                  style="width: 70%; display: flex; justify-content: center"
                >
                  <h3
                    class="textAnswer"
                    style="padding-left: 10px; margin-left: 10px"
                  >
                    ไม่ต้องค่ะ ขอแค่ทุกคนแต่งตัวให้เกียติสถานที่ก็พอ
                    เพราะเราอยากให้ทุกคนได้มาเจอกัน
                    แต่ทางทีมงานมีรางวัลเครื่องแต่งกายยอดเยี่ยมภายในงานให้ด้วยนะคะ
                  </h3>
                </div>
                <img
                  class="faqicon"
                  style="margin-left: 20px; margin-top: 40px"
                  src="@/assets/main/Question.png"
                />
              </div>
            </transition>
            <!-- Answer Box -->
            <!-- Box -->
          </div>
        </div>
      </div>
    </div>
    <!-- FAQ -->

    <!-- Sponsor -->
    <div
      class="section"
      style="background: linear-gradient(180deg, #292668 60%, #3b377a 60%)"
    >
      <div id="sponsor_section" class="page-container">
        <!-- Title -->
        <div>
          <h4
            style="
              margin-top: 0px;
              margin-bottom: 10px;
              text-align: center;
              font-family: 'CloudBold';
              font-size: 4em;
              line-height: 1.5em;
              letter-spacing: 4.8px;
              color: #ffffff;
            "
          >
            SPONSORS
          </h4>
          <hr
            style="
              width: 10%;
              margin-top: 0px;
              height: 1px;
              border: none;
              color: #ffffff;
              background-color: #ffffff;
            "
          />
        </div>
        <!-- Logo -->
        <div id="sponsor_box">
          <img style="width: 80px" src="@/assets/main/asquare.png" />
          <img style="width: 130px" src="@/assets/main/innosoft_logo.svg" />
          <img style="width: 80px" src="@/assets/main/new-logo-kmutt1.png" />
          <img
            style="width: 120px"
            src="@/assets/main/857f1d2429af9eb87f8c7cb0fcbd0cb7.png"
          />
        </div>
        <!-- Logo -->
      </div>
    </div>
    <!-- Sponser -->
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "mainpage",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      Ans1: true,
      Ans2: false,
      Ans3: false,
      Ans4: false,
      Ans5: false,
      Ans6: false,
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  computed: {
    arrowLeft1() {
      let arrow = "turn-arrow";
      let turnback = "turn-arrow_back";
      if (this.Ans1 === true) {
        return arrow;
      }
      return turnback;
    },
    arrowLeft2() {
      let arrow = "turn-arrow";
      let turnback = "turn-arrow_back";
      if (this.Ans2 === true) {
        return arrow;
      }
      return turnback;
    },
    arrowLeft3() {
      let arrow = "turn-arrow";
      let turnback = "turn-arrow_back";
      if (this.Ans3 === true) {
        return arrow;
      }
      return turnback;
    },
    arrowLeft4() {
      let arrow = "turn-arrow";
      let turnback = "turn-arrow_back";
      if (this.Ans4 === true) {
        return arrow;
      }
      return turnback;
    },
    arrowLeft5() {
      let arrow = "turn-arrow";
      let turnback = "turn-arrow_back";
      if (this.Ans5 === true) {
        return arrow;
      }
      return turnback;
    },
    arrowLeft6() {
      let arrow = "turn-arrow";
      let turnback = "turn-arrow_back";
      if (this.Ans6 === true) {
        return arrow;
      }
      return turnback;
    },
  },
  mounted() {
    setInterval(() => {
      var countDownDate = new Date("March 20, 2021 19:00:00").getTime();
      var now = new Date().getTime();

      var distance = countDownDate - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        this.days = "00";
        this.hours = "00";
        this.minutes = "00";
        this.seconds = "00";
      } else {
        if (this.days < 10) {
          this.days = "0" + this.days;
        }
        if (this.hours < 10) {
          this.hours = "0" + this.hours;
        }
        if (this.minutes < 10) {
          this.minutes = "0" + this.minutes;
        }
        if (this.seconds < 10) {
          this.seconds = "0" + this.seconds;
        }
      }
    }, 1000);
  },
};
</script>

<style scoped>
* {
  z-index: 1;
}
#ticket-card {
  width: 100%;
}
#date-section {
  display: inline-block;
  padding-top: 30px;
  padding-bottom: 30px;
}
#img-date-calendar {
  width: 40px;
  height: 40px;
}
#img-date-pin {
  width: 26px;
}
.faqicon {
  width: initial;
}
.ticket-list {
  margin-left: 45px;
  margin-right: 40px;
}
.ticket-title {
  margin-bottom: 20px;
  font-family: "CloudBold";
  font-size: 3em;
  letter-spacing: 3px;
  color: #ffffff;
}
#ggmaps {
  padding-bottom: 110px;
}
#about-date {
  margin-left: 45px;
  display: inline-block;
}
#about-place {
  margin-left: 114px;
  display: inline-block;
}
#first-welcome {
  margin-top: 10px;
  font-family: "CloudLight";
  font-size: 4em;
  color: #f8b8b2;
}
#first-place {
  margin-top: 10px;
  margin-bottom: 0px;
  font-size: 3em;
  letter-spacing: 1.05px;
  font-family: "CloudLight";
  color: #ffffff;
  opacity: 1;
}

#busroad {
  display: initial;
}
#first-date {
  margin-top: 40px;
  font-size: 5.5em;
  letter-spacing: 5.5px;
  font-family: "CloudBold";
  color: #ffffff;
}
#ticket-pic {
  padding-left: 20px;
  display: flex;
  align-items: flex-end;
}
#ticket-info {
  padding-right: 60px;
}

#ticket-container {
  display: grid;
  grid-template-columns: 65% 35%;
}

#bts-icon {
  width: 44px;
}

.video-wrapper {
  width: 920px;
  height: 530px;
}

.countdown_number {
  font-size: 9.5em;
}

.countdown_text {
  font-size: 3.25em;
}

.countdown_colon {
  font-size: 8.25em;
  display: inline-block;
  color: #ffffff;
  letter-spacing: 2.66px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
}

#countdown_section {
  background-color: #4f4c8e;
  padding-top: 50px;
  padding-bottom: 50px;
}
#sponsor_box {
  margin-top: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  height: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#sponsor_section {
  padding-bottom: 40px;
}
.fa-angle-right {
  color: #f28093;
}
.textQuestion {
  letter-spacing: 2.4px;
  line-height: 1.5em;
  font-size: 2em;
  color: #292668;
  font-family: "CloudBold";
  display: inline-block;
  margin-left: 10px;
  margin-top: 6px;
}
.textAnswer {
  letter-spacing: 2.2px;
  line-height: 1.5em;
  font-size: 2em;
  color: #ffffff;
  font: normal normal normal 2em/2em Helvetica Neue;
  display: inline-block;
  margin-top: 6px;
  line-height: 31px;
}
.questionBox {
  width: 35%;
  background-color: #ffffff;
  border-radius: 29px;
  padding: 6px;
  margin-left: 20px;
  position: relative;
  padding-left: 30px;
  padding-right: 60px;
  margin-right: 20px;
}
.questionBox:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #ffffff;
  border-right: 10px solid transparent;
  border-top: 10px solid #ffffff;
  border-bottom: 10px solid transparent;
  left: 19px;
  bottom: -12px;
}
.answerBox {
  background-color: #7572b4;
  border-radius: 29px;
  padding: 6px;
  position: relative;
}
.answerBox:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid #7572b4;
  border-top: 10px solid #7572b4;
  border-bottom: 10px solid transparent;
  right: 19px;
  bottom: -12px;
}
#faq {
  background-image: url("../assets/main/main-17_0.65.png");
  background-repeat: no-repeat;
  background-size: 100%;
  padding-bottom: 110px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
#tickettype {
  background-color: #4f4c8e;
  border-radius: 25px;
  margin-top: 40px;
}
#schedultitle {
  font-family: "CloudBold";
  letter-spacing: 1.98px;
  color: #ffebd4;
  font-size: 4em;
  margin: 0px;
}
#schedule_section {
  background-color: #1c195b;
  margin-top: 50px;
  margin-bottom: 150px;
}

.schedule-table {
  width: 100%;
  display: grid;
  grid-template-columns: 20% 5% 75%;
  grid-template-rows: repeat(4, 1fr);
  margin-top: 50px;
}
.schedule-table > h4,
.schedule-table > h3 {
  line-height: 1.5em;
  font-size: 2em;
  color: #ffffff;
  margin: 0;
}
.schedule-table > h3 {
  font-family: "CloudBold";
}
.schedule-table > h4 {
  padding-left: 40px;
  font-family: "CloudLight";
}
.schedule-table > div {
  width: 50px;
  grid-row: span 3;
  margin-bottom: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.schedule-table > div > img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
#abouttext {
  font-family: "CloudBold";
  color: #f28093;
  font-size: 4em;
  letter-spacing: 5.4px;
  text-align: right;
  margin-top: -10px;
}
#aboutdetail {
  text-indent: 7.5em;
  letter-spacing: 2.4px;
  color: #ffffff;
  font-family: "CloudLight";
  font-size: 2em;
  margin-top: 30px;
  line-height: 1.5em;
  padding-bottom: 5px;
  margin-top: 15px;
  margin-bottom: 0px;
}
#aboutthai {
  font-family: "CloudLight";
  color: #f28093;
  font-size: 3em;
  letter-spacing: 2px;
  text-align: right;
  margin: 0px;
}
#mainpage {
  background-color: #292668;
  width: 100%;
  margin: 0;
}
.about {
  align-items: center;
  justify-content: center;
  margin-top: 0px;
}
h3 {
  margin-top: 0px;
  margin-bottom: 0px;
}
#firstsection {
  padding-top: 80px;
  height: 700px;
  background-image: url("../assets/main/bg-01_0.65.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

#firstsection > div > img {
  height: 150px;
}

#secondsection {
  width: 100%;
  padding: 150px 0;
}

#secondsection > div.page-container {
  position: relative;
}

#secondsection > div.page-container > img:nth-child(2),
#secondsection > div.page-container > img:nth-child(3) {
  z-index: 1;
}

#secondsection > div.page-container > img:nth-child(2) {
  position: absolute;
  top: -150px;
  left: -150px;
  width: 400px;
}

#secondsection > div.page-container > img:nth-child(3) {
  position: absolute;
  bottom: -150px;
  right: -150px;
  width: 400px;
}

#ticketsection {
  margin: 0px;
  position: relative;
}

#ticketsection > div.page-container {
  z-index: 2;
}

#ticketsection > img:nth-child(2) {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 400px;
  z-index: 1;
}

#nighttomeet {
  margin-top: 40px;
  font-size: 4.5em;
  font-weight: 300;
  font-family: "CloudLight";
  color: #ffffff;
  letter-spacing: 5.5px;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #ffffff;
}

#year {
  margin-left: 20px;
  font-weight: 300;
  font-family: "CloudLight";
  color: #ffffff;
  letter-spacing: 5.5px;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #f8b8b2;
}
.frame {
  background-color: #393679;
  border-radius: 18px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}
#nextButton {
  color: #ffffff;
  background: #f28093;
  border: none;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 2.875em;
  letter-spacing: 2.3px;
  font-family: "CloudBold";
  margin-left: 0px;
  margin-top: 40px;
  line-height: 0;
  cursor: pointer;
}

#shopButton {
  color: #ffffff;
  background: #f28093;
  border: none;
  padding-top: 22px;
  padding-bottom: 22px;
  padding-left: 35px;
  padding-right: 35px;
  font-size: 3em;
  line-height: 0;
  letter-spacing: 3.5px;
  font-family: "CloudBold";
  margin-left: 0px;
  margin-top: 30px;
  cursor: pointer;
}

#ticketButton {
  color: #ffffff;
  background: #f28093;
  border: none;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 36px;
  padding-right: 36px;
  font-size: 3em;
  line-height: 0;
  letter-spacing: 3.5px;
  font-family: "CloudBold";
  cursor: pointer;
}

#video {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  position: relative;
}

.turn-arrow {
  -webkit-transform: rotateZ(90deg);
  -moz-transform: rotateZ(90deg);
  -ms-transform: rotateZ(90deg);
  -o-transform: rotateZ(90deg);
  transform: rotateZ(90deg);

  -webkit-transform-origin: 50% 50%;
  -moz-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  -o-transform-origin: 50% 50%;
  transform-origin: 50% 50%;

  -webkit-transition: 300ms ease all;
  -moz-transition: 300ms ease all;
  -o-transition: 300ms ease all;
  transition: 300ms ease all;
}

.turn-arrow_back {
  -webkit-transform: rotateZ(0deg);
  -moz-transform: rotateZ(0deg);
  -ms-transform: rotateZ(0deg);
  -o-transform: rotateZ(0deg);
  transform: rotateZ(0deg);

  -webkit-transform-origin: 50% 50%;
  -moz-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  -o-transform-origin: 50% 50%;
  transform-origin: 50% 50%;

  -webkit-transition: 300ms ease all;
  -moz-transition: 300ms ease all;
  -o-transition: 300ms ease all;
  transition: 300ms ease all;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 0, 0, 0);
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0, 0);
  -o-transition-timing-function: cubic-bezier(0, 0, 0, 0);
  transition-timing-function: cubic-bezier(0, 0, 0, 0);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

@media screen and (max-width: 1024px) {
  #ticketsection > img:nth-child(2) {
    width: 200px;
  }
}

@media screen and (max-width: 768px) {
  #aboutdetail {
    text-indent: 3em;
    line-height: 1.5em;
  }
  .countdown_number {
    font-size: 6.25em;
  }

  #firstsection > div > img {
    height: 140px;
  }

  .countdown_text {
    font-size: 2.25em;
  }

  .countdown_colon {
    font-size: 7.25em;
  }
  .video-wrapper {
    width: 640px;
    height: 380px;
  }

  #ticket-container {
    display: block;
    grid-template-columns: 65% 35%;
  }

  #ticket-info {
    padding-right: 0px;
  }

  #ticket-pic {
    display: none;
  }

  #faq {
    padding-bottom: 50px;
  }
}

@media screen and (max-width: 414px) {
  #date-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .questionBox {
    width: 50%;
    padding-right: 20px;
    margin-right: 50px;
  }
  #sponsor_section {
    padding-bottom: 20px;
  }
  .button_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-descript,
  #aboutdetail {
    text-align: center;
    text-indent: 0em;
  }
  #firstsection > div > img {
    height: 80px;
  }
  .ticket-list {
    margin-left: 20px;
    margin-right: 20px;
  }

  #about-date,
  #about-place {
    margin-left: 0px;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }

  #about-place {
    padding-left: 5px;
  }

  #about-date > img {
    height: 10px;
  }

  #aboutdetail {
    padding-bottom: 20px;
  }

  #nighttomeet {
    font-size: 3.5em;
    font-weight: 300;
    margin-top: 30px;
    letter-spacing: 2.5px;
  }
  #firstsection {
    height: 590px;
  }
  #first-welcome {
    font-size: 3em;
  }
  #first-place {
    font-size: 2.5em;
  }
  #first-date {
    font-size: 3.5em;
  }
  #nextButton {
    font-size: 2.5em;
  }
  .countdown_number {
    font-size: 4em;
  }

  .countdown_text {
    font-size: 2em;
  }

  .countdown_colon {
    font-size: 2.25em;
    letter-spacing: 0;
    margin: 0px 7px;
  }
  .frame {
    padding-left: 15px;
    padding-right: 15px;
  }
  .video-wrapper {
    width: 426px;
    height: 240px;
  }
  .schedule-table > div > img {
    display: none;
  }
  .schedule-table > h3 {
    font-size: 1.5em;
    line-height: 1.5em;
    padding-top: 2px;
    letter-spacing: 0px;
  }
  #busroad {
    display: none;
  }
  #bts-icon {
    width: 33px;
  }
  #ggmaps {
    padding-bottom: 80px;
  }
  #schedule_section {
    margin-bottom: 75px;
  }
  #tickettype {
    margin-top: 28px;
  }
  .ticket-title {
    font-size: 2em;
  }
  .textQuestion {
    letter-spacing: 1px;
  }
  .faqicon {
    width: 30px;
  }
  #sponsor_box {
    margin-top: 40px;
    background-color: #ffffff;
    border-radius: 10px;
    height: 180px;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-content: center;
    padding-left: 35px;
    padding-top: 3px;
    padding-bottom: 3px;
  }
}
@media screen and (max-width: 375px) {
  #sponsor_box {
    padding-left: 26px;
  }
  #firstsection {
    height: 520px;
  }
  .countdown_colon {
    margin: 0px 5px;
  }
  #aboutdetail {
    padding-bottom: 0px;
  }
  #schedule_section {
    margin-top: 20px;
  }
}
@media screen and (max-width: 360px) {
  #firstsection > div > img {
    height: 73px;
  }
  .countdown_colon {
    margin: 0px 3px;
  }
  #sponsor_box {
    padding-left: 20px;
  }
}
</style>