<html>
  <head>
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?">
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="css/scrollUpButton.css" media="all" />
    <link rel="stylesheet" type="text/css" href="css/stylesheet.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
  
    <!-- Javascript -->
    <script type="text/javascript" src="js/scrollUpButton.js"></script>
    <script type="text/javascript" src="js/scripts.js"></script> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>
<body>
<h1> Welcome to the Pokemon GO Spoofing guide </h1>
<div class="just-padding">
   <div class="list-group list-group-root card">
	   <a href="./gpx.html" class="list-group-item"><i class="fas fa-angle-right mr-2"></i>GPX GENERATOR</a>
      <a href="#item-1" class="list-group-item" data-toggle="collapse">
      <i class="fas fa-angle-right mr-2"></i>Unrooted Devices
      </a>
      <div class="list-group collapse" id="item-1">
         <a href="#Downgrade_GP_Services" class="list-group-item"><i class="fas fa-angle-right mr-2"></i>How to Downgrade Google Play Services</a>
         <a href="#Stop_GP_Services_Updates" class="list-group-item"><i class="fas fa-angle-right mr-2"></i>How to STOP Google Play Updates</a>
      </div>
      <a href="#item-2" class="list-group-item" data-toggle="collapse">
      <i class="fas fa-angle-right mr-2"></i>Rooted Devices
      </a>
      <div class="list-group collapse" id="item-2">
         <a href="#How_to_hide_root" class="list-group-item"><i class="fas fa-angle-right mr-2"></i>How to hide root</a>
	 <a href="#Remove_smalipatcher" class="list-group-item"><i class="fas fa-angle-right mr-2"></i>How fix bootloops caused by SmaliPatcher</a>
      </div>
	   <a href="#item-3" class="list-group-item" data-toggle="collapse">
      <i class="fas fa-angle-right mr-2"></i>Root Guide (Magisk + Smali) [Samsung]
      </a>
      <div class="list-group collapse" id="item-3">
         <a href="#Samsung_Downloads" class="list-group-item"><i class="fas fa-angle-right mr-2"></i>Download files</a>
         <a href="#Samsung_Flashing" class="list-group-item"><i class="fas fa-angle-right mr-2"></i>Flash TWRP and Magisk</a>
         <a href="#Samsung_Smali" class="list-group-item"><i class="fas fa-angle-right mr-2"></i>Smali Patcher to mock location</a>
         <a href="#Samsung_Gpsapp" class="list-group-item"><i class="fas fa-angle-right mr-2"></i>Install GPS Joystick</a>
      </div>
   </div>
</div>

<h1 id="Unrooted_Devices">Unrooted Devices</h1>
<h2 id="Downgrade_GP_Services">How to downgrade Google Play Services</h2>
<p>Recently Niantic made some changes which require non root users to update their Google Play services Version. So if you're affected by it you'll need to update your Google Play Services version</p>

<p>The version that will work on your phone is unknown but there's a few versions that you can try and stick with the one that works for you. Those are <a href="https://www.apkmirror.com/apk/google-inc/google-play-services/google-play-services-12-5-29-release" target="_blank">12.5.29</a>, <a href="https://www.apkmirror.com/apk/google-inc/google-play-services/google-play-services-12-6-85-release" target="_blank">12.6.85</a>, <a href="https://www.apkmirror.com/apk/google-inc/google-play-services/google-play-services-12-6-87-release" target="_blank">12.6.87</a> and <a href="https://www.apkmirror.com/apk/google-inc/google-play-services/google-play-services-12-6-88-release" target="_blank">12.6.88</a> . Before you downgrade do the following go to <b>Settings -> Device Administrator -> uncheck "Find My Device"</b>. Afterwards proceed to install any version mentioned above and <b>reboot your phone</b> then check if you're able to spoof.</p>

<h3> How to know the right version for your phone </h3>

The easiest way is to go to <b>Settings -> Apps -> All Apps -> Google Play Services</b> which will bring you to this screen:

<img src="images/GooglePlayServices.png"/>

In this example we can see my current Google Play Services Version:<b>16.0.89</b>. Followed by <b>(040408-...)</b> 

Those <b>040408</b> numbers are the ones we want to find out the version for our phone. Obviously your phone can/will have different ones but reffer to this as an example. Sometimes certain phones only show <b>448</b> for example so you put a 0 before each number making it <b>040408</b>

