---

layout: post

title:  "Add extensions to Microsoft Edge with Application Guard at startup"

date:   2021-06-20 17:36:45 +0200

---

If you use Microsoft Edge with Application Guard all extensions you install are gone after you restart the browser. A workaround for this is to force installation of all extensions you need to use via the Windows Registry.
Under "\Software\Policies\Microsoft\Edge\ExtensionInstallForcelist" you can put the IDs of all extentions you need. "Edge" and "ExtensionInstallForcelist" are probably not present so you will have to add them. 


<img src="/assets/img/edge-registry2.jpg" alt="">
<img src="/assets/img/edge-registry1.jpg" alt="">
The value of the extensions can be found on microsoftedge.microsoft.com/addons in the URL on the extension sites. You can check if you done everything right under "edge://policy".

<img src="/assets/img/extension-id.jpg" alt="">

Limitation of this approche is that all changes you do to your extensions will be lost as soon are you restart Edge with Application Guard.
