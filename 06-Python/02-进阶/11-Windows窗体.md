# `Windows` 窗体

1. 导入win模块
> `import win32con`
> 
> `import win32gui`

2. 基本操作
```python
1. 找出窗体编号
# 返回窗体的句柄
    QQWin = win32gui.FindWindow("TXGuiFoundation", "QQ")

2.显示窗体
    win32gui.ShowWindow(QQWin, win32con.SW_SHOW)

3.隐藏窗体
    win32gui.ShowWindow(QQWin, win32con.SW_HIDE)
```

3. 控制窗体位置和大小
```python
win32gui.SetWindowPos(QQWin, win32con.HWND_TOPMOST, 
    100, 100, 300, 300, win32con.SWP_SHOWWINDOW)
#参数一：要控制的窗体的句柄
#参数二：大致方位，HWND_TOPMOST上方
#参数三：位置x
#参数四：位置y
#参数五：窗体长度
#参数六：窗体宽度
#参数七：win32con.SWP_SHOWWINDOW，让窗体一直显示
```

4. 语音合成
```python
1. 导入系统客户端包：
    import win32com.client
    dehua = win32com.client.Dispatch("SAPI.SPVOICE")
    dehua.Speak("要语音播报的内容")
```

5. 内存修改：(还要另行查阅资料)
```python
1. 加载进程模块
    import win32process

2. 找窗体
# 窗体的类，窗体名
    win = win32gui.FindWindow("MainWindow", "植物大战僵尸")

3. 根据窗体找进程号
    hid, pid = win32process.GetWindowThreadProcessId(win)
    
4.以最高权限打开进程
    p = win32api.OpenProcess(PROCESS_ALL_ACCESS,false,pid)
# PROCESS_ALL_ACCESS=(0x000F0000|0x00100000|0xFFF) 预先申明
# import win32api  #需要导入套接字模块

5. 加载内核模块
    md = ctypes.windll.LoadLibrary
        ("C:\Windows\System32\kernel32")
        
6. 读取内存
    md.ReadProcessMemory(int(p))
```
