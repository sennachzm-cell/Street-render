Option Explicit
Dim sh, fso, root, nodeExe, gateway, url
Set sh=CreateObject("WScript.Shell")
Set fso=CreateObject("Scripting.FileSystemObject")
root=fso.GetParentFolderName(WScript.ScriptFullName)
gateway=fso.BuildPath(root,"local-gateway.js")
nodeExe="node"
sh.Run "node.exe " & Chr(34) & gateway & Chr(34), 0, False
WScript.Sleep 1400
url="http://127.0.0.1:17879/"
sh.Run url,1,False