So let's pretend we want to download the version <b>12.6.85</b> (linked above) for my phone. We can see there's many <b>Variants</b> on <a href="http://apkmirror.com" target="_blank">apkmirror.com</a> <i>What a mess!</i> You just go on your browser and press <b>CTRL-F</b> (⌘ Cmd+F if you're on mac) and type the <i>magic numbers</i> <b>040408</b> in my case it found this result:

<img src="images/googleplayservices1.PNG" alt="hi" class="inline"/>

Then proceed to download and install it accordingly.
<h2 id="Stop_GP_Services_Updates">How to Stop Google Play Updates</h2>
<p>This is a necessary step for non-root users so you don't have to downgrade all the time because Google Play Services updates itself on the background. So let's start off by Disabling mobile background data for Google Play Services:</p>
1. Start by going to your phone's Settings
2. Click on "Apps" <br>
<img src="images/stop_gp_updates_1.png">
3. Click on "Google Play Services <br>
<img src="images/stop_gp_updates_2.png">
4. Click on <b>Mobile Data</b> Note: In some phones it's called <b>Data Usage</b>
<img src="images/stop_gp_updates_3.png">
5. Disable any background data permissions the app has. (Some devices will have different names for the option. Just untoggle all the Data permissions)
<img src="images/stop_gp_updates_4.png">
6. If you need to downgrade your Google Play Services do it now. Reffer to <a href="#how-to-downgrade-google-play-services">How to Downgrade Google Play Services</a> Next we want to Disable Google Play Services storage permissions. (Reffer to the picture on the Step 4) and Click on <b>Permissions</b>
<img src="images/stop_gp_updates_5.png">
7. Then untoggle <b>Storage</b>
<img src="images/stop_gp_updates_6.png">
8. Go back to the Google Play Services app info menu and tap <b>Storage</b>
<img src="images/stop_gp_updates_7.png">
9. Press the <b>Clear Cache</b> button
<img src="images/stop_gp_updates_8.png">
10. Go back to your <b>Settings -> Apps -> All Apps</b> click the <b>Google Play Store</b> (not the services) and press the <b>Disable</b> button
<img src="images/stop_gp_updates_9.png">
11. Go back to <b>Settings -> Apps</b> and click on the 3 vertical dots <b>⋮</b> and select Show System apps
<img src="images/stop_gp_updates_10.png">
12. On that same screen click on the app <b>Download Manager</b> and click Disable
<img src="images/stop_gp_updates_11.png">
13. Restart your phone. That's it! Google Play Services shouldn't update anymore. Credits to @MichelleO 盧金虹#7754

<h1 id="Rooted_Devices">Rooted Devices</h1>

<h2 id="How_to_hide_root">How to properly hide root from Pokemon GO</h2>
<p>Hiding root from Pokemon GO is fairly simple.<br>Start by opening the Magisk Manager app and click on the highlighted button to open the Settings (picture below) </p>
<img src="https://i.imgur.com/V3TxZrO.png"/>
<p>Then activate Magisk Hide option menu followed by clicking on "Hide Magisk Manager"</p>
<b>The screenshot shows "Restore Magisk Manager" after you hide it which means everything worked.</b>
<img src="https://i.imgur.com/bVPXEpA.png"/>
<p>Magisk should close in order to change the package name. Open it again and if a pop-up appears asking to download the full version click OK. You can check if it was sucessful by repeating the same steps and checking if now instead of <b>Hide Magisk Manager</b> it says <b>Restore Magisk Manager</b>. This means you're good to go to the next step <span class="glyphicon glyphicon-ok"></span>. If it doesn't you'll have to repeat this step again. Otherwise continue on.</p>
<br>
<p>Now click on the 2nd icon at the bottom followed by <b>Magisk Hide</b></p>
<img src="https://i.imgur.com/oFRL2b8.png"/>
<p>There you will find a list of your installed apps. Put a <span class="glyphicon glyphicon-ok"></span> on Pokemon GO </p>
<img src="https://i.imgur.com/uBqU1TC.png"/>
<p>That's it! Pokemon GO shouldn't detect root anymore. Open it and test. If you do happen to get invalid OS error then check in your internal storage and delete any folder(s) with the name <b>"Magisk"</b>, <b>"Magisk Manager"</b> and retry to open Pokemon GO</p>

<h1 id="Remove_smalipatcher">How fix bootloops caused by SmaliPatcher</h1>
<p>If your phone happened to bootloop means the rom isn't compatible with SmaliPatcher and if you wanna spoof then the only way is to switch to a custom ROM. Meanwhile you can fix it by doing the following steps:</p>
<ol>
	<li>Boot into TWRP</li>
	<li>Go to the Menu "Advanced" then click  "File Manager"</li>
	<li>Navigate to: data -> adb -> modules -> module directory (in this case "fomey.smalipatcher") -> Folder icon (bottom right) -> Delete</li>
</ol>

<!-- CD1337 -->
<h1 id="Root_Samsung">Root Guide (Magisk + Smali) [Samsung]</h1>

<h2 id="Samsung_Downloads">Download files</h2>
<p><b>WARNING: Flashing a custom recovery to your device will void the warranty.<br/>
We take no responsibility for any damage that may occur.</b></p>
<p><b><i>Make sure you're at least on android version 6.0.</i></b><br/>
Smali Patcher doesn't work with < v6.0.</p>
<ol class="samsung_ol">
	<li>Save the appropriate 'TWRP' to you computer<br/>
	Download it here: <a href="https://twrp.me/Devices/" target="blank">https://twrp.me/Devices/</a><br/>
	Device not listed? Search on xda-developers for a TWRP</li>
	<li>Extract 'Odin (v3.13.1)' to your computer<br/>
	<a href="https://forum.xda-developers.com/showthread.php?t=2711451" target="blank">Download from xda-developers</a></li>
	<li>Install the 'Samsung Mobile Drivers' to your computer.<br/>
	<a href="https://developer.samsung.com/galaxy/others/android-usb-driver-for-windows" target="blank">Download from Samsung</a></li>
	<li>Extract Smali Patcher to you computer<br/>
	<a href="https://forum.xda-developers.com/apps/magisk/module-smali-patcher-0-7-t3680053" target="blank">Download from xda-developers</a></li>
	<li>Save magisk to your computer.<br/>
	<a href="https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445" target="blank">Download from xda-developers</a></li>
</ol>

<h2 id="Samsung_Flashing">Flash TWRP and Magisk</h2>
<ol class="samsung_ol">
	<li>Enable developer options<br/>
	(Settings -> About Device -> Software Info -> Tap 7x on 'Build Number')</li>
	<li>Now go to Settings -> Developer options.<br/>
	You need to enable [Enable OEM unlock] and [USB Debugging].<br/>
	(Can't find OEM Unlock? No problem, proceed)</li>
	<li>Reboot your device into Download mode.<br/>
	To do this, power off your device and when he's off, hold the [Volume Down] + [Home] + [Power] buttons.<br/>
	Once you reach the Download mode warning screen, press [Volume Up] to continue.</li>
	<li>Connect your phone to your computer.</li>
	<li>Open Odin and place the TWRP tar file in the [AP] slot and disable Auto-Reboot, then press [Start].</li>
	<li>Hold [Volume Down] + [Home] + [Power] to get out of Download mode and immediately swap to [Volume Up] when the screen turns blank.<br/>
	(If you don't see then TWRP boot splash try to flash TWRP again - go to step 5)</li>
	<li>You will reach a screen asking you if you want to allow system modifications.<br/>
	Swipe to the right.</li>
	<li><b>** DO NOT EXIT TWRP AFTER THIS STEP, GO TO MAIN MENU AGAIN **</b><br/>
	Go to [Wipe] -> [Format Data] -> and type 'yes' as instructed and go back to the main menu.</li>
	<li>Without exiting TWRP, transfer the Magisk zipfile to your device</li>
	<li>Flash the Magisk-zip using [Install] in TWRP.</li>
	<li>Reboot to system once the zip is installed. </li>
	<p><b>Wait 2-5 minutes for your device to finish setting itself up.</b></p>
	<li>Check if your device contains the app Magisk Manager.<br/>
	If not, download the [Magisk Manager] apk.<br/>
	<a href="https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445" target="blank">Download from xda-developers</a></li>
	<li>Hide the Magisk manager.<br/>
	Open [Magisk Manager] go to [Settings] -> [Hide Magisk Manager].<br/>
	Wait a minute or 2 and [Magisk Manager] will re-open and it's called [Manager] now.</li>
	<li>Hide Magisk for Pokemon GO<br/>
	Open [Magisk Manager] go to [Magisk Hide] -> Check [Pokemon GO]<br/></li>
</ol>

<h2 id="Samsung_Smali">Smali Patcher to mock location</h2>
<ol class="samsung_ol">
	<li>Connect your device to your computer.</li>
	<li>Authorize USB debugging connection on your device</li>
	<li>Run "SmaliPatcher.exe", First startup will automatically download the latest necessary binary's</li>
	<li>Select your desired patches, but certainly check [Mock locations]</li>
	<li>Hit "ADB PATCH" button</li>
	<li>Once the process has completed, magisk module will be generated in the same directory as "SmaliPatcher.exe" named: "SmaliPatcherModule-X.X.X.X-fOmey@XDA.zip".</li>
	<li>Install the generated zip file as a module in Magisk Manager.</li>
	<li>Reboot after that.</li>
</ol>

<h2 id="Samsung_Gpsapp">Install GPS Joystick</h2>
<p>Soon...</p>
<!-- !CD1337 -->
<a href="#" class="scrollUpButton"><span class="glyphicon glyphicon-chevron-up"></span></a>
</body>
</html>
