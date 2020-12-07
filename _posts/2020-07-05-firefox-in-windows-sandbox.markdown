---
layout: post
title:  "Firefox in Windows Sandbox"
date:   2020-07-5 7:00:00 +0200
---

You can create a `.wsb` file to open a sandbox with read access to some of the host folders and execute an command when the sandbox is started. The example below copies Firefox Nightly into the sandbox and starts it. Any change you make in the sandbox at run time will be lost once you close the sandbox. So you have to update Firefox outside of the sandbox. More on the Windows sandbox: [https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-sandbox/windows-sandbox-configure-using-wsb-file](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-sandbox/windows-sandbox-configure-using-wsb-file).

{% highlight bash %}
<Configuration>
<MappedFolders>
<MappedFolder>
<HostFolder>C:\Program Files\Firefox Nightly</HostFolder>
<ReadOnly>true</ReadOnly>
</MappedFolder>
</MappedFolders>
<LogonCommand>
<Command>"C:\Users\WDAGUtilityAccount\Desktop\Firefox Nightly\firefox.exe"</Command>
</LogonCommand>
</Configuration>
{% endhighlight %}

