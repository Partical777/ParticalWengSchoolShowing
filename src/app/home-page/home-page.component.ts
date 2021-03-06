import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  public profileStaticData = [
    {
      title: "Email :",
      content: "particalweng@gmail.com"
    },
    {
      title: "Phone :",
      content: "+886 919-417-087"
    },
    {
      title: "Website :",
      content: "PersonalCard.Design/partical.weng"
    },
  ];
  public introductionStaticData = [
    "曾於金融科技業新創擔任 Angular 前端工程師，學會軟體協作流程及如何使用專案管理使團隊運作良好；也是在此確認自己的熱情是在於整合資源，製作產品或是幫助更適合的夥伴，而不僅僅是技術層面。",
    "-space-",
    "生物本科跨足前端之工程師，由豐富的線上課程、資源學習成材，甚至於2018年時，飛去美國矽谷參與一所非正規程式學校 - 42 長達一個月的 piscine 測驗並且通過測試。",
    "-space-",
    "熱衷學習不同領域知識與執行 Side Project 者，設計、行銷、商業模式、專案管理等等，藉由書籍與豐富的線上資源深入瞭解。",
    "曾經主導小團隊製作了”戶外實境遊戲”。",
    "也經營著不定時更新之技術部落格。",
    "目前正進行著 PersonalCard.Design 的製作，Beta 版本已有 56 位出初期使用者。",
    "-space-",
    "平時也參與許多活動，像是新創盛會 Meet Taipei 以及許多大大小小的創新創業分享、展覽，曾經加入多個社群：Futureward, Mzone, 創客萊吧, 創客閣樓, Innoventure Club...。",
    "-space-",
    "愛好發掘國內外創新的產品、服務及商業模式，期待著創新將創造更美好的世界。固定關注 Product Hunt，以及其他社群與新聞平台。",
    "-space-",
    "相信廣泛學習與精深技能一樣重要，並且相信發展更多樣化的技能組合將是未來趨勢。"
  ]
  public educationStaticData = [
    {
      title: "42 Silicon Valley",
      description: "July 2018 -  Aug 2018",
      contentList: [
        "Fremont, California",
        "(已通過為期一個月之 Piscine 測試)"
      ]
    },
    {
      title: "中山大學生物科學系",
      description: "Sep 2016 - Jun 2018",
      contentList: [
        "高雄, 臺灣"
      ]
    },
  ];
  public employmentStaticData = [
    {
      title: "Careline 英國凱萊",
      description: "Front-end Engineer",
      content: {
        company: "Careline (https://www.careline.com.tw/)",
        title: "職位：Front-end Engineer",
        period: "時間：2019/09 - 2020/02",
        descriptionText: "描述：",
        descriptionList: [
          "團隊運用 Scrum 進行開發，以及 Git Flow & Github Flow 的混合流程。",
          "運用 Slack, Jira 進行溝通及專案管理。",
          "使用 Angular 2+ 框架，維護及製作自己公司的購買網站。",
          "使用 Css Grid 建立更加創意的版型設計。",
          "運用及習得知識：HTML, CSS, Typescript, Angular 2+, Bootstrap, API, Scrum, Git Flow & Github Flow, 專案管理",
        ]
      }
    },
    {
      title: "Cavedu",
      description: "Robot Developer, Intern",
      content: {
        company: "Cavedu Education (http://www.cavedu.com/)",
        title: "職位：Robot Developer, Intern",
        period: "時間：2017/07 - 2017/08",
        descriptionText: "描述：",
        descriptionList: [
          "擔任 Linkit7697 助教，協助教學培訓大學生以及在學老師之課程",
          "開發多個新功能給積木程式語言 BlocklyDuino",
          "物聯網應用，運用 Chatbot 及 Linkit7697 板，藉由 MQTT 技術實現通訊",
          "使用 Linkit7697 製作超音波避障車以及循跡車",
          "運用及習得知識：教學技巧, C, Javascript, Node.js, Linkit7697 using Arduino",
        ]
      }
    },
    {
      title: "Mzone",
      description: "3D Printing TA",
      content: {
        company: "Mzone Maker Space (https://www.mzone.co/)",
        title: "職位：3D Printing TA",
        period: "時間：2016/09 - 2018/06",
        descriptionText: "描述：",
        descriptionList: [
          "協助教學 3D 列印以及繪圖軟體設計",
          "曾使用 Atom 等多台不同機型",
          "具備機台修復技能",
          "運用及習得知識：教學技巧, 3D列印實機操作, 3D列印線材及多種成型技術知識, 3D圖設計, 機台修理, 切片技巧",
        ]
      }
    },
  ];
  public skillStaticData = [
    {
      title: "Front-End 網頁前端",
      contentList: [
        "3 年以上前端經歷",
        "HTML, CSS, SCSS, Javascript, Typescript"
      ]
    },
    {
      title: "Angular 9",
      contentList: [
        "建立完整功能與架構現代網站",
        "透過多種線上自學資源習得"
      ]
    },
    {
      title: "Firebase",
      contentList: [
        "擁有資料庫設置、網站 Host、使用者登入系統等建立技術",
        "使用 Firebase 搭配前端框架，即可建立具有完整後端功能之網站"
      ]
    },
    {
      title: "UX/UI 設計",
      contentList: [
        "2年以上 Adobe Illustrator, Photoshop 使用經驗",
        "平面及 Logo 設計製圖能力"
      ]
    },
    {
      title: "Maker 技術",
      contentList: [
        "曾經待過多個 Maker 空間&社群：Futureward, Mzone, 創客萊吧, 創客閣樓習得雷射切割雕刻，3D 列印，木工技術，以及許多開源電路板之應用。",
      ]
    },
  ]
  public projectsStaticData = [
    {
      title: "PersonalCard.Design",
      subTitle: "https://personalcare.design",
      image: "https://lh5.googleusercontent.com/ArU-lMqMs6ppaXUg2s8sBVfAUcIyDNT9-4t5UxChmZMIkhidYI40iFDmxwzcYlHXD_P3BOyY3HXq_t_WYRi0Gj4XRA4vD29u1JBQNW14dWvr5zei-5pzAzJIC5FkUrbd-XIxU5-J",
      content: "Personal Card is your Business Card, 為 2019/12 中旬開始之專案, 從設計、製作，到行銷、尋找使用者皆一手包辦, 目前 Beta 版本擁有 56 位初期使用者, 新功能仍在增加中"
    },
    {
      title: "Bal Laedi Blogger",
      subTitle: "https://ballaediworkshop.blogspot.com",
      image: "https://lh5.googleusercontent.com/rteMRMC_sCY9z43hDiM3bdCNewbX5Q-0gHAHNjOUA8yNbjvwRtfMoeHNxM9zFmuRFRrGZUN4D6iIBO0FZeMvg6a38-4a6KhmD_wp49Tj85GZz2Flo9TR15crNbFCfAwmJczUbPTw",
      content: "科技、技術、與觀點之部落格, 召集了多位團隊夥伴一同加入, 撰寫各自不同專業面向之主題文章, 也負責設計部落格主題及文章版型"
    },
    {
      title: "Partical Design Collections",
      subTitle: "https://www.instagram.com/partical_design/",
      image: "https://lh5.googleusercontent.com/HJve9hyi2BOky-FQES_YW5j7RuIwdWzBkHWbbgzrku7-3I_Ij6drP9WwIQU-z0Vn1q6vasuO700y-QQOZDK-V6kvxZnix88oxdt03abytfu1KCwQFDB7-36X1WSDxBtZZErDNSvg",
      content: "各式創作, Logo, 動畫, Neon...etc, by Adobo Illustrate, Photoshop, After Effect"
    },
  ]
  public moreProjectsStaticData = [
    {
      title: "42 piscine",
      contentList: [
        "參與一個月的 “Piscine” 測驗，在那一個月中每天都必須解決多個項目，並且每週擁有隨機組員的合作專案，以及每週的 Exam。",
        "Github : https://github.com/Partical777/42piscine",
        "Utilized : C programming, Unix, Git.",
      ]
    },
    {
      title: "Idea Manager",
      contentList: [
        "製作一個儲存及管理點子的網頁應用服務，特別針對“連結”的UX操作優化，讓使用者以更方便的方式管理搜集而來的網頁資訊。",
        "Live: https://ideas-manager.stackblitz.io/",
        "Utilized : Angular 7, Angular Material 2, Firebase Firestore, Google Sign In.",
      ]
    },
    {
      title: "Bal Laedi Project Musemaze : Real Escape Game",
      contentList: [
        "共同設計一個真實世界的實境遊戲，建立更沈浸的故事體驗與操作介面，讓每位玩家都可以透過手機，享受在另一個世界觀中。",
        "Utilized : Front-end, Node.js, Bootstrap, jQuery, Google Sheet & App Script, Ajax, Catching, GPS, RWD Web Dev, Heroku."
      ]
    },
    {
      title: "News-Intergrated Chatbot",
      contentList: [
        "透過 Line Chatbot 及網頁爬蟲技術，整合多個優良科技新聞網站，每當有新聞發佈，將即時推送至手機。",
        "Utilized : Web Crawing, Javascript, Node.js, Chatbot."
      ]
    },
    {
      title: "IoT Device Developement + Chatbot",
      contentList: [
        "開發透過 ChatBot 控制之物聯網裝置，透過 Line Chatbot 輸入指令，即可獲取感測器狀態，以及控制其行為。",
        "Utilized : Javascript, Node.js, Arduino, MQTT, MCS, Linkit7697.",
      ]
    },
    {
      title: "Arduino RC Car with Android App",
      contentList: [
        "設計遙控車，透過 Arduino Uno, PWM 伺服馬達, HC-06 藍芽模組。",
        "車身外殼透過 Illustrator 繪製及雷射切割木板製作，內部架構透過 3D 列印自行量測繪製。",
        "Utilized : Arduino, Android, Laser Cutting, 3D Printing, Adobe Illustrator.",
      ]
    },
  ]

  ngOnInit(): void {
  }

}
