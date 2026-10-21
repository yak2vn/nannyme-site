import { useState } from "react";
import assetManifest from "./assetManifest.json";

const appUrl = "https://app.nannyme.love";
const media = (name) => assetManifest[name] || `/assets/${name}`;

const navItems = [
  ["HOME", "/"],
  ["ABOUT", "/about/"],
  ["NannyMEってなんだろう？", "/what-nannyme/"],
  ["NEWS TOPICS", "/news-topics/"],
  ["ご利用料金", "/price/"],
  ["利用の流れ", "/flow/"],
  ["FAQ", "/qa/"],
  ["サンクスページ", "/thanks/"],
  ["ログイン", `${appUrl}/signin`],
  ["お問い合わせ", "/contact/"],
  ["English", "/english/"],
];

const socials = [
  ["Instagram", "home-icon_sns-c_insta.png", "https://www.instagram.com/nannyme_official/"],
  ["X", "home-icon_sns-c_tw.png", "https://mobile.twitter.com/nannyme_love"],
  ["YouTube", "home-icon_sns-c_youtube.png", "https://www.youtube.com/channel/UCm3KI3ehaJytxFC_PZ0eI-A"],
  ["Facebook", "home-icon_sns-c_fb.png", "https://www.facebook.com/NannyME.official"],
  ["TikTok", "TikTok.png", "https://www.tiktok.com/@nannyme_official"],
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const hrefFor = (href) => href.startsWith("/") ? href : href;
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="NannyME ホーム">
          <img src={media("logo.png")} alt="NannyME" />
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} aria-hidden="true" />
        </button>
        <nav className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="メインメニュー">
          {navItems.map(([label, href]) => {
            const external = href.startsWith("http");
            const itemPath = href.replace(/\/$/, "") || "/";
            return (
              <a
                key={label}
                href={hrefFor(href)}
                className={!external && itemPath === path ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function SocialRail() {
  return (
    <aside className="social-rail" aria-label="公式SNS">
      {socials.map(([label, file, href]) => (
        <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={label}>
          <img src={media(file)} alt="" />
        </a>
      ))}
    </aside>
  );
}

const footerLinks = [
  ["お問い合わせ", "https://nannyme.love/contact/"],
  ["Nanny利用規約", "https://nannyme.love/nanny-user-policy/"],
  ["ME利用規約", "https://nannyme.love/me-user-policy/"],
  ["キャンセルポリシー", "https://nannyme.love/cancellation-policy/"],
  ["プライバシーポリシー", "https://nannyme.love/privacy-policy/"],
  ["特定商取引法に基づく表記", "https://nannyme.love/tokushoho/"],
  ["運営会社", "https://nanairo7.jp/about/"],
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="/" className="footer-brand"><img src={media("logo.png")} alt="NannyME" /></a>
        <nav className="footer-links" aria-label="フッターメニュー">
          {footerLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="footer-socials">
          {socials.map(([label, file, href]) => (
            <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={label}>
              <img src={media(file)} alt="" />
            </a>
          ))}
        </div>
        <small>© 2021 NannyME</small>
      </div>
    </footer>
  );
}

function RegisterBanner({ className = "" }) {
  return (
    <a className={`register-banner ${className}`} href={`${appUrl}/`}>
      <img src={media("登録無料バナー-768x126.png")} alt="登録無料 最短3分！オンライン保育" />
    </a>
  );
}

function PageTitle({ children, eyebrow }) {
  return (
    <div className="page-title">
      {eyebrow && <span>{eyebrow}</span>}
      <h1>{children}</h1>
      <i aria-hidden="true" />
    </div>
  );
}

function Layout({ children, pageClass = "" }) {
  return (
    <>
      <Header />
      <SocialRail />
      <main className={pageClass}>{children}</main>
      <Footer />
    </>
  );
}

const ageStories = [
  {
    label: "大人の方",
    text: "週１英会話・たまにダンス・昨日ははじめてフラワーアレンジメントを体験しました。\n月額やサブスクじゃなくて、今やりたいなって時、すぐに好きなジャンルのスペシャリストとオンラインで話せるので便利！友人は、毎日料理を教わってるそうですよ。",
  },
  {
    label: "小学生",
    text: "手話やりたい！と、突然言い出した我が子。近所の手話教室は見つからないし、あっても私が送り迎えするのは無理そう。せっかくだから経験させてあげたいけど・・って諦めつつ検索してたら、NannyMEを見つけました。\n登録してみたら、オンラインでいつでも好きな時にできて、送り迎えの心配もない。1回30分で利用できるから、手軽だし、かなりおすすめです。Nannyさんのページを見たら息子は手話の他に、クワガタ博士とも話してみたいって。いろんなジャンルの方が登録してるみたいで、こどもってちゃんと見てるんだなと思って驚きました。",
  },
  {
    label: "3-6歳",
    text: "お熱が上がってしまって、保育園から予想外に早い帰宅・・・本人は至って元気だから、構ってほしくて仕方がない状態。大事なオンラインミーティングがあるのに、どうしよう。Youtubeをずっと見せ続けるのは、避けたい。Nanny MEは楽しいお兄さんやお姉さんが、絵本の読み聞かせや、なぞなぞを出してくれるみたい。しっかりお名前を呼んでくれて、対話ができる大切さを、改めて実感！何か危ないことがあったときにはSOSボタンがあって、携帯から大きな音が出てくるようなので、少し離れていてもすぐ駆けつけられそう！",
  },
  {
    label: "0-2歳",
    text: "おうち時間が長いけど、どんどんいろんなことを吸収して成長する我が子に、いろんな刺激や経験を与えたい。おとうさんやおかあさんだけじゃなく、様々な人と関わってほしいと思う。ネイティブの英語をまねて、リピート練習してくれるだけでも十分！手軽な値段だからこそ体験できちゃう。6歳までにいろんなことを経験させることが、子供の将来に繋がると聞くので、これからいろいろ体感させてみよう！",
  },
];

const instaImages = [
  "465695715_860219809642151_3469023887265771832_nthumb.jpg",
  "464489416_516484167862975_8510569103713159074_nthumb.jpg",
  "461405912_1072108521293874_568579975609268280_nthumb.jpg",
  "460701483_1229168134779927_4356309355686804788_nthumb.jpg",
  "460699660_1713626625847770_4927388911850452278_nthumb.jpg",
  "460499405_2531404453725873_8465726558139482532_nthumb.jpg",
  "460854327_477919758570333_200460490614181264_nthumb.jpg",
  "460693619_519302910820628_8709271719133657406_nthumb.jpg",
  "458976129_1230650854740306_6372743273643527082_nthumb.jpg",
];

const tweets = [
  {
    date: "6 9月",
    text: "仙台市内の小学校・中学校は一斉休校にならないようですね。\n\n本日、休校・休園の方、オンライン英語・保育に空きあります！\nはじめての方は公式LINEに【休校】と送信ください。使い方をお送りします！",
  },
  {
    date: "27 8月",
    text: "夏休み明けに何か新しいことを始めたい方へ。ナニーミーのオンラインレッスンで、好きなことを見つけよう！\n\n語学・習字・音楽・ダンス・料理・ドローン・ボイトレ・演技など、50種類以上のジャンルの先生が待っています。",
  },
];

const meReviews = [
  "保育園休園＆テレワークな我が家。オンライン見守り保育とのことで、NannyMEに初体験。こどもが騒いだら困るリモートMTGだったからとっても助かりました！開始直後に息子の心をつかんだナニーさん、すごすぎる！おかげで仕事が捗りました！！",
  "オンラインのみまもり保育に初めてお目にかかりました。うちの子は季節の変わり目にちょいちょい発熱するので、保育園からすぐ電話が来ます。でも帰宅するとすぐに元気になるので、仕事の手が止まりがちで困っています。今度ぜひ使ってみたいと思います。",
  "家にいるときくらいこどもの相手をして欲しいのに、何もしない旦那にイライラ。朝からごはんに掃除洗濯でちょっともゆっくりできないんだけどと思っていたら、ママ友にナニーミーを教えてもらいました。今度やってみようと思ってます。",
];

const nannyReviews = [
  "暫く孤独なので子供からすごくパワーをもらって楽しく利用してます！自宅待機期間が終わっても空いてる時間はNannyMEのお仕事やりたいと思ってます！！",
  "初めてのオンラインみまもり保育。少し緊張したけれど、実際につながれた感動と、話していくうちに仲良くなれる楽しさがあってあっという間でした。にらめっこして遊んで凄く楽しかったです！",
  "子供好きやから自宅療養中に毎日利用して働けそう。こどもたち可愛くて楽しかった！",
];

function HomePage() {
  const [activeAge, setActiveAge] = useState(0);
  return (
    <Layout pageClass="home-page">
      <section className="home-intro page-width">
        <p>NannyMEとは、Nannyさん（教えてくれる人）とME（教わる人）を繋ぐwebツールです。</p>
        <p>画面の向こうには様々なスキルをもったNannyさんたちが、MEのみなさんを待っています。</p>
        <p className="nanny-intro">Nannyさん（教えるスキルのある方）は、スマホ１つで、いつでも好きな時にお仕事をして頂くことができます。</p>
      </section>
      <div className="page-width"><RegisterBanner /></div>
      <section className="feature-banners page-width" aria-label="オンラインレッスンの案内">
        <a href={`${appUrl}/`}><img src={media("IMG_0336-768x464.jpg")} alt="英会話とオンラインレッスンのNanny紹介" /></a>
        <a href={`${appUrl}/`}><img src={media("IMG_0337-768x464.jpg")} alt="NannyMEのオンライン保育アプリ" /></a>
      </section>
      <section className="age-stories page-width" aria-label="年齢別の利用イメージ">
        <div className="age-tabs" role="tablist" aria-label="年齢・利用者別">
          {ageStories.map((story, index) => (
            <button key={story.label} type="button" role="tab" aria-selected={activeAge === index} onClick={() => setActiveAge(index)}>
              {story.label}
            </button>
          ))}
        </div>
        <div className="age-panel" role="tabpanel"><p>{ageStories[activeAge].text}</p></div>
      </section>
      <section className="role-cards page-width" aria-label="MEとNannyについて">
        <article className="role-card">
          <img className="role-image" src={media("スクリーンショット-2023-02-18-4.02.52-q2b2ev75uv5jxaejzcd47wyp38fbkh2lyou3nbc5xc.png")} alt="人と子どもをつなぐイメージ" />
          <h2>MEとは？</h2>
          <p>①教わる方<br />②保育・学童サービスを受ける<br />お子様と親御様</p>
          <a href="/flow/"><img className="role-button" src={media("IMG_7006.png")} alt="MEさんはこちらをクリック" /></a>
        </article>
        <article className="role-card">
          <img className="role-image" src={media("スクリーンショット-2023-02-18-4.21.28-q2b36uu5d9gxn9qwjfx6guotwagss06v586m3xu4n4.png")} alt="さまざまな得意分野を持つNannyのイメージ" />
          <h2>Nannyとは？</h2>
          <p>①教えるスキルのある方<br />②保育・教育関連資格のある方や<br />子育て経験者などお子様を見守るスキルのある方</p>
          <a href="/nanny/"><img className="role-button" src={media("IMG_7005.png")} alt="Nannyさんはこちらをクリック" /></a>
        </article>
      </section>
      <div className="page-width home-register"><RegisterBanner /></div>
      <section className="social-section page-width">
        <div className="social-column">
          <h2>Instagram</h2>
          <a className="social-profile" href="https://www.instagram.com/nannyme_official/" target="_blank" rel="noreferrer">nannyme_official</a>
          <div className="instagram-grid">
            {instaImages.map((name) => (
              <a key={name} href="https://www.instagram.com/nannyme_official/" target="_blank" rel="noreferrer">
                <img src={media(name)} alt="NannyME Instagram 投稿" />
              </a>
            ))}
          </div>
          <a className="outline-link" href="https://www.instagram.com/nannyme_official/" target="_blank" rel="noreferrer">Instagram でフォロー</a>
        </div>
        <div className="social-column">
          <h2>X</h2>
          <div className="x-feed">
            {tweets.map((tweet) => (
              <article className="tweet-card" key={tweet.date}>
                <div className="tweet-header"><strong>NannyME</strong><span>@nannyme_love · {tweet.date}</span></div>
                <p>{tweet.text}</p>
              </article>
            ))}
          </div>
          <a className="outline-link" href="https://mobile.twitter.com/nannyme_love" target="_blank" rel="noreferrer">X で見る</a>
        </div>
      </section>
      <section className="reviews page-width">
        <PageTitle>レビューと応援コメント</PageTitle>
        <div className="review-columns">
          <div><h3>MEさんから</h3>{meReviews.map((quote, i) => <blockquote key={i}>{quote}</blockquote>)}</div>
          <div><h3>Nannyさんから</h3>{nannyReviews.map((quote, i) => <blockquote key={i}>{quote}</blockquote>)}</div>
        </div>
      </section>
    </Layout>
  );
}

function AboutPage() {
  return (
    <Layout pageClass="subpage">
      <div className="page-width">
        <PageTitle>ABOUT</PageTitle>
        <section className="about-story">
          <h2>挨拶・紹介</h2>
          <div className="founder-layout">
            <div className="founder-copy">
              <p>10年前、ベビーカーや抱っこひもでこどもを連れていた頃、周りの方が娘に話しかけたり、席を譲ってくださったりと、こどもが好きな方や、少しだけこどもの相手したいという方が多く、そのような想いを活かしてみんなで見守りあう雰囲気に世の中がなればいいのにと思ったことが、ずっと頭にありました。</p>
              <p>私が家で仕事をすることもあったりして、集中して作業を進めなければいけない時、母や友人がビデオ通話でこどもたちと少し長めに話をしてくれて、とても助かった経験もあり。こうした困りごとをもった人が多いのではと感じていました。</p>
              <p>一方で、こどもが好きな保育関係者や幼稚園関係者から現場が大変で辞める人も多く、やる気もスキルがある人が活かしきれていない現実を知りどうにか活かしたいと思っていました。どんなにTVやYoutube、ゲームが好きそうなこども達でも、大人がしっかり相手をしてあげると一番楽しそうで、やはり人間の声掛けが一番なんだなと身をもって体験しました。</p>
              <p>こどもをみてもらいたい時って、実際はいつも急なので、いま困ったという時にすぐ助けになる方法をなんとかしたいと思ったことが、NannyMEを作ったきっかけです。</p>
              <p>子育てって親も初めてのことだらけで大変だったりしますし、こどもをどれだけ愛していても見守ることが得意じゃない人もいると思います。NannyMEはこどもも親も、子育て世代にかかわるすべての人々を笑顔にできると思っています。大切な子育ての時間をもっと愛おしい時間にすることに、NannyMEが力になれると嬉しいです。</p>
              <p className="signature">株式会社七色 代表<br />佐々木綾香</p>
            </div>
            <img className="founder-photo" src={media("sasakiayaka-azusa-768x513.jpeg")} alt="株式会社七色 代表 佐々木綾香" />
          </div>
          <div className="about-gallery">
            {["about-2-768x510.png", "about-3-768x510.png", "about-4-768x509.png"].map((name) => <img key={name} src={media(name)} alt="NannyMEプロジェクトの様子" loading="lazy" />)}
          </div>
        </section>
        <section className="character-section">
          <h2>キャラクター紹介</h2>
          <div className="character-note">
            <span>＼ お名前募集中 ／</span>
            <h3>もくもくちゃん(仮)</h3>
            <p>現在、皆様からメインキャラクターのお名前を募集しています。<br />ぜひ素敵なお名前を付けてください。あなたの付けたお名前がメインキャラクターになっちゃうかも！？</p>
            <p>詳しくはSNSをチェックしてみてください。</p>
          </div>
        </section>
        <section className="team-section">
          <h2>プロジェクトメンバー</h2>
          <p>佐々木 綾香 ／ 中野 絢介 ／ 海渡 寛記 ／ 鈴木 康洋<br />馬場 智子 ／ 堺 礼</p>
          <h3>– デザイン –</h3>
          <p>那珂 隆之（SHIMAUMA DESIGN）</p>
          <h3>– 制作協力 –</h3>
          <p>株式会社なないろ<br />ジェイ・マックス株式会社<br />ワンナップ英会話<br />株式会社Logical Fabrics<br />株式会社AURA<br />株式会社ローファイデザイン</p>
        </section>
      </div>
    </Layout>
  );
}

function WhatPage() {
  const videos = [
    ["YNmRkiZOzAQ", "NannyMEサービス紹介動画"],
    ["5D4wQ-BozBc", "NannyME紹介動画"],
    ["Ycd3Fd-XIqw", "NannyMEの利用イメージ"],
  ];
  return (
    <Layout pageClass="subpage">
      <div className="page-width what-page">
        <PageTitle>NannyMEってなんだろう？</PageTitle>
        <h2>– NannyMEについて –</h2>
        <p>NannyMEは子供たちの知的好奇心を育てるスキルを持った人財が「スキマ時間」を活用し「今すぐ保育」ができるサービスです。</p>
        <p>オンラインを活用したサービスのため必要な時必要なタイミングで最短30秒で仕事の依頼が可能なサービスです。</p>
        <p>「潜在保育士」「ダンサー」「歌や読み聞かせ」「語学スキルのある人」「プロの演奏家」「博士」「俳優」など、様々なスキルを持った大人とのコミュニケーションを取ることができます。</p>
        <p>親ひとりでは子供に伝えることのできない新たな人生の価値観、刺激、面白さなどを与えることができる仕組みです。また、オンラインのため保育者は保育する場所を選ばず保育を行うことができます。</p>
        <div className="video-list">
          {videos.map(([id, title]) => <iframe key={id} src={`https://www.youtube.com/embed/${id}?controls=1&rel=0&playsinline=1`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" />)}
        </div>
        <section className="about-us-en">
          <h2>About us</h2>
          <p>NannyME is an online platform where our professional Nannies take care of your children anytime and improve their intellectual curiosity.</p>
          <p>Since we offer our service online, you can ask our Nannies for help in 30 seconds at the earliest. Your children can communicate with our Nannies who have various skills such as nursery teachers, dancers, singers, actors, multilingual speakers and so on.</p>
          <p>We are sure that your children obtain new values, stimulations and interests in life through our service.</p>
          <p>Let’s try out our online service right now!</p>
        </section>
      </div>
    </Layout>
  );
}

function PricePage() {
  return (
    <Layout pageClass="subpage">
      <div className="page-width price-page">
        <PageTitle>ご利用料金</PageTitle>
        <h2>ドーナツランク</h2>
        <p className="centered-copy">NannyTimeではドーナツランクに応じてMEのご利用料金が変動いたします。</p>
        <img className="price-chart" src={media("MEご利用料金-qcmyzt422z23nqy2swcv6859nqhlm7h7gwd8sovnr6.png")} alt="ドーナツランク別 NannyTimeご利用料金表" />
        <a className="pill-button" href="/reward/">Nanny 報酬はこちら</a>
      </div>
    </Layout>
  );
}

function RewardPage() {
  return (
    <Layout pageClass="subpage">
      <div className="page-width price-page">
        <PageTitle>報酬</PageTitle>
        <h2>ドーナツランク</h2>
        <p className="centered-copy">NannyTimeではドーナツランクに応じてNannyの報酬が変動いたします。</p>
        <img className="price-chart" src={media("スクリーンショット-2023-09-24-23.47.23-qcwqs38oadi681ddalqwvxsy5juw5msoz9sg61f8h4.png")} alt="ドーナツランク別 Nanny報酬表" />
        <section className="payment-methods">
          <h2>– 報酬の受け取り方 –</h2>
          <h3>月払い</h3>
          <p>毎月1日から末日までで計算し、翌月20日（土日祝日に当たる場合は翌営業日）に、Nannyの指定する金融機関口座に振り込む方法により支払います。金融機関への振込手数料は、原則としてNannyが負担します。報酬合計が振込手数料を上回った場合に限り、お振込みをいたします。</p>
          <h3>週払い</h3>
          <p>各週月曜日から日曜日までで計算し、翌週金曜日（祝日に当たる場合は翌営業日）に、Nannyの指定する金融機関口座に振り込みます。振込手数料は、原則としてNannyが負担します。報酬合計が振込手数料を上回った場合に限り、お振込みをいたします。</p>
        </section>
      </div>
    </Layout>
  );
}

function FlowPage() {
  return (
    <Layout pageClass="subpage">
      <div className="page-width flow-page">
        <PageTitle>利用の流れ</PageTitle>
        <img src={media("flow-1.png")} alt="NannyMEの利用の流れ 1" />
        <img src={media("flow-2.png")} alt="NannyMEの利用の流れ 2" />
        <a href={`${appUrl}/`}><img className="flow-register" src={media("home-imasugu-btn-768x109.png")} alt="最短3分！オンライン保育 登録無料" /></a>
      </div>
    </Layout>
  );
}

const questions = [
  ["PC・タブレットからでも使用はできますか？", "スマートフォン（iOS/Android）・PC・タブレットの使用が可能です。"],
  ["キャッシュレス決済は対応していますか？", "クレジットカードのみとさせて頂いております。利用者増加に伴い、決済方法も随時追加させて頂きたいと思っております。"],
  ["Nannyさんはどんな方が在籍していますか？", "子育て経験者・保育関係などの資格を持った方・うたのおねえさんや動物博士など、子供を見守ることが得意な方たちです。"],
  ["親がそばに付いていなくても大丈夫ですか？", "安全にご利用いただくために、NannyTime中のお子様のケガやトラブル防止のため保護者の方はお子様から半径25m以内にいるものとします。NannyTimeの開始前に、保護者の位置からサービス中の端末のアラート音が聞こえるか確認してください。ご家庭内の安全確認も徹底してください。"],
  ["登録料などはかかりますか？", "NannyTime料金以外の費用はかかりません。サブスクリプションではないので、月額費用は発生いたしません。"],
  ["毎日違うNannyさんでも問題ないですか？", "はい。お子様の興味・親御様のご希望にあわせて、たくさんのNannyさんと出会い、ご自宅にいながらでも様々な体験をしてみてください。"],
  ["高齢な両親でも使えそうですか？", "はい。多くの方にお楽しみ頂けるよう、文字も大きく表示もわかりやすくしておりますので、是非ご利用頂ければと思います。"],
  ["延長はできますか？", "NannyTime中、もしくはNannyTime終了時に、次の枠をご予約ください。"],
  ["予約のキャンセルはできますか？", "はい。前日の22時までのキャンセルに関しては費用が発生いたしません。詳細はキャンセルポリシーをご確認ください。"],
  ["退会はできますか？", "退会や利用情報の削除依頼に関してはNannyME公式LINEからお問い合わせください。確認後、運営サイドからご連絡させていただき対応いたします。"],
  ["お問い合わせ先は？", "NannyME公式LINEがありますので、友達追加をしていただきメッセージをお送りください。NannyME事務局より返答させていただきます。"],
];

function FAQPage() {
  return (
    <Layout pageClass="subpage">
      <div className="page-width faq-page">
        <PageTitle>FAQ</PageTitle>
        <h2>よくある質問</h2>
        <div className="faq-list">
          {questions.map(([q, a], index) => (
            <article className="faq-item" key={q}>
              <h3><span>Q.</span>{q}</h3>
              <div className="faq-answer"><span>A</span><p>{a}{index === 8 && <> <a href="https://nannyme.love/cancellation-policy/">キャンセルポリシー</a></>}</p></div>
            </article>
          ))}
        </div>
        <a className="line-banner" href="https://lin.ee/5MeHjaN" target="_blank" rel="noreferrer">
          <img src={media("faq-1-line.png")} alt="お問い合わせはNannyME公式LINEへ" />
        </a>
      </div>
    </Layout>
  );
}

const newsItems = [
  ["クラウドファンディング「READYFOR」にてプロジェクト開始！！", "2021年11月24日", "こどもの画面時間（＝親のストレス）を、知育の時間に変えたい！世界中でみまもり可能！いつでもどこでも子育てを助け合えるプロジェクトが始まりました。", "https://nannyme.love/news/%e3%82%af%e3%83%a9%e3%82%a6%e3%83%89%e3%83%95%e3%82%a1%e3%83%b3%e3%83%87%e3%82%a3%e3%83%b3%e3%82%b0%e3%80%8creadyfor%e3%80%8d%e3%81%ab%e3%81%a6%e3%83%97%e3%83%ad%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88/"],
  ["「新時代のヒットの予感‼︎2022」に掲載されました。", "2021年11月8日", "「新時代のヒットの予感‼︎2022」にNannyMEが掲載されました。", "https://nannyme.love/news/%e3%80%8c%e6%96%b0%e6%99%82%e4%bb%a3%e3%81%ae%e3%83%92%e3%83%83%e3%83%88%e3%81%ae%e4%ba%88%e6%84%9f%e2%80%bc%ef%b8%8e2022%e3%80%8d%e3%81%ab%e6%8e%b2%e8%bc%89%e3%81%95%e3%82%8c%e3%81%be%e3%81%97/"],
  ["東京新聞にNannyMEの記事が掲載されました。", "2021年9月28日", "東京新聞にNannyMEの記事が掲載されました。", "https://nannyme.love/news/%e6%9d%b1%e4%ba%ac%e6%96%b0%e8%81%9e%e3%81%abnannyme%e3%81%ae%e8%a8%98%e4%ba%8b%e3%81%8c%e6%8e%b2%e8%bc%89%e3%81%95%e3%82%8c%e3%81%be%e3%81%97%e3%81%9f%e3%80%82/"],
  ["《世界初》困った時に最短30秒でオンライン保育を開始できるNannyMEが8月20日(金)10時にサービスをスタート！", "2021年8月17日", "今すぐ30分を活用したい人と、今すぐこどもを見てほしい人をつなぐサービスを開始します。", "https://nannyme.love/news/%e3%80%8a%e4%b8%96%e7%95%8c%e5%88%9d%e3%80%8b%e5%9b%b0%e3%81%a3%e3%81%9f%e6%99%82%e3%81%ab%e6%9c%80%e7%9f%ad30%e7%a7%92%e3%81%a7%e3%82%aa%e3%83%b3%e3%83%a9%e3%82%a4%e3%83%b3%e4%bf%9d%e8%82%b2%e3%82%92/"],
  ["TBS「Nスタ」にてNannyMEの特集が放送されました。", "2021年8月12日", "TBS「Nスタ」にてNannyMEの特集が放送されました。", "https://nannyme.love/news/tbs%e3%80%8cn%e3%82%b9%e3%82%bf%e3%80%8d%e3%81%ab%e3%81%a6nannyme%e3%81%ae%e7%89%b9%e9%9b%86%e3%81%8c%e6%94%be%e9%80%81%e3%81%95%e3%82%8c%e3%81%be%e3%81%97%e3%81%9f%e3%80%82/"],
  ["世界初！オンラインみまもり保育システム「NannyME（ナニーミー）」がMakuakeで先行公開！！", "2021年7月19日", "いつでも頼れるオンラインみまもり保育サービス「NannyME」のプロジェクトを先行公開しました。", "https://nannyme.love/news/%e4%b8%96%e7%95%8c%e5%88%9d%ef%bc%81%e3%82%aa%e3%83%b3%e3%83%a9%e3%82%a4%e3%83%b3%e3%81%bf%e3%81%be%e3%82%82%e3%82%8a%e4%bf%9d%e8%82%b2%e3%82%b7%e3%82%b9%e3%83%86%e3%83%a0%e3%80%8cnannyme%ef%bc%88/"],
  ["MakuakeにてNannyMEプロジェクト掲載開始！！", "2021年7月19日", "30分でもOK。オンライン対面みまもり保育サービス NannyME のプロジェクトが掲載されました。", "https://nannyme.love/news/makuake%e3%81%ab%e3%81%a6nannyme%e3%83%97%e3%83%ad%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88%e6%8e%b2%e8%bc%89%e9%96%8b%e5%a7%8b%ef%bc%81%ef%bc%81-2/"],
];

function NewsPage() {
  return (
    <Layout pageClass="subpage">
      <div className="page-width news-page">
        <PageTitle>NEWS TOPICS</PageTitle>
        <h2>最新情報</h2>
        <div className="news-list">
          {newsItems.map(([title, date, text, href]) => (
            <article key={title} className="news-item">
              <time>{date}</time>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={href}>Read More »</a>
            </article>
          ))}
        </div>
        <div className="press-banners">
          <h2>メディア掲載</h2>
          <a href="https://youtu.be/2A_4jq5ZY8E" target="_blank" rel="noreferrer"><img src={media("news-bnr02-sugimoto-768x256.jpg")} alt="メディア掲載動画" /></a>
          <a href="https://nannyme.love/wp-content/uploads/2022/01/news-bnr03-link.mp4" target="_blank" rel="noreferrer"><img src={media("news-bnr03-n-sta-768x304.png")} alt="TBS Nスタで紹介されました" /></a>
          <a href="http://www.mrpartner.co.jp/hit2022/index.html" target="_blank" rel="noreferrer"><img src={media("news-bnr01-miyagi-768x256.jpg")} alt="新時代のヒットの予感に掲載" /></a>
        </div>
      </div>
    </Layout>
  );
}

function ContactPage() {
  return (
    <Layout pageClass="subpage">
      <div className="page-width contact-page">
        <PageTitle>お問い合わせ</PageTitle>
        <div className="contact-actions">
          <a href="https://nannyme.love/daycare-form/">教育関係・保育関係の方</a>
          <a href="https://nannyme.love/media-form/">メディア関係の方</a>
          <a className="line-button" href="https://lin.ee/5MeHjaN" target="_blank" rel="noreferrer">公式LINE</a>
        </div>
      </div>
    </Layout>
  );
}

function ThanksPage() {
  const supporters = ["backpacker196", "Juri", "M クリス", "Min", "ono", "Singer kie", "Umi", "あやや", "ひまわりあかり", "ぺつこ", "まめた", "みうらルシファ", "やっくん", "吉竹 瞳", "節丸 雅矛", "麗香"];
  return (
    <Layout pageClass="subpage">
      <div className="page-width thanks-page">
        <PageTitle>サンクスページ</PageTitle>
        <div className="supporter-logos">
          <img src={media("mamoru.png")} alt="mamoru" />
          <img src={media("one-up.png")} alt="One Up English School" />
          <img src={media("time-with-children.png")} alt="Time with Children" />
        </div>
        <h2>支援者一覧（50音順）</h2>
        <ul>{supporters.map((name) => <li key={name}>{name}　さま</li>)}</ul>
      </div>
    </Layout>
  );
}

function EnglishPage() {
  const pages = ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0009", "0010"];
  return (
    <Layout pageClass="subpage">
      <div className="page-width english-page">
        <PageTitle>English</PageTitle>
        <div className="brochure-pages">
          {pages.map((number) => {
            const file = `★NannyME概要（English）_page-${number}-768x432.jpg`;
            return <img key={number} src={media(file)} alt={`NannyME English information, page ${number}`} loading={number === "0001" ? "eager" : "lazy"} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

function NannyPage() {
  return (
    <Layout pageClass="subpage">
      <div className="page-width nanny-page">
        <PageTitle>Nanny登録について</PageTitle>
        <p className="nanny-lead">Nannyになるには審査が必要になります。<br />動画やPRを元に運営サイドで審査させて頂きます。<br />審査には2〜5日ほどお時間を頂きます。<br />ポイント・注意事項など読んで頂き、下記のNanny登録を行ってください。</p>
        <h2>Nanny登録方法</h2>
        <section className="nanny-step">
          <h3>(１) 審査用動画の撮影をしてください。</h3>
          <p>審査合格後、公式YouTubeにUPさせていただき、Nannyのプロフィールページに掲載させていただきます。</p>
          <img className="step-image" src={media("nanny-touroku-1-satsuei-300x169.jpg")} alt="Nanny審査用動画の撮影イメージ" />
          <h4>– 撮影内容・手順について –</h4>
          <ol className="shooting-list">
            <li><b>挨拶</b><span>（hello！、こんにちは！、Hi！など）第一印象が大切です。元気よく挨拶をしてください。</span></li>
            <li><b>名前</b><span>子供にわかるようにゆっくりと</span></li>
            <li><b>ニックネーム・先生の名前</b><span>「〇〇〇〇・〇〇先生と呼んでね！」など、呼んでもらいたい名前を伝えます。</span></li>
            <li><b>好きなこと</b><span>「好きな◆◆は◇◇です。」※簡潔に、シンプルに伝えましょう。</span></li>
            <li><b>得意なこと・一緒にあそびたい・話したいこと</b><span>子供に興味を持ってもらえる内容をNanny動画も参考に考えてください。</span></li>
            <li><b>子供たちにメッセージ</b><span>短く元気に、わかりやすく伝えます。</span></li>
            <li><b>保護者にメッセージ</b><span>30秒から1分ほどでお願いします。</span></li>
            <li><b>実績・実演動画など</b><span>ある方はPRになるので是非動画の最後に入れてください。</span></li>
          </ol>
          <a className="text-link" href="https://www.youtube.com/playlist?list=PLIPwkKuZECOn6naSLg2Lu_3IeqFmtuDc0" target="_blank" rel="noreferrer">Nanny動画を見る »</a>
          <div className="nanny-notes"><h4>ポイント</h4><p>④⑤⑥で関係するモノを映してもらうとわかりやすいです。こどもに向けて元気に楽しく話し、早口にならないようにハキハキとゆっくり話してください。</p><h4>注意事項</h4><ul><li>動画は編集して1本にまとめ、横向きで撮影してください。</li><li>背景に余計なものが映らないようにしてください。</li><li>服装にロゴやキャラクターが目立つものは避けてください。</li><li>余計な間は削り、BGMやテロップは入れないでください。</li><li>サイズはバストアップで撮影してください。</li></ul></div>
        </section>
        <section className="nanny-step">
          <h3>(２) 動画提出をしてください。</h3>
          <p>下記の「動画提出はこちらをクリック」を押すとアンケート形式のリンクに飛びます。名前・動画提出・コメント・サムネイル使用画像を提出お願いします。</p>
          <a href="https://forms.gle/52KRbuT6dpdwuJsA8" target="_blank" rel="noreferrer"><img className="submit-image" src={media("nanny-touroku-2-douga-e1642315015512-300x102.png")} alt="動画提出はこちらをクリック" /></a>
        </section>
        <section className="nanny-step final-step">
          <h3>(３) 「Nannyとして参加」から個人情報の登録をお願いします。</h3>
          <p>※メールアドレスでのログインが必要になります。</p>
          <a href={`${appUrl}/signin?role=nanny`}><img className="participate-image" src={media("nanny-touroku-3-sanka-e1642315572721-295x300.jpg")} alt="Nannyとして参加" /></a>
        </section>
      </div>
    </Layout>
  );
}

function NotFoundPage() {
  return <Layout pageClass="subpage"><div className="page-width"><PageTitle>ページが見つかりません</PageTitle><a className="pill-button" href="/">HOMEへ戻る</a></div></Layout>;
}

export function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const routes = {
    "/": HomePage,
    "/about": AboutPage,
    "/what-nannyme": WhatPage,
    "/price": PricePage,
    "/reward": RewardPage,
    "/flow": FlowPage,
    "/qa": FAQPage,
    "/news-topics": NewsPage,
    "/contact": ContactPage,
    "/thanks": ThanksPage,
    "/english": EnglishPage,
    "/nanny": NannyPage,
  };
  const Page = routes[path] || NotFoundPage;
  return <Page />;
}
