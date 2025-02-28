const { useState } = window.React;
const { createRoot } = window.ReactDOM;

function Discort() {
 const [activeTab, setActiveTab] = useState("friends");
 const [headphonesActive, setHeadphonesActive] = useState(false);
 const [microphoneActive, setCMicrophoneActive] = useState(false);
 const [activeTabb, setActiveTabb] = useState("online");

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
    <img src= "images\ds.png" alt="ds" className="side-ds"  onClick={() => window.location.reload()}/>
    <hr className= "side-line"/>
   </div>

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
     <i className="fa-solid fa-plus sidebar-direct-icon fa-xs"></i>
    </div>

    <div className="sidebar-bottom">
     <div className="sidebar-bottom-pic"></div>
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
      <i class="fa-solid fa-magnifying-glass main-content-search-icon"></i>
     </div>

     <div className="main-content-online">
      <hr className="main-content-online-divider"/>
     </div>
    </div>
   </div>
   )}

   {activeTab === "nitro" && (
    <div className="main">
     <p>Nitro sekmesi içeriği burada...</p>
    </div>
   )}

   {activeTab === "magaza" && (
    <div className="main">
     <p>Mağaza sekmesi içeriği burada...</p>
    </div>
   )}
  </div>
 );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Discort />);