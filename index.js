const { useState } = window.React;
const { createRoot } = window.ReactDOM;

function Discort() {
 const [activeTab, setActiveTab] = useState("friends");

 const handleTabClick = (tabName) => {
  setActiveTab(tabName);
 };

 const isActive = (tabName) => (activeTab === tabName ? "active" : "");

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
   </div>

   {activeTab === "friends" && (
   <div className= "main">
    <div className="main-top">
     <div className="sidebar-tab">
      <i className="fa-solid fa-user-group sidebar-tab-icon"></i>
      <div className="sidebar-tab-text">Arkadaşlar</div>
      <hr className="main-top-dividers"/>
     </div>

     <div className="main-top-tab">
      <div className="main-top-tab-text">Çevrim içi</div>
     </div>

     <div className="main-top-tab">
      <div className="main-top-tab-text">Tümü</div>
     </div>

     <div className="main-top-tab">
      <div className="main-top-tab-text">Bekleyen</div>
     </div>

     <div className="main-top-tabs">
      <div className="main-top-tabs-text">Arkadaş Ekle</div>
     </div>

     <div className="main-top-right">
      <i className="fa-solid fa-comment"></i>
      <i className="fa-solid fa-inbox"></i>
      <i className="fa-solid fa-circle-question"></i>
     </div>

     <hr className="main-top-divider"/>
    </div>

    <div className="main-content">
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