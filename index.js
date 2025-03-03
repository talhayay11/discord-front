const { useState } = window.React;
const { createRoot } = window.ReactDOM;

function Discort() {
 const [activeTab, setActiveTab] = useState("friends");
 const [headphonesActive, setHeadphonesActive] = useState(false);
 const [microphoneActive, setCMicrophoneActive] = useState(false);
 const [activeTabb, setActiveTabb] = useState("online");
 const [activeServer, setActiveServer] = useState("top");

 const [messages, setMessages] = useState([
  {
   id: 1,
   pic: "images/ds.png",
   nick: "excc4",
   what: "Rahatsız etmeyin"
  }
 ]);

 const handleAddMessage = () => {
  const newId = Date.now();
  const newMessage = {
    id: newId,
    pic: "images/ds.png",
    nick: "excc4",
    what: "Yeni mesaj eklendi!"
  };

  setMessages([...messages, newMessage]);
 };

 //sidebarda bulunan arkadaş, nitro, market tabı
 const handleTabClick = (tabName) => {
  setActiveTab(tabName);
 };

 //sidebarda bulunan arkadaş, nitro, market tabı
 const isActive = (tabName) => (activeTab === tabName ? "active" : "");

 //çevrimiçi, tümü, bekleyen için
 const handleTabbClick = (tab) => {
  setActiveTabb(tab);
 };

 return (
  <div className="Discort">
   <div className= "side">
    <img src= "images\ds.png" alt="ds" className={`side-ds ${activeServer === "top" ? "active" : ""}`} onClick={() => setActiveServer("top")}/>
    <hr className= "side-line"/>
    <img src= "images\ds.png" alt="server" className={`side-server ${activeServer === "Server" ? "active" : ""}`} onClick={() => setActiveServer("Server")}/>
   </div>

   {activeServer === "top" && (
   <div>
   <div className= "sidebar">
    <input type= "text" className="sidebar-input" placeholder= "Sohbet bul ya da başlat"/>
    <hr className="sidebar-divider"/>
    <div className={`sidebar-tab ${isActive("friends")}`} onClick={() => handleTabClick("friends")}>
     <i className="fa-solid fa-user-group sidebar-tab-icon"></i>
     <div className="sidebar-tab-text">Arkadaşlar</div>
    </div>

    <div className={`sidebar-tab ${isActive("nitro")}`} onClick={() => handleTabClick("nitro")}>
     <i className="fa-solid fa-infinity sidebar-tab-icon"></i>
     <div className="sidebar-tab-text">Nitro</div>
    </div>

    <div className={`sidebar-tab ${isActive("magaza")}`} onClick={() => handleTabClick("magaza")}>
     <i className="fa-solid fa-store sidebar-tab-icon"></i>
     <div className="sidebar-tab-text">Mağaza</div>
    </div>

    <div className="sidebar-direct">
     <div className="sidebar-direct-text">DİREKT MESAJLAR</div>
     <i className="fa-solid fa-plus sidebar-direct-icon fa-xs" onClick={handleAddMessage}></i>
    </div>

    <div className="sidebar-people">
     <img src= "images\ds.png" className="sidebar-people-pic"></img>
     <div className="sidebar-people-name">excc4</div>
    </div>

    <div className="sidebar-bottom">
     <img src= "images\ds.png" className="sidebar-bottom-pic"></img>
     <div className="sidebar-bottom-mid">
      <div className="sidebar-bottom-mid-nick">excc4</div>
      <div className="sidebar-bottom-mid-stat">Görünmez</div>
     </div>

     <div className="sidebar-bottom-icons">
      <i className={`fa-solid fa-microphone sidebar-bottom-icons-icon ${microphoneActive ? "active" : ""}`} onClick={() => setCMicrophoneActive(!microphoneActive)}></i>
      <i className={`fa-solid fa-headphones-simple sidebar-bottom-icons-icon ${headphonesActive ? "active" : ""}`} onClick={() => setHeadphonesActive(!headphonesActive)}></i>
      <i className="fa-solid fa-gear sidebar-bottom-icons-icon"></i>
     </div>
    </div>
   </div>

   {activeTab === "friends" && (
   <div className= "main">
    <div className="main-top">
     <div className="main-top-friends">
      <i className="fa-solid fa-user-group main-top-friends-icon"></i>
      <div className="main-top-friends-text">Arkadaşlar</div>
      <hr className="main-top-dividers"/>
     </div>

     <div className={`main-top-tab ${activeTabb === "online" ? "active" : ""}`} onClick={() => handleTabbClick("online")}>
      <div className="main-top-tab-text">Çevrim içi</div>
     </div>

     <div className={`main-top-tab ${activeTabb === "all" ? "active" : ""}`} onClick={() => handleTabbClick("all")}>
      <div className="main-top-tab-text">Tümü</div>
     </div>

     <div className={`main-top-tab ${activeTabb === "pending" ? "active" : ""}`} onClick={() => handleTabbClick("pending")}>
      <div className="main-top-tab-text">Bekleyen</div>
     </div>

     <div className="main-top-tabs">
      <div className="main-top-tabs-text">Arkadaş Ekle</div>
     </div>

     <div className="main-top-right">
      <i className="fa-solid fa-comment fa-lg"></i>
      <i className="fa-solid fa-inbox fa-lg"></i>
      <i className="fa-solid fa-circle-question fa-lg"></i>
     </div>

     <hr className="main-top-divider"/>
    </div>

    <div className="main-content">
     <div className="main-content-search">
      <input type= "text" className="main-content-search-searchbar" placeholder= "Ara"/>
      <i className="fa-solid fa-magnifying-glass main-content-search-icon"></i>
     </div>

      <div className="main-content-subject">
       <div className="main-content-subject-situation">ÇEVRİM İÇİ - 1</div>
       <div className="main-content-subject-messages">
       {messages.map((msg) => (
        <div key={msg.id} className="main-content-subject-messages-message">
         <img src={msg.pic} className="main-content-subject-messages-message-pic"></img>
         <div className="main-content-subject-messages-message-texts">
          <div className="main-content-subject-messages-message-texts-nick">{msg.nick}</div>
          <div className="main-content-subject-messages-message-texts-what">{msg.what}</div>
         </div>

         <div className="main-content-subject-messages-message-icons">
          <i className="fa-solid fa-comment fa-lg main-content-subject-messages-message-icons-chat"></i>
          <i className="fa-solid fa-ellipsis-vertical fa-lg main-content-subject-messages-message-icons-settings"></i>
         </div>
        </div>
        ))}
       </div>
      </div>
     </div>

     <div className="main-content-online">
      <hr className="main-content-online-divider"/>
      <div className="main-content-online-right">
       <div className="main-content-online-right-top">Şimdi Aktif</div>
       <div className="main-content-online-right-text">Burası şiimdilik sessiz...</div>
       <div className="main-content-online-right-description">Bir arkadaşın, bir oyun oynamak veya sesli 
        sohbete katılmak gibi bir etkinliğe başladığında burada göstereceğiz!</div>
      </div>
     </div>
    </div>
   )}

   {activeTab === "nitro" && (
    <div className="main">
     <p>Nitro sekmesi</p>
    </div>
   )}

   {activeTab === "magaza" && (
    <div className="main">
     <p>Mağaza sekmesi</p>
    </div>
   )}
   </div>
  )}
  {activeServer === "Server" && <Server/>}
  </div>
 );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Discort />);