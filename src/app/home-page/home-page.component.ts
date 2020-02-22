import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

}
