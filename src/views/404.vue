<template>
 <div class="page -cx-PRIVATE-Page__body -cx-PRIVATE-Page__body__">
   <header class="top-bar top-bar-new -cx-PRIVATE-NavBar__root -cx-PRIVATE-NavBar__root__">
      <div class="top-bar-wrapper -cx-PRIVATE-NavBar__wrapper -cx-PRIVATE-NavBar__wrapper__">
         <div class="logo -cx-PRIVATE-NavBar__logo -cx-PRIVATE-NavBar__logo__">
               <router-link to="/">Instagram</router-link>
             </div>
         <div class="top-bar-left -cx-PRIVATE-NavBar__topBarLeft -cx-PRIVATE-NavBar__topBarLeft__">
            <ul class="top-bar-actions">
               <li>
                   <router-link to="/" label="होम" class="top-bar-home"></router-link>
               </li>
            </ul>
         </div>
         <div class="top-bar-right account-state" id="top_bar_right">
            <ul class="top-bar-actions -cx-PRIVATE-NavBar__topBarActions -cx-PRIVATE-NavBar__topBarActions__">
               <li id="link_profile" class="link-signin -cx-PRIVATE-NavBar__signIn -cx-PRIVATE-NavBar__signIn__">
                   <router-link to="/auth/login" class="loginLink">  
                  <strong class="-cx-PRIVATE-NavBar__signInText -cx-PRIVATE-NavBar__signInText__">लॉग इन करें</strong>
                  </router-link>
               </li>
            </ul>
         </div>
      </div>
   </header>
   <!-- .top-bar -->
   <div class="main -cx-PRIVATE-Page__main -cx-PRIVATE-Page__main__">
      <div class="error-container -cx-PRIVATE-ErrorPage__errorContainer -cx-PRIVATE-ErrorPage__errorContainer__">
         <h2>क्षमा करें, यह पेज उपलब्ध नहीं है.</h2>
         <p>जिस लिंक को आपने फ़ॉलो किया है, हो सकता है कि वह काम न कर रहा हो या उस पेज को निकाल दिया गया हो.
            <router-link to="/" label="होम">Instagram पर वापस जाएँ.</router-link>
         </p>
      </div>
   </div>
   <!-- .main -->
</div>
<!-- .page -->
</template>

<style type="text/css">/* @generated 
 * DO NOT CHANGE THIS FILE. Instead, modify the non-build version of "main.css"
 * then run "yolo css"
 */
