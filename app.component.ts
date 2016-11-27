import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li class="main btn" *ngFor="let item of items; let i = index" (click)="showSubMenu(item, i)">
      {{item.title}}
    </li>
  </ul>
  <div style="clear:both;"></div>

  <ul [ngStyle]="subLeft">
        <li class="sub" *ngFor="let sublink of sublinks">
           <a class="btn fullwidth" [href]="sublink.href" target="{{sublink.target}}">{{sublink.title}}</a>
        </li>
    </ul>
  `,
  styles: [`ul {
          margin:0;
          padding:0;
      }

      li {
          margin:0;
          padding:0;
          list-style: none;
          text-align: center;
          line-height:27px;
          cursor: pointer;
          border:1px solid white;
          background-color: #2581cc;
          background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#0B5BA1), to(#012238));
          background-image: -moz-linear-gradient(19% 75% 90deg,#012238, #0B5BA1);
          box-shadow: inset 0 1px 0 0 #a5b9d9;
      }

      li:hover {
          background-color: #458cff;
          background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#0D6CBF), to(#023F69));
          background-image: -moz-linear-gradient(19% 75% 90deg,#023F69, #0D6CBF)
      }

      li:active {
          background-color: #333;
          background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#666666), to(#111111));
          background-image: -moz-linear-gradient(19% 75% 90deg,#111111, #666666)
      }

      li:hover {
          background-color: #458cff;
          background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#0D6CBF), to(#023F69));
          background-image: -moz-linear-gradient(19% 75% 90deg,#023F69, #0D6CBF)
      }

      li:active {
          background-color: #333;
          background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#666666), to(#111111));
          background-image: -moz-linear-gradient(19% 75% 90deg,#111111, #666666)
      }

      .main {
          float: left;
          margin-top:5px;
          width:78px;
      }

      .sub {
          margin:0;
          width:120px;
          background-color: #220630;
          background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#6C1299), to(#220630));
          background-image: -moz-linear-gradient(19% 75% 90deg,#220630, #6C1299)
      }

      .sub:hover {
          background-color: #450C61;
          background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#8C17C7), to(#450C61));
          background-image: -moz-linear-gradient(19% 75% 90deg,#450C61, #8C17C7)
      }

      .sub:active {
          background-color: #111;
          background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#666666), to(#111111));
          background-image: -moz-linear-gradient(19% 75% 90deg,#111111, #666666)
      }

      .btn {
          color:#fff;
          text-decoration: none;
      }

      .fullwidth {
          /* inline-block allows the anchor tag to fill
             the entire width of the list item */
          display:inline-block;
          width:100%;
      }`]
})
export class AppComponent {

  subLeft = {'padding-left':'0px'};
  sublinks:any = null;
  items = [
   {"itemId":1, "title":"Google", "description":"Google Search Engine", 
     "sublinks":[
            {"title":"Google", "href":"http://google.com/", "target":""},
            {"title":"Play", "href":"http://play.google.com/", "target":"_blank"},
            {"title":"Plus", "href":"http://plus.google.com/", "target":"_blank" }
    ]},
    {"itemId":2, "title":"Yahoo", "description":"Yahoo Search Engine",
        "sublinks":[ 
            {"title":"Yahoo", "href":"http://yahoo.com/", "target":"_blank" },
            {"title":"Sports", "href":"http://sports.yahoo.com/", "target":"_blank" },
            {"title":"News", "href":"http://news.yahoo.com/", "target":"_blank" }
        ]},
    {"itemId":3, "title":"Bing", "description":"Bing Search Engine", 
         "sublinks":[
            {"title":"Bing", "href":"http://www.bing.com", "target":"_blank" },
            {"title":"Entertainment", "href":"http://www.bing.com/entertainment", "target":"_blank" },
            {"title":"Videos", "href":"http://www.bing.com/videos/browse?FORM=L8SP7", "target":"_blank" }
         ]},
    {"itemId":4, "title":"Dogpile", "description":"Dogpile Search Engine",
         "sublinks":[
             {"title":"Dogpile", "href":"http://www.dogpile.com", "target":"_blank"},
             {"title":"FAQ", "href":"http://www.dogpile.com/info.dogpl.t6.1/support/Faqs", "target":"_blank"},
             {"title":"Contact", "href":"http://m.dogpile.com/support/contactus", "target":"_blank" }
        ]}
  ];

  showSubMenu = function(item, pos) {
        console.log(pos);

        this.sublinks = item.sublinks;
        this.subLeft = {'padding-left':(80 * pos)+'px'};
    };
  
}