body{
    -webkit-font-smoothing:antialiased;
background-color:#fafafa;
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;margin:0}
.client-root{font-size:14px}a{text-decoration:none}
.-cx-PRIVATE-Page__body__,.-cx-PRIVATE-Page__main__,.-cx-PRIVATE-Page__root__{
    display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.-cx-PRIVATE-Page__root__{height:100vh}.-cx-PRIVATE-Page__body__,.-cx-PRIVATE-Page__main__{-webkit-box-flex:1;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto}.-cx-PRIVATE-Page__main__{margin-top:137px;position:relative}@media screen and (max-width:990px){.-cx-PRIVATE-Page__main__{display:block;margin-top:0}}.-cx-PRIVATE-NavBar__root__{background-color:#fff;border-bottom:1px solid #efefef;height:77px;position:fixed;top:0;width:100%;z-index:100}.-cx-PRIVATE-NavBar__profilePic__{display:none}.-cx-PRIVATE-NavBar__username__{color:#003569;display:inline!important;float:right;font-weight:400;margin-right:2px;margin-top:12px}.-cx-PRIVATE-NavBar__signIn__{display:inline-block;float:right;margin-right:2px;margin-top:12px}.-cx-PRIVATE-NavBar__signInText__{color:#003569;font-weight:400}.-cx-PRIVATE-NavBar__logo__{background-image:url(../assets/3a62b1a95da3.png);background-size:100%;height:35px;left:16px;position:absolute;text-indent:-9999em;top:6px;width:176px}.-cx-PRIVATE-NavBar__logo__ a{display:block;height:100%;width:100%}@media screen and (-webkit-min-device-pixel-ratio:1.5),screen and (min-resolution:1.5dppx){.-cx-PRIVATE-NavBar__logo__{background-image:url(../assets/43608c988939@2x.png)}}.-cx-PRIVATE-NavBar__logoGroup__{left:16px;position:absolute;top:6px}.-cx-PRIVATE-NavBar__logoGroup__ .-cx-PRIVATE-NavBar__logo__{position:static}.-cx-PRIVATE-NavBar__wrapper__{margin:0 auto;max-width:1026px;padding:0 16px;position:relative}.-cx-PRIVATE-NavBar__topBarActions__,.-cx-PRIVATE-SidebarLayout__content__ li{list-style:none}.-cx-PRIVATE-NavBar__dropdown__,.-cx-PRIVATE-NavBar__topBarLeft__,.-cx-PRIVATE-SidebarLayout__content__ .separator,.-cx-PRIVATE-SidebarLayout__content__ .subtitle{display:none}.-cx-PRIVATE-SidebarLayout__content__{border-right:1px solid #efefef;height:100%;width:220px}.-cx-PRIVATE-SidebarLayout__content__ ul{margin:0;padding:0}@media screen and (max-width:990px){.-cx-PRIVATE-SidebarLayout__content__{margin:0 px;border:0;width:100%}.-cx-PRIVATE-SidebarLayout__content__ ul{display:none}}.-cx-PRIVATE-SidebarLayout__root__{-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;pointer-events:none;position:absolute;width:100%;z-index:1}@media screen and (max-width:990px){.-cx-PRIVATE-SidebarLayout__root__{height:auto;padding-bottom:0;padding-top:78px;position:static}}.-cx-PRIVATE-SidebarLayout__contentWrapper__,.-cx-PRIVATE-SidebarLayout__navWrapper__{-webkit-box-flex:1;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;margin:0 auto;position:relative;width:992px}@media screen and (min-width:991px){.-cx-PRIVATE-SidebarLayout__navWrapper__{height:100%}}@media screen and (max-width:990px){.-cx-PRIVATE-SidebarLayout__navWrapper__{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:auto;min-height:0;padding:0;width:100%}}.-cx-PRIVATE-SidebarLayout__nav__{float:left;height:100%;padding-right:0;pointer-events:initial;width:256px}@media screen and (max-width:990px){.-cx-PRIVATE-SidebarLayout__nav__{float:none;display:block;margin:0!important;background:0 0;border:0;width:100%}}.-cx-PRIVATE-SidebarLayout__contentWrapper__{background-color:#fff;border:1px solid #efefef;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 16px 20px}@media screen and (min-width:991px){.-cx-PRIVATE-SidebarLayout__contentWrapper__{border:1px solid #efefef;border-radius:3px}}@media screen and (max-width:990px){.-cx-PRIVATE-SidebarLayout__contentWrapper__{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.-cx-PRIVATE-SidebarLayout__pageContent__ .-cx-PRIVATE-SidebarLayout__contentWrapper__{padding:0 10px}}.-cx-PRIVATE-SidebarLayout__pageContent__{color:#262626;margin-left:205px;padding:30px 50px}@media screen and (max-width:990px){.-cx-PRIVATE-SidebarLayout__pageContent__{margin-left:0;margin-right:0;padding:20px 0}}.-cx-PRIVATE-SidebarLayout__pageContent__>:first-child{margin-top:0}.-cx-PRIVATE-SidebarLayout__pageContent__ a{color:#003569}.-cx-PRIVATE-SidebarLayout__pageContent__ h1{font-size:32px;font-weight:400;margin-bottom:20px;margin-top:28px}.-cx-PRIVATE-SidebarLayout__pageContent__ h2{font-size:24px;font-weight:400;margin-bottom:12px;margin-top:28px}.-cx-PRIVATE-SidebarLayout__pageContent__ h3{font-weight:600;margin-bottom:12px;margin-top:28px}.-cx-PRIVATE-SidebarLayout__pageContent__ li{padding-left:8px}.-cx-PRIVATE-SidebarLayout__pageContent__ li:not(:first-child){margin-top:8px}.-cx-PRIVATE-SidebarLayout__pageContent__ pre{white-space:pre-wrap}.-cx-PRIVATE-Navigation__header__{color:#999;font-size:16px;font-weight:initial;margin:0;padding:16px;text-transform:uppercase}@media screen and (max-width:990px){.-cx-PRIVATE-Navigation__header__:first-child{display:block}.-cx-PRIVATE-Navigation__header__:not(:first-child){display:none}.-cx-PRIVATE-Navigation__header__ i{float:left;width:22px;height:18px;margin-right:8px;margin-left:10px;background:url(/static/images/glyphs/disclosure-down@2x.png/9ae8409fbb3a.png) no-repeat center;background-size:14px 14px}.-cx-PRIVATE-SidebarLayout__content__.active .-cx-PRIVATE-Navigation__header__ i{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}.-cx-PRIVATE-Navigation__navLink__,.-cx-PRIVATE-Navigation__navLink__:active,.-cx-PRIVATE-Navigation__navLink__:hover,.-cx-PRIVATE-Navigation__navLink__:visited{border-left:2px solid transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:#262626;font-size:16px;display:block;padding:16px 16px 16px 30px;width:100%}.-cx-PRIVATE-Navigation__navLink__:hover{border-left-color:#dbdbdb}.-cx-PRIVATE-Navigation__active__ .-cx-PRIVATE-Navigation__navLink__{border-left-color:#262626;font-weight:600}.-cx-PRIVATE-Footer__root__{font-size:12px;height:77px}.-cx-PRIVATE-Footer__copyright__{color:#262626;display:inline-block;float:right;font-weight:600;margin-top:20px;text-transform:uppercase}.-cx-PRIVATE-Footer__nav__{display:inline-block}@media screen and (max-width:990px){.-cx-PRIVATE-Footer__copyright__{text-align:center;width:100%}}.-cx-PRIVATE-Footer__navItems__{margin:20px 0;padding:0;text-align:center}.-cx-PRIVATE-Footer__navItems__ li{display:inline-block;list-style:none}.-cx-PRIVATE-Footer__navItems__ li:not(:first-child){margin-left:15px}.-cx-PRIVATE-Footer__navItems__ a,.-cx-PRIVATE-Footer__navItems__ a:active,.-cx-PRIVATE-Footer__navItems__ a:focus,.-cx-PRIVATE-Footer__navItems__ a:hover,.-cx-PRIVATE-Footer__navItems__ a:visited{color:#003569;font-weight:600;text-transform:uppercase}.-cx-PRIVATE-Footer__wrapper__{margin-left:auto;margin-right:auto;max-width:1026px;padding:0 20px}.-cx-PRIVATE-ErrorPage__errorContainer__{text-align:center}@media (max-width:990px){.-cx-PRIVATE-ErrorPage__errorContainer__{padding:100px 40px 0}}.-cx-PRIVATE-ErrorPage__errorContainer__ a,.-cx-PRIVATE-ErrorPage__errorContainer__ a:visited{color:#003569}.-cx-PRIVATE-Linkshim__followLink__{background-color:#fff;color:#3897f0;border:1px solid #3897f0;border-radius:3px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;padding:8px;font:inherit;font-weight:700;width:90%}@media (min-width:736px){.-cx-PRIVATE-Linkshim__followLink__{width:10%}}.-cx-PRIVATE-Linkshim__followLink__:active{opacity:.5}.-cx-PRIVATE-Linkshim__followLink__:focus{color:#1372cc;border:1px solid #1372cc}.-cx-PRIVATE-GatedContentPage__userAvatarContainer__{height:70px;text-align:center}.-cx-PRIVATE-GatedContentPage__userAvatar__{
        border-radius:50%;height:100%;width:auto}
</style>
